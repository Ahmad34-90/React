import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs] = useState([
        {title:"My new Website", body:"lorem has a body thaht is it...." ,author:"Ahmad", id:1},
        {title:"Welcome to website", body:"lorem has a body thaht is it...." ,author:"Abdullah", id:2},
        {title:"Usama's stunt", body:"lorem has a body thaht is it...." ,author:"Usama", id:3},
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs :"/>
        </div>
     );
}
 
export default Home;