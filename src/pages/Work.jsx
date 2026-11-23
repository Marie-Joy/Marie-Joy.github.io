import React from 'react';
import { Link } from 'react-router-dom';

/** Original work.html content converted into React JSX; original styling retained. */
export default function Work() {
  return (
    <main><section className="page-header"><span className="page-icon">
                🌷
            </span><p className="section-label">
                &lt;my_work&gt;
            </p><h1>
                My Work
            </h1><p>
                Learning today, creating something
                better tomorrow.
            </p></section><section className="work-section" id="skills"><div className="section-heading"><p className="section-label">
                    &lt;skills&gt;
                </p><h2>
                    What I Do
                </h2><p>
                    Skills that I am currently
                    learning and improving.
                </p></div><div className="work-grid"><article className="work-card"><div className="work-icon">
                        &lt;/&gt;
                    </div><p className="work-number">
                        01
                    </p><h2>
                        Web Development
                    </h2><p>
                        I enjoy learning how to create
                        websites using HTML, CSS,
                        and JavaScript.
                    </p><div className="skills"><span>
                            HTML
                        </span><span>
                            CSS
                        </span><span>
                            JavaScript
                        </span></div></article><article className="work-card"><div className="work-icon">{"\n                        { }\n                    "}</div><p className="work-number">
                        02
                    </p><h2>
                        Programming
                    </h2><p>
                        I continue practicing programming,
                        problem solving, and understanding
                        how programs work.
                    </p><div className="skills"><span>
                            Programming
                        </span><span>
                            Problem Solving
                        </span><span>
                            Learning
                        </span></div></article></div></section><section className="work-section" id="projects"><div className="section-heading"><p className="section-label">
                    &lt;projects&gt;
                </p><h2>
                    My Projects 🦋
                </h2><p>
                    Some of the projects that
                    I have worked on.
                </p></div><div className="work-grid"><article className="work-card project-card"><span className="project-flower">
                        🌷
                    </span><div className="work-icon">
                        &lt;/&gt;
                    </div><p className="work-number">
                        01
                    </p><h2>
                        Personal Library System
                    </h2><p>
                        A personal library system created
                        while practicing programming and
                        web development.
                    </p><div className="skills"><span>
                            HTML
                        </span><span>
                            CSS
                        </span><span>
                            GitHub
                        </span></div><a href="https://github.com/Marie-Joy/personal-library-system" target="_blank" rel="noopener noreferrer" className="project-btn">
                        View Project →
                    </a></article><article className="work-card project-card"><span className="project-flower">
                        🦋
                    </span><div className="work-icon">{"\n                        { }\n                    "}</div><p className="work-number">
                        02
                    </p><h2>
                        Marie Joy Project
                    </h2><p>
                        Another project created while
                        practicing programming,
                        website development, and GitHub.
                    </p><div className="skills"><span>
                            HTML
                        </span><span>
                            CSS
                        </span><span>
                            GitHub
                        </span></div><a href="https://github.com/Marie-Joy/mariejoyy" target="_blank" rel="noopener noreferrer" className="project-btn">
                        View Project →
                    </a></article></div></section><section className="achievement-section" id="achievements"><div className="section-heading"><p className="section-label">
                    &lt;achievements&gt;
                </p><h2>
                    My Achievements 🌷
                </h2><p>
                    Small progress is still progress.
                </p></div><article className="certificate-achievement"><div className="certificate-image"><img src={import.meta.env.BASE_URL + "image/marie2.jpg"} alt="Certificate" /></div><div className="certificate-info"><span className="achievement-badge">
                        Certificate
                    </span><h2>
                        IT Seminar Certificate
                    </h2><p>
                        A certificate received for
                        participating in an IT seminar
                        and gaining additional knowledge
                        related to technology and web
                        development.
                    </p><div className="skills"><span>
                            IT Seminar
                        </span><span>
                            Technology
                        </span><span>
                            Learning
                        </span></div></div></article><div className="achievement-grid"><article className="achievement-card"><div className="achievement-number">
                        01
                    </div><div><h3>
                            Computer Science Journey
                        </h3><p>
                            Continuing my studies in
                            Computer Science and improving
                            my technology skills.
                        </p></div></article><article className="achievement-card"><div className="achievement-number">
                        02
                    </div><div><h3>
                            Portfolio Website
                        </h3><p>
                            Created a responsive personal
                            portfolio website using HTML,
                            CSS, and JavaScript.
                        </p></div></article><article className="achievement-card"><div className="achievement-number">
                        03
                    </div><div><h3>
                            JavaScript DOM Activity
                        </h3><p>
                            Implemented a functional
                            navbar dropdown using
                            Vanilla JavaScript.
                        </p></div></article></div></section><section className="future-box"><span>
                ♡
            </span><div><p className="section-label">
                    &lt;future_goal&gt;
                </p><h2>
                    Still learning. Still growing.
                </h2><p>
                    My goal is to continue improving
                    my skills and create more useful
                    projects in the future.
                </p></div></section></main>
  );
}
