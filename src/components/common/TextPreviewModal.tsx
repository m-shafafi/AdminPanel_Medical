// src/components/common/TextPreviewModal.tsx
import React from "react";

interface TextPreviewModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export default function TextPreviewModal({
    open,
    onClose,
    title,
    content,
}: TextPreviewModalProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose} // کلیک روی پس‌زمینه
        >
            <div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // جلوگیری از بستن وقتی روی خود Modal کلیک می‌کنیم
            >
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">{content}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                    onClick={onClose}
                >
                    بستن
                </button>
            </div>
        </div>
    );
}
