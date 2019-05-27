import React,{Component} from 'react';


class Data extends Component {
  render(){
    return (
     
                       <tr>
                      <th scope="row">{this.props.no}</th>
                      <td>{this.props.name}.</td>
                      <td>{this.props.classTT}.</td>
                      <td className="badge badge-danger">{this.props.level}</td>
                      <td>
                        <a href="/" role="button" className="btn btn-warning">Edit</a>
                        <a href="/" role="button" className="btn btn-danger">Delete</a>
                      </td>
                    </tr>
          
       
         
          
          
              
      );
  }
}

export default Data;