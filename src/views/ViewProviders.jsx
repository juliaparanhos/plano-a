import React from "react";
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
import {Link} from "react-router-dom";

class ViewProviders extends React.Component {
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
                            <CardTitle tag="h5">Nome do Fornecedor</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                    <label>Nome do Fornecedor</label>
                                    <Input
                                        defaultValue="Prisma"
                                        disabled
                                        placeholder="Nome do Fornecedor"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                    <label>Estado</label>
                                    <Input
                                        type="select"
                                        disabled
                                    >
                                        <option>BA</option>
                                        <option>MG</option>
                                    </Input>
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label>
                                        Cidade
                                    </label>
                                    <Input type="select" disabled>
                                        <option>Cidade</option>
                                        <option>Cidade</option>
                                        <option>Cidade</option>
                                     </Input>   
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col className="pr-1" md="3">
                                    <FormGroup>
                                    <label>Representante 1</label>
                                    <Input
                                        defaultValue="Representante"
                                        placeholder="Representante"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Cargo</label>
                                    <Input
                                        defaultValue="Cargo"
                                        placeholder="Cargo"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Email</label>
                                    <Input
                                        defaultValue="Email"
                                        placeholder="Email"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Telefone</label>
                                    <Input
                                        defaultValue="Telefone"
                                        placeholder="Telefone"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col className="pr-1" md="3">
                                    <FormGroup>
                                    <label>Representante 2</label>
                                    <Input
                                        defaultValue="Representante (Opcional)"
                                        placeholder="Representante (Opcional)"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Cargo</label>
                                    <Input
                                        defaultValue="Cargo (Opcional)"
                                        placeholder="Cargo (Opcional)"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Email</label>
                                    <Input
                                        defaultValue="Email (Opcional)"
                                        placeholder="Email (Opcional)"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Telefone</label>
                                    <Input
                                        defaultValue="Telefone (Opcional)"
                                        placeholder="Telefone (Opcional)"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <hr/>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Endereço</label>
                                    <Input
                                        placeholder="Endereço"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="3">
                                    <FormGroup>
                                        <label>Serviço</label>
                                        <Input disabled type="select">
                                            <option>Audiovisual</option>
                                            <option>Alimentação</option>                
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                    <label>Serviço intermunicipal</label>
                                    <Input
                                        disabled
                                        type="select"
                                    >
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </Input>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                    <label>Orçamento do Evento</label>
                                    <Input 
                                        placeholder="Orçamento do Evento"
                                        disabled
                                        type="text"
                                    />
                                </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Status</label>
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
                                    Editar
                                    </Button>

                                    <Button
                                    className="btn-round"
                                    color="info"
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

export default ViewProviders;