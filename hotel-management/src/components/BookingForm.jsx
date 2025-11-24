import React, { useState } from "react";

export default function BookingForm({ selectedRoom, onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const booking = {
      id: Date.now(),
      customer: name,
      roomName: selectedRoom.name,
      price: selectedRoom.price,
    };

    onSubmit(booking);
  };

  return (
    <div className="booking-form">
      <h2>Book {selectedRoom.name}</h2>

      <input
        type="text"
        placeholder="Enter Customer Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
}
