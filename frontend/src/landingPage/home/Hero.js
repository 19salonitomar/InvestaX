import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-3">Invest With InvestaX</h1>
        <h5> Powering the Next Era of Trading.....</h5>
        <Link to="/signUp" className="text-white text-decoration-none">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3"
          style={{ width: "14%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
        </Link>

      </div>
    </div>
  );
}

export default Hero;