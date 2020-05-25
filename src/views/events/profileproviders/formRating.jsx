import React from "react";
import {Link} from "react-router-dom";
import Rating from "../../../components/Rating/Rating";
import { 
Card,
CardHeader,
CardBody,
CardTitle,
FormGroup,
Form,
Input,
Row,
Button,
ButtonGroup,
Col } from "reactstrap"; 


class formRating extends React.Component {
    render() {
        return(
            <>
                <div className="content">
                    <div className="text-right">
                        <Link to="/admin/perfil-fornecedor/id">
                            <Button
                                className="btn-round"
                                color="primary"
                                type="submit"
                            >
                                Voltar
                            </Button>
                            </Link> 
                        </div>

                        <Row className="justify-content-md-center py-1">
                            <Col md="12">
                                <Card className="card-user">
                                    <CardHeader>
                                        <CardTitle tag="h5">Avaliação interna</CardTitle>
                                    </CardHeader>
                                    <hr/>
                                    <CardBody>
                                        <Form>
                                            <Row className="">
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label>Avaliação geral</label>
                                                        
                                                        <Rating/>
                                                     
                                                    </FormGroup>
                                                
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col className="pr-1" md="3">
                                                <h6 className="text-primary"> Tempo de Resposta </h6>
                                                </Col>
                                              </Row>
                                              <Row>  
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Avaliação</label>
                                                        <Rating/>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Comentários</label>
                                                        <textarea rows="1" className="form-control"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col className="pr-1" md="3">
                                                <h6 className="text-primary"> Logística</h6>
                                                </Col>
                                              </Row>
                                              <Row>  
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Avaliação</label>
                                                        <Rating/>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Comentários</label>
                                                        <textarea rows="1" className="form-control"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col className="pr-1" md="3">
                                                <h6 className="text-primary"> Custo x Benefício</h6>
                                                </Col>
                                              </Row>
                                              <Row>  
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Avaliação</label>
                                                        <Rating/>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Comentários</label>
                                                        <textarea rows="1" className="form-control"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col className="pr-1" md="3">
                                                <h6 className="text-primary"> Qualidade do serviço</h6>
                                                </Col>
                                              </Row>
                                              <Row>  
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Avaliação</label>
                                                        <Rating/>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="pr-1" md="3">
                                                    <FormGroup>
                                                        <label> Comentários</label>
                                                        <textarea rows="1" className="form-control"></textarea>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-md-center py-1">
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                            >
                                                Salvar
                                            </Button>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                </div>
            </>
        )
    }
}

export default formRating; 