import React from "react";
import {
Card,
//CardHeader,
CardBody,
CardFooter,
CardTitle,
Row,
Col
} from "reactstrap";
import { Link } from "react-router-dom";

class DetailsProviders extends React.Component {
    render(){
        return(
            <>
                <div className="content">
                    <Row className="justify-content-md-center py-5">
                        <Col lg="5" md="6" sm="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col md="2" xs="5">
                                            <div className="icon-big text-center icon-success">
                                                <i className="nc-icon nc-money-coins text-success" />
                                            </div>
                                        </Col>
                                        <Col md="10" xs="7">
                                            <div className="numbers">
                                                <p className="card-category">Evento</p>
                                                <CardTitle tag="p">Orçamento</CardTitle>
                                                <p />
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            <Link to="/admin/orcamento/id">
                            <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="fas fa-sync-alt" /> Atualizar
                            </div>
                            </CardFooter>
                            </Link>
                        </Card>
                        </Col>
                        <Col lg="5" md="6" sm="6">
                    
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="2" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-alert-circle-i text-secondary" />
                                        </div>
                                    </Col>
                                    <Col md="10" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Eventos</p>
                                            <CardTitle tag="p">Informções</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <Link to="/admin/info/fornecedor/id">
                            <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="fas fa-sync-alt" /> Atualizar
                            </div>
                            </CardFooter>
                            </Link>
                        </Card>
                        
                        </Col>

                    </Row>
                </div>
            </>
        )
    }
}

export default DetailsProviders; 