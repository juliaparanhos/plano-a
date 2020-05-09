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
import logo from "planoa.png";

class ForgotPassword extends React.Component {
   
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
                                       Um token será enviado para recuperar a senha
                                    </CardTitle>
                                    <Form>
                                        <Row className="justify-content-md-center">
                                            <Col className="pr-1" md="11">
                                                <FormGroup>
                                                    <label> Email </label>
                                                    <Input 
                                                        placeholder="Email"
                                                        type="text"
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
                                                    Enviar
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

export default ForgotPassword;