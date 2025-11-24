import React, { useState } from "react";
import rooms from "./data/rooms";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";
 
 


export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredRooms = rooms.filter((room) =>
    filter === "All" ? true : room.type === filter
  );

  const handleBooking = (booking) => {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    setSelectedRoom(null);
    alert("Booking Confirmed!");
  };

  return (
    <div>
      <h1>Rooms</h1>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("AC")}>AC</button>
        <button onClick={() => setFilter("Non-AC")}>Non-AC</button>
        <button onClick={() => setFilter("Deluxe")}>Deluxe</button>
      </div>

      <div className="rooms-grid">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} onBook={setSelectedRoom} />
        ))}
      </div>

      {selectedRoom && (
        <BookingForm selectedRoom={selectedRoom} onSubmit={handleBooking} />
      )}
    </div>
  );
}
