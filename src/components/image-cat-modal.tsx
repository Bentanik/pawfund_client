import React, { useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, isOpen, onRequestClose }) => {
    const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

    React.useEffect(() => {
        if (isOpen) {
            const lightbox = new PhotoSwipeLightbox({
                gallery: '#gallery',
                children: 'a',
                pswpModule: () => import('photoswipe')
            });

            lightbox.init();
            lightboxRef.current = lightbox;
            lightboxRef.current.loadAndOpen(currentIndex);
        }

        return () => {
            if (lightboxRef.current) {
                lightboxRef.current.destroy();
                lightboxRef.current = null;
            }
        };
    }, [isOpen, currentIndex]);

    return (
        <div id="gallery" style={{ display: isOpen ? 'block' : 'none' }}>
            {images.map((image, index) => (
                <a
                    href={image}
                    key={index}
                    data-pswp-width="1200"  
                    data-pswp-height="800"  
                >
                    <img src={image} alt={`Image ${index}`} style={{ display: 'none' }} />
                </a>
            ))}
        </div>
    );
};


export default ImageModal;
