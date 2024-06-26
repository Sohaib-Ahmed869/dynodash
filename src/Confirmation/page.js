import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

const Confirmation = () => {
  const orderNumber = "123456";
  const date = new Date().toLocaleDateString();
  const total = "$100.00";
  const paymentMethod = "Cash on delivery";

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center items-center my-20">
        <div className="border border-gray-100 px-8 py-12 w-1/2">
          <p className="flex flex-col justify-center items-start text-1xl text-black pb-6">
            Thank you. Your order has been received.
          </p>
          <div className="text-white px-8 py-10 flex bg-[#253241] w-full">
            <div className="flex flex-col  pr-8">
              <p className="text-white text-sm">ORDER NUMBER:</p>
              <p className="text-white text-lg">{orderNumber}</p>
            </div>
            <div className="flex flex-col border-l border-dotted px-8">
              <p className="text-white text-sm">DATE:</p>
              <p className="text-white text-lg">{date}</p>
            </div>
            <div className="flex flex-col border-l border-dotted px-8">
              <p className="text-white text-sm">TOTAL:</p>
              <p className="text-white text-lg">{total}</p>
            </div>
            <div className="flex flex-col border-l border-dotted px-8">
              <p className="text-white text-sm">PAYMENT METHOD:</p>
              <p className="text-white text-lg">{paymentMethod}</p>
            </div>
          </div>
          <p className="flex flex-col justify-center items-start text-1xl text-black pt-6">
            Pay with cash upon delivery.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
