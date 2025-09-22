function Stats() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-5 fw-bold">Trust with confidence</h1>

          <h2 className="h3 fw-semibold">Customer-first always</h2>
          <p className="text-muted fs-4">
            That’s why 1.6+ crore customers trust InvestaX with ~₹6 lakh crores of
            equity investments, making us India’s largest broker; contributing to
            15% of daily retail exchange volumes in India.
          </p>

          <h2 className="h3 fw-semibold">No spam or gimmicks</h2>
          <p className="text-muted fs-4">
            No gimmicks, spam, “gamification”, or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#" style={{ textDecoration: "none" }}>Our philosophies.</a>
          </p>

          <h2 className="h3 fw-semibold">The InvestaX universe</h2>
          <p className="text-muted fs-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="h3 fw-semibold">Do better with money</h2>
          <p className="text-muted fs-4">
            With initiatives like Nudge and Kill Switch, we don’t just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Ecosystem Image Section */}
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "100%", height: "80%" }} />
          <div className="text-center">
            <a href="" className="mx-5 fs-4" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="fs-4" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <img src='media/images/press-logos.png' style={{ display: "block", margin: "0 auto", width: "70%", height: "60px" }} />
    </div>
  );
}

export default Stats;
