// src/pages/admin/ProductForm.tsx
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ProductRequest } from "common/entities/Product/ProductRequest";
import SetProductCommand from "business/application/Product/Command/SetProductCommand";
import { useTranslation } from "react-i18next";
import { toShamsiString } from "common/entities/toShamsiString";
import useAddOrEditProduct from "hooks/Products/useAddOrEditProduct";

type FormData = Omit<ProductRequest, 'id' | 'productId' | 'creationDateTime' | 'modificationDateTime' | 'creationDateTimeShamsi' | 'modificationDateTimeShamsi'>;

const ProductForm = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa-IR" || i18n.language === "ar-GB";
  const { register, handleSubmit, control, reset } = useForm<FormData>();
  const { mutate: saveProduct, isPending } = useAddOrEditProduct();
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageFiles(Array.from(e.target.files));
  };

  const onSubmit = async (data: FormData) => {
    // آپلود تصاویر به سرور و دریافت URL (نمونه فرضی)
    const uploadedImageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        // اینجا API آپلود را قرار بده
        // برای مثال: return await uploadImage(file)
        return URL.createObjectURL(file); // فقط برای نمایش موقت
      })
    );

    const payload: ProductRequest = {
      id: 0,
      productId: 0,
      creationDateTime: new Date().toISOString(),
      modificationDateTime: new Date().toISOString(),
      creationDateTimeShamsi: toShamsiString(new Date()),
      modificationDateTimeShamsi: toShamsiString(new Date()),

      name_FA: data.name_FA,
      name_EN: data.name_EN,
      name_AR: data.name_AR,

      description_FA: data.description_FA,
      description_EN: data.description_EN,
      description_AR: data.description_AR,

      price: data.price,
      brandId: data.brandId,
      brandName: data.brandName || "",
      categoryId: data.categoryId,
      categoryName_FA: data.categoryName_FA || "",
      categoryName_EN: data.categoryName_EN || "",
      categoryName_AR: data.categoryName_AR || "",

      stockQuantity: data.stockQuantity,
      sku: data.sku,

      imageUrls: uploadedImageUrls,
      catalogURL: data.catalogURL || "",
      catalogCoverImageUrl: data.catalogCoverImageUrl || "",

      warranty: data.warranty || "",
      rating: data.rating || 0,
    };

    saveProduct(new SetProductCommand(payload), {
      onSuccess: () => {
        alert(t("product.savedSuccessfully"));
        reset();
        setImageFiles([]);
      },
      onError: (err) => {
        console.error(err);
        alert(t("product.saveError"));
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">{t("product.manageProduct")}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tabs mb-4">
          <button type="button">{t("lang.fa")}</button>
          <button type="button">{t("lang.en")}</button>
          <button type="button">{t("lang.ar")}</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* نام محصول */}
          <input {...register("name_FA")} placeholder={t("product.name_FA")} className="border p-2" />
          <input {...register("name_EN")} placeholder={t("product.name_EN")} className="border p-2" />
          <input {...register("name_AR")} placeholder={t("product.name_AR")} className="border p-2" />

          {/* توضیحات */}
          <textarea {...register("description_FA")} placeholder={t("product.description_FA")} className="border p-2" />
          <textarea {...register("description_EN")} placeholder={t("product.description_EN")} className="border p-2" />
          <textarea {...register("description_AR")} placeholder={t("product.description_AR")} className="border p-2" />

          {/* قیمت، موجودی و SKU */}
          <input type="number" {...register("price")} placeholder={t("product.price")} className="border p-2" />
          <input type="number" {...register("stockQuantity")} placeholder={t("product.stock")} className="border p-2" />
          <input {...register("sku")} placeholder={t("product.sku")} className="border p-2" />

          {/* برند و دسته */}
          <input {...register("brandName")} placeholder={t("product.brand")} className="border p-2" />
          <input type="number" {...register("brandId")} placeholder={t("product.brandId")} className="border p-2" />
          <input type="number" {...register("categoryId")} placeholder={t("product.categoryId")} className="border p-2" />
          <input {...register("categoryName_FA")} placeholder={t("product.categoryName_FA")} className="border p-2" />
          <input {...register("categoryName_EN")} placeholder={t("product.categoryName_EN")} className="border p-2" />
          <input {...register("categoryName_AR")} placeholder={t("product.categoryName_AR")} className="border p-2" />

          {/* تصاویر */}
          <input type="file" multiple onChange={handleImageChange} className="border p-2" />

          {/* سایر فیلدها */}
          <input {...register("catalogURL")} placeholder={t("product.catalogURL")} className="border p-2" />
          <input {...register("catalogCoverImageUrl")} placeholder={t("product.catalogCoverImageUrl")} className="border p-2" />
          <input {...register("warranty")} placeholder={t("product.warranty")} className="border p-2" />
          <input type="number" {...register("rating")} placeholder={t("product.rating")} className="border p-2" />
        </div>

        <button type="submit" disabled={isPending} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          {isPending ? t("product.saving") : t("product.save")}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
