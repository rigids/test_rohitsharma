import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListPagination from './ListPagination';

class PresOut extends Component {

  render(){
    { 
      // Pagination logic 
      /* Change variable paginateLimit to change pagination length. */
      var pageNumber, start, end;
      var paginateLimit = 10;
      let currentpage = parseInt(this.props.match.params.page,  10);
      if(currentpage>1){
        pageNumber  = (currentpage-1);
        start       = ((currentpage-1)*paginateLimit);
        end         = (start + paginateLimit);
      }
      else{
        pageNumber  = 0;
        start       = 0;
        end         = (1 * paginateLimit);
      }
      
    }
    return (
      <div className="block__wrapper">
        <div className="menu__wrapper">
          <ul>
            <li className="shadow-alt"><Link to='/'>Home</Link></li>
          </ul>
        </div>
        <div className="form__container data--container shadow">
          {
            (this.props.items.length>0)?
              <div className="items__container">
                <table className="table table-striped table-hover" id="items">
                  <thead className="thead-light">
                    <tr>
                    <th>Decription</th>
                    <th>Selection</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.items.slice(start, end).map((item,index)=>{
                      return (
                        <tr key={index}>
                          <td>{item.stored_value}</td>
                          <td>{item.stored_selection.join(',')}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
                <ListPagination
                  pagesCount={this.props.pagesCount}
                  currentPage={pageNumber}
                  paginateLimit={paginateLimit}
                   />
              </div>
            :
            <div className="no__entry">
              No item added yet. Click <Link to='/'>here</Link> to go back.
            </div>
          }
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{ 
    items: state.item,
    pagesCount:state.item.length
  }
}

export default connect(mapStateToProps,null)(PresOut);