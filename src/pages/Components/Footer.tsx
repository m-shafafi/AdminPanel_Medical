import React from 'react';

interface FooterLink {
  text: string;
  icon: string;
  href: string;
}

interface SocialMediaLink {
  icon: string;
  href: string;
}

const Footer= () => {
  const quickLinks: FooterLink[] = [
    { text: 'About Us', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Contact Us', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Privacy Policy', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Terms & Conditions', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Our Blog & News', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Our Team', icon: 'fas fa-angle-right', href: '#' },
  ];

  const servicesLinks: FooterLink[] = [
    { text: 'All Services', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Physiotherapy', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Diagnostics', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Manual Therapy', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Massage Therapy', icon: 'fas fa-angle-right', href: '#' },
    { text: 'Rehabilitation', icon: 'fas fa-angle-right', href: '#' },
  ];

  const socialLinks: SocialMediaLink[] = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
  ];

  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Terapia Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">
                <i className="fas fa-star-of-life me-3"></i>Terapia
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem impedit eos autem dolores
                laudantium quia, qui similique
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-white me-2"></i>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href={link.href}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Quick Links</h4>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <i className={`${link.icon} me-2`}></i> {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Terapia Services Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Terapia Services</h4>
              {servicesLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <i className={`${link.icon} me-2`}></i> {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Contact Info</h4>
              <a href="">
                <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA
              </a>
              <a href="">
                <i className="fas fa-envelope me-2"></i> info@example.com
              </a>
              <a href="">
                <i className="fas fa-envelope me-2"></i> info@example.com
              </a>
              <a href="">
                <i className="fas fa-phone me-2"></i> +012 345 67890
              </a>
              <a href="" className="mb-3">
                <i className="fas fa-print me-2"></i> +012 345 67890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
