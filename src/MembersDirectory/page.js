import React, { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { FaSearch } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import membersbg from "../Assets/memberdirbg.png";
import rentalitem1 from "../Assets/rentalitem1.png";


// Sample data for members
const members = [
  { name: "David H. Hedyson", username: "@admin", verified: true },
  { name: "Tony Thomas", username: "@buzz9", verified: false },
  { name: "Fg Gf", username: "@ghdfg5", verified: true },
  { name: "Keir Dullea", username: "@keir", verified: false },
  { name: "Justin Duchscherrer", username: "@justin", verified: true },
  { name: "Chynna Phillips", username: "@chynna", verified: false },
  { name: "Kiki Cuyler", username: "@kiki", verified: true },
  { name: "Demo", username: "@demo", verified: false },
  { name: "Monta Ellis", username: "@monta", verified: true },
  { name: "Wynonna Judd", username: "@wynonna", verified: false },
  { name: "Michelle Jones", username: "@michelle", verified: true },
  { name: "Shan Foster", username: "@shan", verified: false },
  { name: "Cecelia Cichan", username: "@cecelia", verified: true },
  { name: "Matraca Berg", username: "@matraca", verified: false },
  { name: "Siobhan", username: "@siobhan", verified: true },
  { name: "Malivai Washington", username: "@malivai", verified: false },
  { name: "Vernon Dahmer", username: "@vernon", verified: true },
  { name: "John Caius", username: "@john", verified: false },
  { name: "Additional Member 1", username: "@additional1", verified: true },
  { name: "Additional Member 2", username: "@additional2", verified: false },
];

const itemsPerPage = 18;

const MembersDirectory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter members based on search query
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the range of members to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${membersbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
        className="h-48 flex flex-col justify-center items-center"
      ></div>
      <div className="flex flex-col w-full justify-center items-center mb-20">
        <div className="flex flex-col items-center px-8 py-12 w-1/2">
          <div className="flex items-center border border-gray-100 bg-white rounded-md shadow-md p-2 w-full max-w-md">
            <FaSearch className="w-5 h-5 text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Search Members..."
              className="bg-white outline-none text-gray-600 placeholder-gray-400 flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {currentMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white rounded-sm shadow-md border border-gray-200"
            >
              <img
                src={rentalitem1}
                alt={member.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-4">
                <div className="flex items-center">
                  <p className="text-lg font-semibold">{member.name}</p>
                  {member.verified && (
                    <span className="bg-[#4fc1e9] rounded-full p-1 inline-flex items-center justify-center mx-2 w-5 h-5">
                      <IoMdCheckmark className="text-white" />
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{member.username}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center w-1/2 px-4 py-4">
          <div className="flex w-full items-start justify-start mb-5">
            <p className="text-gray-600">
              Viewing {indexOfFirstItem + 1} -{" "}
              {Math.min(indexOfLastItem, filteredMembers.length)} of {filteredMembers.length}{" "}
              active members
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 py-1 rounded-md bg-gray-200 text-gray-700"
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MembersDirectory;
