import PropTypes from 'prop-types';

const Button = (props) => {
    const {color, text, onClick} = props;
    return (
        <button
            style={{backgroundColor: color}}
            onClick={onClick}
            className='btn'
        >
            {text}
        </button>
    );
   
}

Button.defaultProps={
    color: 'green',
    text: 'Add',
}

Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;