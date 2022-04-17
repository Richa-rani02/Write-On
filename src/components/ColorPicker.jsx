export const ColorPicker=({palleteActive,setPalleteActive})=>{
    const colorsData = [
        "#f0abfc",
        "#5D93E1",
        "#F9D288",
        "#5DC250",
        "#F48687",
        "#B964F7",
        "#fdba74",
        "#f9a8d4",
      ];
    return(
        <div className={`${palleteActive ?'absolute':'hidden'} color-pallete-grid gap-1 bg-white grid grid-rows-[repeat(2,27px)] grid-cols-[repeat(4,27px)] p-3 z-3 top-[100%] left-[50%] border border-solid border-gray-200`}> 
        {colorsData.map((color)=>(
        <div className="rounded-full"
                style={{
                    backgroundColor: color,
                  }}
                  >
                
                 </div>
             ))} 
           </div>
    )
}