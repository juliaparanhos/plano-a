import React from "react";
import {Table} from "reactstrap";
import PropTypes from 'prop-types';
 

class Perfil extends React.Component{
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        data: [],
    };

    renderRow = (profile) => (
        <></>
    );
    render(){
        return(
            <>
            </>
        )
    }
}

export default Perfil;