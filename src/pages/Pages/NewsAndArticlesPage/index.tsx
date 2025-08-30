import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Navbar from "pages/Components/navbar/Navbar";
import Topbar from "../../Components/Topbar";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useGetAllNewsComment from "hooks/useGetAllNewsComment";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import i18n from "i18n";

const NewsAndArticlesPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const { data, error } = useGetAllNewsComment();
  const [newsComment, setNewsComment] = useState<NewsCommentsResponse[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;
    setNewsComment(data);
  }, [data]);

  const getLocalizedValue = (
    item: NewsCommentsResponse,
    field: "content" | "title"
  ) => {
    switch (i18n.language) {
      case "en-GB":
        return item[`${field}_EN`];
      case "ar-GB":
        return item[`${field}_AR`];
      case "fa-IR":
      default:
        return item[`${field}_FA`];
    }
  };

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        txtTitleBanner={t("navigation.articles")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />
      <div className="container-fluid blog py-5">
        <div className="container py-5">
    
          <div className="row g-4 justify-content-center">
            {newsComment.map((post, index) => (
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="blog-item rounded shadow">
                  <div className="blog-centent p-4">
                    <img
                      src={post.imageURL}
                      className="w-full h-64 object-contain rounded mb-3"
                    />
                    <p className="h4 mb-2">{getLocalizedValue(post, "title")}</p>

                    {/* Accordion Content */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIndex === index ? "max-h-96" : "max-h-16"
                        }`}
                    >
                      <p className="text-gray-700">
                        {getLocalizedValue(post, "content")}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleAccordion(index)}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mt-3"
                    >
                      {expandedIndex === index
                        ? t("button.readLess")
                        : t("button.discoverMore")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndArticlesPage;
