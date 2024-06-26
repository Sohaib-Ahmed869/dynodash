import React from "react";
import { MdClose } from "react-icons/md";

const CartItems = ({data}) => {
    return (
        <div className="p-3">
            <table className="min-w-full border border-gray-200">
                <thead>
                    <tr className="border-b border-gray-200 text-center">
                        <th className="text-center">Image</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center w-48"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 text-center">
                            <td className="p-3">
                                <img src={item.image} alt={item.name} className="w-32 h-20" />
                            </td>
                            <td className="border-l border-gray-200 p-3 text-center">
                                <p className="text-xl text-black">{item.name}</p>
                                <p className="text-sm text-gray-400">
                                    Your submitted item currently in pending review.
                                </p>
                            </td>
                            <td className="border-l border-gray-200 p-3 text-center">
                                <p className="text-3xl text-yellow-500 mt-2">
                                    $ {item.rental_price}
                                </p>
                                <span className="text-sm text-black">Per Hour</span>
                            </td>
                            <td className="border-l border-gray-200 p-3 text-center">
                                <div className="flex justify-center items-center h-full">
                                    <MdClose className="text-red-500 text-5xl cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartItems;
