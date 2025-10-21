export default interface NewsCommentsResponse {
  id: number;
  authorID: number;
  categoryID: number;
  title_FA: string;
  summary_FA: string;
  content_FA: string | null;
  title_EN: string;
  summary_EN: string;
  content_EN: string | null;
  title_AR: string;
  summary_AR: string;
  content_AR: string | null;
  tags: string;
  imageURL: string;
  viewsCount: number;
  publishedDate: string;
  postedDate: string;
  creationDateTime: string;
  modificationDateTime: string;
}
