import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Addtask = () => {
    let history =useHistory()

    let uName = useRef("");
    let uTaskName = useRef("");
    let uTaskDetail = useRef("");
    let uStartDate = useRef("");
    let uEndDate = useRef("");

    const handleSubmit=(e)=>{
        e.preventDefault();
    //    alert(uName.current.value)

        let currentDate=new Date();
        let startDate=new Date(uStartDate.current.value);
        let endDate=new Date(uEndDate.current.value)
        let status="";

        if(currentDate<startDate)
        {
            status="Yet to start ";
        }
        else if (currentDate>=startDate && currentDate<=endDate)
        {
            status="On-going"
        }
        else{
            status="Completed"
        }

        const newTask=
        {
            userName:uName.current.value,
            taskName:uTaskName.current.value,
            taskDetail:uTaskDetail.current.value,
            startDate:uStartDate.current.value,
            endDate:uEndDate.current.value,
            status
        }
        // console.log(newTask);

        fetch("http://localhost:6051/task",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }
        ).then(()=>{alert("task added successfully")})
        history.push("/tasklist")
    }

    return ( 
        <div className="home-comp">
            <h1>Add a Task</h1>
            <form onSubmit={handleSubmit} >
                <label >User Name</label> <input type="text" ref={uName} /> <br />
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
 
export default Addtask;