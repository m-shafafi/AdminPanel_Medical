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

const Education = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();

const state = location.state as TrainingCategoriesListResponse | null;
if (!state?.id ) {
console.log("دسته بندی وجود مدرد")
console.log("دسته بندی وجود nhvn",state)
}


const { data, error } = useGetAllTraining(currentLang);
  const [training, setTrainings] = useState<TrainingListResponse[]>([]);


useLayoutEffect(() => {
  if (!data || data.length === 0) return;
  if (!state?.id) {
    console.warn("state.Id is undefined:", state);
    return;
  }


  const productsList = data.filter((p) => p.categoryId === state.id);
  setTrainings(productsList);
}, [data, state?.id, location.state]);

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
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">
                {t("navigation.education")}
                
              </h4>
            </div>
            <h1 className="display-3 mb-4">
                {state?.name}
            </h1>
            {/* <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p> */}
          </div>
          <div className="row g-4 justify-content-center">
            {training.map((post, index) => (
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                   

                    <VideoPlayer src={post.thumbnailUrl}/>
                  </div>
                  {/* <div className="blog-centent p-4">
                  
                    <a href={post.thumbnailUrl} className="h4">
                      {post.title}
                    </a>
                    <p className="my-4">{post.description}</p>
                    <a
                      href={post.thumbnailUrl}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
                      {t("download.video")}
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
