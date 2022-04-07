import './Controls.css';

function Controls() {
    return (
        <ul className='currencies__controls'>
            <li className="currencies__controls-item">Цифр. код</li>
            <li className="currencies__controls-item">Букв. код</li>
            <li className="currencies__controls-item">Валюта</li>
            <li className="currencies__controls-item">Единиц</li>
            <li className="currencies__controls-item">Курс</li>
        </ul>
    );
}

export default Controls;