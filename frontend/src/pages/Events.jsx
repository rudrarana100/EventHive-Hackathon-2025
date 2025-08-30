import { Link } from "react-router-dom";

const dummyEvents = [
  { id: 1, title: "InnovateX Summit", date: "2025-09-10", location: "Convention Centre, Chandigarh", price: 500, imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Chandigarh Music Fest", date: "2025-09-15", location: "Leisure Valley, Chandigarh", price: 300, imageUrl: "https://images.unsplash.com/photo-1571231437596-db88b1fa9206?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Punjab Heritage Expo", date: "2025-09-20", location: "Sector 10 Museum, Chandigarh", price: 450, imageUrl: "https://plus.unsplash.com/premium_photo-1691030923598-59c5d607ef01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Startup Pitch Day", date: "2025-09-25", location: "ISB Campus, Mohali", price: 750, imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
  { id: 5, title: "Food Truck Festival", date: "2025-10-01", location: "Sector 17 Plaza, Chandigarh", price: 200, imageUrl: "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Yoga & Wellness Retreat", date: "2025-10-05", location: "Sukhna Lake, Chandigarh", price: 600, imageUrl: "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function Events() {
  return (
    <div className="bg-gray-50 min-h-screen font-['mont'] antialiased">
      {/* Hero Section */}
      <div className="relative text-white py-24 md:py-36 text-center overflow-hidden h-[100vh] shadow-xl">
       <img
          src="https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event background"
          className="absolute inset-0 z-0 w-[100vw] h-[100vh] object-cover"
        />
        <div className="relative z-20 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight animate-slideInUp">
            Your Gateway to Unforgettable Experiences in Chandigarh! 
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-slideInUp delay-200">
            From local cultural events to major tech summits, find and book your next adventure right here in Chandigarh, Punjab.
          </p>
          <Link to="/register">
            <button className="bg-white text-black font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50">
              Explore Events Now!
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-fadeIn">
          Upcoming Events Around You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
          {dummyEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-3 overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#111F2D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {event.date.substring(5, 10).replace('-', '/')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center">
                  <span className="mr-2 text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>{" "}
                  {event.location}
                </p>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-xl font-bold text-green-600">
                    ₹{event.price}{" "}
                    <span className="text-sm font-normal text-gray-500">onwards</span>
                  </p>
                  <Link to={`/event/${event.id}`}>
                    <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          
      {/* Footer Section - A simple one for completeness */}
      <footer  className="text-white text-center p-6 mt-12 bg-black">
        <p>&copy; {new Date().getFullYear()} EventHive. All rights reserved.</p>
        <p className="text-sm mt-2">Made with ❤️ in Chandigarh</p>
      </footer>
    </div>
  );
}

export default Events;