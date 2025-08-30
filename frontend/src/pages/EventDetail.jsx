import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const dummyEvents = [
  {
    id: 1,
    title: "InnovateX Summit",
    date: "2025-09-10",
    location: "Convention Centre, Chandigarh",
    price: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Chandigarh Music Fest",
    date: "2025-09-15",
    location: "Leisure Valley, Chandigarh",
    price: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1571231437596-db88b1fa9206?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Punjab Heritage Expo",
    date: "2025-09-20",
    location: "Sector 10 Museum, Chandigarh",
    price: 450,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1691030923598-59c5d607ef01?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Startup Pitch Day",
    date: "2025-09-25",
    location: "ISB Campus, Mohali",
    price: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 5,
    title: "Food Truck Festival",
    date: "2025-10-01",
    location: "Sector 17 Plaza, Chandigarh",
    price: 200,
    imageUrl:
      "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=872&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Yoga & Wellness Retreat",
    date: "2025-10-05",
    location: "Sukhna Lake, Chandigarh",
    price: 600,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=870&auto=format&fit=crop",
  },
];

function EventDetail() {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate(); // navigation hook
  const event = dummyEvents.find((e) => e.id === Number(id)); // find event

  if (!event) {
    return (
      <h2 className="text-center text-red-500 mt-20">Event not found</h2>
    );
  }

  const handleBook = () => {
    navigate(`/book/${event.id}`); // navigate to booking page
  };

  return (
    <div className="relative min-h-screen w-full font-['mont'] antialiased">
      {/* Background */}
      <img
        src={event.imageUrl}
        alt="Background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content Card */}
      <div className="relative z-20 flex items-center justify-center pt-24 pb-8">
        <div className="w-full max-w-xl bg-white bg-opacity-95 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform hover:shadow-[0_0_10px_-10px_#fff] hover:scale-[1.01]">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-56 object-cover rounded-t-2xl"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
              {event.title}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mb-4 font-medium">
              Event Details
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <span className="mr-2 text-indigo-500">
                  📍
                </span>
                <span className="text-sm font-semibold">{event.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2 text-indigo-500">📅</span>
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-2 text-green-600">💰</span>
                <span className="text-sm font-bold">₹{event.price}</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a
              sample description for the event.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleBook}
                className="flex-1 bg-indigo-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Book Ticket
              </button>
              <Link
                to="/"
                className="flex-1 text-center bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Back to Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
