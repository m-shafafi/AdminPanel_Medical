import { useTranslation } from "react-i18next";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Topbar from "../../Components/Topbar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";
import i18n from "i18n";
import useGetAllTraining from "hooks/useGetAllTraining";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import VideoPlayer from "pages/Components/VideoPlayer";
import LoadingModal from "pages/Components/Loading/Loading";
import { useLoading } from "pages/Components/Loading/LoadingContext";


const Education = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();

  const state = location.state as TrainingCategoriesListResponse | null;
  const { loading, setLoading } = useLoading();
console.log({loading})
  

   if (!state?.id) {
    console.warn("state.Id is undefined:", state);
  
  }

  const { data } = useGetAllTraining(currentLang);
  const [training, setTrainings] = useState<TrainingListResponse[]>([]);

useEffect(() => {
  setLoading(true);

  if (!data || data.length === 0) {
    setLoading(false);
    return;
  }

  if (!state?.id) {
    console.warn("state.Id is undefined:", state);
    setLoading(false);
    return;
  }

  const result = data.filter((p) => p.categoryId === state.id);
  setTrainings(result);

  setLoading(false);
}, [data, state?.id]);

console.log({training})
  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.jpg"
        title={t("navigation.education")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

        {loading ? (
                   <LoadingModal isOpen={loading} message="Please wait, processing..." />

        ) : (
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">{t("navigation.education")}</h4>
            </div>
            <h1 className="display-5 mb-4">{state?.name}</h1>
          </div>

          <div className="row g-4 justify-content-center">
            {training.map((post, index) => (
              <div
                className="col-12 col-sm-6 col-lg-4 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="blog-item rounded h-100 d-flex flex-column">
                  <div className="blog-img ratio ratio-16x9">
                    <VideoPlayer src={post.thumbnailUrl} />
                  </div>

                  {/* اگر می‌خوای توضیحات هم باشه، این بخش رو آنکامنت کن */}
                  {/* <div className="blog-content p-4 flex-grow-1">
                    <a href={post.thumbnailUrl} className="h5 d-block mb-2">
                      {post.title}
                    </a>
                    <p className="mb-4 text-truncate">{post.description}</p>
                    <a
                      href={post.thumbnailUrl}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mt-auto"
                    >
                      {t("download.video")}
                    </a>
                  </div> */}
                </div>
              </div>
            ))}

            {training.length === 0 && (
              <div className="col-12 text-center text-muted">
                {t("no_data_available")}
              </div>
            )}
          </div>
        </div>
      </div>
        )}
    </>
  );
};

export default Education;
