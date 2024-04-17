import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-base-200 p-10">
        <footer className="flex flex-col lg:flex-row lg:items-start justify-between text-center lg:text-left container mx-auto text-base-content gap-4">
          <aside>
            <p>
              <span className="text-2xl font-bold">Vix-Villa</span>
              <br />
              Providing reliable Poperty since 1996
            </p>
          </aside>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <Link to={"/profile"} className="link link-hover">
              Profile
            </Link>
            <Link to={"/connect"} className="link link-hover">
              Connect with us
            </Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
