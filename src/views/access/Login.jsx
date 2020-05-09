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
import { Link } from "react-router-dom";
import api from "../../services/api";
import {login} from "../../services/auth";
import logo from "planoa.png";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
      };

      handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
          try {
            const response = await api.post("/sessions", { email, password });
            login(response.data.token);
            this.props.history.push("/admin/dashboard");
          } catch (err) {
            this.setState({
              error:
                "Houve um problema com o login, verifique suas credenciais."
            });
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
                    <Row className="justify-content-md-center py-5 mt-5">
                        <Col md="6">
                            <Card>
                                <CardHeader >
                                    
                                    <div className="text-center">
                                    <img src={logo} alt="react-logo" style={{width: '120px', height: '40px'}}/>
                                    </div>
                                    <hr/>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSignIn}>
                                        <Row className="justify-content-md-center">
                                            <Col className="pr-1" md="6">
                                            {this.state.error && <p>{this.state.error}</p>}
                                                <FormGroup>
                                                    <label> Email </label>
                                                    <Input 
                                                        placeholder="Email"
                                                        type="text"
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label> Senha </label>
                                                    <Input 
                                                        placeholder="Senha"
                                                        type="password"
                                                        onChange={e => this.setState({ password: e.target.value })}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-center py-2">
                                            <Link to="/access/register">
                                            <p className="text-info">Cadastre-se</p> 
                                            </Link>
                                            </Row>
                                           <Row className="justify-content-md-center mt-n4">
                                            <Link to="/access/esqueceu-a-senha"> 
                                            <p className="text-info"> Esqueceu a Senha? </p>
                                            </Link>  
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto mt-n3">
                                                <Link to="/admin/dashboard">
                                                    <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="submit"
                                                    >
                                                    Entrar
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

export default Login;