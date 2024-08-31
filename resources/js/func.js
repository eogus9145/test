const fetchLang = (lang) => {
    document.querySelector("#langBtn").innerText = document.documentElement.lang == 'ko' ? 'ENGLISH' : '한국어';
    let langElements = document.querySelectorAll("*[lang-id]");
    for(let i=0; i<langElements.length; i++) {
        const id = langElements[i].getAttribute("lang-id");
        let textObj = langPack[document.documentElement.lang];
        let categoryNm = id.split("_")[0];
        let category = textObj[categoryNm];
        let value = category[id].value;
        langElements[i].innerHTML = (value) ? value : null;
    }
    setFullPageMenu();
    setFullPageEvent();
    handleNavColor(location.hash.substring(1));
}

const getList = (category, loopId) => {
    return result = langPack[document.documentElement.lang][category][loopId];
}

const setEffect = (hash) => {
    if(!hash) hash = (window.location.hash.substring(1,2).toUpperCase() + window.location.hash.substring(2)).trim();
    else hash = (hash.substring(0,1).toUpperCase() + hash.substring(1)).trim();
    let upperHash = hash || "Intro";
    let funcNm = "init" + upperHash;
    window[funcNm]();
}

const setEvent = () => {

    document.querySelector("#langBtn").addEventListener("click", (e) => {
        document.documentElement.lang = (e.target.textContent == 'ENGLISH') ? "en" : "ko";
        e.target.textContent = (e.target.textContent == 'ENGLISH') ? "한국어" : "ENGLISH";
        fetchLang();
    });

    window.addEventListener("resize", () => {
        document.querySelectorAll("section").forEach(v => v.style.width = "100%");
        handleNavColor(location.hash.substring(1));
    });

}

// 동적으로 요소를 만들어 반환한다
const createElement = (tagName, className, style) => {
    if(!tagName) return null;
    let el = document.createElement(tagName);   
    if(className) el.classList.add(className);
    if(!style) return el;
    for(let key in style) el.style[key] = style[key];
    el.style.boxSizing = "border-box";
    return el;
}

const setFocus = (el) => {
    el.style.transition = "0.5s ease";
    el.style.transform = "scale(1.1)";
    el.parentElement.classList.add("on");
}
const setBlur = (el) => {
    el.style.transition = "0.5s ease";
    el.style.transform = "scale(1)";
    el.parentElement.classList.remove("on");
}