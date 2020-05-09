import React from "react";
import {Table} from "reactstrap";
import PropTypes from 'prop-types';


class Equipe extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [],
    };

    renderRow = (team) => (
        <tr key={team.id}>
            <td className="text-center"> {team.name}</td>
            <td className="text-center"> {team.lastname} </td>
            <td className="text-center"> {team.phone} </td>
            <td className="text-center"> {team.email} </td>
        </tr>
    );
 
    renderRows = () => this.props.data.map(this.renderRow);

    render(){
        const rows = this.renderRows();
        return(
            <>
                <Table stripped="true"condensed hover responsive>
                    <thead>
                        <tr>
                            
                            <th className="text-center">Nome</th>
                            <th className="text-center">Sobrenome</th>
                            <th className="text-center">Telefone</th>
                            <th className="text-center">Email</th>
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

export default Equipe;