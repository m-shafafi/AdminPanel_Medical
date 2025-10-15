// src/pages/ProductsList.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetAllProducts from "../../../hooks/Products/useGetAllProduct";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";

export default function ProductsList() {
    const navigate = useNavigate();
    const { data, error } = useGetAllProducts();
    const [products, setProducts] = useState<ProductListResponse[]>([]);

    useEffect(() => {
        if (!data || data.length === 0) return;
        setProducts(data);
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm("آیا مطمئنی می‌خوای حذفش کنی؟")) {
            //await ProductApi.delete(id);
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">مدیریت محصولات</h2>
                <button
                    className="bg-blue-600 text-white px-3 py-1 rounded mb-4"
                    onClick={() => navigate("/admin/products/new")}
                >
                    محصول جدید
                </button>

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">#</th>
                            <th className="p-2 border">نام محصول</th>
                            <th className="p-2 border">قیمت</th>
                            <th className="p-2 border">تصویر</th>
                            <th className="p-2 border">عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td className="p-2 border">{p.id}</td>
                                <td className="p-2 border">{p.name_AR}</td>
                                <td className="p-2 border">{p.name_EN}</td>
                                <td className="p-2 border">{p.name_FA}</td>
                                <td className="p-2 border">{p.price}</td>
                                <td className="p-2 border">
                                    {p.imageUrls && p.imageUrls.length > 0 ? (
                                        p.imageUrls.map((url, idx) => (
                                            <img key={idx} src={url} alt={p.name_FA} width="60" className="mr-1" />
                                        ))
                                    ) : (
                                        <span>بدون تصویر</span>
                                    )}
                                </td>

                                <td className="p-2 border">
                                    <button
                                        onClick={() => navigate(`/admin/products/${p.id}/edit`)}
                                        className="text-blue-600 mx-1"
                                    >
                                        ✏️ ویرایش
                                    </button>
                                    <button
                                        onClick={() => handleDelete(p.id!)}
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
