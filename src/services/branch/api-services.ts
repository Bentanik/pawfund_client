import API_ENDPOINTS from "@/services/branch/api-path";
import request from "@/services/interceptor";

export const createBranch = async (body: FormData) => {
    const response = await request<TResponse>(API_ENDPOINTS.CREATE_BRANCH, {
        method: "POST",
        data: body,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getBranches = async ({
    id,
    name = "",
    phoneNumberOfBranch = "",
    emailOfBranch = "",
    description = "",
    numberHome = "",
    streetName = "",
    ward = "",
    district = "",
    province = "",
    postalCode = "",
    accountId,
    pageIndex = 1,
    pageSize = 10,
}: REQUEST.TGetBranches) => {
    const params: Record<string, any> = {};

    if (pageIndex) params.pageIndex = pageIndex;
    if (pageSize) params.pageSize = pageSize;
    if (id) params.Id = id;
    if (name !== "") params.Name = name;
    if (phoneNumberOfBranch) params.PhoneNumberOfBranch = phoneNumberOfBranch;
    if (emailOfBranch) params.EmailOfBranch = emailOfBranch;
    if (description) params.Description = description;
    if (numberHome) params.NumberHome = numberHome;
    if (streetName) params.StreetName = streetName;
    if (ward) params.Ward = ward;
    if (district) params.District = district;
    if (province) params.Province = province;
    if (postalCode) params.PostalCode = postalCode;
    if (accountId) params.AccountId = accountId;

    const response = await request<TResponseData<API.TGetBranches>>(
        API_ENDPOINTS.GET_BRANCHES,
        {
            method: "GET",
            params: Object.keys(params).length > 0 ? params : undefined,
        }
    );
    return response.data;
};
