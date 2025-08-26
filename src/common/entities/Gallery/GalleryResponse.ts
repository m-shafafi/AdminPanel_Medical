export interface GalleryResponse {
    id: number;
    title_FA: string;
    title_EN: string;
    title_AR: string;
    desc_FA: string | null;
    desc_EN: string | null;
    desc_AR: string | null;
    imageURL: string;
    categoryId: number;
    serviceType: string | null;
    creationDateTime: string; // ISO string
    modificationDateTime: string; // ISO string
    creationDateTimeShamsi: string; // شمسی به صورت string
    modificationDateTimeShamsi: string;
}
