// import newRequest from "../../utils/newRequest.js";
// // import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// // import axios from "axios";
// // import { Razorpay } from "razorpay";
// import { useEffect } from "react";
// function Pay() {
//   const { id } = useParams();
//   const [Order, setOrder] = useState();
//   // const [rzp, setrzp] = useState(null);
//   // const [isloading, setisloading] = useState(false);

//   // const queryClient = useQueryClient();
//   // const { data: order } = useQuery({
//   //   queryKey: ["order"],
//   //   queryFn: () =>
//   //     newRequest.post(`/orders/create-payment-intent/${id}`).then((res) => {
//   //       return res.data;
//   //     }),
//   //   // staleTime: 10 * (60 * 1000), // 10 mins
//   //   // cacheTime: 15 * (60 * 1000), // 15 mins
//   // });

//   useEffect(() => {
//     // This code runs after every render
//     const genOrder = async () => {
//       try {
//         // setisloading(true);
//         const res = await newRequest.post(
//           `/orders/create-payment-intent/${id}`
//         );
//         console.log(" in gen order function 😎🙏");
//         //console.log(res);
//         setOrder(res);
//         // setisloading(false);
//         return res;
//       } catch (err) {
//         console.log(" error in generating order 😅😅");
//       }
//     };
//     genOrder();

//     // Cleanup function, runs before the next effect or when the component unmounts
//   }, []);
//   const handlerazor = () => {
//     try {
//       // const orderUrl = "http://localhost:5000/";
//       // console.log(Order);
//       // const orderdata = genOrder();
//       console.log(" response from gen order on pay.jsx");
//       // console.log(orderdata);
//       console.log("Order :");

//       console.log(Order);
//       const options = {
//         key: "rzp_test_HgjcbyryvSxWXX", // Replace with your Razorpay key ID
//         amount: Order.data.amount,
//         currency: Order.data.currency,
//         name: "",
//         description: "Test Transaction",
//         order_id: Order.data.id,
//         handler: function (response) {
//           window.location.href = `http://localhost:5173/success?razorpay_payment_id=${response.razorpay_payment_id}&razorpay_order_id=${response.razorpay_order_id}&razorpay_signature=${response.razorpay_signature}`;
//         },
//         prefill: {
//           name: "abcd",
//           email: "abcd@example.com",
//           contact: "9999999999",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#F37253",
//         },
//         method: {
//           upi: true, // Enable UPI
//           card: true, // Enable Card payments (if you want to include other methods)
//           netbanking: true, // Enable Netbanking (if you want to include other methods)
//         },

//         config: {
//           display: {
//             blocks: {
//               banks: {
//                 name: "All payment methods",
//                 instruments: [
//                   {
//                     method: "upi",
//                   },
//                   {
//                     method: "card",
//                   },
//                   {
//                     method: "wallet",
//                   },
//                   {
//                     method: "netbanking",
//                   },
//                 ],
//               },
//             },
//             sequence: ["block.banks"],
//             preferences: {
//               show_default_blocks: false,
//             },
//           },
//         },
//         // config: {
//         //   display: {
//         //     blocks: {
//         //       banks: {
//         //         name: "Most Used Methods",
//         //         instruments: [
//         //           {
//         //             method: "wallet",
//         //             wallets: ["freecharge"],
//         //           },
//         //           {
//         //             method: "upi",
//         //           },
//         //         ],
//         //       },
//         //     },
//         //     sequence: ["block.banks"],
//         //     preferences: {
//         //       show_default_blocks: true,
//         //     },
//         //   },
//         // },
//       };
//       console.log(options.amount);
//       // setisloading(false);
//       const rzp = new window.Razorpay(options);
//       // setrzp(new window.Razorpay(options));/
//       rzp.open();
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   return (
//     <>
//       <div>payment page</div>
//       <button
//         onClick={handlerazor}
//         className="hover:bg-amber-400 w-40 h-25, bg-orange-600 text-white "
//       >
//         pay
//       </button>
//       {/* {isloading ? <p>wait a min</p> : <p></p>} */}
//     </>
//   );
// }

// export default Pay;

// // import { useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // function Pay() {
// //   const { id } = useParams(); // Fetch amount from URL parameters
// //   const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
// //   const [order, setOrder] = useState();
// //   const handlePayment = async () => {
// //     setIsPaymentProcessing(true);
// //     try {
// //       const orderUrl = `http://localhost:3000/orders/create-payment-intent/${id}`;
// //       const data = await newRequest.post(orderUrl);
// //       console.log(data);
// //       setOrder(data);
// //       // const options = {
// //       //   key: "rzp_test_HgjcbyryvSxWXX", // Replace with your Razorpay key ID
// //       //   amount: data.amount,
// //       //   currency: data.currency,
// //       //   name: "project1",
// //       //   description: "Test Transaction",
// //       //   order_id: data.id,
// //       //   handler: function (response) {
// //       //     alert(
// //       //       `Payment successful! Payment ID: ${response.razorpay_payment_id}`
// //       //     );
// //       //   },
// //       //   prefill: {},
// //       //   notes: {},
// //       //   theme: {
// //       //     color: "#F37254",
// //       //   },
// //       // };

// //       // const rzp = new window.Razorpay(options);
// //       // rzp.open();
// //     } catch (error) {
// //       console.error("Error creating order:", error);
// //       alert("Error processing payment. Please try again.");
// //     } finally {
// //       setIsPaymentProcessing(false);
// //     }
// //   };

// //   // useEffect(() => {
// //   //   // Additional logic if needed when the component mounts
// //   // }, []);

// //   return (
// //     <div className="App">
// //       <h2>Razorpay Payment Gateway Integration</h2>
// //       <p>Amount to be paid: 500</p>
// //       <button
// //         className="w-20 h-20 bg-lime-300 text-black "
// //         onClick={handlePayment}
// //         disabled={isPaymentProcessing}
// //       >
// //         {isPaymentProcessing ? "Processing..." : "Pay"}
// //       </button>
// //     </div>
// //   );
// // }

// // export default Pay;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";

function Pay() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [gig, setGig] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const genOrder = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        const result = await newRequest.get(`/gigs/single/${id}`);
        console.log("result of gig on payments page", result.data);
        setGig(result.data);

        console.log("Generated order:", res);
        setOrder(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log("Error generating order:", err);
        setIsLoading(false);
      }
    };
    genOrder();
  }, [id]);

  const handleRazorpayPayment = () => {
    if (!order) return;

    const options = {
      key: "rzp_test_HgjcbyryvSxWXX", // Replace with your Razorpay key ID
      amount: order.amount,
      currency: order.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response) {
        window.location.href = `http://localhost:5173/success?razorpay_payment_id=${response.razorpay_payment_id}&razorpay_order_id=${response.razorpay_order_id}&razorpay_signature=${response.razorpay_signature}`;
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#F37253",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 h-[400px]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            <p className="ml-4">Generating order...</p>
          </div>
        ) : (
          <>
            {/* <img
              className="flex items-center justify-center w-[100px] h-[100px]"
              src={gig.cover}
            /> */}
            <p className="text-gray-700 mb-4 text-xl font-bold ">
              Amount to be paid: ₹{order.amount / 100}
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              Delivery Time: <span>{gig.deliveryTime}</span> Days
            </p>

            <button
              onClick={handleRazorpayPayment}
              className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Pay;
