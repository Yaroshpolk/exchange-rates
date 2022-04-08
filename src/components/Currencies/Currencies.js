import './Currencies.css';
import Currency from "../Currency/Currency";
import Controls from "./Controls/Controls";

function Currencies(props) {

    let currList = props.data.map(item => {
        return <Currency
                    key = { item.NumCode }
                    numCode = { item.NumCode }
                    charCode = { item.CharCode }
                    name = { item.Name }
                    nominal = { item.Nominal }
                    value = { item.Value }
                    oldValue = { item.Previous }
                    activeCurrFunc = { props.activeCurrFunc }
                />
    })


    const handleValueSort = () => {
        currList.sort((a, b) => b - a)
    }

    return (
        <div className="currencies">
            <div className="currencies__header">
                <Controls />
            </div>
            <ul className="currencies__list">
                {
                    props.isLoading
                        ? 'Загрузка...'
                        : currList
                }
            </ul>
            <div className="currencies__footer">
                <Controls />
            </div>
        </div>
    );
}

export default Currencies;