import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in new-fo">
              <div className="career-role">
                <h4>FrontEnd Developer</h4>
                <h5>Digitonics Lab</h5>
              </div>
              <h3>July 2019 - Feb 2021</h3>
            </div>
            <p>
              I developed responsive, cross-browser web applications with reusable UI components, enhancing maintainability and efficiency. I migrated legacy JavaScript applications to React, improving performance, scalability, and user experience. Additionally, I converted Figma, Adobe XD, and PSD designs into pixel-perfect, production-ready front-end interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in new-fo">
              <div className="career-role">
                <h4>FrontEnd Engineer</h4>
                <h5>AL Rehman Technologies</h5>
              </div>
              <h3>Mar 2021 - Now</h3>
            </div>
            <p>
             I am currently leading a team of developers to build scalable web applications, optimizing performance to improve Core Web Vitals by 40%. I convert Figma, Adobe XD, and PSD designs into responsive interfaces, develop secure authentication systems, and create reusable components. Additionally, I conduct code reviews and mentor developers to enhance overall development standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
