// CreateEventPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function CreateEventPage() {
  const [event, setEvent] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    time: "",
    location: "",
    price: "",
    tickets: "",
    imageUrl: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Event Created Successfully!\n\n${JSON.stringify(event, null, 2)}`);
    setEvent({
      name: "",
      description: "",
      category: "",
      date: "",
      time: "",
      location: "",
      price: "",
      tickets: "",
      imageUrl: ""
    });
    navigate('/');
  };

  return (
    <div className="relative min-h-screen w-full font-['mont'] antialiased flex items-center justify-center py-2">
      {/* Background Image - no overlay */}
      <img
        src="https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Event Creation Background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg md:max-w-2xl bg-white bg-opacity-95 rounded-2xl shadow-2xl p-5 md:p-6 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
          Organize Your Event
        </h1>
        <p className="text-gray-500 mb-5 text-center text-sm md:text-base">
          Fill out the details to create your next big event!
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Event Name (e.g., InnovateX Summit)"
            value={event.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
            required
          />
          <textarea
            name="description"
            placeholder="A brief description of your event..."
            value={event.description}
            onChange={handleChange}
            rows="2"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-y text-sm"
            required
          />
          <select
            name="category"
            value={event.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white text-sm"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Music">🎵 Music</option>
            <option value="Tech">💻 Tech</option>
            <option value="Sports">🏆 Sports</option>
            <option value="Arts">🎨 Arts & Culture</option>
            <option value="Food">🍽️ Food & Drink</option>
            <option value="Wellness">🧘 Wellness</option>
            <option value="Business">💼 Business</option>
          </select>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
              required
            />
            <input
              type="time"
              name="time"
              value={event.time}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
              required
            />
          </div>
          <input
            type="text"
            name="location"
            placeholder="Location (e.g., Sector 17 Plaza, Chandigarh)"
            value={event.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
            required
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="number"
              name="price"
              placeholder="Ticket Price (₹)"
              value={event.price}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
              required
            />
            <input
              type="number"
              name="tickets"
              placeholder="Total Tickets Available"
              value={event.tickets}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-lg flex-1 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
              required
            />
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Event Image URL (e.g., https://unsplash.com/...)"
            value={event.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-black text-white font-bold p-3 rounded-lg shadow-lg hover:bg-[#357D89] transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}