import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";
import i18n from "i18n";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استایل پیشفرض Swiper
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

interface GallerySectionProps {
  galleries: GalleryResponse[];
}

const GalleryScrollPage = ({ galleries }: GallerySectionProps) => {
  const groupedGalleries = useMemo(() => {
    const groups: Record<number, GalleryResponse[]> = {};
    galleries.forEach(item => {
      if (!groups[item.categoryId]) {
        groups[item.categoryId] = [];
      }
      groups[item.categoryId].push(item);
    });
    return Object.entries(groups).map(([id, items]) => ({
      id: Number(id),
      items,
    }));
  }, [galleries]);

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {groupedGalleries.map(group => (
        <GalleryStep key={group.id} items={group.items} />
      ))}
    </div>
  );
};

const GalleryStep = ({ items }: { items: GalleryResponse[] }) => {
  const getLocalizedValue = (item: GalleryResponse, field: "title") => {
    const langMap: Record<string, keyof GalleryResponse> = {
      "en-GB": `${field}_EN`,
      "ar-GB": `${field}_AR`,
      "fa-IR": `${field}_FA`,
    };
    const value = item[langMap[i18n.language] ?? `${field}_FA`];
    return value != null ? String(value) : "";
  };

  return (
<section className="snap-start flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-6">
        {getLocalizedValue(items[0], "title")}
      </h2>

      {/* --- Instagram-like carousel --- */}
      <div className="w-full max-w-3xl">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-xl mb-7"
        >
          {items.map(item => (
            <SwiperSlide key={item.id} className="flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={getLocalizedValue(item, "title")}
                className="w-full h-auto object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryScrollPage;
