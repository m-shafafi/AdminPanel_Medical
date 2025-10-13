// types.ts

export interface SendMessageRequest {
  // نام‌ها (چند زبان)
  Name: string;
  Email: string;
  Subject: string;

  // توضیحات (چند زبان)
  Message: string;
  IsRead: boolean;
  CategoryId: number;
  Phone: string;
  creationDateTimeShamsi: string;
  modificationDateTimeShamsi: string;
}

