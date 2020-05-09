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



class AddEvent extends React.Component {
    
    render(){
        return(
            <>
                <div className="content">
                <div className="text-right">
                   <Link to="/admin/Eventos">
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
                            <CardTitle tag="h5">Adicionar Evento</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                <Row>
                                <Col className="pr-1" md="5">
                                    <FormGroup>
                                    <label>Nome do Evento</label>
                                    <Input
                                        placeholder="Nome do Evento"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="px-1" md="3">
                                    <FormGroup>
                                    <label>Sigla</label>
                                    <Input
                                        placeholder="Sigla"
                                        type="text"
                                        className="text-uppercase"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <FormGroup>
                                    <label>
                                        Período do Evento
                                    </label>
                                    <Input 
                                        type="date"
                                    />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col className="pr-1" md="3">
                                    <FormGroup>
                                    <label>Representante 1</label>
                                    <Input
                                        placeholder="Representante"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Cargo</label>
                                    <Input
                                        placeholder="Cargo"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Email</label>
                                    <Input
                                        placeholder="Email"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Telefone</label>
                                    <Input
                                        placeholder="Telefone"
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
                                        placeholder="Representante (Opcional)"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Cargo</label>
                                    <Input
                                        placeholder="Cargo (Opcional)"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Email</label>
                                    <Input
                                        placeholder="Email (Opcional)"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col className="pl-1" md="3">
                                    <FormGroup>
                                    <label>Telefone</label>
                                    <Input
                                        placeholder="Telefone (Opcional)"
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
                                        type="text"
                                    />
                                </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                    <label>Público Esperado</label>
                                    <Input
                                        placeholder="Público Esperado"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <label>Categoria</label>
                                        <Input type="select">
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
                                        placeholder="Local"
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
export default AddEvent;