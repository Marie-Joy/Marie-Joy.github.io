import React from 'react';
import { Link } from 'react-router-dom';

/** Original about.html content converted into React JSX; original styling retained. */
export default function About() {
  return (
    <main><section className="page-header"><span className="page-icon">
                🦋
            </span><p className="section-label">
                &lt;about_me&gt;
            </p><h1>
                About Me
            </h1><p>
                Get to know me a little better.
            </p></section><section className="about-section"><div className="about-left"><div className="about-image"><span className="about-flower">
                        🌷
                    </span><img src={import.meta.env.BASE_URL + "image/marie1.jpg"} alt="Marie Joy" /></div><div className="profile-code"><p><span>
                            name:
                        </span>

                        "Marie Joy";
                    </p><p><span>
                            course:
                        </span>

                        "Computer Science";
                    </p><p><span>
                            interest:
                        </span>

                        "Technology";
                    </p><p><span>
                            goal:
                        </span>

                        "Keep Learning";
                    </p></div></div><div className="about-content"><p className="section-label">
                    &lt;my_story&gt;
                </p><h2>
                    Hi! I'm Marie Joy ♡
                </h2><p>
                    I am Marie Joy C. Sebusana, a Computer
                    Science student studying at Tangub City
                    Global College.
                </p><p>
                    As a Computer Science student, I enjoy
                    learning more about technology,
                    programming, website development,
                    and how computer systems work.
                </p><p>
                    I believe learning takes time. I continue
                    practicing, exploring new things, and
                    learning from my mistakes so that I can
                    improve my knowledge and skills.
                </p><p>
                    My goal is to continue developing my
                    programming and technology skills and
                    eventually create useful and meaningful
                    projects.
                </p></div></section><section className="personal-section"><div className="section-heading"><p className="section-label">
                    &lt;personal_info&gt;
                </p><h2>
                    Personal Information
                </h2><p>
                    Some basic information about me.
                </p></div><div className="info-grid"><div className="info-card"><span className="info-icon">
                        ♡
                    </span><small>
                        Full Name
                    </small><h3>
                        Marie Joy C. Sebusana
                    </h3></div><div className="info-card"><span className="info-icon">
                        🌷
                    </span><small>
                        Course
                    </small><h3>
                        Computer Science
                    </h3></div><div className="info-card"><span className="info-icon">
                        🦋
                    </span><small>
                        School
                    </small><h3>
                        Tangub City Global College
                    </h3></div><div className="info-card"><span className="info-icon">
                        &lt;/&gt;
                    </span><small>
                        Interest
                    </small><h3>
                        Programming &amp; Technology
                    </h3></div></div></section></main>
  );
}
