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
    type TGetEvent = {
        eventDTO: EventDTO;
        branchDTO: Branch;
    };

    type EventDTO = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        maxAttendees: number;
    };

    type Events = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        maxAttendees: number;
        branchDto: Branch;
    };

    type Branch = {
        id: string;
        name: string;
        phoneNumberOfBranch: string;
        emailOfBranch: string;
        numberHome: string;
        streetName: string;
        ward: string;
        district: string;
        province: string;
        description: string;
    };

    type TGetEvents = {
        items: Events[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
