export default interface TrainingListResponse {
  Id: number;
  publishDate: string;
  thumbnailUrl: string;
  description: string | null; // اگر ممکنه خالی باشه
  title: string;
  type: string; // ← چون در بک‌اند نوعش string هست
  categoryId: number;
  creationDateTime: string;
  modificationDateTime: string;
  language?: string; // ← اگر نیاز هست
  categoryName?: string; // ← اگر نیاز هست
}
