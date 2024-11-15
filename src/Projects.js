import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

const projects = [
    {
        title: "Payment-App",
        description: "The payment app's frontend features a clean user interface.",
        image: "./PaymentApp.webp",
        deployedLink: "https://cash-app-frontend-dxhm6pp2d-madhurs-projects-66621e9b.vercel.app/"
    },
    {
        title: "Shoe-App",
        description: "Developed a fully-functional frontend for a comprehensive shoe app using modern web technologies",
        image: "/shoeapp.png",
        deployedLink: "https://shoe-rd85wnhs7-madhurs-projects-66621e9b.vercel.app/"
    }
];

const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay if desired
        autoplaySpeed: 3000, // Autoplay interval
    };

    return (
        <section className="portfolio section" id="projects">
            <h2 className="section_title">Some of my recent work</h2>

            <div className="portfolio_container container">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio_content grid project-card">
                            <img src={project.image} alt={project.title} className="portfolio_img" />

                            <div className="portfolio_data">
                                <h3 className="portfolio_title project_title">{project.title}</h3>
                                <p className="portfolio_description project-tech-stack project-description">
                                    {project.description}
                                </p>
                                <a 
                                    href={project.deployedLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="button button-flex button-small portfolio_button project-deployed-link"
                                >
                                    Deployed
                                    <i className="uil uil-external-link-alt button_icon"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Project;
