declare namespace REQUEST {
  type TDonateBanking = {
    orderId: number;
    amount: number;
    description: string;
  };
}

declare namespace API {
  type TDonateBanking = {
    success: boolean;
    paymentUrl: string;
    message: string;
  };
}
