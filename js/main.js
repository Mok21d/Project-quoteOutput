
var quoteArray = [
    {
        line: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {   
        line: "“So many books so little time“",
        author: "― Frank Zappa"
    },
    {
        line: "“A room without books is like a body without a soul.",
        author: "― Marcus Tullius Cicero",
    },
    {
        line: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },
    { 
        line: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi",
    },
    {
        line: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss",
    }
];
var previousIndex;
 
var generateQuote = function () {
    var randomIndex = Math.floor(Math.random() * quoteArray.length);
    while (randomIndex === previousIndex) {
        randomIndex = Math.floor(Math.random() * quoteArray.length); 
    }
    previousIndex = randomIndex;
    document.getElementById("quote").innerHTML = quoteArray[randomIndex].line;
    document.getElementById("author").innerHTML = quoteArray[randomIndex].author;
}
