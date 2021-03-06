import './App.css';
import React from "react";
import Header from "../Header/Header";
import Currencies from "../Currencies/Currencies";
import Footer from "../Footer/Footer";

function App() {

    const [serverData, setServerData] = React.useState({});
    const [currenciesList, setCurrenciesList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [activeCurrency, setActiveCurrency] = React.useState();

    const getServerData = () => {
        setIsLoading(true);
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setServerData(data);
                setCurrenciesList(Object.entries(data.Valute).map(item => item[1]))
            })
            .catch((err) => {
                throw new Error(`Ошибка соединения с сервером: ${err.message}`)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    React.useEffect(() => {
        getServerData();
    }, []);

    React.useEffect(() => {
        activeCurrency?.classList.add('currency_active');
    }, [activeCurrency])

    const handleSetActiveCurrency = (evt) => {
        if (activeCurrency === evt.target.closest('.currency')) return

        activeCurrency?.classList.remove('currency_active');
        setActiveCurrency(evt.target.closest('.currency'));
    }

    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Currencies
                    isLoading={isLoading}
                    data={currenciesList}
                    activeCurrFunc={handleSetActiveCurrency}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
