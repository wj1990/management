import React,{Component} from 'react';
import {connect} from 'react-redux';
import {INIT_STORE,initStore} from './actions';
import Header from './components/Header';
import List from './pages/List';

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.less';

class App extends Component{
	constructor(...args){
		super(...args);
		this.state = {

		}
	}
	render(){
		return (
			<div>
				<Header name="user"/>
				<List data={this.props.user}/>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default connect((state,props)=>(
	Object.assign({},props,state)
),{
	initStore(data){
		return {
			type: INIT_STORE,
			value: data
		}
	}
})(App);