import React, { useEffect, useState } from 'react';

const Home = () => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 20000; // Period between rotations

    // TxtRotate component, handles the rotating text functionality
    const TxtRotate = ({ toRotate, period }) => {
        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [text, setText] = useState('');
        const [delta, setDelta] = useState(300 - Math.random() * 100);

        useEffect(() => {
            let ticker = setInterval(() => {
                tick();
            }, delta);

            return () => { clearInterval(ticker); };
        }, [text]);

        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
            } else {
                setText(fullText.substring(0, text.length + 1));
            }

            if (!isDeleting && text === fullText) {
                setIsDeleting(true);
                setDelta(period); // Pause before starting to delete
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500); // Pause before typing the next word
            } else {
                setDelta(isDeleting ? 1000 : 2000);
            }
        };

        return (
            <span className="txt-rotate">{text}</span>
        );
    };

    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        {[
                            { href: "https://www.linkedin.com/in/shubhangi-sisodia/", icon: "uil-linkedin-alt", id: "contact-linkedin" },
                            { href: "https://github.com/ShubhangiSisodia", icon: "uil-github-alt", id: "contact-github" },
                            { href: "https://twitter.com/_Shubhangiii_", icon: "uil-twitter-alt" }
                        ].map((social, index) => (
                            <a href={social.href} target="_blank" rel="noopener noreferrer" className="home_social-icon" id={social.id} key={index}>
                                <i className={`uil ${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                    <div className="home_img">
                        <svg className="home_blob" viewBox="1 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image x="1" className="home_blob-img" href="/images/myimg.png" />
                            </g>
                        </svg>
                    </div>
                    <div className="home_data">
                        <h1 className="home_title" id="user-detail-name">Hi👋, I'm<br />Madhur Singh Sirohi</h1>
                        <h3 className="home_subtitle">
                            <TxtRotate toRotate={toRotate} period={period} /> {/* Display the rotating text */}
                        </h3>
                        <p className="home_description">I specialize in crafting stunning, functional websites that captivate users...</p>
                        <a href="#contact" className="button button-flex">Connect with Me <i className="uil uil-message button_icon"></i></a>
                    </div>
                </div>
                <div className="home_scroll">
                    <a href="#about" className="home_scroll-button button-flex">
                        <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                        <span className="home_scroll-name">Scroll Down</span>
                        <i className="uil uil-arrow-down home_scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
