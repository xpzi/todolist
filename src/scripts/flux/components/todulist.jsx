'use strict';
import React from 'react';

export default React.createClass({
	render(){
		var that = this;
		var listHtml = this.props.list.map((value, i  )=>{
			return (
				<li><span>{value}</span><button onClick={this.props.onClick} data-index={i} >X</button>  </li>
			)
		});
		
		return (
			<div>
				<div className="input"> 
					<input type="text" ref="newItem" onChange={this.props.onTextvalue} onKeyUp={this.props.onEnterHandle} /><br />
					<p>{this.props.textvalue}</p>
				</div>
				<ul>
					{listHtml}
				</ul>
			</div>			
		)
	}
});
