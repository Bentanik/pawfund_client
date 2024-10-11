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
  }

  type TAuthToken = {
    accessToken: string;
    tokenType: string;
  };

  type TAuthProfile = {
    userId: string;
    firstName: string;
    lastName: string;
    role: AuthRole;
  };
}
