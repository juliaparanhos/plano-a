import React from "react";
import {Link} from "react-router-dom";
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

class AddProvider extends React.Component {
    render(){
        return(
            <>
                <div className="content">
                <div className="text-right">
                   <Link to="/admin/fornecedores-eventos">
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
                            <CardTitle tag="h5">Adicionar Fornecedor</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                    <label>Nome da Empresa</label>
                                    <Input
                                        placeholder="Nome da Empresa"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                    <label>Serviço</label>
                                    <Input
                                        placeholder="Serviço"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label htmlFor="exampleInputEmail1">
                                        Data do Evento
                                    </label>
                                    <Input placeholder="Data do Evento" type="text"/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col className="pr-1" md="6">
                                    <FormGroup>
                                    <label>Representante</label>
                                    <Input
                                        placeholder="Representante"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <FormGroup>
                                    <label>Cargo</label>
                                    <Input
                                        placeholder="Cargo"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                
                                <Row>
                                <Col className="pr-1" md="4">
                                    <FormGroup>
                                    <label>Cidade</label>
                                    <Input
                                        placeholder="Cidade"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="4">
                                    <FormGroup>
                                    <label>Estado</label>
                                    <Input
                                        placeholder="Estado"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label>Endereço</label>
                                    <Input placeholder="Endereço" type="text"/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Situação</label>
                                   <Col>
                                    <ButtonGroup size="sm">
                                        <Button active>Negociação</Button>
                                        <Button>Contratado</Button>
                                    </ButtonGroup>
                                    </Col>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <div className="update ml-auto mr-auto">
                                    <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    >
                                    Salvar
                                    </Button>
                                </div>
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

export default AddProvider;

