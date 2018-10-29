//薛桥水组件

import React from 'react';
import Top from '../image/top.jpg'
import main from '../image/section.jpg'
import bottom from '../image/bottom.jpg'

export default class Section extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="xqs_height">
					<img src={Top}/>
				</div>
				<div className="xqs_main">
					<img src={main}/>
				</div>
				<div className="xqs_bottom">
					<img src={bottom}/>
				</div>
			</div>
		)
	}
}
