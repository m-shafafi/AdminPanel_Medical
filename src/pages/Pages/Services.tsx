import React from "react";

const Services= () => {
  const services = [
    { id: 1, title: 'ماساژ درمانی', img: './assets/img/service-1.jpg', delay: '0.1s' },
    { id: 2, title: 'فیزیوتراپی', img: './assets/img/service-2.jpg', delay: '0.3s' },
    { id: 3, title: 'گرما و سرما درمانی', img: './assets/img/service-3.jpg', delay: '0.5s' },
    { id: 4, title: 'درمان کایروپراکتیک', img: './assets/img/service-4.jpg', delay: '0.7s' },
    { id: 5, title: 'آسیب‌های شغلی', img: './assets/img/service-5.jpg', delay: '0.1s' },
    { id: 6, title: 'آسیب‌های ورزشی', img: './assets/img/service-6.jpg', delay: '0.3s' },
    { id: 7, title: 'درمان‌های دوره‌ای', img: './assets/img/service-7.jpg', delay: '0.5s' },
    { id: 8, title: 'درد کمر', img: './assets/img/service-8.jpg', delay: '0.7s' },
  ];

  return (
    <>
    <div className="container-fluid service py-5" dir="rtl">
      <div className="container py-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">خدمات ما</h4>
          </div>
          <h1 className="display-3 mb-4">خدمات تخصصی فیزیوتراپی توسط کارشناسان حرفه‌ای</h1>
          <p className="mb-0">
            ما با استفاده از تکنیک‌های پیشرفته و تجربه‌ای چندین‌ساله، به بهبود وضعیت حرکتی و کاهش درد بیماران کمک می‌کنیم.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={service.delay}
              key={service.id}
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img src={service.img}  className="img-fluid rounded-top w-100" alt={service.title} />
                </div>
                <div className="service-content rounded-bottom bg-light p-4 text-end">
                  <div className="service-content-inner">
                    <h5 className="mb-4">{service.title}</h5>
                    <p className="mb-4">توضیح مختصری در مورد {service.title} قرار می‌گیرد.</p>
                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">
                      اطلاعات بیشتر
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">
              مشاهده همه خدمات
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
