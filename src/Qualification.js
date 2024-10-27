import React from 'react';

const Qualifications = () => {
    return (
        <section className="qualification">
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button-flex qualification_active" data-target='#work'>
                        <i className="uil uil-graduation-cap qualification_icon"></i>&nbsp;Work
                    </div>
                    <div className="qualification_button button-flex" data-target='#education'>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>&nbsp;Education
                    </div>
                </div>

                <div className="qualification_sections">
                    {/* Work Qualifications */}
                    <div className="qualification_content qualification_active" data-content id="work">
                        {[
                            { title: "Lead Frontend Developer", subtitle: "Grouple (Mumbai)", date: "June 2023 - Present" },
                            { title: "Frontend Developer", subtitle: "ZOTH.io (Bangalore)", date: "Jan 2023 - June 2023" },
                            { title: "Frontend Developer Intern", subtitle: "BB Bunkerbound (Faridabad)", date: "June 2022 - Dec 2022" }
                        ].map((work, index) => (
                            <div className="qualification_data" key={index}>
                                <div>
                                    <h3 className="qualification_title">{work.title}</h3>
                                    <span className="qualification_subtitle">{work.subtitle}</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        <span className="qualification_date">{work.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education Qualifications */}
                    <div className="qualification_content" data-content id="education">
                        {[
                            { title: "Bachelor of Technology in Computer Science", subtitle: "GGSIPU University (Delhi)", date: "2020 - 2024" },
                            { title: "Intermediate", subtitle: "S.B.M.H.S School (Jaipur)", date: "2018 - 2020" },
                            { title: "High School", subtitle: "S.B.M.H.S School (Jaipur)", date: "2016 - 2018" }
                        ].map((edu, index) => (
                            <div className="qualification_data" key={index}>
                                <div>
                                    <h3 className="qualification_title">{edu.title}</h3>
                                    <span className="qualification_subtitle">{edu.subtitle}</span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-calendar-alt"></i>
                                        <span className="qualification_date">{edu.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
