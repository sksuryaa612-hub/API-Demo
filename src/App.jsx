import { useEffect, useState } from 'react'
import "./App.css"
import Card from "./component/card/Card"

const App = () => {

  const [users, setUsers] = useState([])
  const[isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        SetIsLoading(true);
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        setUsers(users);

      } catch (error) {
        console.log(error);
      }
      finally{
        SetIsLoading(false);
      }
      
    }
    fetchUser();
},[])


if (isLoading)return <p> Loading...</p>

  return (
    <>
     <h1>User List</h1>
     <div className="container" id="userContainer">
    
      {
       users.map((user)=>(
         <Card key={user.id} user ={user}/>
       ))
      }
    </div>
    </>

  )
}


export default App
