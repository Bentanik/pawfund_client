import EventDetail from "@/app/(user)/event-detail/components/event-detail";

export default function EventDetailPage({ params }: any) {
    return (
        <div>
            <EventDetail eventId={params?.eventId} />
        </div>
    );
}
