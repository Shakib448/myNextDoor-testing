import { Api } from "@utils/request";

export const getValues = async () => {
  const { data } = await Api.get("/api/add-value");
  return data;
};

export const getValuesById = async (id: string) => {
  const { data } = await Api.get(`/api/add-value/${id}`);
  return data;
};
