declare namespace REQUEST {
  type TUpdateAvatar = {
    cropAvatar: File;
    fullAvatar: File;
  };

  type TUpdateInfoProfile = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: number;
  };
}

declare namespace API {
  type TProfileAccount = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: number;
    status: boolean;
    loginType?: number;
  };

  type TUpdateAvatar = {
    cropAvatarLink: string;
    fullAvatarLink: string;
  };
}
