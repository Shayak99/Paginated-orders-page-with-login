import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "./Orders";

// component is rendered
test("renders Orders component without crashing", () => {
  render(<Orders />);
});

// to check tables are displayed
test("displays table headers", () => {
  render(<Orders />);
  const orderIdHeader = screen.getByText("Order Id");
  const vendorNameHeader = screen.getByText("Vendor Name");
  const pickupDateHeader = screen.getByText("Pick up date");
  const statusHeader = screen.getByText("Status");
  expect(orderIdHeader).toBeInTheDocument();
  expect(vendorNameHeader).toBeInTheDocument();
  expect(pickupDateHeader).toBeInTheDocument();
  expect(statusHeader).toBeInTheDocument();
});

// to check current labels are displayed
const mockData = [
  {
    orderId: 1,
    vendorName: "Vendor A",
    pickupDate: "2022-03-01",
    status: "Pending"
  },
  {
    orderId: 2,
    vendorName: "Vendor B",
    pickupDate: "2022-03-02",
    status: "Complete"
  }
];

test("displays current orders in table", () => {
  render(<Orders />);
  mockData.forEach((order) => {
    const orderId = screen.getByText(order.orderId);
    const vendorName = screen.getByText(order.vendorName);
    const pickupDate = screen.getByText(order.pickupDate);
    const status = screen.getByText(order.status);
    expect(orderId).toBeInTheDocument();
    expect(vendorName).toBeInTheDocument();
    expect(pickupDate).toBeInTheDocument();
    expect(status).toBeInTheDocument();
  });
});

//  to test search input element is displayed

test("displays search input element", () => {
  render(<Orders />);
  const inputElement = screen.getByLabelText("Search:");
  expect(inputElement).toBeInTheDocument();
});
