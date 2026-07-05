import data from "./Data.jsx";
import { useState } from "react";

function ImageSlider() {
  const [imageId, setImageId] = useState(0);

  function changeURL() {
    if (imageId === data.length - 1) {
      setImageId(0);
    } else {
      setImageId(imageId + 1);
    }
  }

  function reverseURL() {
    if (imageId === 0) {
      setImageId(data.length - 1);
    } else {
      setImageId(imageId - 1);
    }
  }

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center bg-no-repeat duration-500"
      style={{ backgroundImage: `url(${data[imageId].imageURL})` }}
    >
      <button
        onClick={reverseURL}
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-5 py-3 text-3xl font-bold text-white transition hover:bg-black/80"
      >
        ❮
      </button>

      <button
        onClick={changeURL}
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-5 py-3 text-3xl font-bold text-white transition hover:bg-black/80"
      >
        ❯
      </button>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageId(index)}
            className={`h-4 w-4 rounded-full transition ${
              imageId === index
                ? "bg-blue-500 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;