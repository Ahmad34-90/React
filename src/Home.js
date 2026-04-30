import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("Ahmad");
    const [age, setAge] = useState(19)
    
    const handleClick =() =>{
        setName("Ninja")
        setAge(21)
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick} >Click me</button>
        </div>
     );
}
 
export default Home;