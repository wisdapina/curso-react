import React from "react";
 const CartWidget =()=>{
return(
<button type="button" className="btn btn-secondary position-relative m-2 ">
  <img src={"images/cart-check.svg"} alt="carrito" width={30} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
   
  </span>
</button>
)



 }


 export default CartWidget;