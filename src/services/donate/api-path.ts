/* eslint-disable import/no-anonymous-default-export */
const DONATE = "/v1/Donation";
const DONATE_BANKING = DONATE + "/donate-banking";
const GET_USER_DONATES = DONATE + "/get-user-donates";
const DONATE_CASH = DONATE + "/create_donate_cash";

export default {
    DONATE_BANKING,
    GET_USER_DONATES,
    DONATE_CASH,
};
