window.onload = function () {
    rates.init();
}

class ExchangeRates {

    url = "https://api.nbp.pl/api/exchangerates/tables/a/last/?format=json";

    tBody = document.querySelector("#ratesTable tbody");

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

        document.querySelector("h3").innerHTML = `Kurs Walut <br>
        Data: ${this.date} <br>
        No: ${this.no}`

        for (let v in data.rates) {
            this.addRateToTable(data.rates[v])
        }
    }

    addRateToTable(el) {
        console.log(el)

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="align-middle"> ${el.code} </td>
            <td class="align-middle"> ${el.currency} </td>
            <td class="align-middle"> ${el.mid.toFixed(2)}zł</td>
        `;

        this.tBody.appendChild(tr);
    }
}

const rates = new ExchangeRates();



