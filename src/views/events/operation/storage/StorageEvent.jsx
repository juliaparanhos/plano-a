import React from "react"; 
import {
Card,
CardBody,
CardFooter,
CardTitle,
CardHeader,
Row,
Col} from "reactstrap";
import {Link} from "react-router-dom";
import DataTable from "./index.jsx";
import dataEstoque from "../../../../services/db/dataEstoque.js";
import Pagination from "../../../../components/Pagination/Pagination";

class StorageEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: dataEstoque,
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
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4"> Controle de estoque | Evento &nbsp; </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <DataTable data={currentPosts}/> <br/>
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

export default StorageEvent; 