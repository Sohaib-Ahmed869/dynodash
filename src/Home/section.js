import bgSectionbg from "../Assets/bgSectionReal.jpg";
import Section1 from "../Assets/section1.png";
import Section2 from "../Assets/section2.png";
import SectionLink from "../Assets/ServiceLink.png";
const Section = () => {
  return (
    <div
      className="flex flex-row justify-between items-center p-36 pt-5 pb-5"
      style={{
        backgroundImage: `url(${bgSectionbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-col p-10">
        <h1 className="text-white text-4xl font-bold mt-10">
          Reason to Choose Suprek <br></br>Equipment Rental Services
        </h1>
        <div className="flex flex-row items-center mt-10 mb-10">
          <img src={SectionLink} alt="SectionLink" style={{ height: "auto" }} />
          <p className="text-gray-300 ml-5">
            Helping with the best and wide selection <br></br>
            of rental equipments always available.
          </p>
        </div>
      </div>
      <div className="w-1/2 flex-row flex">
        <div className="w-1/2">
          <img src={Section1} alt="Section1" style={{ height: "auto" }} />
          <h1 className="text-white text-xl font-bold mt-2">
            Out Class Performance
          </h1>
          <p className="text-gray-300 mt-2">
            The industry standard sit amest elits sed tempor eiusmod.
          </p>
        </div>
        <div className="w-1/2 text-left ml-10">
          <img src={Section2} alt="Section2" style={{ height: "auto" }} />
          <h1 className="text-white text-xl font-bold mt-2">
            Out Class Performance
          </h1>
          <p className="text-gray-300 mt-2">
            The industry standard sit amest elits sed tempor eiusmod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
