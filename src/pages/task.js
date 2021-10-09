import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Task = () => {
  const initialUserState = {
    tasks:{},
    loading:true,
}


const[tasks,setTask] = useState(initialUserState)

useEffect(() => {
    const getUser = async () =>{
        const {data} = await axios(`http://jsonplaceholder.typicode.com/todos`)
        setTask(data);
    }
    getUser()
},[])

    return tasks.loading ? (
        <div>Loading...</div>
    ):(
      <>
     
      <div className="Task-page-wrap section-padding">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <tbody>
              {tasks.length > 0 ? (
                    tasks.map((task) =>
                <tr key={task.id}>
                  <th scope="row">{task.id}</th>
                  <td>{task.title}</td>
                  <td>{task.completed.toString()}</td>
                  <td>
                  <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                 )
                 ):
                 (
                     <tr>
                     <td colSpan={3}>No User Found.</td>
                 </tr>
                 )
                 }
              </tbody>
            
            </table>
          </div>
          <div className="col-md-12">
            <button type="button" className="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Task;