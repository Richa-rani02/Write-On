export const Note=()=>{

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    return(
     <div className = "w-full flex flex-col bg-white min-h-[15rem] rounded-md shadow-lg">
            <div className = "card-top w-full h-[2%] rounded-tl-md rounded-tr-md" style={{"background-color": "pink"}}></div>
            <div class = "task-holder w-full h-[98%] flex flex-col justify-around p-1">
                <span class = "note-card-label max-w-[6rem] mb-2.5 h-9 rounded-3xl flex items-center justify-center" style={{"backgroundColor": "red"}}> label
                </span>
                <h4 className="note-card-title">test</h4>
                <p className = "note-card-desc mt-1"style={{"background-color": ""}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, excepturi!
                </p>
                <div className="note-card-btn ml-auto mt-1">
                    <i class = "far fa-edit mr-3" style={{"color" : "colors.primaryColor", "cursor" : "pointer"}} onClick = ""></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors.primaryColor, "cursor" : "pointer"}} onClick = ""></i>
                </div>
        </div>
        </div>
    )
}