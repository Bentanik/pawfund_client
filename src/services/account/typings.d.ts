declare namespace REQUEST {
  type TUpdateAvatar = {
    cropAvatar: File;
    fullAvatar: File;
  };
}

declare namespace API {
  type TProfileAccount = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    phoneNumber: string;
    status: boolean;
  };

  type TUpdateAvatar = {
    cropAvatarLink: string;
    fullAvatarLink: string;
  };
}
