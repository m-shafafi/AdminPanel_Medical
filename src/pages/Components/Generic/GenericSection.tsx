import React from "react";
import i18n from "i18n";

interface GenericSectionProps<T> {
    items: T[];
    nameField: string;        // پایه فیلد اسم، بدون _FA/_EN/_AR
    descriptionField: string; // پایه فیلد توضیح، بدون _FA/_EN/_AR
}

const getLocalizedValue = <T,>(
    item: T,
    fieldBase: string
): string | undefined => {

    console.log(item)
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
    return (
        <div className="space-y-10">
            {items.map((item, index) => (
                <div
                    key={(item as any).id || index}
                    className={`flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-300 bg-white ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    {/* تصویر (همیشه imageUrl) */}
                    <div className="w-full">
                        <img
                            src={getFieldValue(item, ["imageURL", "imageUrl", "ImageURL", "ImageUrl"])}
                            alt={getLocalizedValue(item, nameField)}
                            className="w-full min-h-1 !object-contain"
                        />
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
            ))}
        </div>
    );
}
