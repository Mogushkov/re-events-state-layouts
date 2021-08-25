import ShopItem from '../layouts/ShopItem';
import PropTypes from 'prop-types';

export default function ListView ({ cards }) {
    return (
        <ul className='ListView'>
            {cards.map((card, i) => <ShopItem key={i} card={card} />)}
        </ul>    
    )
}

ListView.propTypes = {
    cards: PropTypes.array.isRequired
}