import React from "react";

const Footer =()=>{
return(
<div className="row container">
<footer className="bg-dark text-white container-fluid text-decoration-style">
      <div id="productos" className="row p-5 text-uppercase ">
        <div className="col-xs-12 col-lg-4 mr-20">
          <img src="./images/logo-two.png" alt="logo" className="logo" />
        </div>
        <div className="col-xs-12 col-lg-3">
          <ul className="list-unstyled">
            <li>iluminacion</li>
            <li>diseño</li>
            <li>ambientes</li>
          </ul>
        </div>
        <div className="col-xs-12 col-lg-3">
          <ul className="list-unstyled">
            <li>quienes somos</li>
            <li>contacto</li>
          </ul>
        </div>
        <div className="col-xs-12 col-lg-2">copyright 2022</div>
      </div>
    </footer>


</div>



)

}



export default Footer;
