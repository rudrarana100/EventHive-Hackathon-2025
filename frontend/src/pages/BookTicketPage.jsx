import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const dummyEvents = [
  { id: 1, title: "InnovateX Summit", date: "2025-09-10", location: "Convention Centre, Chandigarh", price: 500, imageUrl: "https://images.unsplash.com/photo-1543884841-d576a2675d04?q=80&w=1740&auto=format&fit=crop" },
  { id: 2, title: "Chandigarh Music Fest", date: "2025-09-15", location: "Leisure Valley, Chandigarh", price: 300, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1740&auto=format&fit=crop" },
  { id: 3, title: "Punjab Heritage Expo", date: "2025-09-20", location: "Sector 10 Museum, Chandigarh", price: 450, imageUrl: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=1740&auto=format&fit=crop" },
  { id: 4, title: "Startup Pitch Day", date: "2025-09-25", location: "ISB Campus, Mohali", price: 750, imageUrl: "https://images.unsplash.com/photo-1517457210777-74b706c3a1b4?q=80&w=1740&auto=format&fit=crop" },
  { id: 5, title: "Food Truck Festival", date: "2025-10-01", location: "Sector 17 Plaza, Chandigarh", price: 200, imageUrl: "https://images.unsplash.com/photo-1521401824410-b9df743b171f?q=80&w=1740&auto=format&fit=crop" },
  { id: 6, title: "Yoga & Wellness Retreat", date: "2025-10-05", location: "Sukhna Lake, Chandigarh", price: 600, imageUrl: "https://images.unsplash.com/photo-1544367503-68d30e01867c?q=80&w=1740&auto=format&fit=crop" },
];

export default function BookTicket() {
  const { id } = useParams();
  const event = dummyEvents.find(e => e.id === Number(id));

  const [ticketCount, setTicketCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(event ? event.price : 0);
  const [paymentQR, setPaymentQR] = useState("");
  const [qrVisible, setQrVisible] = useState(false);

  useEffect(() => {
    if (event) setTotalPrice(ticketCount * event.price);
  }, [ticketCount, event]);

  if (!event) return <h2 className="text-center text-red-500 mt-20">Event not found</h2>;

  const handleGenerateQR = () => {
    if (qrVisible) {
      setQrVisible(false);
      setPaymentQR("");
    } else {
      const paymentLink = `https://payment.fakepay.com/pay?event=${event.id}&tickets=${ticketCount}&amount=${totalPrice}`;
      setPaymentQR(paymentLink);
      setQrVisible(true);
    }
  };

  const handleConfirmBooking = () => {
    const myTickets = JSON.parse(localStorage.getItem("myTickets") || "[]");
    myTickets.push({ eventId: event.id, title: event.title, tickets: ticketCount, totalPrice });
    localStorage.setItem("myTickets", JSON.stringify(myTickets));
    alert(`🎟️ Successfully booked ${ticketCount} ticket(s) for ${event.title}!`);
  };

  return (
    <div className="relative min-h-screen w-full font-['mont'] antialiased flex items-center justify-center p-2 sm:p-4">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Booking page background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      
      {/* Booking Form Card */}
      <div className="relative z-20 w-full max-w-lg mx-auto bg-white bg-opacity-95 rounded-2xl shadow-2xl p-6 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
          Book Your Tickets
        </h1>
        <p className="text-center text-gray-700 mb-6 text-sm md:text-base">
          Secure your spot for **{event.title}**!
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-800 text-sm md:text-base">
            <p className="font-semibold flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Location:
            </p>
            <p className="font-bold">{event.location}</p>
          </div>
          
          <div className="flex justify-between items-center text-gray-800 text-sm md:text-base">
            <p className="font-semibold flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Date:
            </p>
            <p className="font-bold">{event.date}</p>
          </div>
          
          <div className="flex justify-between items-center text-gray-800 text-sm md:text-base">
            <p className="font-semibold flex items-center">
              <span className="mr-2 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 10v2M18.172 6.828a4 4 0 00-5.656-5.656L12 1.5l-2.516-2.516a4 4 0 00-5.656 5.656L9.5 12 4.343 17.157a4 4 0 005.656 5.656L12 22.5l2.516-2.516a4 4 0 005.656-5.656L14.5 12l3.672-3.672z" />
                </svg>
              </span>
              Price:
            </p>
            <p className="font-bold text-green-600">₹{event.price} <span className="text-sm font-normal text-gray-500">per ticket</span></p>
          </div>
        </div>

        <div className="my-4">
          <label className="block mb-2 font-semibold text-gray-800">Number of Tickets</label>
          <input
            type="number"
            min="1"
            max="10"
            value={ticketCount}
            onChange={e => setTicketCount(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
          />
        </div>

        <div className="mb-4 text-lg font-bold text-gray-900 text-center">
          Total: <span className="text-green-600">₹{totalPrice}</span>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={handleGenerateQR}
            className="w-full bg-indigo-600 text-white font-bold py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-sm"
          >
            {qrVisible ? "Hide QR Code" : "Generate Payment QR Code"}
          </button>

          {qrVisible && paymentQR && (
            <div className="flex justify-center mt-3 p-3 bg-gray-50 rounded-lg shadow-inner">
              <Link to={paymentQR} target="_blank" rel="noopener noreferrer">
                <QRCode value={paymentQR} size={160} />
              </Link>
            </div>
          )}

          <button
            onClick={handleConfirmBooking}
            className="w-full bg-green-600 text-white font-bold py-2 rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-sm"
          >
            Confirm Booking
          </button>
        </div>

        <Link to="/" className="block text-center mt-3 text-xs text-gray-600 hover:underline">
          <span className="mr-1">←</span> Back to Events
        </Link>
      </div>
    </div>
  );
}