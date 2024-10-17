declare namespace REQUEST {
  type CreateAdoptApplicationBody = {
    description: string;
    catId: string;
  };

  type GetApplications = {
    pageIndex: number;
    pageSize: number;
    isAscCreatedDate: boolean;
  }
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
    };
    
    type Application = {
        id: string;
        meetingDate: string | null;
        reasonReject: string | null;
        status: string;
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
}





