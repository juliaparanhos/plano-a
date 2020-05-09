import React from "react";
import { 
Card,
CardHeader,
CardBody,
CardTitle,
Button,
Row,
Col } from "reactstrap"; 
import {Link} from "react-router-dom";
import DataTable from "./index.jsx";
import dataProvidersEvents from "../../../services/db/dataProvidersEvents";
import Pagination from "../../../components/Pagination/Pagination";

class FornecedoresEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: dataProvidersEvents,
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

    render() {
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
                                    <CardTitle tag="h4">Lista de Fornecedores &nbsp;
                                    <Link to="/admin/adicionar-fornecedor">
                                        <Button
                                                className="btn-round btn-icon mt-1 shadow-sm"
                                                color="primary"
                                                type="submit"
                                                size="sm"
                                            >
                                                <i className="nc-icon nc-simple-add"/> 
                                            </Button>
                                    </Link>
                                    </CardTitle>
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

export default FornecedoresEvents;
