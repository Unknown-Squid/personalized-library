function TabsButton({
    tabProperties,
    tabOnClick
}) {

  return (
    <div className="w-full size-fit flex items-end gap-5 ps-20 bg-transparent pb-1">
        {tabProperties.map(tab => {
            return (
                <button 
                    key={tab.id} 
                    type="button" 
                    className={`h-[80%] w-[12%] sm:w-[10%] md:w-[8%] pb-[5px] bg-black flex items-end justify-center bg-transparent text-base sm:text-2xl md:text-2xl lg:text-3xl 
                                ${tab.isActive ? "border-b-4 border-black text-black" : "border-0 text-black/[.6]"}`
                              }
                    onClick={() => tabOnClick(tab.id)}
                >
                    {tab.label}
                </button>
            )
        })}
        <button type="button" className="button relative w-[150px] h-[50px] cursor-pointer flex items-center border border-[#34974d] bg-[#3aa856] group">
            <span className="button__text text-white font-semibold transform group-hover:text-transparent transition-all duration-300 pl-5">
                Add Item
            </span>
            <span className="button__icon absolute w-[39px] h-full bg-[#34974d] flex items-center justify-center group-hover:w-[148px] group-hover:transform-none
                            transform translate-x-[109px] transition-all duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg w-[30px] stroke-white">
                    <line y2="19" y1="5" x2="12" x1="12"></line>
                    <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
            </span>
        </button>
    </div>
  )
}

export default TabsButton;
