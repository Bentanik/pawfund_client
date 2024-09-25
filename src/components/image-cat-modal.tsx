import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    images: string[]; 
    currentIndex: number; 
    onImageChange: (index: number) => void;   
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, images, currentIndex, onImageChange }) => {
    const handlePrevious = () => {
        if (currentIndex > 0) {
            onImageChange(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            onImageChange(currentIndex + 1);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            ariaHideApp={false}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '500px',
                    width: '60%',
                    zIndex: 1000,
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999,
                },
            }}
        >
            <button onClick={onRequestClose} className="text-red-500 absolute top-0 right-1 text-2xl"><i className="fa-solid fa-xmark"></i></button>
            
            <div className="flex justify-between items-center">
                {currentIndex > 0 && (
                    <button onClick={handlePrevious} className="text-black">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                )}
                <img src={images[currentIndex]} alt={`Hình ảnh lớn ${currentIndex + 1}`} className="w-96 object-cover" />
                {currentIndex < images.length - 1 && (
                    <button onClick={handleNext} className="text-black">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default ImageModal;