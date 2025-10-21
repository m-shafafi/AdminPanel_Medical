export default interface NewsCategoryResponse {
    Id: number;
    Name: string | null; // اگر ممکنه خالی باشه
    Description: string;
    ParentCategoryID: number;
    Slug: string | null; // اگر ممکنه خالی باشه
    title_FA: string;
    Summary_FA: string;
    content_EN: string | null; // اگر ممکنه خالی باشه
    title_EN: string;
    Summary_EN: string;
    imageURL: string;
    creationDateTime: string;
    modificationDateTime: string;
    CreationDateTime: string;
    ModificationDateTime: string;

}
