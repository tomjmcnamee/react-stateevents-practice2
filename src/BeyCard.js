import React from "react";

const BeyCard = (props) => {
  // console.log(props.obj)
  return (
    <div>
      {props.obj.name}
      {/* <img src={props.obj.img} alt="" onClick={(event) => props.clickHandler(event.this.id)}/> */}
      <img src={props.obj.img} alt="" onClick={() => props.clickHandler(props.obj)}/>
      {/* <img src={props.obj.img} alt="" onClick={(event) => console.log(event.target,  props.obj)}/> */}
    </div>
  );
};

export default BeyCard;
