import Navbar from "../components/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <img
            className="w-[50%] max-w-full"
            src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <h2 className="text-4xl text-center">404 page not found!</h2> */}
    </>
  );
}

export default ErrorPage;
