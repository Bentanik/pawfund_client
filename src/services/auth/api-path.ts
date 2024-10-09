/* eslint-disable import/no-anonymous-default-export */
const AUTH = "/v1/Authentication";
const LOGIN = AUTH + "/login";
const REGISTER = AUTH + "/register";
const VERIFY_EMAIL = AUTH + "/verify-email";

export default {
  LOGIN,
  REGISTER,
  VERIFY_EMAIL,
};
