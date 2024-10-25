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

declare namespace API {}
