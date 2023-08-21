const quotes = [
  {'author': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },
  {'author': 'Wayne Gretzy', 
   'quote': 'You miss 100% of the shots you don\'t take.'
  },
  {'author': 'Frank Sinatra', 
   'quote': 'The best revenge is massive success.'
  },
  {'author': 'Epictetus', 
   'quote': 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {'author': 'Nelson Mandela', 
   'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
  },
  {'author': 'Jim Rohn', 
   'quote': 'Beware of what you become in pursuit of what you want.'
  },
];

function generateQuote(){
  const random = Number.parseInt(Math.random()*quotes.length + 1);
  document.getElementById("quote-contain").innerText = `"${quotes[random].quote}"`;
  document.getElementById("author-name").innerText = `${quotes[random].author}`;
  
}

