declare namespace REQUEST {
    type TGetEventById = {
        eventId: string;
    };

    type TGetEvents = {
        pageIndex: number;
        pageSize?: number;
        name?: string; // Thay đổi mới
        status?: EventStatus; // Thay đổi mới
        isAscCreatedDate?: boolean;
    };

    type EventStatus = "NotStarted" | "Ongoing";
}

declare namespace API {
    type Event = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        branchDto: Branch;
    };

    type Branch = {
        id: string;
        name: string;
        phoneNumberOfBranch: string;
        emailOfBranch: string;
    };

    type TGetEvents = {
        items: Event[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
