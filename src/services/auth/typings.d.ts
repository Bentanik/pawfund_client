declare namespace API {
  enum AuthRole {
    USER = "user",
    STAFF = "staff",
    ADMIN = "admin",
  }

  type TAuthResponse = {
    token: TAuthToken;
    authProfile: TAuthProfile;
  };

  type TAuthVerifyEmail = {
    email: string;
  };

  type TAuthForgotPasswordEmail = {
    email: string;
  };

  type TAuthForgotPasswordOtp = {
    email: string;
    otp: string;
  };

  type TAuthForgotPasswordChange = {
    email: string;
    otp: string;
    password: string;
  };

  type TAuthToken = {
    accessToken: string;
    tokenType: string;
  };

  type TAuthLoginGoogle = {
    accessTokenGoogle: string;
  };

  type TAuthProfile = {
    userId: string;
    firstName: string;
    lastName: string;
    role: AuthRole;
  };

  type TAuthForgotPassword = {
    email: string;
    otp: string;
  };
}
