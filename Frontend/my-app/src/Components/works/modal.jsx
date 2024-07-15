import React from "react";

function Modal({ image, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-800 rounded-full p-1"
                >
                    &times;
                </button>
                <img src={image} alt="" className="object-contain max-h-screen max-w-screen" />
            </div>
        </div>
    );
}

export default Modal;
