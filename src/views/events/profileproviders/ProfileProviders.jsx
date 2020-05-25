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
                                    { this.state.activeTab == 2 ?  
                                    <Table hover responsive>
                                        <thead className="text-muted">
                                            <tr>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"8%;"}}>Nome</th>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Estado</th>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"25%;"}}>Cidade</th>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"15%;"}}>Data</th>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"15%;"}}>Avaliação</th>
                                                <th className="p-1 text-center" style={{textAlign: "center", width:"15%;"}}>Comentários</th>
                                                <th className="p-2 text-center" style={{textAlign: "center", width:"25%;"}}>Opções</th>
                                            </tr>

                                            <tr>
                                                <th className="p-1">
                                                    <input type="text" className="form-control form-control-sm text-center" name="sid" placeholder="Nome"/>
                                                </th>
                                                <th className="p-1">
                                                    <select className="form-control form-control-sm text-center" style={{height: '26px'}}>
                                                        <option >BA</option>
                                                        <option> CE </option>
                                                        <option> MG</option>
                                                    </select>
                                                    </th>
                                                <th className="p-1">
                                                    <input type="text" className="form-control form-control-sm text-center" name="snome" placeholder="Cidade"/>
                                                </th>
                                                <th className="p-1">
                                                    <input type="text" className="form-control form-control-sm text-center" name="snome" placeholder="Data"/>
                                                </th>
                                                <th className="p-1">
                                                    <input type="text" className="form-control form-control-sm text-center" name="scategoria" placeholder="Avaliação"/>
                                                </th>
                                                <th className="p-1">
                                                    
                                                </th> 
                                                
                                                <th className="p-1" style={{textAlign:'left'}}>
                                                    <Button className="" size="sm" color="info" style={{marginRight: '5px'}}>
                                                        <i className="fa fa-search"/>
                                                    </Button>
                                                    
                                                    <a className="btn btn-danger btn-sm" href="#" id="remover" role="button" style={{marginRight: '-73px'}}>
                                                        <i className="fa fa-trash"/>
                                                    </a> 
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="text-center"> ABRH-BA </td>
                                                <td className="text-center"> BA</td>
                                                <td className="text-center">Salvador</td>
                                                <td className="text-center"> 10/09/2020 - 15/09/2020</td>
                                                <td className="text-center"> <Rating/> </td>
                                                <td className="text-center"> Lógistica a desejar</td>
                                                <td className="text-center">
                                                    <Col className="" md="3" xs="3" style={{marginLeft: '8px'}}>
                                                        <Link to="/admin/avaliar-fornecedor">
                                                        <Button
                                                            className="btn-round btn-icon"
                                                            color="success"
                                                            outline
                                                            size="sm"
                                                        >
                                                            <i className="fa fa-exclamation" />
                                                        </Button>
                                                        </Link>
                                                    </Col>
                                                </td>
                                            </tr>

                                        </tbody>

                                    </Table>: null }
                                </TabPane>
                                <TabPane tabId="3">
                                    { this.state.activeTab == 3 ?  <><br/> <h6 className="text-muted"> Endereço</h6><p className="py-2">Rua 1 de Maio, Feira VI, Feira de Santana - BA</p></>: null }
                                </TabPane>
                                <TabPane tabId="4">
                                    { this.state.activeTab == 4 ?  <><br/> <h6 className="text-muted"> Comentário I: </h6><p>Atente em outro munícipio</p></>: null }
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
