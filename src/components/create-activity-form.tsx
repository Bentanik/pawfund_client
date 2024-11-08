import useGetDataStaffEventActivity from "@/app/staff/list-event-activity/hooks/getEventActivities";
import usePostCreateEventActivity from "@/app/staff/list-event-activity/hooks/postCreateEventActivity";
import useToast from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const CreateEvent: React.FC<{ eventId: string }> = ({ eventId }) => { 
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [startDate, setStartDate] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [showForm, setShowForm] = useState<boolean>(true);
    const [eventActivities, setEventActivities] = useState<any[]>([]);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { addToast } = useToast();
    const { postCreateEventActivityApi, isPending } = usePostCreateEventActivity();
    const { getEventActivitiesApi } = useGetDataStaffEventActivity();

    const handleCreateEvent = async () => {
        if (!eventId) {
            addToast({ type: "error", description: "Event ID must not be empty!" });
            return;
        }
        const data = {
            name,
            quantity,
            startDate,
            description,
            eventId,
        };

        const res = await postCreateEventActivityApi(data);
        if (res) {
            addToast({ type: "success", description: "Event activity created successfully!" });
            setShowForm(false);
            getListApprovedEventsActivity(eventId, currentPage);
        } else {
            addToast({ type: "error", description: "Failed to create event activity" });
        }
    };


    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: React.Dispatch<React.SetStateAction<any>>
    ) => {

        if (setter === setQuantity) {
            setter(Number(e.target.value));
        } else {
            setter(e.target.value);
        }
    };

    const getListApprovedEventsActivity = async (id: string, pageIndex: number) => {
        const res = await getEventActivitiesApi({
            eventId: id,
            pageIndex: pageIndex,
            pageSize: 5,
            name: name,
            isAscCreatedDate: false,
        });
        setEventActivities(res?.value.data.items || []);
        setTotalPage(res?.value.data.totalPages || 1);
    };

    useEffect(() => {
        if (eventId) {
            getListApprovedEventsActivity(eventId, currentPage);
        }
    }, [eventId, currentPage]);

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        showForm && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-gray-100 rounded-3xl flex flex-col justify-center">
                    <div className="relative sm:max-w-xl sm:mx-auto border rounded-3xl">
                        <div className="relative shadow sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div className="flex items-center space-x-5">
                                    <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">Create an Event</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">Create your event details below.</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Event Name</label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                value={name}
                                                onChange={(e) => handleInputChange(e, setName)}
                                                placeholder="Event name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Event Quantity</label>
                                            <input
                                                type="number"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                value={quantity}
                                                onChange={(e) => handleInputChange(e, setQuantity)}
                                                placeholder="Optional"
                                            />
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Start Date</label>
                                                <input
                                                    type="date"
                                                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                    value={startDate}
                                                    onChange={(e) => handleInputChange(e, setStartDate)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Event Description</label>
                                            <input
                                                type="text"
                                                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                value={description}
                                                onChange={(e) => handleInputChange(e, setDescription)}
                                                placeholder="Description"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button
                                            onClick={handleCancel}
                                            className="flex justify-center items-center w-full border-2 border-gray-300 text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleCreateEvent}
                                            className="bg-teal-400 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-teal-500"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default CreateEvent;
