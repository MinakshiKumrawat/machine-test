import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Home = () => {
  const initialUserState = {
    tasks:{},
    loading:true,
}

  const[tasks,setTask] = useState(initialUserState)
  const[content,setContent] = useState({
    contents:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."+
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
     + "when an unknown printer took a galley of type a ",
    
  })
  
useEffect(() => {
    const getUser = async () =>{
        const {data} = await axios(`http://jsonplaceholder.typicode.com/todos`)
        setTask(data);
    }
    getUser();

 
},[])

const selecthHendler = (e) => {
  setContent({contents : e.target.value})

}

    return<>
      <div className="home-page-wrap section-padding">
          <div className="home-page">
          <select className="form-select drop-select" aria-label="Default select example" onChange={selecthHendler}>
            <option>Open this select menu</option>
            {tasks.length > 0 ? (
                    tasks.map((task) =><>
            <option value={task.title} key={task.id}>{task.title}</option>
          
            </>
            )
            ):
            (
              <option value="1">Data not found</option>
            )
            }
        </select>
        <p className="text">{content.contents}</p>
    
       
          </div>
      </div>
    </>
}

export default Home;