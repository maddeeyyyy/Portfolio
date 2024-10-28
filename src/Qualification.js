import React, { useState } from 'react';


const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="qualification">
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={`qualification_button button-flex ${
              activeTab === 'work' ? 'qualification_active' : ''
            }`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>&nbsp;Work
          </div>
          <div
            className={`qualification_button button-flex ${
              activeTab === 'education' ? 'qualification_active' : ''
            }`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>&nbsp;Education
          </div>
        </div>

        <div className="qualification_sections">
          {activeTab === 'work' && (
            <div className="qualification_content qualification_active" id="work">
              {/* Qualification 1 */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Full Stack Developer Intern</h3>
                  <span className="qualification_subtitle">JAR (Bangalore)</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i>
                    July 2024 - Oct 2024
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">Frontend Developer Intern</h3>
                  <span className="qualification_subtitle">SDS Software (Noida)</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i>
                    Jan 2024 - Mar 2024
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="qualification_content qualification_active" id="education">
              {/* Experience 1 */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">0-100 FullStack Development </h3>
                  <span className="qualification_subtitle">100xDev</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i>
                    jan 2024 - Aug 2024
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">Bachelor of Technology</h3>
                  <span className="qualification_subtitle">GL Bajaj (Greater Noida)</span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i>
                    july 2029 - June 2023
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
