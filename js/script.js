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


/***
 * `printQuote` function
***/


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);