function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">
        {[
          {
            img: "media/images/zerodhafundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          },
          {
            img: "media/images/sensibull-logo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
          },
          {
            img: "media/images/streak-logo.png",
            text: "Systematic trading platform that allows you to create and manage systematic investment plans."
          },
          {
            img: "media/images/smallcase-logo.png",
            text: "Thematic investment platform that helps you invest in thematic ideas like digital payments, electric vehicles, and more."
          },
          {
            img: "media/images/tijori.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chain, and more."
          },
          {
            img: "media/images/ditto-logo.png",
            text: "Personalised advice on life and health insurance. No spam and no mis-selling."
          }
        ].map((item, index) => (
          <div className="col-md-4 col-sm-6 mb-5 d-flex" key={index}>
            <div className="w-100">
              <img
                src={item.img}
                alt="product"
                className="img-fluid mb-3"
                style={{ height: "60px", objectFit: "contain" }}
              />
              <p className="text-muted small">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary fs-5 px-4 py-2 mb-5"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;