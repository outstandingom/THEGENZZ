import { IoOpenOutline } from 'react-icons/io5';

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2>Our <span className="text-gradient">Projects</span></h2>
                    <p>Take a look at some of the amazing businesses we've helped grow.</p>
                </div>
                <div className="projects-carousel">
                    <div className="project-card reveal-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                        <div className="project-img-wrapper">
                            <div className="project-placeholder bg-gradient-1"></div>
                        </div>
                        <div className="project-info">
                            <h3>GrowHaz</h3>
                            <a href="https://growhaz.com/" target="_blank" rel="noreferrer" className="project-link">
                                growhaz.com <IoOpenOutline style={{marginLeft: '4px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                        <div className="project-img-wrapper">
                            <div className="project-placeholder bg-gradient-2"></div>
                        </div>
                        <div className="project-info">
                            <h3>Jaiswal Restaurant</h3>
                            <a href="https://jaiswalrestaurant.com/" target="_blank" rel="noreferrer" className="project-link">
                                jaiswalrestaurant.com <IoOpenOutline style={{marginLeft: '4px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card reveal-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="project-img-wrapper">
                            <div className="project-placeholder bg-gradient-3"></div>
                        </div>
                        <div className="project-info">
                            <h3>Khandelwal Borewells</h3>
                            <a href="https://khandelwalborewells.in/" target="_blank" rel="noreferrer" className="project-link">
                                khandelwalborewells.in <IoOpenOutline style={{marginLeft: '4px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card reveal-up" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                        <div className="project-img-wrapper">
                            <div className="project-placeholder bg-gradient-4"></div>
                        </div>
                        <div className="project-info">
                            <h3>Prayas Samaj Sevi Sanstha</h3>
                            <a href="https://prayassamajsevisanstha.org/" target="_blank" rel="noreferrer" className="project-link">
                                prayassamajsevisanstha.org <IoOpenOutline style={{marginLeft: '4px'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="project-card reveal-up" style={{ '--delay': '0.5s' } as React.CSSProperties}>
                        <div className="project-img-wrapper">
                            <div className="project-placeholder bg-gradient-5"></div>
                        </div>
                        <div className="project-info">
                            <h3>Dinesh Jagwani Academy</h3>
                            <a href="https://www.dineshjagwanicinematographyacademy.com/" target="_blank" rel="noreferrer" className="project-link">
                                dineshjagwani... <IoOpenOutline style={{marginLeft: '4px'}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
