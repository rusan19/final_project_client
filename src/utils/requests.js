import { instance } from "./axios";

export const getAllProduct = async () => {
  const { data } = await instance.get("/product/all");

  return data;
};

export const getAllRecord = async () => {
  const { data } = await instance.get("/product/all-record");

  return data;
};

export const addProduct = async (body) => {
  const { data } = await instance.post("/product/add-product", body);

  return data;
};

export const addRecord = async (body) => {
  const { data } = await instance.post("/product/add-record", body);

  return data;
};

export const updateProduct = async (body) => {
  const { data } = await instance.put("/product/update-product", body);

  return data;
};

export const sortRecord = async (body) => {
  const { data } = await instance.post("/product/record-period", body);

  return data;
};

export const deleteProduct = async (body) => {
  const { data } = await instance.post("/product/delete-product", body);

  return data;
};
