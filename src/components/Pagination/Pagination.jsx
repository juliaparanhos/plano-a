import React from 'react';

class Pagination extends React.Component {
  render() {
    const { postsPerPage, totalPosts, paginate, nextPage, prevPage } = this.props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => prevPage()}>
                      <i className="nc-icon nc-minimal-left"/>
                    </a>
                </li>
                {pageNumbers.map(num => (
                    <li className="page-item" key={num} style={{marginTop: '1px'}}>
                        <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage()}>
                      <i className="nc-icon nc-minimal-right"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
}

export default Pagination;