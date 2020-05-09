import React from "react";
import {Link} from "react-router-dom";
import background from "../../assets/img/background_financial.svg"
import { 
Card,
CardHeader,
CardBody,
CardTitle,
Row,
Button,
Form,
FormGroup,
Col, 
Input} from "reactstrap"; 

class Financial extends React.Component{
    render(){
        return(
            <>
                <div className="content">
                <div className="text-right">
                   <Link to="/admin/detalhamento">
                    <Button
                         className="btn-round"
                         color="primary"
                         type="submit"
                    >
                        Voltar
                    </Button>
                    </Link> 
                    </div>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">
                                        Orçamento - Evento
                                    </CardTitle>
                                </CardHeader>                 
                                <CardBody>
                                    <Form>
                                        <Row className="justify-content-md-center">
                                            <Col md="3">
                                                <img src={background}/>
                                                <h6 className="text-muted text-center py-2">Clique para começar</h6>                                               
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="4">
                                                <Input type="file" className="form-control"/>
                                            </Col>
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
export default Financial;