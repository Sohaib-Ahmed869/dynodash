import React from "react";
import { useState } from "react";
import users from "../../Assets/users.png";
import accounttype from "../../Assets/accounttypes.png";
import verified from "../../Assets/verified.png";
import countries from "../../Assets/countries.png";
import { BiCircle } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { ImBin } from "react-icons/im";

const stats = [
  {
    image: users,
    title: "Total users",
    value: 200,
  },
  {
    image: accounttype,
    title: "Account Type",
    value: "3",
  },
  {
    image: verified,
    title: "Verified users",
    value: 150,
  },
  {
    image: countries,
    title: "Countries",
    value: 20,
  },
];

const tableDate = [
  {
    number: "01",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "02",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "03",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "04",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "05",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "06",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
];

const Users = () => {
  return (
    <div className="p-10 pt-0">
      <div className="flex flex-row items-center gap-20 p-5 shadow-md rounded-md bg-white">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-row items-center w-1/4">
            <img src={item.image} alt="users" className="w-12 h-12" />
            <div className="flex flex-col ml-3">
              <p className="text-xl  text-gray-800">{item.value}</p>
              <p className="text-sm  text-slate-  900">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-col gap-3 mt-5 table w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-gray-300 p-2">S.No</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
              <th className="border border-gray-300 p-2">Activity</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableDate.map((item, index) => (
              <tr key={index} className="text-gray-600">
                <td className="border border-gray-300 p-2">{item.number}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex flex-row items-center gap-3">
                    <p className="text-md">{item.name}</p>
                  </div>
                </td>
                <td className="border border-gray-300 p-2">{item.address}</td>
                <td className="border border-gray-300 p-2">{item.email}</td>
                <td className="border border-gray-300 p-2">{item.role}</td>
                <td className="border border-gray-300 p-2 items-center">
                  <div className="flex items-center">
                    <BiCircle className="mr-1 text-blue-500" color="blue" />
                    {item.activity}
                  </div>
                </td>
                <td className="flex flex-row items-center gap-3 border border-gray-300 p-5">
                  <div className="bg-gray-200 rounded p-1">
                    <BiEdit className="text-black" />
                  </div>
                  <div className=" bg-red-400 rounded p-1">
                    <ImBin className="text-black" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
