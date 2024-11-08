declare namespace REQUEST {
    type createVolunteerApplication = {
        description: string;
        catId: string;
        listEventId: string[]; // List of strings
    };
}

declare namespace API {
    type TGetVolunteerApplication = {
        items: StaffActivities[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
