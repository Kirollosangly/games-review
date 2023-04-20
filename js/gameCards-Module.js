import { detailsPage } from "./gameDetails-Module.js";
import { gameUi } from "./gameUI-Module.js";

export class gameCards {
    constructor() {
        this.cards();

        document.querySelectorAll('li a').forEach((link) => {
            link.addEventListener('click', (e) => {
                document.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                let itemText = e.target;
                this.cards(itemText.innerText.toLowerCase());
            });
        });
        this.ui = new gameUi();
    };

    async cards(category = 'mmorpg') {
        let loadPage = document.getElementById('loadPage');
        loadPage.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1f1c3f9eb3msh79f01fea79cc2d9p12f8abjsne863b27baa43',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                // Accept: "application/json",
                // "Content-Type": "application/json",
            },
        };

        let games = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let gamesData = await games.json();

        this.ui.displayGameCards(gamesData);
        this.startEvent();
        loadPage.classList.add('d-none');
    }

    startEvent() {
        document.querySelectorAll('.card101').forEach((card) => {
            card.addEventListener('click', () => {
                let id = card.dataset.id
                this.showDetails(id);
            });
        });
    };

    showDetails(idGame) {
        let details = new detailsPage(idGame);
        document.getElementById('myCards').classList.add('d-none');
        document.getElementById('myDetails').classList.remove('d-none')
    }

};

















