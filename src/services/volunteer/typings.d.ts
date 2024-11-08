declare namespace REQUEST {
    type createVolunteerApplication = {
        description: string;
        catId: string;
        listEventId: string[]; // List of strings
    };

    type TGetVolunteerApplication = {
        id: string;
        pageIndex: number;
        pageSize?: number;
        status?: VolunteerApplicationStatus; // Thay đổi mới
        isAscCreatedDate?: boolean;
    };

    type VolunteerApplicationStatus =
        | "Pending" // Chưa duyệt
        | "Approved" // Đồng ý
        | "Rejected"; // Từ chối

    type RejectVolunteerRequest = {
        detailId: string;
        reason: string;
    };

    type ApplyVolunteerApplication = {
        detailId: string;
    };
}

declare namespace API {
    type VolunteerApplication = {
        id: string;
        status: number;
        description: string;
        reasonReject: string | null;
        eventId: string;
        eventActivityId: string;
        account: AccountDTO;
    };

    type AccountDTO = {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    };

    type TGetVolunteerApplication = {
        items: VolunteerApplication[];
        pageIndex: number;
        pageSize: number;
        totalCount: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}
