import React,{Component} from 'react';
import Data from './data'

class List extends Component {
  render(){
    return (
     
          <div className="row">
              <div className="col-12 mt-5">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title"> Danh sách sinh viên</h3>
                <table className="table table-hover text-center">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center" style={{width: '20px'}}>No.</th>
                      <th scope="col" className="text-center" style={{width: '180px'}}>Tên</th>
                      <th scope="col" className="text-center" style={{width: '80px'}}>Lớp</th>
                      <th scope="col" className="text-center" style={{width: '170px'}}>Xếp loại</th>
                      <th scope="col" className="text-center" style={{width: '150px'}}></th>
                    </tr>
                  </thead>
                  <tbody>
                   <Data no="1" name="Nguyễn Văn A" classTT="14T3" level="Xuất Sắc" />
                    <Data no="2" name="Nguyễn Văn B" classTT="14T2" level="Khá" />
                    <Data no="3" name="Trần Văn C" classTT="14T1" level="Trung Bình" />
                  </tbody>
                  </table>
            </div>
          </div>
          </div>
         </div> 
              
      );
  }
}

export default List;