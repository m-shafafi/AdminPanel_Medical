export type ErrorType<T> = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance?: string;
    errors?: Record<keyof T, string[] | undefined>;
  };
  