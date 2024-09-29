import mapImg from "../../assets/images/map.jpg";
const Map = () => {
    return (
        <>
            <section className="content-inner pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 map-flex">
                            <div
                                className="col-lg-12 m-b30 aos-item"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            >
                                <div className="icon-bx-wraper style-8 bg-white" data-name="01">
                                    <div className="icon-md m-r20">
                                        <span className="icon-cell text-primary">
                                            <i className="flaticon-placeholder"></i>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="tilte m-b10">Location</h4>
                                        <p className="m-b0">
                                            Europe 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-12 m-b30 aos-item"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            >
                                <div className="icon-bx-wraper style-8 bg-white" data-name="02">
                                    <div className="icon-md m-r20">
                                        <span className="icon-cell text-primary">
                                            <i className="flaticon-placeholder"></i>
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="tilte m-b10">Location</h4>
                                        <p className="m-b0">
                                            India 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={mapImg} className="w-full" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Map;