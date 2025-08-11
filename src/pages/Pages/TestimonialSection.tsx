
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import React from 'react';



const TestimonialSection = () => {
  const testimonials = [
    {
      image: 'img/testimonial-img.jpg',
      name: 'John Abraham',
      location: 'New York, USA',
      feedback:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!',
    },
    {
      image: 'img/testimonial-img.jpg',
      name: 'John Abraham',
      location: 'New York, USA',
      feedback:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!',
    },
    {
      image: 'img/testimonial-img.jpg',
      name: 'John Abraham',
      location: 'New York, USA',
      feedback:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!',
    },
  ];

  return (
    <>
    <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title mb-5">
          <div className="sub-style">
            <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
          </div>
          <h1 className="display-3 mb-4">What Clients are Say</h1>
        </div>
        <div className="testimonial-carousel owl-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-inner p-5">
                <div className="testimonial-inner-img mb-4">
                  <img
                    src={testimonial.image}
                    className="img-fluid rounded-circle"
                    alt={testimonial.name}
                  />
                </div>
                <p className="text-white fs-7">{testimonial.feedback}</p>
                <div className="text-center">
                  <h5 className="mb-2">{testimonial.name}</h5>
                  <p className="mb-2 text-white-50">{testimonial.location}</p>
                  <div className="d-flex justify-content-center">
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                    <i className="fas fa-star text-secondary"></i>
                  </div>
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

export default TestimonialSection;
