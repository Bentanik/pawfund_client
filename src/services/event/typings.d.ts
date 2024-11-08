declare namespace REQUEST {
    type TCreateEvent = {
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        maxAttendees: number;
        thumbHeroUrl?: File;
        imagesUrl?: File;
    };

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

    type EventStatus =
        | "NotApproved"
        | "NotStarted"
        | "Ongoing"
        | "Completed"
        | "Rejected";
}

declare namespace API {
    type TGetEvent = {
        eventDTO: EventDTO;
    };

    type StaffEvent = {
        id: string;
        name?: string;
        startDate: Date;
        endDate: Date;
        reasonReject: string[];
        description?: string;
        status?: string;
        maxAttendees: number;
        imagesUrl?: string;
        branch: StaffBranch;
    };

    type EventDTO = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        maxAttendees: number;
        imagesUrl?: string;
        thumbHeroUrl?: string;
        branch: Branch;
    };

    type Events = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        maxAttendees: number;
        imagesUrl?: string;
        thumbHeroUrl?: string;
        branchDto: Branch;
    };

    type StaffBranch = {
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
        postalCode: string;
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

    type TStaffGetEvents = {
        items: StaffEvent[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
