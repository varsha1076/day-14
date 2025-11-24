import React, { useEffect, useState } from "react";
import BookingsList from "../components/BookingsList";
import Checkout from "../components/Checkout";
 
 // should be exactly this


export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [checkoutItem, setCheckoutItem] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const cancelBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setBookings(updated);
  };

  return (
    <>
      <BookingsList
        bookings={bookings}
        cancelBooking={cancelBooking}
        viewBill={setCheckoutItem}
      />

      {checkoutItem && (
        <Checkout
          booking={checkoutItem}
          onClose={() => setCheckoutItem(null)}
        />
      )}
    </>
  );
}
