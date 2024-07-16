import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import errorBg from "../Assets/errorpagebg.png";
import { MdArrowForward } from "react-icons/md";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${errorBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-48 flex flex-col justify-center items-center"
      ></div>
      <div className="justify-center items-center flex flex-col my-10">
        <button
          className="text-white py-5 px-6 rounded-0 hover:text-gray-900 flex items-center"
          style={{ backgroundColor: "#EFB007" }}
        >
          HOME <MdArrowForward className="ml-4" />
          <span className="ml-4">GO BACK</span>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
