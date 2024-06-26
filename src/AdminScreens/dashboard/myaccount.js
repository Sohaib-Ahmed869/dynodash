import React from "react";
import profilepic from "../../Assets/profilepic.png";
import rentalitem1 from "../../Assets/rentalitem1.png";
import rentalitem2 from "../../Assets/rentalitem2.png";
import { useState } from "react";
import users from "../../Assets/users.png";
import accounttype from "../../Assets/accounttypes.png";
import verified from "../../Assets/verified.png";
import countries from "../../Assets/countries.png";

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
    number: "01",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "01",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "01",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "01",
    name: "John Doe",
    address: "Berliner Platz 9, 35390 Gießen",
    email: "abcd@example.com",
    role: "Vendor",
    activity: "Visting",
  },
  {
    number: "01",
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
    </div>
  );
};

export default Users;
