declare namespace REQUEST {
    type CreateBranchBody = {
        name: string;
        phoneNumberOfBranch: string;
        emailOfBranch: string;
        description: string;
        numberHome: string;
        streetName: string;
        ward: string;
        district: string;
        province: string;
        postalCode: string;
    };
}

declare namespace API {
    type Branches = {
        id: string;
        name: string;
        phoneNumberOfBranch: string;
        emailOfBranch: string;
        description: string;
        numberHome: string;
        streetName: string;
        ward: string;
        district: string;
        province: string;
        postalCode: string;
    };

    type TGetBranches = {
        items: Branches[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
