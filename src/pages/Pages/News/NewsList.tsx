// src/pages/ProductsList.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllNewsComment from "hooks/News/useGetAllNewsComment";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "components/ui/table";
import TextPreviewModal from "components/common/TextPreviewModal";

export default function NewsList() {
    const navigate = useNavigate();
    const { data } = useGetAllNewsComment();
    const [newsComment, setNewsComment] = useState<NewsCommentsResponse[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; text: string }>({ title: "", text: "" });

    useEffect(() => {
        if (data) setNewsComment(data);
    }, [data]);

    const openModal = (title: string, text: string) => {
        setModalContent({ title, text });
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleDelete = (id: number) => {
        if (window.confirm("آیا مطمئنی می‌خوای حذفش کنی؟")) {
            setNewsComment(prev => prev.filter(p => p.id !== id));
        }
    };

    const renderCell = (title: string, text?: string | null) => (
        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 break-words max-w-[200px]">
            {text ? (
                <div
                    onClick={() => openModal(title, text)}
                    className="cursor-pointer truncate hover:underline"
                    title={text}
                >
                    {text.length > 80 ? text.substring(0, 80) + "..." : text}
                </div>
            ) : (
                "-"
            )}
        </TableCell>
    );

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">مدیریت اخبار</h2>
            <button
                className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
                onClick={() => navigate("/Setnews")}
            >
                خبر جدید
            </button>

            <Table className="overflow-hidden rounded-xl border border-black-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <TableHeader>
                    <TableRow>
                        <TableCell isHeader>#</TableCell>
                        <TableCell isHeader>خلاصه (عربی)</TableCell>
                        <TableCell isHeader>خلاصه (انگلیسی)</TableCell>
                        <TableCell isHeader>خلاصه (فارسی)</TableCell>
                        <TableCell isHeader>محتوا (عربی)</TableCell>
                        <TableCell isHeader>محتوا (انگلیسی)</TableCell>
                        <TableCell isHeader>محتوا (فارسی)</TableCell>
                        <TableCell isHeader>عنوان (عربی)</TableCell>
                        <TableCell isHeader>عنوان (انگلیسی)</TableCell>
                        <TableCell isHeader>عنوان (فارسی)</TableCell>
                        <TableCell isHeader>تصویر</TableCell>
                        <TableCell isHeader>عملیات</TableCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {newsComment.map((p, idx) => (
                        <TableRow key={p.id}>
                            <TableCell>{idx + 1}</TableCell>
                            {renderCell("خلاصه عربی", p.summary_AR)}
                            {renderCell("خلاصه انگلیسی", p.summary_EN)}
                            {renderCell("خلاصه فارسی", p.summary_FA)}
                            {renderCell("محتوا عربی", p.content_AR ?? undefined)}
                            {renderCell("محتوا انگلیسی", p.content_EN ?? undefined)}
                            {renderCell("محتوا فارسی", p.content_FA ?? undefined)}
                            {renderCell("عنوان عربی", p.title_AR)}
                            {renderCell("عنوان انگلیسی", p.title_EN)}
                            {renderCell("عنوان فارسی", p.title_FA)}
                            {renderCell("تصویر", p.imageURL)}
                            <TableCell>
                                <button
                                    onClick={() => navigate(`/admin/products/${p.id}/edit`)}
                                    className="text-blue-600 mx-1"
                                >
                                    ✏️ ویرایش
                                </button>
                                <button
                                    onClick={() => handleDelete(p.id)}
                                    className="text-red-600 mx-1"
                                >
                                    🗑 حذف
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {modalOpen && (
                <TextPreviewModal
                    open={modalOpen}
                    onClose={closeModal}
                    title={modalContent.title}
                    content={modalContent.text}
                />
            )}
        </div>
    );
}
