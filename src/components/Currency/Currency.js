import './Currency.css';

function Currency(props) {
    return (
        <li className='currency'>
            <div className='currency__number-code'>{ props.numCode }</div>
            <div className='currency__char-code'>{ props.charCode }</div>
            <div className='currency__name'>{props.name}</div>
            <div className='currency__nominal'>{ props.nominal }</div>
            <div className={`currency__value ${ props.value > props.oldValue 
                ? 'currency__value_top' 
                : 'currency__value_low' }`}
            >
                {props.value} { props.value > props.oldValue ? '⯅' : '⯆'}
            </div>
        </li>
    );
}

export default Currency;