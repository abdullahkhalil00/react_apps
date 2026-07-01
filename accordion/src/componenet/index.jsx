import { useState } from "react"
import data from "./data"
function Accordion() {
    const [selectedId, setSelectedId] = useState(null);
    const [enablemultiple, isEnableMultiSelection] = useState(false)
    const [multiID, selectedMultiId] = useState([])
    function handleSingleClick(currentId) {
        console.log(currentId)
        setSelectedId(currentId === selectedId ? null : currentId)

    }
    function handeleMultiSelection(currentId) {
        let copyArray = [...multiID]
        let isIndex = multiID.indexOf(currentId)
        if (isIndex === -1) {
            copyArray.push(currentId)
        }
        else {
            copyArray.splice(isIndex, 1)
        }
        selectedMultiId(copyArray)
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-center mb-6">
                        <button
                            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                            onClick={() => isEnableMultiSelection(!enablemultiple)}
                        >
                            {enablemultiple ? "Disable Multi Selection" : "Enable Multi Selection"}
                        </button>
                    </div>

                    {data.map((dataItem) => (
                        <div
                            key={dataItem.id}
                            className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
                        >
                            <div
                                onClick={
                                    enablemultiple
                                        ? () => handeleMultiSelection(dataItem.id)
                                        : () => handleSingleClick(dataItem.id)
                                }
                                className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-100 transition"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {dataItem.question}
                                </h3>

                                <span className="text-2xl font-bold text-blue-600">
                                    {selectedId === dataItem.id ||
                                        (enablemultiple && multiID.includes(dataItem.id))
                                        ? "−"
                                        : "+"}
                                </span>
                            </div>

                            {(selectedId === dataItem.id ||
                                (enablemultiple && multiID.includes(dataItem.id))) && (
                                    <div className="px-5 pb-5 text-gray-600 border-t">
                                        {dataItem.answer}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
export default Accordion