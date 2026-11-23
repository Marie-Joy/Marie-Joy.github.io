import React from 'react';
import { Link } from 'react-router-dom';

/** Original index.html content converted into React JSX; original styling retained. */
export default function Home() {
  return (
    <main className="home"><span className="floating butterfly butterfly-one">
            🦋
        </span><span className="floating butterfly butterfly-two">
            🦋
        </span><span className="floating tulip tulip-one">
            🌷
        </span><span className="floating tulip tulip-two">
            🌷
        </span><section className="hero"><div className="hero-text"><p className="code-label">
                    &lt;hello_world /&gt;
                </p><h1>
                    Hi, I'm
                    <span>Marie Joy</span></h1><h2>
                    Computer Science Student ♡
                </h2><p className="hero-description">
                    I am a Computer Science student interested
                    in technology, programming, web development,
                    and continuously improving my skills.
                </p><div className="hero-buttons"><Link to="/about" className="btn primary-btn">
                        About Me
                    </Link><Link to="/contact" className="btn outline-btn">
                        Contact Me
                    </Link></div><div className="coding-box"><span className="code-keyword">
                        const
                    </span>

                    dream =

                    <span className="code-text">
                        "Learn. Code. Create."
                    </span>;

                </div></div><div className="hero-image"><div className="profile-wrapper"><div className="profile-heart">
                        ♡
                    </div><img src={import.meta.env.BASE_URL + "image/marie1.jpg"} alt="Marie Joy" /><div className="profile-tag"><span>
                            01
                        </span>

                        aspiring developer

                    </div></div></div></section><section className="mini-about"><span className="mini-flower">
                🌷
            </span><p className="section-label">
                &lt;about_me&gt;
            </p><h2>
                A little bit about me 🦋
            </h2><p>
                Hi! I am
                <strong>Marie Joy C. Sebusana</strong>,
                a Computer Science student who enjoys
                learning programming, technology, and
                web development.
            </p><Link to="/about" className="text-link">
                Read more about me →
            </Link></section></main>
  );
}
