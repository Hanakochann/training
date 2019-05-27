import React,{Component} from 'react';


class Control extends Component {
  render(){
    return (
     
          {/*Search START*/}
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
          
            <div className="input-group">
              <input type="text" className="form-controll" ref="search" placeholder="Search for..." />
              <span className="input-group-addon">
                <button className="btn btn-success" type="button">Tìm kiếm </button>
              </span>
            </div>
          </div>
          
          <div className="col-3">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <span className="carvet" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" role="button">NAME ACS</a></li>
                <li><a className="dropdown-item" role="button">NAME DESC</a></li>
                <li className="divider" role="separator" />
                <li><a className="dropdown-item" role="button">LEVEL ACS</a></li>
                <li><a className="dropdown-item" role="button">LEVEL DESC</a></li>
              </ul>
              <span className="badge  badge-success">NAME - DECS</span>
            </div>
          </div>
          {/*Sort END*/}
          {/*ADD  START*/}
          <div className="col-5">
            <button type="button" className="btn btn-info btn-block">Add Task</button>
          </div>
        {/*FORM START*/}
        <div className="row">
          
          <div className="col-6 offset-6 pull-right">
            <form action method="POST" className="form-inline">
              <div className="form-group">
                <div className="sr-only" htmlFor="task_name">Label</div>
                <input type="text" id="task_name" className="form-control" placeholder="Task Name" ref="Task_name" />
              </div>
              <div className="form-group">
                <div className="sr-only" htmlFor="inputDs">Label</div>
                <select name="ds" id="inputDs" className="form-control" required ref="task_level">
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button className="btn btn-primary" type="button">Submit</button>
              <button className="btn btn-danger" type="button">Cancel</button>
            </form>
          </div>
          </div>
       
        </div>    
              
      );
  }
}

export default Control;
