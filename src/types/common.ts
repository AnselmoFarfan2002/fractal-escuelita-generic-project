import { User } from "@prisma/client";

export type WithUuid<T = {}> = {
  uuid: string;
} & T;

export type WithEmail<T = {}> = {
  email: string;
} & T;

export type WithUser<T = {}> = {
  user?: User;
} & T;

export type Pagination = {
  page: number;
  pageSize: number;
};

export type ServiceResponse<T = {}, M = Pagination> = {
  data: T;
  meta: M;
};

export type SingleServiceResponse<T> = ServiceResponse<T, undefined>;
