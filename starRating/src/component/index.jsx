import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Stars({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  function hanndleClick(currentId) {
    setRating(currentId);
  }

  function handleHover(currentId) {
    setHover(currentId);
  }

  function cancelHover() {
    setHover(rating);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Star Rating</h1>

        <div className="flex gap-2 justify-center">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                key={index}
                size={45}
                className={`cursor-pointer transition-all duration-200 hover:scale-125 ${
                  index <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => hanndleClick(index)}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={cancelHover}
              />
            );
          })}
        </div>

        <p className="mt-6 text-lg font-medium text-gray-700">
          Rating: {rating} / {noOfStars}
        </p>
      </div>
    </div>
  );
}

export default Stars;