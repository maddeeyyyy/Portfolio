import React from 'react';


const StatisticsContactFooter = () => {
    return (
        <main>
            {/* ========== Statistics Section ========== */}
            <section className="statistics section" id="statistics">
                <h2 className="section_title">Statistics</h2>
                <span className="section_subtitle">My Github Statistics</span>
                <div className="statistics_container container grid">
                    <img
                        src="https://github-readme-stats.vercel.app/api?hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=default&locale=en&hide_border=false&username=maddeeyyyy"
                        height="150"
                        alt="stats graph"
                        id="github-stats-card"
                    />
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs?locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=default&hide_border=false&username=maddeeyyyy"
                        height="150"
                        alt="languages graph"
                        id="github-top-langs"
                    />
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=maddeeyyyy&"
                        alt="madhur"
                        id="github-streak-stats"
                    />
                </div>
            </section>

            {/* ========== Contact Section ========== */}
            <section className="contact section" id="contact">
                <h2 className="section_title">Contact Me</h2>

                <div className="contact_container container grid">
                    <div>
                        <p className="contact_message">
                            I am currently probably napping or petting a dog.<br />
                            Feel free to drop a message for any suggestion or collaboration,<br />
                            and we can get in touch.
                        </p>
                        <div className="contact_information">
                            <i className="uil uil-envelope-alt contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Email</h3>
                                <span className="contact_subtitle" id="contact-email">madhursirohi2@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact_information">
                            <i className="uil uil-map-marker contact_icon"></i>
                            <div>
                                <h3 className="contact_title">Location</h3>
                                <span className="contact_subtitle">Noida , Uttar Pradesh</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact_form grid">
                        <div className="contact_inputs grid">
                            <div className="contact_content">
                                <label className="contact_label">Name</label>
                                <input type="text" className="contact_input" />
                            </div>
                            <div className="contact_content">
                                <label className="contact_label">Email</label>
                                <input type="email" className="contact_input" />
                            </div>
                        </div>
                        <div className="contact_content">
                            <label className="contact_label">Project</label>
                            <input type="text" className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label className="contact_label">Message</label>
                            <textarea cols="0" rows="7" className="contact_input"></textarea>
                        </div>
                        <div>
                            <a href="#" className="button button-flex">
                                Send Message
                                <i className="uil uil-message button_icon"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </section>

            {/* ========== Footer Section ========== */}
            <footer className="footer">
                <div className="footer_bg">
                    <div className="footer_container container grid">
                        <div>
                            <h1 className="footer_title">Madhur Singh Sirohi </h1>
                            <span className="footer_subtitle">FullStack Developer</span>
                        </div>
                        <div className="footer_socials">
                            <a href="https://www.linkedin.com/in/madhur-sirohi-58274a2b1/" target="_blank" rel="noopener noreferrer" className="footer_social">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://github.com/maddeeyyyy" target="_blank" rel="noopener noreferrer" className="footer_social">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p className="footer_copy">&#169; Madhur Singh Sirohi | All rights reserved | 2024</p>
                </div>
            </footer>
        </main>
    );
};

export default StatisticsContactFooter;
