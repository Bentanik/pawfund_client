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

    type EventStatus = "NotApproved" | "NotStarted" | "Ongoing" | "Completed";
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
        thumbHeroUrl?: string; // Thêm ? để thể hiện rằng trường này có thể null
        imagesUrl?: string; // Thêm ? tương tự
    };

    type Events = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        status: string;
        maxAttendees: number;
        imagesUrl?: string; // Add this line for the ImagesUrl field
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
