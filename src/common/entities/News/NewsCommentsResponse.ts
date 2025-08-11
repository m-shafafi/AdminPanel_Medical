export default interface NewsCommentsResponse {
  Id: number;
  newsArticleID: number;
  content: string | null; // اگر ممکنه خالی باشه
  title: string;
  imageUrl: string;
  creationDateTime: string;
  modificationDateTime: string;

}
