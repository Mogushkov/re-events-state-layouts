import React from 'react';
import PropTypes from 'prop-types';
import IconSwitch from '../layouts/IconSwitch';
import CardsView from '../layouts/CardsView';
import ListView from '../layouts/ListView';

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        this.state = {icon: 'view_list'};
    }

    render() {
        return (
            <>
            <IconSwitch icon={this.state.icon} onSwitch={(icon) => this.setState({icon})} />
            {this.state.icon === 'view_list' ? <CardsView cards={this.products} /> : <ListView cards={this.products} />}  
            </>
        )    
    }
}

Store.propTypes = {
    products: PropTypes.array.isRequired
}