import api from "./api";

export const getProfile = async () => {
  const response = await api.get("/users/EdsonVazTI");
  return response.data;
};

export const getRepos = async () => {
  const response = await api.get("/users/EdsonVazTI/repos");
  return response.data;
};