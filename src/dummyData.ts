import { v4 as uuidv4} from "uuid"

interface Task {
    id: string;
    title: string;
}

interface TaskList {
    id: string;
    title: string;
    tasks: Task[]
}

const dummyData = [
    {id: uuidv4(),
    title: "📝doing",
    tasks: [
        {id: uuidv4(),
        title: "react"},
        {id: uuidv4(),
        title: "youtube"},
        {id: uuidv4(),
        title: "PC setup"},
    ]},
    {id: uuidv4(),
        title: "📝will do",
        tasks: [
            {id: uuidv4(),
                title: "js"},
            {id: uuidv4(),
                title: "iphone setup"},
            {id: uuidv4(),
                title: "english"},
        ]},
    {id: uuidv4(),
        title: "📝done",
        tasks: [
            {id: uuidv4(),
                title: "speaking"},
            {id: uuidv4(),
                title: "talking"},
            {id: uuidv4(),
                title: "drinking"},
        ]}
]