// types.ts

export interface ProductListResponse {
  // نام‌ها (چند زبان)
  name_FA: string;
  name_EN: string;
  name_AR: string;

  // توضیحات (چند زبان)
  description_FA: string;
  description_EN: string;
  description_AR: string;

  // قیمت و برند/دسته
  price: number;
  brandId: number;
  brandName: string;

  categoryId: number;
  categoryName_FA: string;
  categoryName_EN: string;
  categoryName_AR: string;

  // موجودی و شناسه‌های داخلی
  stockQuantity: number;
  sku: string;

  // تصاویر و فایل‌ها
  imageUrls: string[]; // یا [] اگر ندارد
  catalogURL: string;
  catalogCoverImageUrl: string;

  // اطلاعات محصول در سیستم
  productId: number;
  id: number;

  // سایر متادیتا
  warranty: string;
  rating: number;

  // تاریخ‌ها (به صورت رشته ISO از API)
  creationDateTime: string;            // e.g. "2025-09-07T05:59:23.968398Z"
  modificationDateTime: string;

  // تاریخ شمسی به صورت رشته
  creationDateTimeShamsi: string;
  modificationDateTimeShamsi: string;
}

