/* eslint-disable import/no-anonymous-default-export */
const AUTH = "/v1/Authentication";
const LOGIN = AUTH + "/login";
const REGISTER = AUTH + "/register";
const VERIFY_EMAIL = AUTH + "/verify-email";
const FORGOT_PASSWORD_EMAIL = AUTH + "/forgot-password-email";
const FORGOT_PASSWORD_OTP = AUTH + "/forgot-password-otp";
const FORGOT_PASSWORD_CHANGE = AUTH + "/forgot-password-change";

export default {
  LOGIN,
  REGISTER,
  VERIFY_EMAIL,
  FORGOT_PASSWORD_EMAIL,
  FORGOT_PASSWORD_OTP,
  FORGOT_PASSWORD_CHANGE,
};
