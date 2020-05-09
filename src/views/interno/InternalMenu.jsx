import React from "react";
import {
Card,
//CardHeader,
CardBody,
Row,
Col
} from "reactstrap";
import DataTable from "./index.jsx";
import dataset from "../../services/data.js";
import Pagination from "../../components/Pagination/Pagination"

class InternalMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: dataset,
          currentPage: 1,
          postsPerPage: 4,
        };
      }

      componentDidMount() {
        const getPosts = async () => {
          const results = this.state.data;
          this.setState({ posts: results.data });
        };
        getPosts();
    }

      render(){
        const { currentPage, postsPerPage, data} = this.state;

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    
        const paginate = pageNum => this.setState({ currentPage: pageNum });
    
        const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    
        const prevPage = () => this.setState({ currentPage: currentPage - 1 });
          return(
              <>
                <div className="content">
                    <Row className="justify-content-md-center py-3">
                        <Col lg="6">
                            <Card className="card-stats"> 
                                <CardBody>
                                    <DataTable data={currentPosts}/>
                                    <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
              </>
          )
      }

}

export default InternalMenu; 