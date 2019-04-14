import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
	constructor(...args){
		super(...args)
	}
	render(){
		let normalClass = {};
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<ul className="navbar-nav">
				  <li className="nav-item">
				    <Link className={`nav-link ${this.props.name=="user"?'active':''}`} to="/">用户列表</Link>
				  </li>
				  <li className="nav-item">
				    <Link className={`nav-link ${this.props.name=="name"?'active':''}`} to="/setname">设置名字</Link>
				  </li>
				  <li className="nav-item">
				    <Link className={`nav-link ${this.props.name=="age"?'active':''}`} to="/setage">设置年龄</Link>
				  </li>
				</ul>
			</nav>
		)
	}
}	

export default Header