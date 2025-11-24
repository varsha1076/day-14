export default function BookingsList({ bookings, cancelBooking, viewBill }) {
  return (
    <div>
      <h2>All Bookings</h2>

      {bookings.length === 0 && <p>No bookings made yet.</p>}

      {bookings.map((b) => (
        <div className="booking-item" key={b.id}>
          <p>
            <strong>{b.customer}</strong> booked <strong>{b.roomName}</strong>
          </p>

          <p>Price: ₹{b.price}</p>

          <button onClick={() => viewBill(b)}>View Bill</button>
          <button onClick={() => cancelBooking(b.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
