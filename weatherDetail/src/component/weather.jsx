import { useEffect, useState } from "react";

function Weather() {
    const [city, setCity] = useState('Lahore')
    const [data, setData] = useState({})

    async function searchWeather(city) {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
        );
        setData(await response.json()
        )
    }
    useEffect(() => {
        searchWeather("Lahore");
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">

                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Enter City Name"
                        className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <button
                        onClick={() => searchWeather(city)}
                        className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {data.name}
                    </h2>

                    <p className="text-gray-500">
                        {data.sys?.country}
                    </p>

                    <h1 className="text-6xl font-bold text-blue-600 mt-4">
                        {data.main?.temp}°C
                    </h1>

                    <p className="text-xl text-gray-700 capitalize mt-2">
                        {data.weather?.[0]?.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                    <div className="bg-gray-100 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Feels Like</p>
                        <p className="font-bold text-lg">
                            {data.main?.feels_like}°C
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Humidity</p>
                        <p className="font-bold text-lg">
                            {data.main?.humidity}%
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Wind</p>
                        <p className="font-bold text-lg">
                            {data.wind?.speed} m/s
                        </p>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 text-center">
                        <p className="text-gray-500 text-sm">Visibility</p>
                        <p className="font-bold text-lg">
                            {data.visibility / 1000} km
                        </p>
                    </div>

                </div>

                <div className="flex justify-between mt-8 text-sm">

                    <div className="text-center">
                        <p className="text-gray-500">Sunrise</p>
                        <p className="font-semibold">
                            {new Date(data.sys?.sunrise * 1000).toLocaleTimeString()}
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-500">Sunset</p>
                        <p className="font-semibold">
                            {new Date(data.sys?.sunset * 1000).toLocaleTimeString()}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Weather;