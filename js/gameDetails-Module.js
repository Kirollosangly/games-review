import { gameUi } from "./gameUI-Module.js";

export class detailsPage {
    constructor(auth) {
        this.ui = new gameUi;

        document.getElementById('xmarkClose').addEventListener('click', () => {
            document.getElementById('myCards').classList.remove('d-none');
            document.getElementById('myDetails').classList.add('d-none');
            detailsCon.innerHTML = ``;
        });
        this.gameDetails(auth)
    };

    gameDetails(gameID) {
        let loadPage = document.getElementById('loadPage');
        loadPage.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1f1c3f9eb3msh79f01fea79cc2d9p12f8abjsne863b27baa43',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            },
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`, options)
            .then((response) => response.json())
            .then((response) => this.ui.displayGameDetails(response))
            .finally(() => {
                loadPage.classList.add('d-none')
            });
    };
}






