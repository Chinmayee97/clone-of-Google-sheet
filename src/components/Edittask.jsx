import { useParams } from "react-router-dom";

const Edittask = () => {

    const Edittask = () => {
        const{id}=useParams();

    let uName = useRef("");
    let uTaskName = useRef("");
    let uTaskDetail = useRef("");
    let uStartDate = useRef("");
    let uEndDate = useRef("");
}
    return ( 
        <div>
            <h1>Edit Task</h1>
            <form onSubmit={handleSubmit} >
                <label >User Name</label> <input type="text" defaultValue={task.username} onChange={(e)=>{setuName.current.value}} /> <br />
                <label>Task Name</label> <input type="text" ref={uTaskName} /> <br />
                <label>Task Detail</label> <textarea ref={uTaskDetail}></textarea> <br />
                <label>Start</label> <input type="date" ref={uStartDate}/> <br />
                <label>End</label> <input type="date" ref={uEndDate}/><br />
                <input type="submit" />
            </form>

            <Link to ="/tasklist">
                <button>Take me to task list</button>
            </Link>
        </div>
     );
}
 
export default Edittask;