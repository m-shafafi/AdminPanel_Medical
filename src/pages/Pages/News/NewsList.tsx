// src/pages/ProductsList.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetAllProducts from "../../../hooks/Products/useGetAllProduct";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";
import { useTranslation } from "react-i18next";
import useGetAllNewsComment from "hooks/useGetAllNewsComment";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import i18n from "i18n";

export default function NewsList() {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const { data, error } = useGetAllNewsComment();
    const [newsComment, setNewsComment] = useState<NewsCommentsResponse[]>([]);
    const isRtl = i18n.language === "fa-IR" || i18n.language === "ar-GB";

    useEffect(() => {
        if (!data || data.length === 0) return;
        setNewsComment(data);
    }, [data]);

    const handleDelete = async (id: number) => {
        if (window.confirm("آیا مطمئنی می‌خوای حذفش کنی؟")) {
            //await ProductApi.delete(id);
            setNewsComment(prev => prev.filter(p => p.Id !== id));
        }
    };
    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">مدیریت اخبار</h2>
                <button
                    className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
                    onClick={() => navigate("/admin/products/new")}
                >
                    خبر جدید
                </button>

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200 text-gray-800">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">خلاصه (عربی)</th>
                            <th className="p-2 border">خلاصه (انگلیسی)</th>
                            <th className="p-2 border">خلاصه (فارسی)</th>
                            <th className="p-2 border">محتوا (عربی)</th>
                            <th className="p-2 border">محتوا (انگلیسی)</th>
                            <th className="p-2 border">محتوا (فارسی)</th>
                            <th className="p-2 border">تصویر</th>
                            <th className="p-2 border">عنوان (عربی)</th>
                            <th className="p-2 border">عنوان (انگلیسی)</th>
                            <th className="p-2 border">عنوان (فارسی)</th>
                            <th className="p-2 border">آدرس تصویر</th>
                            <th className="p-2 border">عملیات</th>
                        </tr>
                    </thead>

                    <tbody>
                        {newsComment.map((p) => (
                            <tr key={p.Id}>
                                <td className="p-2 border">{p.Id}</td>
                                <td className="p-2 border">{p.Summary_AR}</td>
                                <td className="p-2 border">{p.Summary_EN}</td>
                                <td className="p-2 border">{p.Summary_FA}</td>
                                <td className="p-2 border">{p.content_AR}</td>
                                <td className="p-2 border">{p.content_EN}</td>
                                <td className="p-2 border">{p.content_FA}</td>
                                <td className="p-2 border">{p.imageURL}</td>
                                <td className="p-2 border">{p.title_AR}</td>
                                <td className="p-2 border">{p.title_EN}</td>
                                <td className="p-2 border">{p.title_FA}</td>
                                <td className="p-2 border">{p.imageURL}</td>


                                <td className="p-2 border">
                                    <button
                                        onClick={() => navigate(`/admin/products/${p.Id}/edit`)}
                                        className="text-blue-600 mx-1"
                                    >
                                        ✏️ ویرایش
                                    </button>
                                    <button
                                        onClick={() => handleDelete(p.Id!)}
                                        className="text-red-600 mx-1"
                                    >
                                        🗑 حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
