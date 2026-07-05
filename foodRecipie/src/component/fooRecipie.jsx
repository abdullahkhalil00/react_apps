import { useEffect, useState } from "react"





function Recipie() {
    const [recipie, setRecipie] = useState(null)
    const [data, setData] = useState({})
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    async function searchRecipie(name) {
        const response = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes?search=${name}&key=78b6103b-9d84-4561-870e-c4df3bf57562`
        );

        setData(await response.json())
    }
    useEffect(() => {
        searchRecipie("pizza")
    }, [])
    async function getRecipeDetails(id) {
        console.log(id);

        const response = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes/${id}?key=78b6103b-9d84-4561-870e-c4df3bf57562`
        );

        const result = await response.json();
        console.log(result);

        setSelectedRecipe(result.data.recipe);
    }
    return (


        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
                    🍽️ Recipe Finder
                </h1>

                <div className="flex justify-center gap-3 mb-10">
                    <input
                        type="text"
                        placeholder="Search recipe..."
                        value={recipie}
                        onChange={(e) => setRecipie(e.target.value)}
                        className="w-full max-w-md px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <button
                        onClick={() => searchRecipie(recipie)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-lg transition"
                    >
                        Search
                    </button>
                </div>
                {selectedRecipe && (
                    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
                        <img
                            src={selectedRecipe.image_url}
                            alt={selectedRecipe.title}
                            className="w-full h-72 object-cover rounded-lg"
                        />

                        <h2 className="text-3xl font-bold mt-4">
                            {selectedRecipe.title}
                        </h2>

                        <p className="mt-2 text-gray-600">
                            👨‍🍳 {selectedRecipe.publisher}
                        </p>

                        <p className="mt-2">
                            🍽️ Servings: {selectedRecipe.servings}
                        </p>

                        <p className="mt-2">
                            ⏱️ Cooking Time: {selectedRecipe.cooking_time} minutes
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-3">
                            Ingredients
                        </h3>

                        <ul className="list-disc ml-6 space-y-2">
                            {selectedRecipe.ingredients.map((item, index) => (
                                <li key={index}>
                                    {item.quantity || ""} {item.unit} {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.data?.recipes?.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <img
                                src={recipe.image_url}
                                alt={recipe.title}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-xl font-bold line-clamp-2">
                                    {recipe.title}
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    👨‍🍳 {recipe.publisher}
                                </p>

                                <button
                                    onClick={() => getRecipeDetails(recipe.id)}
                                    className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
                                >
                                    View Recipe
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

}

export default Recipie