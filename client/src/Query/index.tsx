import { Api } from "@utils/request";

export const getValues = async () => {
  const { data } = await Api.get("/api/add-value");
  return data;
};

export const getValuesById = async (id: string) => {
  const { data } = await Api.get(`/api/add-value/${id}`);
  return data;
};

export const updateValuesById = async (id: string, value: any) => {
  const { data } = await Api.post(`/api/add-value/${id}`, value);
  return data;
};
