import React, { useState } from "react";
import { mockData } from "./mockData";

const Orders = () => {
  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(mockData.length / ordersPerPage);

  // Get orders for current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  const currentOrders = mockData
    .filter(
      (order) =>
        order.orderId.toString().includes(searchTerm) ||
        order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.pickupDate.includes(searchTerm) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Orders Page</h1>
      <label>
        Orders per page:
        <select
          value={ordersPerPage}
          onChange={(e) => setOrdersPerPage(parseInt(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>
      <br />
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearch} />
      </label>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Vendor Name</th>
            <th>Pick up date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.vendorName}</td>
              <td>{order.pickupDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
