export default function Checkout({ booking, onClose }) {
  const tax = booking.price * 0.12;
  const total = booking.price + tax;

  return (
    <div className="checkout-box">
      <h2>Bill Summary</h2>

      <p><strong>Customer:</strong> {booking.customer}</p>
      <p><strong>Room:</strong> {booking.roomName}</p>
      <p><strong>Room Price:</strong> ₹{booking.price}</p>
      <p><strong>Tax (12%):</strong> ₹{tax.toFixed(0)}</p>

      <h3>Total: ₹{total.toFixed(0)}</h3>

      <button onClick={onClose}>Close</button>
    </div>
  );
}
