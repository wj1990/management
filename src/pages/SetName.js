import React,{Component} from 'react';
import {setName} from '../actions';
import {connect} from 'react-redux';
import Header from '../components/Header';

class SetName extends Component{
	constructor(...args){
		super(...args)
	}
	inputChange(e,index){
		this.props.setName(e.target.value,index)
	}
	render(){
		return (
			<div>
				<Header name="name"/>
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
									<td>
										<input type="text" className="form-control"  value={name} onChange={(e)=>{this.inputChange(e,index)}}/>
									</td>
									<td>{age}</td>
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
	setName
})(SetName);