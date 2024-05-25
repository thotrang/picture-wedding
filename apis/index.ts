import axios from "axios";
export const apiUrl = "https://api.goldstarmedia.vn/api/";
export const Repository = (baseUrl: string) => ({
  get: async (params: any, options?: any) => {
    const res = await axios.get(baseUrl, {
      params,
      ...options,
    });
    return res.data;
  },
  getOne: async (id: string, params?: any, options?: any) => {
    const res = await axios.get(`${baseUrl}/${id}`, {
      params,
      ...options,
    });
    return res.data;
  },
  post: async (data: any, options?: any) => {
    const res = await axios.post(baseUrl, data, options);
    return res.data
  },
  put: (id: string, data: any, option?: any) => {
    return axios.put(`${baseUrl}/${id}`, data, option);
  },
  delete: (id: string, options?: any) => {
    return axios.delete(`${baseUrl}/${id}`, options);
  },
});
