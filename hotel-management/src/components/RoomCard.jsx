export default function RoomCard({ room, onBook }) {
  return (
    <div className="room-card">
      <img src={room.image} className="room-img" alt="room" />

      <h3>{room.name}</h3>
      <p>Type: {room.type}</p>
      <p>Price: ₹{room.price}</p>

      <button onClick={() => onBook(room)}>Book Now</button>
    </div>
  );
}
