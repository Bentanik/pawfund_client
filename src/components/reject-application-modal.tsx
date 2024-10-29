// RejectModal.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";

interface RejectModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onSubmit: (data: { adoptId: string; reasonReject: string }) => void;
    adoptId: string;
}

const RejectModal: React.FC<RejectModalProps> = ({ isOpen, onRequestClose, onSubmit, adoptId }) => {
    const [reasonReject, setReasonReject] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Gọi hàm onSubmit với adoptId và lý do từ chối
        onSubmit({
            adoptId,
            reasonReject
        });

        // Reset lại lý do sau khi gửi
        setReasonReject('');

        // Đóng modal
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Reject Adoption Modal"
            className="bg-white rounded-lg shadow dark:bg-gray-700 p-6 mx-auto mt-20 max-w-md w-full"
            overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
        >

            <div className='flex justify-between items-center'>            
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Từ chối đơn</h3>
                <IoCloseSharp className='text-2xl' onClick={onRequestClose}/>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className='space-y-4'>
                    {/* <label htmlFor="reasonReject" className="block text-sm font-medium text-gray-900 dark:text-white">
                        Lý do từ chối
                    </label> */}
                    <textarea
                        id="reasonReject"
                        rows={4}
                        value={reasonReject}
                        onChange={(e) => setReasonReject(e.target.value)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Nhập lý do từ chối ở đây"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white inline-flex items-center bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                    Gửi lý do
                </button>
            </form>
        </Modal>
    );
};

export default RejectModal;
