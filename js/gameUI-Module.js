let cardRow = document.getElementById('cardRow');
let detailsCon = document.getElementById('detailsCon');

export class gameUi {

    displayGameCards(cardsData) {
        let cup = ``;
        for (let i = 0; i < cardsData.length; i++) {
            cup += `
                    <div data-id="${cardsData[i].id}" class="card101 col-sm-6 col-lg-3 p-0">
                        <div class="inner-crd m-2 p-2 rounded-3">
                            <div class="crd-img">
                                <img src="${cardsData[i].thumbnail}" class="w-100 rounded-top-3" alt="">
                            </div>
                            <div class="crd-content">
                                <div class="crd-content-header d-flex justify-content-between align-items-center py-1">
                                    <p class="m-0 fw-semibold text-white">${cardsData[i].title}</p>
                                    <button type="button" class="crd-btn-1 py-0 px-2 bg-primary fw-semibold">Free</button>
                                </div>
                                <div class="content">
                                    <p class="m-0 text-center text-white-50">
                                        ${cardsData[i].short_description.split(" ", 10).join(" ")}
                                    </p>
                                </div>
                            </div>
                            <hr>
                            <div class="crd-footer d-flex justify-content-between align-items-center">
                                <button type="button" class="crd-btn-2 py-0 px-2 fw-semibold">${cardsData[i].genre}</button>
                                <button type="button" class="crd-btn-3 py-0 px-2 fw-semibold">${cardsData[i].platform.split(" ", 2).join(" ")}</button>
                            </div>
                        </div>
                    </div>    
                    `
        };
        cardRow.innerHTML = cup;
    };

    displayGameDetails(details) {
        let cup2 = `
                <div class="col-md-5">
                    <img src="${details.thumbnail}" class="w-100">
                </div>
                <div class="col-md-7 py-4 py-md-0">
                    <h4 class="m-0 mb-2 p-0">Title: ${details.title}</h4>
                    <p class="m-0 my-3 dBtn">Category: <span class="fw-semibold">${details.genre}</span></p>
                    <p class="m-0 my-3 dBtn">Platform: <span class="fw-semibold">${details.platform}</span></p>
                    <p class="m-0 my-3 dBtn">Status: <span class="fw-semibold">${details.status}</span></p>
                    <p class="spacing m-0 my-3">
                        ${details.description}
                    </p>
                    <button type="button" class="btn btn-outline-warning text-white"><a href="${details.game_url}" target="_blank" class="text-decoration-none text-white">Show Game</a></button>
                </div>
                    `
        detailsCon.innerHTML = cup2;
        window.scrollTo(0,0);
    };
};









