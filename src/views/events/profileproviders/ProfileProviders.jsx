import React from "react";
import Rating from "../../../components/Rating/Rating";
import {Link} from "react-router-dom";
import classnames from "classnames";
import { 
Card,
CardBody,
CardFooter,
Row,
Col,
Button,
TabContent, 
TabPane, 
Nav, 
NavItem, 
NavLink,
Input, 
Table, } from "reactstrap"; 


class ProfileProviders extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

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
                    <Row className="justify-content-md-center">
                    <Col md="10">
                        <Card className="card-user">
                            <div className="image">
                            <img
                                alt="..."
                                src={require("assets/img/banner.jpg")}
                            />
                            </div>
                            <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img
                                    alt="..."
                                    className="avatar border-gray"
                                    src={require("assets/img/default-avatar.png")}
                                />
                                <h5 className="title">Prisma</h5>
                                </a>

                                <div className="mt-n3" >
                                    <Rating/>
                                </div>
                               
                            </div>

                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}>
                                        Contato
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}>
                                       Eventos
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}>
                                       Localização
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}>
                                       Comentários
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    { this.state.activeTab == 1 ?  <><br/><p>Representante: User</p> <p>Cargo: Proprietário</p><p>Telefone: (xx) 00000-0000</p></>: null }
                                </TabPane>
                                <TabPane tabId="2">
                                    { this.state.activeTab == 2 ?  <p>...</p>: null }
                                </TabPane>
                                <TabPane tabId="3">
                                    { this.state.activeTab == 3 ?  <><br/><p>Rua 1 de Maio, Feira VI, Feira de Santana - BA</p></>: null }
                                </TabPane>
                                <TabPane tabId="4">
                                    { this.state.activeTab == 4 ?  <><br/><p>Atente em outro munícipio</p></>: null }
                                </TabPane>
                            </TabContent>                        
                           
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
            </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default ProfileProviders;
