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
  const { data } = await Api.put(`/api/add-value/${id}`, value);
  return data;
};

export const deleteValuesById = async (id: string) => {
  const { data } = await Api.delete(`/api/add-value/delete/${id}`);
  return data;
};
