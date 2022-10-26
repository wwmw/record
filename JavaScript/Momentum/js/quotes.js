const quotes = [
    {
        quote: "first quote",
        author: "author_one"
    },
    {
        quote: "second quote",
        author: "author_two"
    },
    {
        quote: "third quote",
        author: "author_three"
    },
    {
        quote: "fourth quote",
        author: "author_four"
    },
    {
        quote: "fifth quote",
        author: "author_five"
    },
    {
        quote: "sixth quote",
        author: "author_six"
    },
    {
        quote: "seventh quote",
        author: "author_seven"
    },
    {
        quote: "eighth quote",
        author: "author_eight"
    },
    {
        quote: "ninth quote",
        author: "author_nine"
    },
    {
        quote: "tenth quote",
        author: "author_ten"
    }
]

const sentence = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

sentence.innerText = `${quotes[Math.floor(Math.random() * quotes.length)].quote} - `
author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author

console.log(
    quotes[Math.floor(Math.random() * quotes.length)].quote,
    quotes[Math.floor(Math.random() * quotes.length)].author
)