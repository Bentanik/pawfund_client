const VOLUNTEER = "/v1/VolunteerApplicationDetail";
const CREATE_VOLUNTEER_APPLICATION =
    VOLUNTEER + "/create_volunteer_application";
const GET_VOLUNTEER_APPLICATION_BY_EVENT_ACTIVITY_ID =
    VOLUNTEER + "/get_volunteer_application_by_activity_id";
const APPROVED_VOLUNTEER_APPLICATION =
    VOLUNTEER + "/approve_volunteer_application";
const REJECT_VOLUNTEER_APPLICATION =
    VOLUNTEER + "/reject_volunteer_application";

export default {
    CREATE_VOLUNTEER_APPLICATION,
    GET_VOLUNTEER_APPLICATION_BY_EVENT_ACTIVITY_ID,
    APPROVED_VOLUNTEER_APPLICATION,
    REJECT_VOLUNTEER_APPLICATION,
};
