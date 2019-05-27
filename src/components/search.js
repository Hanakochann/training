import React,{Component} from 'react';


class Search extends Component {
  render(){
    return (
     
          <div>
          	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" >
            
          
            <div className="input-group">
              <input type="text" className="form-controll" ref="search" placeholder="Search for..." />
              <span className="input-group-addon">
                <button className="btn btn-success" type="button">Tìm kiếm </button>
              </span>
            </div>
          </div>
          </div>
       
         
          
          
              
      );
  }
}

export default Search;