import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>About</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>
              <strong>Email:</strong> info@jstemplate.net
            </p>
            <p>
              <strong>Phone:</strong> 880 123 456 789
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Archived</a>
              </li>
              <li>
                <a href="#">Author</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Category Section */}
          <div className="col-md-2">
            <h5>Category</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Economy</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-5">
            <h5>Weekly Newsletter</h5>
            <p>Get blog articles and offers via email</p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your Email"
                aria-label="Email"
                style={{ borderRadius: "20px", padding: "10px" }}
              />
              <button
                className="btn btn-primary"
                type="submit"
                style={{ borderRadius: "20px" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <p>&copy; JS Template 2023. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">
              Terms of Use
            </a>
            <a href="#" className="me-3">
              Privacy Policy
            </a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
