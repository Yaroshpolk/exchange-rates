import './App.css';
import React from "react";
import Header from "../Header/Header";
import Currencies from "../Currencies/Currencies";
import Footer from "../Footer/Footer";

function App() {

  let [currenciesData, setCurrenciesData] = React.useState({});
  let [isLoading, setIsLoading] = React.useState(true);

  const getServerData = () => {
      setIsLoading(true);
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCurrenciesData(data);
        })
        .catch((err) => {
          throw new Error(`Ошибка соединения с сервером: ${err.message()}`)
        })
          .finally(() => {
              setIsLoading(false);
          })
  }

  React.useEffect(() => {
    getServerData();
  }, [])

  return (
    <div className="App">
        <Header />
        <div className="content">
            <Currencies
                isLoading = {isLoading}
                data = {currenciesData}
            />
        </div>
        <Footer />
    </div>
  );
}

export default App;
