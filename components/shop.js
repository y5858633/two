import React from "react";
import Img from '../image/a.jpg'
export default class Shop extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='gj_out'>
				<img className='gj_img' src={Img} />
			</div>
		)
	}
}
