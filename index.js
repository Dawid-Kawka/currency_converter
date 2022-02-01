window.onload = function () {
    rates.init();
}

class ExchangeRates {

    url = "https://api.nbp.pl/api/exchangerates/tables/a/last/?format=json";

    init() {
        this.loadData();
    }

    loadData() {
        fetch(this.url).then((response) => {
            response.json().then((data) => {
                this.parseData(data);
            });
        });
    }

    parseData(data) {
        console.log(data);
        data = data[0];
        this.table = data.table;
        this.date = data.effectiveDate;
        this.no = data.no;
        this.ratesData = data.rates;


    }

}

const rates = new ExchangeRates();



