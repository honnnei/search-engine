document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");

    $("#topTenResultsButton").click(event => {
        event.preventDefault();
        let resultsQuery = $("#searchBox").val();
        showTopTenResults(resultsQuery)
    })
    $("#luckyResultButton").click(event => {
        event.preventDefault();
        let luckyQuery = $("#searchBox").val();
        getLuckyPage(luckyQuery)
    })

    function getLuckyPage(luckyQuery){
        axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCCQwD6ahOa5DeFEC5sLeplT88KycyqG_c&cx=006369568077011760523:re8fjbecuqp&q=${luckyQuery}`)
        .then(result => {
            randomIndex = Math.floor(Math.random() * result.data.items.length)
            console.log(result.data.items.length)
            luckyResult = result.data.items[randomIndex].link
            window.open(luckyResult)
        })

    }

    function showTopTenResults(resultsQuery) {
                axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCCQwD6ahOa5DeFEC5sLeplT88KycyqG_c&cx=006369568077011760523:re8fjbecuqp&q=${resultsQuery}`)
                .then(function (googleResults) {
                    let results = [];
                    results = googleResults.data.items
                    let link = results[0].link;
                    console.log(link);
                    displayedResults = results.map(item => {
                    let index = results.indexOf(item)
                    displayResult(index, item.title, item.snippet, item.link);
                    });
                });
    }

    function displayResult(index, titleOf, snippetOf, linkOf) {
   
       let id = index.toString();
       $("#resultsDisplayed").append(`<div id=${id}></div>`);
       $(`#${id}`).append(`<a class="link" href=${linkOf}></a><br>`);
       $(`#${id} .link`).text(`${linkOf}`);
       $(`#${id}`).append(`<a class="title" href=${linkOf}></a>`);
       $(`#${id} .title`).html(`${titleOf}`);
       $(`#${id}`).append(`<p class="snippet">${snippetOf}</p>`);

    }

});
