export interface ProductRequest {
    id: number;
    creationDateTime: string;           // ISO string
    modificationDateTime: string;       // ISO string
    creationDateTimeShamsi: string;     // رشته شمسی
    modificationDateTimeShamsi: string; // رشته شمسی

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
    imageUrls: string[];
    catalogURL: string;
    catalogCoverImageUrl: string;

    // اطلاعات محصول در سیستم
    productId: number;

    // سایر متادیتا
    warranty: string;
    rating: number;
}
