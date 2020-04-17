const quotes=[
{
    name:'Stephen King',
    quote:'Get busy living or get busy dying.'
},
{
    name:'John F.Kennedy',
    quote:'Those who dare to fail miserably can achieve greatly.'
},
{
    name:'Abraham Lincoln',
    quote:'I am a success today because  I had a friend who believed in me and I did not have the heart to let him down.'
},
{
    name:'Leo Tolstoy',
    quote:'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    
    let i = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[i].name;
    quote.innerHTML = quotes[i].quote;
    
    
}
    
