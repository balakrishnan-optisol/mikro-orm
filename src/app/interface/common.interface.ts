export interface IResponse<T> {
  code: number;
  data: T;
}

export interface IExceptionResponse {
  message?: string | Array<string>;
  statusCode?: number;
  error?: string;
}

export interface IErrorResponse {
  code: number;
  message: string;
}

export interface IBaseAudit {
  id: number;
  createdAt: Date;
  updatedAt?: Date;
}
