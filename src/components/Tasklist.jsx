import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Tasklist = () => {
let {data:tasks , pending, error}= useFetch("http://localhost:6051/task")

let handleDelete=(id)=>{
    fetch ("http://localhost:6051/task" +id , {method:"delete"})
}

    return ( 
        <div className="task-list">
            <h1>List of All the Task</h1>
            {error && <h1> {error} </h1>}

            {pending && <h1> Loading..... </h1>}

            {tasks &&
                <table border="2px">
                    <thead>
                    <tr>
                        <th>SL.No</th>
                        <th>Name</th>
                        <th>Task Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task,i)=> (
                            <tr>
                                <td>{i+1}</td>
                                <td>{task.userName}</td>
                                <td>{task.taskName}</td>
                                <td>{task.startDate}</td>
                                <td>{task.endDate}</td>
                                <td>{task.status}</td>
                                {task.status==="Completed" && <td><button>Delete</button></td>}
                                {(task.status!=="Completed") && <td> <Link to="/edittask"><button>Edit</button> </Link> </td>}

                            </tr>

                        ))}
                    </tbody>
                </table>
            }

        </div>
     );
}
 
export default Tasklist;