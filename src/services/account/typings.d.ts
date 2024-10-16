declare namespace REQUEST {}

declare namespace API {
    type TProfileAccount = {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        avatarUrl: string;
        phoneNumber: string;
        status: boolean;
    };
}
