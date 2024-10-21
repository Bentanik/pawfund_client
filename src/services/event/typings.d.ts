declare namespace REQUEST {
    type TGetEventById = {
        eventId: string;
    };
}

declare namespace API {
    type Event = {
        eventDTO: EventDTO;
        branchDTO: BranchDTO;
    };

    type EventDTO = {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        description: string;
        maxAttendees: number;
        // status: string;
    };

    type BranchDTO = {
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
}
