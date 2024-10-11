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

declare type TResponseData = {
  value: {
    code: string;
    message: string;
    data: object;
  };
  isSuccess: boolean;
  isFailure: boolean;
  error: {
    code: string;
    message: string;
  };
};

