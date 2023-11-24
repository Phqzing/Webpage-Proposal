let focusedOnCard = false;
const cards = [
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf as",
        imgs: [
            "imgs/rest3.jpg",
            "imgs/rest2.jpg",
            "imgs/rest1.jpg"
        ]
    },
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf as",
        imgs: [
            "imgs/rest3.jpg",
            "imgs/rest2.jpg",
            "imgs/rest1.jpg"
        ]
    },
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf as",
        imgs: [
            "imgs/rest3.jpg",
            "imgs/rest2.jpg",
            "imgs/rest1.jpg"
        ]
    },
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf as",
        imgs: [
            "imgs/rest3.jpg",
            "imgs/rest2.jpg",
            "imgs/rest1.jpg"
        ]
    },
    {
        name: "asdf234 sdaf",
        description: "chingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf aschingchong chang chong ghinasdf as",
        imgs: [
            "imgs/rest3.jpg",
            "imgs/rest2.jpg",
            "imgs/rest1.jpg"
        ]
    },
];
let showedCards = [];
let navbar = document.getElementById("navbar");
let temp;
const onScrollStop = callback => {
    let isScrolling;
    document.getElementsByClassName("container")[0].addEventListener("scroll", (e) => {
        clearTimeout(isScrolling);
        navbar.style.opacity = 0.2;
        isScrolling = setTimeout(() => {
            callback();
        }, 500);
    },
    false
    );
};
let count = 0;

onScrollStop(() => {
    navbar.style.opacity = 0.95;
}); 


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
        img.src = obj["imgs"][0];

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
            description.setAttribute("align", "center");
            description.innerHTML = desc;
            
            const slider = document.createElement("div");
            slider.className = "slider";

            const prevButton = document.createElement("button");
            prevButton.className = "prevButton";
            prevButton.type = "button";
            prevButton.setAttribute("onclick", `slide("prev")`);
            prevButton.innerHTML = "PREV";

            const nextButton = document.createElement("button");
            nextButton.className = "nextButton";
            nextButton.type = "button";
            nextButton.setAttribute("onclick", `slide("next")`);
            nextButton.innerHTML = "NEXT";

            const buttonContainer = document.createElement("div");
            buttonContainer.className = "buttonContainer";

            buttonContainer.appendChild(prevButton);
            buttonContainer.appendChild(nextButton);
            
            obj["imgs"].forEach((img) => {
                const imgElement = document.createElement("img");
                imgElement.className = "slideImgs";
                imgElement.src = img;
                slider.appendChild(imgElement);
            });
            slider.appendChild(buttonContainer);

            form.appendChild(slider);
            form.appendChild(description);
            container.appendChild(form);
            container.focus();
            document.body.appendChild(container);

            const slideImgs = document.querySelectorAll(".slideImgs");
            slideImgs.forEach((slideImg, index) => {
                slideImg.style.left = `${index * 100}%`;
            });
            count = 0;

            temp = document.getElementsByClassName("container")[0];
            temp.parentNode.removeChild(temp);
            navbar.parentNode.removeChild(navbar);
            focusedOnCard = true;
        });
    });
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
    if (needle.toLowerCase() == haystack.toLowerCase()) return 1000;

    const hayArr = haystack.split(" ");
    const needArr = needle.split(" ");
    let matches = [];

    hayArr.forEach((str1) => {
        needArr.forEach((str2) => {
            if (str1.toLowerCase() === str2.toLowerCase()) {
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
        document.getElementById("clickedCard").remove();
        temp.setAttribute("align", "center");
        document.body.appendChild(temp);
        document.body.appendChild(navbar);
        document.getElementsByClassName("container")[0].focus();
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


function slide(val) {
    const slideImgs = document.querySelectorAll(".slideImgs");
    if (slideImgs.length <= 0) return;

    if (val == "prev" && count > 0) count--;
        if (val == "next" && count < (slideImgs.length - 1)) count++;

    slideImgs.forEach((slideImg) => {
        slideImg.style.transform = `translateX(-${count * 100}%)`;
    });
}