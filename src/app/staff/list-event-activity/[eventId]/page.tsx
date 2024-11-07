import ListEventActivity from "@/app/staff/list-event-activity/components/list-event-activities";

export default function EventDetailPage({ params }: any) {
    return (
        <div>
            <ListEventActivity eventId={params?.eventId} />
        </div>
    );
}
