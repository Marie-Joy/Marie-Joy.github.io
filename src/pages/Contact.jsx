import React from 'react';
import { Link } from 'react-router-dom';

/** Original contact.html content converted into React JSX; original styling retained. */
export default function Contact() {
  return (
    <main><section className="page-header"><span className="page-icon">
                🦋
            </span><p className="section-label">
                &lt;contact&gt;
            </p><h1>
                Let's Connect
            </h1><p>
                You can contact me through my social media
                accounts, email, or phone number.
            </p></section><section className="contact-section"><div className="contact-intro"><span className="contact-flower">
                    🌷
                </span><p className="section-label">
                    &lt;send_message&gt;
                </p><h2>
                    Say Hello! ♡
                </h2><p>
                    Feel free to contact me through any
                    of the contact information listed here.
                </p><div className="contact-code"><p><span>if</span>{"\n                        (youWantToConnect) {\n                    "}</p><p className="indent">
                        messageMe();
                    </p><p>{"\n                        }\n                    "}</p></div></div><div className="contact-list"><a href="https://www.facebook.com/marie.joy.sebusana" target="_blank" rel="noopener noreferrer" className="contact-card"><div className="contact-symbol">
                        f
                    </div><div><small>
                            Facebook
                        </small><h3>
                            Marie Joy Sebusana
                        </h3></div><span className="arrow">
                        →
                    </span></a><a href="https://www.tiktok.com/@_kaizri?_r=1&_t=ZS-999ICivSQlE" target="_blank" rel="noopener noreferrer" className="contact-card"><div className="contact-symbol">
                        ♪
                    </div><div><small>
                            TikTok
                        </small><h3>
                            @_kaizri
                        </h3></div><span className="arrow">
                        →
                    </span></a><a href="https://www.instagram.com/urs_kairie?igsi=YXpndjkyaWxwdm5v" target="_blank" rel="noopener noreferrer" className="contact-card"><div className="contact-symbol">
                        ◎
                    </div><div><small>
                            Instagram
                        </small><h3>
                            @urs_kairie
                        </h3></div><span className="arrow">
                        →
                    </span></a><a href="mailto:mariejoysebusana303@gmail.com" className="contact-card"><div className="contact-symbol">
                        @
                    </div><div><small>
                            Email
                        </small><h3>
                            mariejoysebusana303@gmail.com
                        </h3></div><span className="arrow">
                        →
                    </span></a><a href="tel:09468314898" className="contact-card"><div className="contact-symbol">
                        ☎
                    </div><div><small>
                            Contact Number
                        </small><h3>
                            0946 831 4898
                        </h3></div><span className="arrow">
                        →
                    </span></a></div></section></main>
  );
}
