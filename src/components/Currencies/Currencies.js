import './Currencies.css';
import Currency from "../Currency/Currency";
import Controls from "./Controls/Controls";

function Currencies(props) {

    let currList = null;

    if (!props.isLoading) {
        currList = Object.entries(props.data.Valute).map(item => {
            return <Currency
                key = { item[1].NumCode }
                numCode = { item[1].NumCode }
                charCode = { item[1].CharCode }
                name = { item[1].Name }
                nominal = { item[1].Nominal }
                value = { item[1].Value }
                oldValue = { item[1].Previous }
                activeCurrFunc = { props.activeCurrFunc }
            />
        })
    }

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