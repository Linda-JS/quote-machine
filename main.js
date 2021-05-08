var endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      console.log("An error occured");
    });
}

var newQuoteButton = document.querySelector('.new-quote');

newQuoteButton.addEventListener('click', getQuote);
