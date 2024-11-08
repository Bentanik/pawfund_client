import ListVolunteerApplication from "@/app/staff/list-volunteer-application/components/list-volunteer-application";

export default function EventDetailPage({ params }: any) {
    return (
        <div>
            <ListVolunteerApplication
                eventActivityId={params?.eventActivityId}
            />
        </div>
    );
}
