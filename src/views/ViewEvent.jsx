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

class ViewEvent extends React.Component {
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
                    <Row className="justify-content-md-center py-1">
                    <Col md="12">
                        <Card className="card-user">
                            <CardHeader>
                            <CardTitle tag="h5">Nome do evento</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                    <label>Nome do Evento</label>
                                    <Input
                                        defaultValue="Encontro Nacional dos Estudantes de Civil"
                                        placeholder="Nome do Evento"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                    <label>Sigla</label>
                                    <Input
                                        defaultValue="ENEC"
                                        placeholder="Sigla"
                                        type="text"
                                        disabled
                                        className="text-uppercase"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label htmlFor="exampleInputEmail1">
                                        Data do Evento
                                    </label>
                                    <Input placeholder="Data do Evento" type="text" disabled/>
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
                                <Col md="3">
                                <FormGroup>
                                    <label>Orçamento do Evento</label>
                                    <Input 
                                        placeholder="Orçamento do Evento"
                                        disabled
                                        type="text"
                                    />
                                </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                    <label>Público Esperado</label>
                                    <Input
                                        placeholder="Público Esperado"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <label>Categoria</label>
                                        <Input disabled type="select">
                                            <option>Congresso</option>
                                            <option>Encontro</option>
                                            <option>Exposição</option>
                                            <option>Feira</option>
                                            <option>Festa</option>
                                            <option>Formatura</option>
                                            <option>Reunião</option>
                                            <option>Seminário</option>                       
                                        </Input>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Local</label>
                                    <Input
                                        defaultValue="Local"
                                        placeholder="Local"
                                        disabled
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
                                        defaultValue="Cidade"
                                        placeholder="Cidade"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="4">
                                    <FormGroup>
                                    <label>Estado</label>
                                    <Input
                                        defaultValue="Estado"
                                        placeholder="Estado"
                                        disabled
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label>Endereço</label>
                                    <Input placeholder="Endereço" type="text" disabled/>
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Status</label>
                                   <Col>
                                    <ButtonGroup size="sm">
                                        <Button active>Andamento</Button>
                                        <Button>Concluído</Button>
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
export default ViewEvent;