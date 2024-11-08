/* eslint-disable import/no-anonymous-default-export */
const EVENT = "/v1/Event";
const CREATE_EVENT = EVENT + "/create_event";
const GET_EVENT_BY_ID = EVENT + "/get_event_by_id";
const GET_ALL_EVENT = EVENT + "/get_all_event";
const GET_ALL_EVENT_BY_STAFF = EVENT + "/get_all_event_by_staff";

export default {
    GET_EVENT_BY_ID,
    GET_ALL_EVENT,
    CREATE_EVENT,
    GET_ALL_EVENT_BY_STAFF,
};
