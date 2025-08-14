import { useTranslation } from "react-i18next";
import Header from "../../Components/Header";
import Topbar from "../../Components/Topbar";
import React from "react";
import Navbar from "pages/Components/navbar/Navbar";

interface BlogPost {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
  link: string;
}

const GalleryPage = () => {
  const { t } = useTranslation();
  const blogPosts: BlogPost[] = [
    {
      image: "./assets/img/blog-1.jpg",
      date: "01 Jan 2045",
      comments: 3,
      title: "Remove back Pain While Working on o physio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
      link: "#",
    },
    {
      image: "./assets/img/blog-2.jpg",
      date: "01 Jan 2045",
      comments: 3,
      title: "Benefits of a weekly physiotherapy session",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
      link: "#",
    },
    {
      image: "./assets/img/blog-3.jpg",
      date: "01 Jan 2045",
      comments: 3,
      title: "Regular excercise can slow ageing process",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
      link: "#",
    },
  ];

  return (
    <>
      <Topbar />
      <Navbar />
      <Header
       imgBanner='https://zhubinshahyad.com/media/Files/img/About/Banner.jpg'
        title={t("navigation.gallery")}
        txtTitleBanner={t("navigation.gallery")}
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
              <h4 className="sub-title px-3 mb-0">Our Blog</h4>
            </div>
            <h1 className="display-3 mb-4">
              Excellent Facility and High Quality Therapy
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {blogPosts.map((post, index) => (
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img
                      src={post.image}
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted">
                        <i className="fa fa-calendar-alt text-primary"></i>{" "}
                        {post.date}
                      </p>
                      <a href={post.link} className="text-muted">
                        <span className="fa fa-comments text-primary"></span>{" "}
                        {post.comments} Comments
                      </a>
                    </div>
                    <a href={post.link} className="h4">
                      {post.title}
                    </a>
                    <p className="my-4">{post.description}</p>
                    <a
                      href={post.link}
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
                      Read More
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

export default GalleryPage;
