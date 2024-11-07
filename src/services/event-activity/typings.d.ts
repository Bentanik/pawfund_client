declare namespace REQUEST {
    type TGetApprovedEventsActivity = {
        eventId: string;
    };

    type TGetEventActivities = {
        eventId: string;
        pageIndex: number;
        pageSize?: number;
        name?: string; // Thay đổi mới
        status?: EventStatus; // Thay đổi mới
        isAscCreatedDate?: boolean;
    };
}

declare namespace API {
    type ActivityEvent = {
        activityDTO: ActivityDTO;
        eventDTO: EventDTO;
        branchDTO: BranchDTO;
    };

    type StaffActivities = {
        id: string;
        name: string;
        quantity: number;
        numberOfVolunteer: number;
        startDate: string;
        description: string;
        status: boolean;
        event: StaffEventDTO;
    };

    type StaffEventDTO = {
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        description: string;
        maxAttendees: number;
        status: string;
    };

    type ActivityDTO = {
        id: string;
        name: string;
        quantity: number;
        numberOfVolunteer: number;
        startDate: string;
        description: string;
        status: boolean;
    };

    type EventDTO = {
        id: string;
        name: string;
        startDate: string;
        endDate: string;
        description: string;
        maxAttendees: number;
        status: string;
    };

    type BranchDTO = {
        phoneNumberOfBranch: string;
        emailOfBranch: string;
        numberHome: string;
        streetName: string;
        ward: string;
        district: string;
        province: string;
    };

    type TStaffGetActivity = {
        items: StaffActivities[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
