import React from "react";
import CartWidget from "./CartWidget";

const NavBar =()=>{

return(
<div id="menu">

<div className="row " >
<div className="col-12 container-fluid d-flex justify-content-center">
        <nav className="navbar navbar1 navbar-expand-lg navbar-light bg-light navBarText">
            <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={"images/logo-two.png"} alt="" width={100}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                         <ul className="navbar-nav navBarText text-uppercase" id="navBarText">
                            <li className="nav-item " >
                                <a className="nav-link active" aria-current="page" href="#">inicio</a>
                            </li>
                            <li className="nav-item ">
                             <a className="nav-link " href="#">productos</a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link" href="#">quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">contacto</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
        <div className=" bg-light
">
<CartWidget />

</div>

</div>

</div>



</div>



)

}

export default NavBar;