import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-5">Open a InvestaX account</h1>
        <p className="text-muted fs-5 mb-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signUp" className="text-white text-decoration-none">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            SignUp Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;