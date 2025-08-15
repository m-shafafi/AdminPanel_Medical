import { useTranslation } from "react-i18next";
import Header from "../../Components/Header";
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
console.log({data})
  useEffect(() => {
    
    if (!data || data.length === 0) return;
    console.log({ data });
    setNewsComment(data);
  }, [data]);
  const getLocalizedValueContentNews = (item:NewsCommentsResponse, field: "content") => {
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


  const getLocalizedValueTitleNews = (item:NewsCommentsResponse, field: "title") => {
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
  return (
    
    <>
       <Topbar/>
     <Navbar/> 

            <Header
        imgBanner="https://zhubinshahyad.com/media/Files/img/About/Banner.png"
        title={t("navigation.articles")}
        
       txtTitleBanner={t("navigation.articles")}
        menu={[
          { url: "/", desc: t("navigation.home") },
          { url: "/contact", desc: t("navigation.contact") },
        ]}
      />
   <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">{t("navigation.articles")}</h4>
          </div>
          {/* <h1 className="display-3 mb-4"></h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi
            quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam
            necessitatibus saepe in ab? Repellat!
          </p> */}
        </div>
        <div className="row g-4 justify-content-center">
          {newsComment.map((post, index) => (
                 <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                  
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      {/* <p className="mb-0 text-muted">
                        <i className="fa fa-calendar-alt text-primary"></i>{" "}
                        {post.creationDateTime}
                      </p> */}
                      {/* <a href={post.i} className="text-muted">
                        <span className="fa fa-comments text-primary"></span>{" "}
                        {post.comments} Comments
                      </a> */} 
                    </div>
                    <p  className="h4">
                      {getLocalizedValueTitleNews(post,"title")}
                    </p>
                    <p className="my-4">{getLocalizedValueContentNews(post,"content")}</p>
                    <a
                      href={post.imageUrl}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
          {t('button.discoverMore')}
                    </a>
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
