import React from "react";
import {Table} from "reactstrap";
import PropTypes from 'prop-types';

class Estoque extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [],
    };

    renderRow = (estoque) => (
        <tr key={estoque.id}>
            <td className="text-center">{estoque.item}</td>
            <td className="text-center">{estoque.qtd}</td>
            <td className="text-center">{estoque.userout}</td>
            <td className="text-center">{estoque.checkout}</td>
            <td className="text-center">{estoque.checkin}</td>
            <td className="text-center">{estoque.userin}</td>
            <td className="p-2 text-center">
                 <p class="badge badge-success text-white">{estoque.status}</p>  
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
                            <th className="p-1 text-center" style={{textAlign: "center", width:"8%;"}}>Item</th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Quantidade</th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"25%;"}}>Responsável</th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"17%;"}}>Checkout</th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>checkin</th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Responsável </th>
                            <th className="p-1 text-center" style={{textAlign: "center", width:"10%;"}}>Status</th>
                        </tr>
                        <tr>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="item" placeholder="Item"/>
                            </th>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="quantidade" placeholder="Quantidade"/>
                            </th>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="responsavelout" placeholder="Responsável"/>
                            </th>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="checkout" placeholder="Checkout"/>
                            </th> 
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="checkin" placeholder="Chekcin"/>
                            </th> 
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="responsavelin" placeholder="Responsável"/>
                            </th>
                            <th className="p-1">
                                <input type="text" className="form-control form-control-sm text-center" name="status" placeholder="Status"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>

            </>
        )
    }
}

export default Estoque; 