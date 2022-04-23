import { BsFillPinFill } from "react-icons/bs";
import {FaSignal} from "react-icons/fa";
import { BiArchiveIn } from "react-icons/bi";
export const Note = ({notes}) => {

   notes &&  console.log(notes.description)

   return notes ? (
        <div className="w-full flex flex-col bg-white min-h-[15rem] rounded-md shadow-lg">
            <div className="card-top w-full h-[2%] rounded-tl-md rounded-tr-md" style={{ "background-color":notes.Color.tagColor }}></div>
            <div class="task-holder w-full h-[98%] flex flex-col justify-around p-1" style={{ "background-color": notes.Color.bgColor }}>
                <div className="flex justify-between items-center">
                    <span class="note-card-label min-w-[6rem] mb-2.5 h-9 rounded-3xl flex items-center justify-center font-semibold text-white" style={{ "backgroundColor": notes.Color.tagColor }}> {notes.tags}
                    </span>
                </div>

                <h4 className="note-card-title font-medium text-neutral-800">{notes.title}</h4>
                <p className="note-card-desc mt-1">
                    {notes.description}
                </p>
                <div className="flex justify-between items-center px-1">
                 <p className="text-xs mr-2">{notes.createdTime}</p>
                 <FaSignal className="mr-0.5"/>
                <p className="text-xs mr-1">{notes.priority}</p>
                <div className="note-card-btn ml-auto mt-1 ">
                <i className="fa fa-archive mr-3" style={{ "color":notes.Color.tagColor, "cursor": "pointer" }} onClick=""></i>
                    <i className="far fa-edit mr-3" style={{ "color":notes.Color.tagColor, "cursor": "pointer" }} onClick=""></i>
                    <i className="fas fa-trash-alt" style={{ "color": notes.Color.tagColor, "cursor": "pointer" }} onClick=""></i>
                </div>
                </div>
            </div>
        </div>
    )
    :<>
    </>
}