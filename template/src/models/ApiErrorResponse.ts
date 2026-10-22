import type { AxiosError } from "axios";

type ResponseStatus = {
  data: {
    error: string;
    status: boolean;
  };
};

export interface ApiErrorResponse {
  error?: Error;
  message?: string;
  response?: ResponseStatus;
  status?: boolean;
}

export interface ExtendedApiErrorResponse extends ApiErrorResponse {
  axiosError?: AxiosError;
}
