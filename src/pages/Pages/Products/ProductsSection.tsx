import ProductListResponse from "common/entities/Product/ProductListResponse";
import i18n from "i18n";
import React from "react";

interface Props {
    products: ProductListResponse[],
}

const getLocalizedValue = (
    product: ProductListResponse,
    field: "name" | "description"
) => {
    switch (i18n.language) {
        case "en-GB":
            return product[`${field}_EN`];
        case "ar-GB":
            return product[`${field}_AR`];
        case "fa-IR":
        default:
            return product[`${field}_FA`];
    }
};

export default function ProductsSection({ products }: Props) {
    return (
        <div className="space-y-10">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-300 bg-white ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                    {/* تصویر محصول */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={product.imageURL}
                            alt={getLocalizedValue(product, "name")}
                            className="w-full h-64 md:h-80 rounded-2xl object-cover"
                        />
                    </div>

                    {/* متن محصول */}
                    <div className="w-full md:w-1/2 text-center md:text-right">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            {getLocalizedValue(product, "name")}
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            {getLocalizedValue(product, "description")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
