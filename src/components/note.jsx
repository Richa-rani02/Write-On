import { BsFillPinFill } from "react-icons/bs";
import {FaSignal} from "react-icons/fa";

export const Note = ({notes}) => {

   notes &&  console.log(notes.description);
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

   return notes ? (
        <div className="w-full flex flex-col bg-white min-h-[15rem] rounded-md shadow-lg">
            <div className="card-top w-full h-[2%] rounded-tl-md rounded-tr-md" style={{ "background-color":notes.Color.tagColor }}></div>
            <div class="task-holder w-full h-[98%] flex flex-col justify-around p-1" style={{ "background-color": notes.Color.bgColor }}>
                <div className="flex justify-between items-center">
                    <span class="note-card-label min-w-[6rem] mb-2.5 h-9 rounded-3xl flex items-center justify-center" style={{ "backgroundColor": notes.Color.tagColor }}> {notes.tags}
                    </span>
                    <BsFillPinFill />
                </div>

                <h4 className="note-card-title">{notes.title}</h4>
                <p className="note-card-desc mt-1">
                    {notes.description}
                </p>
                <div className="flex justify-between items-center px-1">
                 <p className="text-xs mr-2">{notes.createdTime}</p>
                 <FaSignal className="text-neutral-600 mr-0.5"/>
                <p className="text-xs mr-1">{notes.priority}</p>
                <div className="note-card-btn ml-auto mt-1 ">
                    <i class="far fa-edit mr-3" style={{ "color":notes.Color.tagColor, "cursor": "pointer" }} onClick=""></i>
                    <i class="fas fa-trash-alt" style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick=""></i>
                </div>
                </div>
            </div>
        </div>
    )
    :<>
    </>
}