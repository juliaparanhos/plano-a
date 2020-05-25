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

class Details extends React.Component {
    render(){
        return(
            <>
                <div className="content">
                <Row className="justify-content-md-center py-4"> 
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
                            <div className="icon-big text-center icon-info">
                                <i className="nc-icon nc-calendar-60 text-info" />
                            </div>
                            </Col>
                            <Col md="10" xs="7">
                            <div className="numbers">
                                <p className="card-category">Evento</p>
                                <CardTitle tag="p">Calendário</CardTitle>
                                <p />
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                        <Link to="/admin/calendario-id">
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
                            <div className="icon-big text-center icon-danger">
                                <i className="nc-icon nc-single-02 text-danger" />
                            </div>
                            </Col>
                            <Col md="10" xs="7">
                            <div className="numbers">
                                <p className="card-category">Evento</p>
                                <CardTitle tag="p">Equipe</CardTitle>
                                <p />
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                        <Link to="/admin/equipe/id">
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
                                <p className="card-category">Evento</p>
                                <CardTitle tag="p">Informções</CardTitle>
                                <p />
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                        <Link to="/admin/info/id">
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
                                <i className="nc-icon nc-bullet-list-67 text-warning" />
                            </div>
                            </Col>
                            <Col md="10" xs="7">
                            <div className="numbers">
                                <p className="card-category">Evento</p>
                                <CardTitle tag="p">Estoque</CardTitle>
                                <p />
                            </div>
                            </Col>
                        </Row>
                        </CardBody>
                        <Link to="/admin/estoque-evento">
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
        );
    }
}
export default Details;