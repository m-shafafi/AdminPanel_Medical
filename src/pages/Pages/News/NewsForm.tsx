import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { toShamsiString } from "common/entities/toShamsiString";
import axios from "axios";
import useAddOrEditNews from "hooks/News/useAddOrEditNews";
import useGetArticleById from "hooks/News/useGetArticleById";
import SetNewsCommand from "business/application/News/NewsComments/Commands/Craete/SetNewsCommand";
import NewsCommentsRequest from "common/entities/News/NewsCommentsRequest";
import useGetCategoryNews from "hooks/News/useGetCategoryNews";
import TextArea from "components/form/input/TextArea";
import Label from "components/form/Label";

interface NewsArticle {
    id?: number;
    title_FA: string;
    summary_FA: string;
    content_FA: string;
    title_EN: string;
    summary_EN: string;
    content_EN: string;
    title_AR: string;
    summary_AR: string;
    content_AR: string;
    authorID: number;
    categoryID: number;
    publishedDate: string;
    tags: string;
    imageURL: string;
}


const NewsArticleForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "fa-IR" || i18n.language === "ar-GB";
    const [message, setMessage] = useState("");
    const [messageTwo, setMessageTwo] = useState("");
    const { register, handleSubmit, reset } = useForm<NewsArticle>();
    const { mutate: saveNews, isPending: isPendingSet } = useAddOrEditNews();
    // const { data: articleById, isPending: isPendingGet } = useGetArticleById();
    const { data: categoryNews, isPending: isPendingGetCategory } = useGetCategoryNews();
    console.log(categoryNews)
    const [imageFile, setImageFile] = useState<File | null>(null);



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const onSubmit = async (data: NewsArticle) => {
        // شبیه‌سازی آپلود تصویر
        let uploadedImageUrl = data.imageURL;
        if (imageFile) {
            uploadedImageUrl = URL.createObjectURL(imageFile); // فقط برای نمایش موقت
        }
        const payload: NewsCommentsRequest = {
            title_FA: data.title_FA || "",
            Summary_FA: data.summary_FA || "",
            content_FA: data.content_FA || "",
            title_EN: data.title_EN || "",
            Summary_EN: data.summary_EN || "",
            content_EN: data.content_EN || "",
            title_AR: data.title_AR || "",
            Summary_AR: data.summary_AR || "",
            content_AR: data.content_AR || "",
            imageURL: uploadedImageUrl || "",
            creationDateTime: new Date().toISOString(),
            creationDateTimeShamsi: toShamsiString(new Date()),
            modificationDateTime: new Date().toISOString(),
            modificationDateTimeShamsi: toShamsiString(new Date()),
            authorID: data.authorID
        };

        saveNews(new SetNewsCommand(payload), {
            onSuccess: () => {
                alert(id ? t("news.updatedSuccessfully") : t("news.addedSuccessfully"));
                navigate("/admin/news");
            },
            onError: (err) => {
                console.error(err);
                alert(t("news.saveError"));
            },
        });
    };

    return (
        <div className={`container mx-auto p-4 ${isRTL ? "text-right" : "text-left"}`}>
            <h2 className="text-xl font-bold mb-4">
                {id ? t("news.editArticle") : t("news.addArticle")}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* فارسی */}
                    <input {...register("title_FA")} placeholder="عنوان فارسی" className="border p-2" />
                    <textarea {...register("summary_FA")} placeholder="خلاصه فارسی" className="border p-2" />
                    <textarea {...register("content_FA")} placeholder="محتوای فارسی" className="border p-2 h-24" />

                    {/* انگلیسی */}
                    <input {...register("title_EN")} placeholder="English Title" className="border p-2" />
                    <textarea {...register("summary_EN")} placeholder="English Summary" className="border p-2" />
                    <textarea {...register("content_EN")} placeholder="English Content" className="border p-2 h-24" />

                    {/* عربی */}
                    <input {...register("title_AR")} placeholder="عنوان عربی" className="border p-2" />
                    {/* <TextAreaInput {...register("summary_AR")} placeholder="خلاصه عربی" className="border p-2" /> */}

                    <div>
                        <Label>Description</Label>
                        <TextArea

                            value={message}
                            onChange={(value) => setMessage(value)}
                            rows={6}
                        />
                    </div>

                    <textarea {...register("content_AR")} placeholder="محتوای عربی" className="border p-2 h-24" />

                    {/* سایر فیلدها */}
                    <input {...register("tags")} placeholder="شناسه دسته‌بندی" className="border p-2" />
                    <select {...register("categoryID")} className="border p-2">
                        <option value="">{t("news.selectCategory")}</option>
                        {categoryNews?.map((c: any) => (
                            <option key={c.id} value={c.id}>
                                {c.title_FA || c.name}
                            </option>
                        ))}
                    </select>

                    <input {...register("publishedDate")} placeholder="تاریخ انتشار" type="date" className="border p-2" />

                    {/* تصویر */}
                    <input type="file" onChange={handleImageChange} className="border p-2" />
                </div>

                <button
                    type="submit"
                    disabled={isPendingSet}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    {isPendingSet ? t("news.saving") : t("news.save")}
                </button>
            </form>
        </div>
    );
};

export default NewsArticleForm;
