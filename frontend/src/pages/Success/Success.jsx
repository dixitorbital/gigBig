// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import newRequest from "../../utils/newRequest";

// const Success = () => {
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const params = new URLSearchParams(search);
//   //   const payment_intent = params.get("payment_intent");
//   const razorpayPaymentId = params.get("razorpay_payment_id");
//   const razorpayOrderId = params.get("razorpay_order_id");
//   const razorpaySignature = params.get("razorpay_signature");

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         await newRequest.put("/orders/confirm", {
//           razorpay_payment_id: razorpayPaymentId,
//           razorpay_order_id: razorpayOrderId,
//           razorpay_signature: razorpaySignature,
//         });
//         // setTimeout(() => {
//         navigate("/orders");
//         // }, 3000);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     makeRequest();
//   }, [razorpayPaymentId, razorpaySignature, razorpayOrderId, navigate]);

//   return (
//     <>
//       <div>Payment successful.</div>
//       <button
//         onClick={() => {
//           navigate("/orders");
//         }}
//         className="w-40 h-20 bg-lime-500 text-white"
//       >
//         GO Back To Orders page
//       </button>
//     </>
//   );
// };

// export default Success;
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const razorpayPaymentId = params.get("razorpay_payment_id");
  const razorpayOrderId = params.get("razorpay_order_id");
  const razorpaySignature = params.get("razorpay_signature");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders/confirm", {
          razorpay_payment_id: razorpayPaymentId,
          razorpay_order_id: razorpayOrderId,
          razorpay_signature: razorpaySignature,
        });
        navigate("/orders");
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [razorpayPaymentId, razorpaySignature, razorpayOrderId, navigate]);

  return (
    <div className="relative top-0 left-auto flex flex-col  justify-center items-start h-[400px] bg-gray-100 overflow-hidden">
      <div className="bg-white p-8 rounded shadow-lg text-center w-lvw h-vh">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          Payment Successful!
        </h1>
        {/* <p className="text-lg text-gray-700 mb-6">Thank you for your payment. You will be redirected to the orders page shortly.</p> */}
        <div className="mb-6">
          <img
            src="/img/check.png"
            alt="Success"
            className="mx-auto mb-4 w-400 h-400"
          />
          {/* <p className="text-sm text-gray-500">Go To Orders Page</p> */}
        </div>
        <button
          onClick={() => {
            navigate("/orders");
          }}
          className="px-4 py-2 bg-slate-600 font-semibold text-white rounded hover:bg-slate-700 transition"
        >
          Go To Orders Page
        </button>
      </div>
    </div>
  );
};

export default Success;
