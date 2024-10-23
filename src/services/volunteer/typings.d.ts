declare namespace REQUEST {
    type createVolunteerApplication = {
        description: string;
        catId: string;
        listEventId: string[]; // List of strings
    };
}

declare namespace API {}
