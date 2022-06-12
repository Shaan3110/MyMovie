import { AxiosRequestHeaders } from "axios";

export interface optionsMovie {
  method: string;
  url: string;
  params: Object;
}

export interface Genre {
  id: Number;
  name: string;
}
