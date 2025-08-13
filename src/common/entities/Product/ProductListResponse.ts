
   export default interface ProductListResponse {
  id: number;
  categoryId: number;
  categoryTitle_Id: number | null;
  categoryTitle: string | null;
  name_FA: string;
  name_EN: string;
  name_AR: string;
  description_FA: string;
  description_EN: string;
  description_AR: string;
  price: number;
  brandId: number;
  stockQuantity: number | string; // بسته به نوع backend می‌تونی فقط string یا number بذاری
  sku: string;
  imageURL: string;
  catalogURL: string;
  warranty: string;
  rating: number;
  creationDateTime: string; // ISO format
  modificationDateTime: string;
  creationDateTimeShamsi: string;
  modificationDateTimeShamsi: string;
  catalog_cover_image_url: string;
}

  