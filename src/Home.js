const Home = () => {
    const handleClick =() => {
        console.log("Hello Ninjas");
    }
    const handleClickAgain =(name) =>{
        console.log("hello"+name);
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{handleClickAgain(" Ahmad")}}>Again Click</button>
        </div>
     );
}
 
export default Home;