document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");
    let topTenButtonClick = false;
    let luckyButtonClick = false;
    
    $("#topTenResultsButton").click(function(e) {
        event.preventDefault();
        topTenButtonClick = true;
        getQuery();
    });

    $("#luckyResultButton").click(function(e) {
        event.preventDefault();
        luckyButtonClick = true;
        getQuery();

    });


    function getQuery() {
        if (topTenButtonClick) {
            //show top ten results
            let resultsQuery = $("#searchBox").val();
            console.log("will show results for: " + resultsQuery);
            showTopTenResults(resultsQuery);
        } else if (luckyButtonClick) {
            //show lucky result
            let luckyQuery = $("#searchBox").val();
            console.log("will show one lucky result for: " + luckyQuery);
            getLuckyPage(luckyQuery)
        }
        else {
            console.log('error');
        }
    }

    function getLuckyPage(luckyQuery){
        axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSy_eMGwVqsKZzHBPvIiBz-HBFmK8Uxo&cx=006369568077011760523:re8fjbecuqp&q=${luckyQuery}`)
        .then(result => {
            randomIndex = Math.floor(Math.random() * result.data.items.length)
            console.log(result.data.items.length)
            luckyResult = result.data.items[randomIndex].link
            window.open(luckyResult)
        })

    }

    function showTopTenResults(resultsQuery) {
                axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBZSy_eMGwVqsKZzHBPvIiBz-HBFmK8Uxo&cx=006369568077011760523:re8fjbecuqp&q=${resultsQuery}`)
                .then(function (googleResults) {
                    let results = [];
                    results = googleResults.data.items
                    let link = results[0].link;
                    console.log(link);
                    displayedResults = results.map(item => {
                    console.log(item.title.charAt(0));
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
