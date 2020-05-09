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

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content py-5">
          <Row className="justify-content-md-center py-5"> 
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
                        <p className="card-category">Fornecedores</p>
                        <CardTitle tag="p">Interno</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <Link to="/admin/fornecedores-interno">
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
                        <i className="nc-icon nc-briefcase-24 text-success" />
                      </div>
                    </Col>
                    <Col md="10" xs="7">
                      <div className="numbers">
                        <p className="card-category">Fornecedores</p>
                        <CardTitle tag="p">Eventos</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <Link to="/admin/Eventos">
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

export default Dashboard;
