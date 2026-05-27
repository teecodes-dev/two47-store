import { products } from "../Data/products";

export const getNewArrivals = () => {
  return products.filter((p) => p.tags?.includes("new-arrival"));
};

export const getBestSellers = () => {
  return products.filter((p) => p.tags?.includes("best-seller"));
};

export const getEssentials = () => {
  return products.filter((p) => p.tags?.includes("essentials"));
};
