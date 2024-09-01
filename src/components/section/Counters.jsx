const Counters = () => {
  return (
    <section className="content-inner-1">
      <div className="container">
        <div className="section-head style-1 text-center" data-aos="fade-up"
                data-aos-duration="800">
          <h6 className="sub-title text-primary">Lorem, ipsum.</h6>
          <h2 className="title">Lorem ipsum dolor sit.</h2>
        </div>
        <div className="row">
          {[
            {
              number: "100+",
              title: "Lorem ipsum",
              description: "Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.",
            },
            {
              number: "50+",
              title: "Lorem ipsum",
              description: "Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.",
            },
            {
              number: "250",
              title: "Lorem ipsum",
              description: "Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.",
            },
            {
              number: "10+",
              title: "Lorem ipsum",
              description: "Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.",
            },
          ].map((process, index) => (
            <div className="col-lg-3 col-sm-6" key={index} data-aos="fade-up"
            data-aos-duration="800">
              <div className="work-process shadow text-center m-b30">
                <div className="number">{process.number}</div>
                <h4 className="title m-b15">{process.title}</h4>
                <p className="m-b0">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
