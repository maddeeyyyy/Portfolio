import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

const projects = [
    {
        title: "Grouple",
        description: "An all-in-one booking platform developed to make group bookings easier and increase revenue. Created from scratch, it helps in selling comprehensive package deals and managing group reservations efficiently, with better deals for larger groups.",
        image: "/images/grouple.png",
        deployedLink: "https://www.grouple.in/"
    },
    {
        title: "Barbaar",
        description: "Created an interface, allowing customers based out of Dubai to select packages, dates, times, and food choices to book their reservations conveniently.",
        image: "/images/barbar.png",
        deployedLink: "https://spotty-butter-9254.netlify.app/"
    },
    {
        title: "Merchant dashboard",
        description: "Dashboard for the restaurant to manage bookings—accept, decline, and modify—simplifying day-to-day operations. Solving the problem of assigning a personal concierge to each booking.",
        image: "/images/merchant.png",
        deployedLink: "https://beta-merchant.testgrouple.com/Dashboard"
    },
    {
        title: "Exemplar Space",
        description: "Designed & developed a pixel-perfect website for an architecture firm, to boost marketing efforts and drive increased foot traffic.",
        image: "/images/exemplar.png",
        deployedLink: "https://exemplar.space/"
    },
    {
        title: "Prepaid Friends",
        description: "Developed a platform enabling users to convert Bitcoin into prepaid cards for seamless online purchases, in-store transactions, or global ATM cash withdrawals.",
        image: "/images/prepaid2.png",
        deployedLink: "https://prepaidfriends.netlify.app/"
    },
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
