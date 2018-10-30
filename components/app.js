import React from "react";

import Shop from "./shop";

export default class App extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Shop/>
			</div>
		)
	}
}
