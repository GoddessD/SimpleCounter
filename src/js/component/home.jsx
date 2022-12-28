import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
    const sixth = Math.floor(props.counter/100000)%10;
    const fifth = Math.floor(props.counter/10000)%10;
    const fourth = Math.floor(props.counter/1000)%10; 
    const third = Math.floor(props.counter/100)%10;
    const second = Math.floor(props.counter/10)%10;
    const first = Math.floor(props.counter/1)%10;

 return (<div className="entireCounter d-flex bg-dark text-white justify-content-center"> 
    <div className="mx-3  bg-secondary">
	<i className="fa-regular fa-clock"></i>
	</div>
    <div className="mx-3 bg-secondary ">{sixth}</div>
    <div className="mx-3 bg-secondary">{fifth}</div>
    <div className="mx-3 bg-secondary">{fourth}</div>
    <div className="mx-3 bg-secondary">{third}</div>
    <div className="mx-3 bg-secondary ">{second}</div>
    <div className="mx-3 bg-secondary">{first}</div>
    </div> 
		 );
};

export default Home;
