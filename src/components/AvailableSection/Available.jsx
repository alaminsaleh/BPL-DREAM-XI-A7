const Available = ({ handleIsActiveState, isActive, selectedCount }) => {
    return (
       <div className="sticky md:top-16 top-20 z-30 bg-white mt-6"> 
         <div className="pb-5 flex md:flex-row flex-col space-y-3 justify-between items-center w-[90%] mx-auto mb-10">
            <div> 
                <h2 className="md:text-2xl font-bold text-3xl">Available Players</h2> 
            </div> 
            <div className=" flex items-center border rounded-xl gap-4">
                <button
                    onClick={() => handleIsActiveState("available")}
                    className={`${isActive.available ? "bg-[#E7FE29] text-black font-bold" : "bg-none text-gray-500"} px-4 py-2 rounded-lg`}
                >
                    Available
                </button>
                <button
                    onClick={() => handleIsActiveState("selected")}
                    className={`${!isActive.available ? "bg-[#E7FE29] text-black font-bold" : "bg-none text-gray-500"} px-4 py-2 rounded-lg`}
                >
                    Selected({selectedCount}) {/* Display the count here */}
                </button>
            </div>
        </div>
       </div>
    );
};

export default Available;

