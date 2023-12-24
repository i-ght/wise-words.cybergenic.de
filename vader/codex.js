function getQuotes() {
    const htmlQuotes = document.getElementById("quotes");
    const lis = htmlQuotes.getElementsByTagName("li");
    const quotes = [];
    for (const li of lis) {
        const ps = li.getElementsByTagName("p");
        const psHtml = [];
        for (const p of ps) {
            psHtml.push(`<p>${p.innerHTML}</p>`)
        }
        quotes.push(psHtml);
    }
    return quotes;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function construct6QuotesHtmlList(one, two, three, four, five, six) {
    return `<ul><li>${one.join("")}</li><li>${two.join("")}</li><li>${three.join("")}</li><li>${four.join("")}</li><li>${five.join("")}</li><li>${six.join("")}</li></ul>`
}

function dequeueSixQuotes(quotes) {
    if (quotes.length < 6) {
        throw new Error("quotes queue length needs to be >= 6.");
    }

    return [quotes.shift(), quotes.shift(), quotes.shift(), quotes.shift(), quotes.shift(), quotes.shift()];
}

function changeReflectorContents(quotes) {
    const [one, two, three, four, five, six] = dequeueSixQuotes(quotes);
    const html = construct6QuotesHtmlList(one, two, three, four, five, six);

    const reflector = document.getElementById("reflector");
    reflector.innerHTML = html;
}

function initReflector(quotes) {
    const reflector = document.getElementById("reflector");
    reflector.addEventListener("animationiteration", () => {
        if (quotes.length < 6) {
            const newQuotes = getQuotes();
            shuffleArray(newQuotes);
            quotes.push(...newQuotes)
        }
        changeReflectorContents(quotes);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const quotes = getQuotes();
    shuffleArray(quotes);
    initReflector(quotes);
    changeReflectorContents(quotes);
});

