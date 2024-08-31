
// "use client"
// import React from "react";
// import { useEffect, useState } from "react";
// import { GetApiData } from "@/Api/api";


// const Table = () => {
//   const [allData, setAllData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 20;

//   useEffect(() => {
//     const fetchApiData = async () => {
//       try {
//         const getData = await GetApiData();
//         const DATA = getData.data;
//         setAllData(DATA);
//         console.log("allData",DATA)
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchApiData();
   
//   }, []);

//   const totalPages = Math.ceil(allData.length / itemsPerPage);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const currentData = allData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <>
//     <div className="py-10">
//       <center className="uppercase text-xl -tracking-tighter font-extrabold">
//         PagInetion <span className="px-4"> Prectice</span>
//       </center>
//     </div>
//       <div className="">
//         <div className="px-32 mx-auto w-[1000px]  h-[500px] overflow-auto removeScrool">
//           <table className="min-w-full bg-white border border-gray-200 py-32">
//             <thead className="bg-green-200 sticky top-0">
//               <tr>
//                 <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">Amount</th>
//                 <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">Dollar</th>
//                 <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">Method</th>
//                 <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">Network</th>
//               </tr>
//             </thead>
//             <tbody className="overflow-y-auto ">
//               {currentData.length > 0 ? (
//                 currentData.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="py-2 px-4 border-b">{item.amount}</td>
//                     <td className="py-2 px-4 border-b">{item.dollar}</td>
//                     <td className="py-2 px-4 border-b">{item.method}</td>
//                     <td className="py-2 px-4 border-b">{item.network}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="py-2 px-4 text-center">
//                     No data available
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`${currentPage === 1 ? "px-4 py-2 bg-gray-200 text-gray-700 rounded-md" : "bg-green-200 px-4 py-2 rounded-md"}`}
//           >
//             Previous
//           </button>
//           <span className="px-4 py-2">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className={`${currentPage === totalPages ? "px-4 py-2 bg-gray-200 text-gray-700 rounded-md" : "bg-green-200 px-4 py-2 rounded-md"}`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Table;


"use client";
import React, { useEffect, useState } from "react";
import { GetApiData } from "@/Api/api";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Table = () => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const getData = await GetApiData();
        const DATA = getData?.data || []; // Safely access `data`
        setAllData(DATA);
        // console.log("allData", DATA);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllData([]); // Set `allData` to an empty array on error
      }
    };
    fetchApiData();
  }, []);

  const totalPages = Math.ceil(allData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentData = allData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="py-10">
        <center className="uppercase text-xl tracking-tighter font-extrabold">
          Pagination <span className="px-4">Practice</span>
        </center>
      </div>
      <div>
        <div className="px-32 mx-auto w-[1000px] h-[500px] overflow-auto removeScrool">
          <table className="min-w-full bg-white border border-gray-200 py-32">
            <thead className="bg-green-200 sticky top-0">
              <tr>
                <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">
                  Amount
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">
                  Dollar
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">
                  Method
                </th>
                <th className="py-2 px-4 border-b text-left text-gray-600 capitalize">
                  Network
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{item.amount}</td>
                    <td className="py-2 px-4 border-b">{item.dollar}</td>
                    <td className="py-2 px-4 border-b">{item.method}</td>
                    <td className="py-2 px-4 border-b">{item.network}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 px-4 text-center">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                : "bg-green-200 px-4 py-2 rounded-md"
            }`}
          >
            <IoIosArrowBack />
          </button>
          <div className="px-3 space-x-3">
            {getPaginationNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`p-2 border rounded-md w-10 ${
                  currentPage === page ? "bg-green-300" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                : "bg-green-200 px-4 py-2 rounded-md"
            }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;