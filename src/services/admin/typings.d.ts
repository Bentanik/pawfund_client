declare namespace REQUEST {
  type BanUser = {
    id: string;
    reason: string;
  };
  type UnbanUser = {
    id: string;
  };
  type YearParams = {
    year: number;
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
    paymentMethodId: 1 | 2;
    createdDate: string | null;
    account: AccountDonate;
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

  type DashboardData = {
    totalCats: number;
    totalAdoptApplications: number;
    totalEvents: number;
    totalDonations: number;
    totalVolunteerApplications: number;
    totalUsers: number;
    listMonths: string[];
    listDonationInYear: number[];
    listFiveUsersDonated: UserDonation[];
  };

  type UserDonation = {
    imageUrl: string;
    email: string;
    amount: number;
    percentage: number;
  };
}
