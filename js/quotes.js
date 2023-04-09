const quotes = [
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder',
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand',
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller',
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.',
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison',
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman',
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly',
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga',
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin',
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn',
    },
    {
        quote: 'Life has no limitations, except the ones you make.',
        author: 'Les Brown',
    },
    {
        quote: 'Life is a lively process of becoming.',
        author: 'Gen. Douglas MacArthur',
    },
    {
        quote: 'Life is what happens while you are busy making other plans.',
        author: 'John Lennon',
    },
    {
        quote: 'All great changes are preceded by chaos.',
        author: 'Deepak Chopra',
    },
    {
        quote: 'Change alone is eternal, perpetual, immortal',
        author: 'Arthur Shopenhauer',
    },
    {
        quote: 'By changing nothing, nothing changes.',
        author: 'Tony Robbins',
    },
    {
        quote: 'Change is inevitable. Growth is optional.',
        author: 'John C. Maxwell',
    },
    {
        quote: 'Change your thinking, change your life.',
        author: 'Ernest Holmes',
    },
    {
        quote: 'Failure is not fatal, but failure to change might be.',
        author: 'John Wooden',
    },
    {
        quote: 'Nothing is forever except change.',
        author: 'Buddha',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
