declare namespace REQUEST {
    type BanUser = {
        id: string;
        reason: string;
    }
    type UnbanUser = {
        id: string;
    }
}

declare namespace API {
  type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    status: boolean;
    loginType: number;
    password: string;
    gender: number;
    cropAvatarUrl: string;
    cropAvatarId: string;
    fullAvatarUrl: string;
    fullAvatarId: string;
  };

  type UserListData = {
    items: User[]; 
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
