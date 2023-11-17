let focusedOnCard = false;
const cards = [
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf as",
        img: "imgs/rest1.jpg"
    },
    {
        name: "E123 fs g",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest2.jpg"
    },
    {
        name: "Ex234 f",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Exsd sdhong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest3.jpg"
    },
    {
        name: "Example 234",
        description: "chingchong chang chong ghinasdf as",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Ex234 gChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest2.jpg"
    },
    {
        name: "Ec ngChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest1.jpg"
    },
    {
        name: "1 Chi234",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest3.jpg"
    },
    {
        name: "3 asdf",
        description: "chingchong chang chong ghinasdf as",
        img: "imgs/rest1.jpg"
    },
    {
        name: "2 234",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest2.jpg"
    },
    {
        name: "66 1",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Exasdample 09",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest3.jpg"
    },
    {
        name: "Exampl2e ChingCasdhong",
        description: "chingchong chang chong ghinasdf as",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Examp23le ChingsadfChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest2.jpg"
    },
    {
        name: "Exaasdmple Ch ingChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Exa23ample ChingCasdf hong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest3.jpg"
    },
    {
        name: "Exasdfample ChingChong3 ",
        description: "chingchong chang chong ghinasdf as",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Exasdmple C23hingChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest2.jpg"
    },
    {
        name: "Exa2dfmple ChifsangChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest1.jpg"
    },
    {
        name: "Exaasdf mple Ching23fChong",
        description: "chingchong chang chong ghinasdf as234234",
        img: "imgs/rest3.jpg"
    },
];
let showedCards = [];


function init(update = false) {
    let list;
    
    if (update) {
        list = showedCards;
        cardArr = document.getElementsByClassName("card");
        while (cardArr[0]) {
            cardArr[0].parentNode.removeChild(cardArr[0]);
        }
    } else {
        list = cards;
        cardArr = document.getElementsByClassName("card");
        while (cardArr[0]) {
            cardArr[0].parentNode.removeChild(cardArr[0]);
        }
    }

    failedSearch = document.getElementsByClassName("failedSearch");
    if (list.length < 1) {
        if (failedSearch.length > 0) return;
        const name = document.createElement("h2");
        name.className = "failedSearch";
        name.innerHTML = "Search Failed. No results found :(";

        document.getElementsByClassName("container")[0].appendChild(name);
        return;
    } else {
        if (failedSearch.length > 0) failedSearch[0].remove();
    }

    list.forEach((obj) => {
        const card = document.createElement("div");
        card.className = "card";
        
        const img = document.createElement("img");
        img.src = obj["img"];

        const name = document.createElement("p");
        name.className = "name";
        name.innerHTML = obj["name"];

        card.appendChild(img);
        card.appendChild(name);
        document.getElementsByClassName("container")[0].appendChild(card);

        card.addEventListener("click", (e) => {
            if (focusedOnCard) return;

            const container = document.createElement("div");
            container.id = "clickedCard";
            container.setAttribute("tabindex", "-1");

            const form = document.createElement("form");
            form.className = "cardForm";

            const description = document.createElement("p");
            let desc = obj["description"];
            description.innerHTML = desc;
            
            const img = document.createElement("img");
            let imgSrc = obj["img"];
            img.src = imgSrc;

            form.appendChild(img);
            form.appendChild(description);
            container.appendChild(form);
            container.focus();
            document.body.appendChild(container);
            focusedOnCard = true;
        });
    });
}


function handleScroll() {
    document.getElementById("navbar").style.opacity = 0.2;
}


function getSomething(name, param) {
    let val = `No ${param} found.`;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card["name"] === name) {
            val = card[param];
            break;
        }
    }
    return val;
}


function hasMatch(haystack, needle) {
    if (needle == haystack) return 1000;

    const hayArr = haystack.split(" ");
    const needArr = needle.split(" ");
    let matches = [];

    hayArr.forEach((str1) => {
        needArr.forEach((str2) => {
            if (str1 === str2) {
                matches.push(str1);
                return;
            }
        });
    });

    return matches;
}
/*
function hasMatch(str, word) {
    var prefixes = makeTable(word);
    let matches = [];

    let i = 0;
    let j = 0;

    while (i < str.length) {
        if (str.charAt(i) === word.charAt(j)) {
            i++;
            j++;
        }

        if (j === word.length) {
            matches.push(i - j);
            j = prefixes[j - 1];
        } else if (str.charAt(i) !== word.charAt(j)) {
            if (j !== 0) {
                j = prefixes[j - 1];
            } else {
                i++;
            }
        }
    }

    return matches;
}


function makeTable(word) {
    var table = new Array(word.length);
    var maxPrefix = 0;

    table[0] = 0;

    for (let i = 1; i < word.length; i++) {
        while (maxPrefix > 0 && word.charAt(i) !== word.charAt(maxPrefix)) {
            maxPrefix = table[maxPrefix - 1];
        }

        if (word.charAt(maxPrefix) === word.charAt(i)) maxPrefix++;
        table[i] = maxPrefix;
    }
    return table;
}
*/


document.addEventListener("keydown", (e) => {
    if (focusedOnCard && e.key === "Escape") {
        document.getElementsByClassName("container")[0].focus();
        document.getElementById("clickedCard").remove();
        focusedOnCard = false;
    }
});
document.getElementById("search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let searched = document.getElementById("search").value;

        if (searched.trim().length === 0) {
            init();
            return;
        }

        let i = 0;
        showedCards.length = 0;
        cards.forEach((obj) => {
            var name = obj["name"];
            const matches = hasMatch(name, searched);
            if (matches === 1000 || matches.length > 0) {
                showedCards.push(cards[i]);
                i++
                return;
            }
            i++;
        });
        init(true);
    }
});
document.getElementsByClassName("container")[0].addEventListener("scrollend", (e) => {
    document.getElementById("navbar").style.opacity = 0.95;
});