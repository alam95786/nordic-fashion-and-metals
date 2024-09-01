import React from 'react';

const IntroVideo = () => {
    return (
        <section className="dz-content-bx style-5 content-inner-1 pb-0">
            <div className="dz-content-inner">
                <div className="container">
                    <div className="section-head style-2 text-center" data-aos="fade-up"
                data-aos-duration="800">
                        <h2 className="title text-white">Let’s Show For A <br />Cool Project</h2>
                    </div>
                    <div className="row spno">
                        <div className="col-lg-12">
                            <div className="video-bx content-media style-3">
                                <div className="video-container">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src="https://www.youtube.com/embed/sNCv3_NTNtU"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroVideo;
