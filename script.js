const btn = document.getElementById('quote-button');
const content = document.getElementById('text');
const author = document.getElementById('text-one');
const twitter = document.getElementById('twitter-button');

// New Quote Button Event Listener

btn.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', true);
  xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    const quote = data.quoteText;
    const nameOfAuthor = data.quoteAuthor;
    getQuote(quote, nameOfAuthor);

  };

  xhr.send();
});

function getQuote(newQuote, nameAuthor) {
  content.textContent = newQuote;
  author.textContent = nameAuthor;
}

// Twitter Button Event Listener

twitter.addEventListener('click', function () {
  if (content.textContent == '') {
    alert('There must be a quote selected');
  } else if (content.textContent.length > 280) {
    alert('Must be less than 280 characters to tweet');
  } else {
    const url = 'https://twitter.com/intent/tweet';
    window.open(url + '?text=' + content.textContent + ' ' + author.textContent);
  }
});
