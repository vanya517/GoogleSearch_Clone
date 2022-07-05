import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Home.css";
import Search from "./Search";


const Home = () => {
    return (
       <div className="home">
            <div className="home_header">
                 <div className="home_headerLeft">
                         <p>About</p>
                         <p>Store</p>
                 </div>
                 <div className="home_headerRight">
                         <p>Gmail</p>
                         <p>Images</p>
                         <AppsIcon/>
                         <AccountCircleIcon/> 
                 </div>

            </div>

            <div className="home_body">
             <img src="https://techcrunch.com/wp-content/uploads/2015/10/screen-shot-2015-10-08-at-4-20-16-pm.png"></img>

                <div className="home_inputContainer">
                    <Search/>
                </div>
            </div>

       </div>
    )
}

export default Home;