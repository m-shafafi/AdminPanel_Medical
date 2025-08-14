export default interface NewsCommentsResponse {
  Id: number;
  newsArticleID: number;
  content_AR: string | null; // اگر ممکنه خالی باشه
  title_AR: string;
  Summary_AR: string;
  content_FA: string | null; // اگر ممکنه خالی باشه
  title_FA: string;
  Summary_FA: string;
  content_EN: string | null; // اگر ممکنه خالی باشه
  title_EN: string;
  Summary_EN: string;
  imageUrl: string;
  creationDateTime: string;
  modificationDateTime: string;

}
