declare namespace REQUEST {
    type TGetApprovedEventsActivity = {
        eventId: string;
    };
}

declare namespace API {
    type ActivityEvent = {
        activityDTO: ActivityDTO;
        eventDTO: EventDTO;
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
}
