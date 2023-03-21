import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import React from 'react'
const Navbar =()=>{
    return(

    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container" >
      
      <div className="row  d-flex flex-row justify-content-center align-items-center"  style={{ width:"100%"}} >
      <div className="col-6" style={{color:"#55ADF0"}}>
          <div className="title_color">These properties are managed by</div>
            <h3 >
              Metro NZ Property Management <br />
              Auckland
            </h3>
        </div>
      
  
        <div  className="col-3"> 
            <button type="button" className="btn btn-outline-secondary">
              <AccountCircleIcon />
              Login / Sign up
            </button>
         </div>
        <div  className="col-3">
          <img
            src="/images/logo.png"
            alt="pic"
            style={{ width: "150px", height: "50px" }}/>
          
        </div>

      </div>
  </div>
    </nav>
    );
}
export default Navbar;