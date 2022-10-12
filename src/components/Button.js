import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button(props) {


    const { klasat, handleClick, age } = props;

    return (
        <ButtonWrapper>
            <button type={'button'} className={'btn btn-primary ' + klasat} onClick={handleClick}>
                {props.children}
            </button>
        </ButtonWrapper>

    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    klasat: PropTypes.oneOf([
        'btn', 'btn-primary', 'button-1', 'button-2', 'button-3', 'btn btn-primary'
    ]),
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: start;
`;

export default Button;