import { useTranslation } from "react-i18next";
import Header from "../../Header/Header";
import Topbar from "../../Components/Topbar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";
import i18n from "i18n";
import useGetAllTraining from "hooks/useGetAllTraining";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import VideoPlayer from "pages/Components/VideoPlayer";
import LoadingModal from "pages/Components/Loading/Loading";
import Navbar from "pages/Components/navbar/Navbar";


const Education = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();

  const state = location.state as TrainingCategoriesListResponse | null;
  const [loading, setLoading] = useState(true);



  if (!state?.id) {
    console.warn("state.Id is undefined:", state);

  }

  const { data } = useGetAllTraining(currentLang);
  const [training, setTrainings] = useState<TrainingListResponse[]>([]);

  useEffect(() => {
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

  console.log({ training })
  return (
    <>
      <Topbar />
      <Navbar />
      <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        txtTitleBanner={t("navigation.education")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />

      {loading ? (
        <LoadingModal isOpen={loading} message="Please wait, processing..." />

      ) : (
        <div className="container-fluid blog py-5">
          <div className="container">
            <div className="section-title  wow fadeInUp" data-wow-delay="0.1s">
              {/* <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">{t("navigation.education")}</h4>
              </div> */}
              <h3 className="display-9">{state?.name}</h3>
            </div>

            <div className="row g-4 justify-content-center">
              {training.map((post, index) => (
                <VideoPlayer src={post.thumbnailUrl} />

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
