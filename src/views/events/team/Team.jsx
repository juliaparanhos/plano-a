import React, {useState} from "react";
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
Input, 
Table,
TabContent, 
TabPane, 
Nav, 
NavItem, 
NavLink,
CardText} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import DataTable from "./index.jsx";
import dataTeam from "../../../services/db/dataTeam.js";

class Team extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          data: dataTeam
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
                                    <CardTitle tag="h5">Equipe - Evento</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}>
                                                Plano A 
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}>
                                                Staffs 
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            { this.state.activeTab == 1 ?  <CardBody> <DataTable data={this.state.data}/> </CardBody> : null }
                                        </TabPane>
                                        <TabPane tabId="2">
                                            { this.state.activeTab == 2 ?  <CardBody> <DataTable data={this.state.data}/> </CardBody> : null }
                                        </TabPane>
                                    </TabContent>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default Team; 