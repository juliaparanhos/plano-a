import React from "react";
import {Table} from "reactstrap";
import PropTypes from 'prop-types';


class MenuInterno extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [],
    };

    renderRow = (category) => (
        <tr key={category.id}>
            
            <td className="text-left"> <i className={category.icon}/> &nbsp; {category.name}</td>
            <td><i className={category.prev}/></td>
        </tr>
    );
 

    renderRows = () => this.props.data.map(this.renderRow);

    render(){
        const rows = this.renderRows();
        return(
            <>
                <Table stripped="true"condensed hover>
                        <thead>
                            <tr>
                              
                                <th className="text-primary">Categorias</th>
                                <th></th>
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

export default MenuInterno;