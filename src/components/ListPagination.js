import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListPagination extends Component {
  render(){
    if (this.props.pagesCount <= this.props.paginateLimit) {
      return null;
    }

    const range = [];
    for (let i = 0; i < Math.ceil(this.props.pagesCount / this.props.paginateLimit); ++i) {
      range.push(i);
    }

    return (
      <div className="pagination-list">
        <nav>
          <ul className="pagination">
            {
              range.map(v => {
                const isCurrent = v === this.props.currentPage;
                const onClick = ev => {
                  ev.preventDefault();
                };
                return (
                  <li
                    className={ isCurrent ? 'page-item active' : 'page-item' }
                    onClick={onClick}
                    key={v.toString()}>
                    <Link className="page-link" href="" to={`/contout/${v + 1}`}>{v + 1}</Link>
                  </li>
                );
              })
            }

          </ul>
        </nav>
      </div>
    );
  }
}

export default ListPagination;