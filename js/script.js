/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
quotes = [
  { 
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    source: "Albert Einstein",
    year: 1930,   
  },
  { 
    quote: "The good life is one inspired by love and guided by knowledge.",
    source: "Bertrand Russell",
    year: 1925,
    citation: "What I Believe",
  },
  { 
    quote: "A man of science should think of what will be said of him in the following century, not of the insults or the compliments of one day.",
    source: "Louis Pasteur",
  },
  { 
    quote: "Science is what we understand well enough to explain to a computer. Art is everything else we do.",
    source: "Donald E. Knuth",
    year: 1996,
    citation: "A=B (foreword)",
  },
  { 
    quote: "New knowledge is the most valuable commodity on earth. The more truth we have to work with, the richer we become.",
    source: "Kurt Vonnegut",
    year: 1963,
    citation: "Cat’s Cradle",
  },
  { 
    quote: "As one goes through life one learns that if you don't paddle your own canoe, you don't move.",
    source: "Katharine Hepburn",
    year: 1991,
    citation: "Me: Stories of My Life",
  },
  { 
    quote: "None of us can know what we are capable of until we are tested.",
    source: "Elizabeth Blackwell",
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length); // set index to a random integer in the range of the quotes array index
  return quotes[index];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const quote = getRandomQuote(); // pick a random quote
  
  //set the html for the actual quote and source, with unclosed <p> tag in case there's more metadata
  let quoteHTML = 
  `<p class="quote">${quote.quote}</p>
   <p class="source">${quote.source}`;
  
  if ( quote.citation ) { // if there's a citation property, include it, styled via class attribute
    quoteHTML += `<span class="citation">${quote.citation}</span>`;
  }
  
  if ( quote.year || quote.year === 0) { // just in case there was a quote from year 0 and the year property was a number instead of a string!!
    quoteHTML += `<span class="year">${quote.year}</span>`;
  }
  
  quoteHTML += '</p>';
  
  document.getElementById('quote-box').innerHTML = quoteHTML;
  randomizeBackgroundColor(); // extra credit function. Change background color on each button click too.
  // return quoteHTML;
  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


// EXTRA CREDIT STUFF BELOW
/***
 * `randomizeBackgroundColor` function
***/
function randomizeBackgroundColor() {
  
  // made a li'l internal function so I don't have to copy/paste into the template literal
  function randomColorValue() {
    return Math.floor(Math.random() * 256);
  }
  
  // pick 3 numbers from 0 to 255 and wrap them in 'rgb()'
  const bgColorString = `rgb(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()})`;
  
  // make the new string into the body background color
  document.querySelector('body').style.backgroundColor = bgColorString;
}