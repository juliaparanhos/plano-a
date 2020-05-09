import React from "react";
import {Table,Col, Button} from "reactstrap";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Fornecedores extends React.Component{
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [],
    };
    renderRow = (providers) => (
        <tr key={providers.id}>
            <td className="text-center">{providers.name}</td>
            <td className="text-center">{providers.state}</td>
            <td className="text-center">{providers.city}</td>
            <td className="text-center">{providers.agent}</td>
            <td className="text-center">{providers.role}</td>
            <td className="text-center">{providers.service}</td>
            <td className="p-2 text-center">
                 <p class="badge badge-success text-white">{providers.status}</p>  
            </td>
            <td>
                <Col md="3" xs="3" style={{marginLeft: '-4px'}}>
                <Link to="/admin/detalhamento-fornecedor">
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
            <td>                                     
                <Link to="/admin/perfil-fornecedor/id">
                <a className="btn btn-link btn-sm btn-round btn-icon border" style={{marginLeft: '-25px'}}>
                    <i className="nc-icon nc-minimal-right"></i>
                </a>
                </Link>                                                      
                
            </td>
        </tr>
    );

    renderRows = () => this.props.data.map(this.renderRow);

    render(){
        const rows = this.renderRows(); 
        return(
            <>
                <Table hover responsive>
                    <thead className="text-primary">
                    <tr>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"8%;"}}>Nome</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Estado</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"25%;"}}>Cidade</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"17%;"}}>Representante</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Cargo</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Serviço </th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Situação</th>
                        <th className="p-1 text-center" style={{textAlign: "center", width:"15%;"}}>Opções</th>
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
                                <input type="text" className="form-control form-control-sm text-center" name="scategoria" placeholder="Representante"/>
                            </th>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="svalor" placeholder="Cargo"/>
                            </th> 
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="svalor" placeholder="Serviço"/>
                            </th> 
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="svalor" placeholder="Situação"/>
                            </th> 
                            <th className="p-1" style={{textAlign:'center'}}>

                                
                                <Button className="" size="sm" color="info" style={{marginRight: '33px', marginLeft: '-14px'}}>
                                    <i className="fa fa-search"/>
                                </Button>
                                
                                <a className="btn btn-danger btn-sm" href="#" id="remover" role="button" style={{marginLeft: '-30px', marginRight: '-33px'}}>
                                    <i className="fa fa-trash"/>
                                </a> 
                            </th>
                    </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </>
        )
    };
}

export default Fornecedores;