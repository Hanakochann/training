import React,{Component} from 'react';

import Search from './search';
import Sort from './sort';
import Add from './add';
import List from './list';
class Content extends Component {
	constructor(props){
		super(props);
		this.state={
			isShowList: false,
		};
		this.showList=this.showList.bind(this);
	}
	showList(){
		
		this.setState({
			isShowList: !this.state.isShowList
		});
	}
  render(){
  	console.log(this.state);
  	let list=null;
  	if(this.state.isShowList){
  		list=<List />;
  	}
    return (

      <div style={{marginLeft: '360px'}}>
      <div className="row">

      <Search />

      <Sort />

      <Add />
      </div>
      <button onClick={this.showList} className="btn-info" type="button" style={{marginTop:'20px'}}>Ẩn hiện danh sách với state</button>
      <div className="row" style={{marginTop:'20px'}}>
      {list}
      </div>
      </div>   
      );
  }
}

export default Content;