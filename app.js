var translatebtn = document.querySelector("#translate-btn");
var inputxt = document.querySelector("#Inputtxt");
var outputxt = document.querySelector("#Outputtxt");

var url = "https://api.funtranslations.com/translate/minion.json"

function translate(text) {
    return url + "?" + "text=" + text
    // console.log(inputxt);
    // console.log(outputxt);
}

function clickhandler() {
    var input_txt = inputxt.value;
    fetch(translate(input_txt))
        .then((response) => response.json())
        .then((json) => {
            var translatedtxt = json.contents.translated;
            outputxt.innerText = translatedtxt;
        })
}

translatebtn.addEventListener("click", clickhandler);