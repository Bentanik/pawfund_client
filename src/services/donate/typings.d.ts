declare namespace REQUEST {
  type TDonateBanking = {
    orderId: number;
    amount: number;
    description: string;
  };

  type TGetDonates = {
    pageIndex: number;
    pageSize: number;
    paymentMethodType?: string;
    minAmount?: string;
    maxAmount?: string;
    isDateDesc?: string;
  };
}

declare namespace API {
  type TDonateBanking = {
    success: boolean;
    paymentUrl: string;
    message: string;
  };

  type Donate = {
    id: string;
    amount: number;
    description: string;
    paymentMethodId: number;
    createdDate: string;
    account: API.Account;
  };

  type TGetDonates = {
    items: Donate[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
