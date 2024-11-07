declare namespace REQUEST {
  type BanUser = {
    id: string;
    reason: string;
  };
  type UnbanUser = {
    id: string;
  };
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

  type AccountDonate = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    cropAvatarUrl: string | null;
  };

  type ItemDonate = {
    id: string;
    amount: number;
    description: string;
    paymentMethodId: 1 | 2; // Payment method có thể là 1 hoặc 2
    createdDate: string | null; // Có thể là null nếu không có ngày tạo
    account: AccountDonate; // Thông tin tài khoản của người thực hiện giao dịch
  };

  type DataDonate = {
    items: ItemDonate[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
