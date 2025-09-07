import React from "react";
import i18n from "i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

interface GenericSectionProps<T> {
    items: T[];
    nameField: string;
    descriptionField: string;
}

const getLocalizedValue = <T,>(item: T, fieldBase: string): string | undefined => {
    switch (i18n.language) {
        case "en-GB":
            return (item as any)[`${fieldBase}_EN`];
        case "ar-GB":
            return (item as any)[`${fieldBase}_AR`];
        case "fa-IR":
        default:
            return (item as any)[`${fieldBase}_FA`];
    }
};

const getFieldValue = (item: any, fieldNames: string[]): string | undefined => {
    for (let name of fieldNames) {
        if (item[name] !== undefined) {
            return item[name];
        }
    }
    return undefined;
};

export default function GenericSection<T>({
    items,
    nameField,
    descriptionField,
}: GenericSectionProps<T>) {
    const { t } = useTranslation();

    return (
        <div className="space-y-10">
            {items.map((item, index) => {
                const images: string[] = (item as any).imageUrls || [];
                const fallbackImage = getFieldValue(item, [
                    "imageURL",
                    "imageUrl",
                    "ImageURL",
                    "ImageUrl",
                ]);

                return (
                    <div
                        key={(item as any).id || (item as any).productId || index}
                        className={`flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-300 bg-white ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* اسلایدر تصاویر */}
                        <div className="w-full max-w-3xl flex justify-center">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={20}
                                slidesPerView={1}
                                className="rounded-xl mb-7 max-w-[400px]"
                            >
                                {images.length > 0 ? (
                                    images.map((url, idx) => (
                                        <SwiperSlide key={idx} className="flex items-center justify-center bg-gray-200">
                                            <img
                                                src={url}
                                                alt={getLocalizedValue(item, nameField)}
                                                className="max-w-[300px] md:max-w-[400px] max-h-[300px] object-contain mx-auto rounded-xl"
                                            />
                                        </SwiperSlide>
                                    ))
                                ) : fallbackImage ? (
                                    <SwiperSlide className="flex items-center justify-center">
                                        <img
                                            src={fallbackImage}
                                            alt={getLocalizedValue(item, nameField)}
                                            className="max-w-[300px] md:max-w-[400px] max-h-[300px] object-contain mx-auto rounded-xl"
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <SwiperSlide className="flex items-center justify-center">
                                        <div className="text-gray-400 italic p-10 border rounded-xl">
                                            {t("no_image_available")}
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>

                        {/* متن */}
                        <div className="w-full md:w-1/2 text-center md:text-right">
                            <h2 className="text-3xl font-bold text-blue-900 mb-4">
                                {getLocalizedValue(item, nameField)}
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {getLocalizedValue(item, descriptionField)}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
