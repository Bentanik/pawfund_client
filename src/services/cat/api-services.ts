import API_ENDPOINTS from "@/services/cat/api-path";
import request from "@/services/interceptor";

export const createCat = async (body: FormData) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE_CAT, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getCats = async ({
  catName = "",
  age = "",
  sex = "",
  color = "",
  sterilization = "",
  pageIndex = 1,
  pageSize = 10,
}: REQUEST.TGetCats) => {
  const params: Record<string, any> = {};

  if (pageIndex) params.pageIndex = pageIndex;
  if (pageSize) params.pageSize = pageSize;
  if (catName !== "all") params.Name = catName;
  if (age !== "all") params.Age = age;
  if (sex !== undefined && sex !== "all")
    params.CatSex = sex === "Male" ? 0 : 1;
  if (color !== "all") params.Color = color;
  if (sterilization !== undefined && sterilization !== "all")
    params.Sterilization = sterilization;

  const response = await request<TResponseData<API.TGetCats>>(
    API_ENDPOINTS.GET_CATS,
    {
      method: "GET",
      params: Object.keys(params).length > 0 ? params : undefined,
    }
  );

  return response.data;
};
