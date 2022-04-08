import './Currency.css';

function Currency({name, numCode, value, activeCurrFunc, oldValue, nominal, charCode}) {

    return (
        <li className='currency' onClick={activeCurrFunc} title={name}>
            <div className='currency__number-code'>{numCode}</div>
            <div className='currency__char-code'>{charCode}</div>
            <div className='currency__name'>{name}</div>
            <div className='currency__nominal'>{nominal}</div>
            <div className={`currency__value ${value > oldValue
                ? 'currency__value_top'
                : 'currency__value_low'}`}
            >
                {value} {value > oldValue ? '⯅' : '⯆'}
            </div>
        </li>
    );
}

export default Currency;