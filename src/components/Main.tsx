import React, {useState} from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import dummyData from "../dummyData"


const Main: React.FC = () => {
    const [data, setData] = useState(dummyData)

    const onDragEnd = (result: DropResult) => {

    };

    return (
        <DragDropContext >
            <div className={"trello"}>
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => <div className="trello-section" ref={provided.innerRef}>
                            <div className="trello-section-title"></div>
                        </div>}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
}

export default Main;
