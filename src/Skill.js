import React, { useState } from 'react';
// Importing icons from @iconscout/react-unicons
import { UilArrow, UilServerNetwork, UilIllustration, UilIcons, UilAngleDown } from '@iconscout/react-unicons';

const Skills = () => {
    const [openSection, setOpenSection] = useState(null); // State to track the open section

    // Function to handle section toggle
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section); // Close if clicked again
    };

    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills & Tools</h2>

            <div className="skills_container container grid">
                <div>
                    {/* Frontend Development */}
                    <div className={`skills_content ${openSection === 'frontend' ? 'skills_open' : 'skills_close'}`}>
                        <div className="skills_header" onClick={() => toggleSection('frontend')}>
                            <UilArrow className="skills_icon" /> {/* Unicons Arrow Icon */}
                            <div>
                                <h1 className="skills_title">Frontend Development</h1>
                            </div>
                            <UilAngleDown className="skills_arrow" /> {/* Unicons Angle Down Icon */}
                        </div>
                        <div className="skills_list grid">
                            {[
                                { name: "HTML", percentage: "90%" },
                                { name: "CSS", percentage: "85%" },
                                { name: "JavaScript", percentage: "70%" },
                                { name: "React", percentage: "60%" }
                            ].map((skill, index) => (
                                <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>

                    {/* Backend Development */}
                    <div className={`skills_content ${openSection === 'backend' ? 'skills_open' : 'skills_close'}`}>
                        <div className="skills_header" onClick={() => toggleSection('backend')}>
                            <UilServerNetwork className="skills_icon" /> {/* Unicons Server Network Icon */}
                            <div>
                                <h1 className="skills_title">Backend Development</h1>
                            </div>
                            <UilAngleDown className="skills_arrow" /> {/* Unicons Angle Down Icon */}
                        </div>
                        <div className="skills_list grid">
                            {[
                                { name: "Node Js", percentage: "70%" },
                                { name: "Express", percentage: "60%" },
                                { name: "Mongo DB", percentage: "50%" },
                                { name: "API Integration", percentage: "70%" }
                            ].map((skill, index) => (
                                <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    {/* Other Tech Skills */}
                    <div className={`skills_content ${openSection === 'tech' ? 'skills_open' : 'skills_close'}`}>
                        <div className="skills_header" onClick={() => toggleSection('tech')}>
                            <UilIllustration className="skills_icon" /> {/* Unicons Illustration Icon */}
                            <div>
                                <h1 className="skills_title">Other Tech Skills</h1>
                            </div>
                            <UilAngleDown className="skills_arrow" /> {/* Unicons Angle Down Icon */}
                        </div>
                        <div className="skills_list grid">
                            {[
                                { name: "Bootstrap", percentage: "70%" },
                                { name: "Tailwind CSS", percentage: "60%" },
                                { name: "Redux", percentage: "50%" }
                            ].map((skill, index) => (
                                <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className={`skills_content ${openSection === 'soft' ? 'skills_open' : 'skills_close'}`}>
                        <div className="skills_header" onClick={() => toggleSection('soft')}>
                            <UilIcons className="skills_icon" /> {/* Unicons Icons Icon */}
                            <div>
                                <h1 className="skills_title">Soft Skills</h1>
                            </div>
                            <UilAngleDown className="skills_arrow" /> {/* Unicons Angle Down Icon */}
                        </div>
                        <div className="skills_list grid">
                            {[
                                { name: "Project Management", percentage: "80%" },
                                { name: "Problem Solving", percentage: "85%" },
                                { name: "Adaptability", percentage: "90%" },
                                { name: "Effective Communication", percentage: "80%" }
                            ].map((skill, index) => (
                                <SkillItem key={index} name={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// SkillItem component to handle individual skill representation
const SkillItem = ({ name, percentage }) => {
    return (
        <div className="skills_data">
            <div className="skills_titles">
                <h3 className="skills_name">{name}</h3>
                <span className="skills_number">{percentage}</span>
            </div>
            <div className="skills_bar">
                <span className="skills_percentage" style={{ width: percentage }}></span>
            </div>
        </div>
    );
};

export default Skills;
