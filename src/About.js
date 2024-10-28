import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">What I Do</h2>
            <div className="about_container container grid">
                <div className="about_data">
                    <div className="about_boxes">
                        {[
                            "Transfer design mockups & wireframes into interactive & responsive web pages using HTML, CSS, Javascript & React.",
                            "Collaborate with UI/UX designers & backend developers to ensure seamless integration and functionality of frontend components.",
                            "Conduct cross-browser & cross-device testing to ensure compatibility and optimal performance across various platforms & devices.",
                            "Implements best practices & standards for web development, including accessibility, performance optimization & responsive design principles."
                        ].map((content, index) => (
                            <div className="about_box" key={index}>
                                <p className="about_box-content">{content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">1</span>
                            <span className="about_info-name">Year of Experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">50+</span>
                            <span className="about_info-name">Mini Assignments</span>
                        </div>
                        <div>
                            <span className="about_info-title">5+</span>
                            <span className="about_info-name">Completed Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
