import React from "react";

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center md:space-x-2 mt-6 space-x-1">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* Hardcoded Page Numbers */}
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(1)}
      >
        1
      </button>
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 2 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(2)}
      >
        2
      </button>
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 3 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(3)}
      >
        3
      </button>
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 4 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(4)}
      >
        4
      </button>
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 5 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(5)}
      >
        5
      </button>
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 6 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onPageChange(6)}
      >
        6
      </button>

      {/* Next Button */}
      <button
        className={`px-4 py-2 rounded-md ${currentPage === 6 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 6}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
