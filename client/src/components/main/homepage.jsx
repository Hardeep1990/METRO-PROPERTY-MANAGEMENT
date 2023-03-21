import React, { Component } from "react";
import {getData} from '../api/api';
class Home extends Component {
  state = {datas:[]};

  

async componentDidMount(){
  const {data:datas} = await getData();

  this.setState({datas});
}

  render() {
   
    
  
    return (
      <div>

        {this.state.datas.map(d=>(

<div className="container mt-5">
<div className="row">
  <div className="col-6">
    <div>
      {" "}
      <h1 style={{ color: "#55ADF0" }}>
        {" "}
     {d.landingPageText}
      </h1>
      <p>
        Helping clients to achieve harmongy throught our expertise and
        skills
      </p>
      <div className="d-flex">
      <h1 style={{ color: "#55ADF0" }}>I am want to</h1>
      <button className="btn bg-light ms-5" > Search</button>
      </div>
    </div>
  </div>
  <div className="col-6">
    <img src={d.landingPageImg} className="card-img" alt=""/>
  </div>
</div>

<div className="container mt-5">
<div className="row">
  <div className="card text-bg-dark">
  <img src={d.getInTouchSectionImg} className="card-img" alt=""/>
  </div>
</div>
</div>


<div className="container mt-5">
<div className="row">
  <div className="col-6">
    <img src="/images/image3.png" className="card-img" alt="..." />
   
  </div>
  <div className="col-6">
      <h1>About Metro</h1>
      <p>
         {d.aboutMetroText}                </p>
    <img src=" /images/image4.png" className="card-img" alt="..." />
   
  </div>
</div>
</div>


<div className="container mt-5">
<div className="row" style={{width :"100%",position:"relative",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
  <h1>Our Services</h1>
  <div className="col-10 d-flex flex-row justify-content-center align-items-center ">
    
    <img src={d.ourServiceImg} className="card-img" alt="..." />
   
  </div>
  </div>
</div>
</div>


        ))}
      </div>
    );
  
}
}

export default Home;


