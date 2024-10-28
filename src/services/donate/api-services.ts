import { Dates, PaymentMethods } from "@/const/donate";
import API_ENDPOINTS from "@/services/donate/api-path";
import request from "@/services/interceptor";

export const donateBanking = async (body: REQUEST.TDonateBanking) => {
    const response = await request<TResponseData<API.TDonateBanking>>(
        API_ENDPOINTS.DONATE_BANKING,
        {
            method: "POST",
            data: body,
        }
    );
    return response.data;
};

export const donateCash = async (body: FormData) => {
    const response = await request<TResponseData>(API_ENDPOINTS.DONATE_CASH, {
        method: "POST",
        data: body,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const getUserDonates = async ({
    minAmount = "",
    maxAmount = "",
    paymentMethodType = "",
    pageIndex = 1,
    pageSize = 10,
    isDateDesc = "",
}: REQUEST.TGetDonates) => {
    const params: Record<string, any> = {};

    if (pageIndex) params.pageIndex = pageIndex;
    if (pageSize) params.pageSize = pageSize;
    if (paymentMethodType !== "all")
        params.paymentMethodType =
            paymentMethodType === PaymentMethods[0].value ? 1 : 2;
    if (minAmount) params.minAmount = minAmount;
    if (minAmount) params.maxAmount = maxAmount;
    if (isDateDesc)
        params.IsDateDesc = isDateDesc === Dates[0].value ? true : false;

    const response = await request<TResponseData<API.TGetDonates>>(
        API_ENDPOINTS.GET_USER_DONATES,
        {
            method: "GET",
            params: Object.keys(params).length > 0 ? params : undefined,
        }
    );

    return response.data;
};
