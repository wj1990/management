import React,{Component} from 'react';
import {setAge} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header';

class SetAge extends Component{
	constructor(...args){
		super(...args)
	}
	inputChange(e,index){
		this.props.setAge(e.target.value,index)
	}
	render(){
		console.log('render serAge')
		return (
			<div>
				<Header name="age"/>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">id</th>
							<th scope="col">姓名</th>
							<th scope="col">年龄</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.user.map(({id,name,age},index) =>(
								<tr key={id}>
									<th scope="row">{id}</th>
									<td>{name}</td>
									<td>
										<input type="text" className="form-control"  value={age} onChange={(e)=>{this.inputChange(e,index)}}/>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		)
	}
}	

export default connect((state,props)=>(
	Object.assign({},props,state)
),{
	setAge
})(SetAge);