declare namespace REQUEST {
  type CreateAdoptApplicationBody = {
    description: string;
    catId: string;
  };

  type GetApplications = {
    pageIndex: number;
    pageSize: number;
    isAscCreatedDate: boolean;
    status?: string;
  };

  type MeetingData = {
    meetingTime: string;
    numberOfStaffsFree: number;
  };

  type GetMeetingResponse = MeetingData[];

  type ApplyAdoptApplication = {
    Id: string;
  };

  type RejectAdoptionRequest = {
    adoptId: string;
    reasonReject: string;
  };

  type AdoptApplicationRequest = {
    adoptId: string;
    description: string;
  };

  type MeetingTimeByAdopter = {
    Id: string;
  };

  type ChooseMeetingTime = {
    adoptId: string;
    meetingTime: string;
  };
}

declare namespace API {
  type Account = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };

  type Cat = {
    id: string;
    sex: string;
    name: string;
    age: number;
    breed: string;
    size: number;
    color: string;
    description: string;
    imageUrl: string;
  };

  type Application = {
    id: string;
    meetingDate: string | null;
    reasonReject: string | null;
    status?: number;
    isFinalized: boolean;
    description: string;
    createdDate: string;
    account: Account;
    cat: Cat;
    
  };

  type Item = {
    application: Application;
  };

  type ResponseData = {
    items: Item[];
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };

  type MeetingTime = {
    meetingTime: string;
    numberOfStaffsFree: number;
  };

  type Data = {
    listMeetingTime: MeetingTime[];
  };

  type MeetingTimeAdopter = string;

  type DataAdopter = {
    listMeetingTime: MeetingTimeAdopter[];
  };

  type Value = {
    code: string;
    message: string;
    data: Data;
  };



  type Error = {
    code: string;
    message: string;
  };

  type ApiResponse = {
    value: Value;
    isSuccess: boolean;
    isFailure: boolean;
    error: Error;
  };

  
}

declare namespace APIResponse {
  type ValueResponse = {
    code: string;
    message: string;
  };

  type ErrorResponse = {
    code: string;
    message: string;
  };

  type ApiResponse = {
    value: ValueResponse;
    isSuccess: boolean;
    isFailure: boolean;
    error: ErrorResponse;
  };
}
