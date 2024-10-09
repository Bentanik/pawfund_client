declare type TMeta = {
  detail: string;
  errorCode: string;
  status: number;
  title: string;
};


declare type TResponse = {
  value: {
    code: string;
    message: string;
  };
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    message: string;
  };
};
