
// const Available = ({ handleIsActiveState, isActive }) => {
//     return (
//         <div className="flex justify-between items-center w-[90%] mx-auto mb-10">
//             <div>
//                 <h2 className="text-2xl">Available</h2>
//             </div>
//             <div className="flex items-center border rounded-xl  gap-4">
//                 <button onClick={() => handleIsActiveState("available")} className={`${isActive ? "bg-red-400" : "bg-black"}`} >Available</button>
//                 <button onClick={() => handleIsActiveState("selected")} className={`${isActive ? "bg-red-400" : "bg-black"}`}>Selected</button>
//             </div> 
//         </div>
//     );
// };

// export default Available;


const Available = ({ handleIsActiveState, isActive }) => {
    return (
        <div className="flex md:flex-row flex-col space-y-3 justify-between items-center w-[90%] mx-auto mb-10">
            <div>
                <h2 className="md:text-2xl text-4xl">Available</h2>
            </div>
            <div className="flex items-center border rounded-xl gap-4">
                <button
                    onClick={() => handleIsActiveState("available")}
                    className={`${isActive.available ? "bg-yellow-500 text-white" : "bg-none text-gray-300"} px-4 py-2 rounded-lg`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleIsActiveState("selected")}
                    className={`${!isActive.available ? "bg-yellow-500 text-white" : "bg-none text-gray-300"} px-4 py-2 rounded-lg`}
                >
                    Selected
                </button>
            </div>
        </div>
    );
};

export default Available;
