import React,{Component} from 'react';

class List extends Component{
	constructor(...args){
		super(...args)
	}
	render(){
		return (
			<div>
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
				  		this.props.data.map(({id,name,age}) =>(
				  			<tr key={id}>
						      <th scope="row">{id}</th>
						      <td>{name}</td>
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

export default List