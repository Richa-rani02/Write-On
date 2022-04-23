
import {FaSignal} from "react-icons/fa";
export const Note = ({notes}) => {


   return notes ? (
        <div className="w-full flex flex-col bg-white min-h-[13rem] rounded-md shadow-lg">
            <div className="card-top w-full h-[2%] rounded-tl-md rounded-tr-md" style={{ "background-color":notes.Color.tagColor }}></div>
            <div class="task-holder w-full h-[98%] flex flex-col justify-around p-1" style={{ "background-color": notes.Color.bgColor }}>
                {notes.tags.length>0 && 
                <div className="flex justify-between items-center">
                    <span class="note-card-label min-w-[6rem] mb-2.5 h-9 rounded-3xl flex items-center justify-center font-semibold text-white" style={{ "backgroundColor": notes.Color.tagColor }}> {notes.tags}
                    </span>
                </div>
            }
                <h4 className="note-card-title font-medium text-neutral-800 break-all">{notes.title}</h4>
                <p className="note-card-desc mt-1 break-all">
                    {notes.description}
                </p>
                <div className="flex justify-between items-center px-1">
                 <p className="text-xs mr-2">{notes.createdTime}</p>
                 {notes.priority.length>0 &&
                 <>
                 <FaSignal className="mr-0.5"/>
                <p className="text-xs mr-1">{notes.priority}</p>
                 </>}
                 
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