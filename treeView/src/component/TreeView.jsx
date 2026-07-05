import { useState } from 'react';
import data from './data';

function Treeview() {
    const [currentId, setId] = useState(null);
    const [valueId, setValue] = useState(null);

    function handleCheck(itemId) {
        if (itemId == currentId) {
            setId(null);
            // console.log(currentId);
        } else {
            setId(itemId);
            // console.log(currentId);
        }
    }

    function handleChild(itemId) {
        if (itemId == valueId) {
            setValue(null);
            // console.log(currentId);
        } else {
            setValue(itemId);
            // console.log(currentId);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Tree View
                </h1>

                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="mb-4 border rounded-lg overflow-hidden"
                        >
                            <div
                                id={item.id}
                                onClick={() => handleCheck(item.id)}
                                className="cursor-pointer bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700 transition"
                            >
                                {item.question}
                            </div>

                            {currentId == item.id ? (
                                <div className="bg-gray-50 p-4">
                                    <div className="mb-4 text-gray-700">
                                        {item.answer}
                                    </div>
                                     { item.children &&

                                   
                                    <div className="space-y-2">
                                        {item.children.map((value) => {
                                            return (
                                                <div
                                                    key={value.id}
                                                    className="border rounded-md"
                                                >
                                                    <div
                                                        id={value.id}
                                                        onClick={() =>
                                                            handleChild(value.id)
                                                        }
                                                        className="cursor-pointer bg-gray-200 px-3 py-2 font-medium hover:bg-gray-300 transition"
                                                    >
                                                        {value.question}
                                                    </div>

                                                    {valueId == value.id ? (
                                                        <div className="p-3 text-gray-600 bg-white">
                                                            {value.answer}
                                                        </div>
                                                    ) : null}
                                                </div>
                                            );
                                        })}
                                    </div>
                }
                                </div>
                                    
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Treeview;