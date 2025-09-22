function SignUp() {
  return (
    <div className="container p-5 mb-3">
      {/* Heading Section */}
      <div className="row text-center">
        <h1 className="mt-3 mb-3 h2 fw-bold">
          Open a free demat and trading account online
        </h1>
        <p className="text-muted fw-semibold fs-5 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* Content Section */}
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-6 mt-5 text-center">
          <img
            src="media/images/account_open.svg"
            alt="Open account"
            style={{ width: "100%" }}
          />
        </div>

        {/* Right Signup Box */}
<div className="col-6 mt-5 d-flex flex-column align-items-start">
  <h2 className="mb-2 fw-semibold">Signup now</h2>
  <p className="text-muted fs-5">Or track your existing application</p>

  {/* Mobile Number Input with Country Code */}
  <div className="input-group mb-3 mt-4" style={{ maxWidth: "400px" }}>
    <span className="input-group-text bg-white fw-bold">
      <img
        src="media/images/india-flag.svg"
        alt="India"
        style={{ width: "25px", height: "20px", marginRight: "6px" }}
      />
      +91
    </span>
    <input
      type="text"
      className="form-control"
      placeholder="Enter your mobile number"
      style={{ height: "60px", fontSize: "1.2rem" }}
    />
  </div>

  {/* Get OTP Button */}
  <button
    className="btn btn-primary fs-5 fw-semibold"
    style={{ width: "300px", height: "55px" }}
  >
    Get OTP
  </button>

  {/* Terms and Policy */}
  <p className="text-muted mt-4 fs-6" style={{ maxWidth: "400px" }}>
    By proceeding, you agree to the Zerodha{" "}
    <a href="#" className="text-decoration-none">
      terms
    </a>{" "}
    &{" "}
    <a href="#" className="text-decoration-none">
      privacy policy
    </a>
  </p>

  {/* NRI Link */}
  <p className="text-muted mt-2 fs-6">
    Looking to open NRI account?{" "}
    <a href="#" className="text-decoration-none">
      Click here
    </a>
  </p>
</div>

      </div>
    </div>
  );
}

export default SignUp;
