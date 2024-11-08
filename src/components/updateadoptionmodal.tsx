"use client";
import React, { useState } from "react";
import {
    AlertDialogOverlay,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Modal from "react-modal";

interface AdoptionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onSubmit: any;
}

const UpdateAdoptionModal: React.FC<AdoptionModalProps> = ({
    isOpen,
    onRequestClose,
    onSubmit,
}) => {
    const [description, setDescription] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Gửi yêu cầu tạo đơn nhận nuôi
        console.log("Adoption request submitted with description:", description);

        // Gọi hàm onSubmit với dữ liệu mô tả
        onSubmit({
            description: description,
        });

        // Reset lại mô tả sau khi tạo đơn
        setDescription("");

        // Đóng modal
        onRequestClose();
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={onRequestClose}>
            <div className="fixed inset-0 bg-black/20 bg-opacity-30 z-50" />
            <AlertDialogContent className="bg-white p-6 mx-auto max-w-md w-full rounded-lg shadow dark:bg-gray-700">
                {/* Modal header */}
                <AlertDialogHeader>
                    <AlertDialogTitle>Update Adoption Application</AlertDialogTitle>
                </AlertDialogHeader>

                {/* Modal body */}
                <AlertDialogDescription>
                    <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-4 grid-cols-1">
                            <div className="col-span-1">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Please write content to adopt"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <AlertDialogCancel onClick={onRequestClose}>
                                Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction type="submit" onClick={handleSubmit}>
                                Update
                            </AlertDialogAction>
                        </div>
                    </form>
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default UpdateAdoptionModal;
