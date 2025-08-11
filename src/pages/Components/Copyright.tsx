import React from "react";


const Copyright = () => {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-white">
              <a href="#">
                <i className="fas fa-copyright text-light me-2"></i>Your Site Name
              </a>
              , All rights reserved.
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-white">
            {/* This template is free as long as you keep the author's credit link */}
            Designed By <a className="border-bottom" href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
