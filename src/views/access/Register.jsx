import React from "react";
import {
Card,
CardTitle,
CardHeader,
CardBody,
Col,
Row,
Form,
FormGroup,
Input,
Button
} from "reactstrap";
import { Link,  withRouter } from "react-router-dom";
import api from "../../services/api";
import logo from "planoa.png";

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
      };

      handleSignUp = async e => {
        e.preventDefault();
        const {email, password } = this.state;
        if (!email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/users", {email, password });
            this.props.history.push("/");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
          }
        }
      };
   
    render(){
        const style =  {
           
            backgroundColor: "#f4f3ef"
        }
        return(
            <div style={style}>
                <div className="content">
                    <Row className="justify-content-md-left ml-5 pl-5 py-5 mt-5">
                        <Col md="8">
                            <Card>
                                <CardHeader >
                                    <div className="text-center">
                                    <img src={logo} alt="react-logo" style={{width: '120px', height: '40px'}}/>
                                    </div>
                                    <hr/>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>
                                        Formulário de Cadastro
                                    </CardTitle>
                                    <Form onSubmit={this.handleSignUp}>
                                        <Row className="justify-content-md-left">
                                            <Col className="pr-1" md="4">
                                            {this.state.error && <p>{this.state.error}</p>}
                                                <FormGroup>
                                                    <label> Nome </label>
                                                    <Input 
                                                        placeholder="Nome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="4">
                                                <FormGroup>
                                                    <label> Sobrenome </label>
                                                    <Input 
                                                        placeholder="Sobrenome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="4">
                                                <FormGroup>
                                                    <label> Telefone </label>
                                                    <Input 
                                                        placeholder="Telefone"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-left">
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label> Email</label>
                                                    <Input 
                                                        placeholder="Email"
                                                        type="text"
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label> Cargo</label>
                                                    <Input 
                                                        placeholder="Cargo"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-left">
                                        <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label> Senha</label>
                                                    <Input 
                                                        placeholder="Senha"
                                                        type="password"
                                                        onChange={e => this.setState({ password: e.target.value })}
                                                    />
                                                </FormGroup>
                                            </Col> 
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label> Confirme a senha</label>
                                                <Input 
                                                    placeholder="Confirme a senha"
                                                    type="password"
                                                />
                                            </FormGroup>
                                        </Col> 
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto mt-n2 py-3">
                                                <Link to="/admin/dashboard">
                                                    <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                    >
                                                    Cadastrar
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);