import { IoRocketOutline, IoCheckmarkCircle } from 'react-icons/io5';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us section bg-darker">
            <div className="container grid-2 align-center">
                <div className="why-visual reveal-left">
                    <div className="glass-feature-box">
                        <IoRocketOutline className="large-icon" />
                        <h3>Ready to Scale?</h3>
                        <p>Whether you're a Startup, Business Owner, Institute, NGO, or Personal Brand, we help you build a powerful online presence.</p>
                    </div>
                </div>
                <div className="why-content reveal-right">
                    <h2>Why Choose <span className="text-gradient">The genzz?</span></h2>
                    <ul className="feature-list">
                        <li>
                            <div className="check-icon"><IoCheckmarkCircle /></div>
                            <div>
                                <h4>Professional & Creative Team</h4>
                                <p>Experts dedicated to delivering top-notch digital solutions.</p>
                            </div>
                        </li>
                        <li>
                            <div className="check-icon"><IoCheckmarkCircle /></div>
                            <div>
                                <h4>Affordable Pricing</h4>
                                <p>Premium quality services that fit your budget.</p>
                            </div>
                        </li>
                        <li>
                            <div className="check-icon"><IoCheckmarkCircle /></div>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>We value your time and ensure prompt project completion.</p>
                            </div>
                        </li>
                        <li>
                            <div className="check-icon"><IoCheckmarkCircle /></div>
                            <div>
                                <h4>Customized Solutions</h4>
                                <p>Strategies tailored specifically to your business goals.</p>
                            </div>
                        </li>
                        <li>
                            <div className="check-icon"><IoCheckmarkCircle /></div>
                            <div>
                                <h4>Complete Business Growth Support</h4>
                                <p>We are your partners in scaling your brand successfully.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
