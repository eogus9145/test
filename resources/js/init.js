const docInit = () => {
    //여기서 페이지가 로드 될때 먼저 요소를 전부 렌더링.

    //intro

    //about
    let aboutList = getList("about", "about_loop01");
    for(let i=0; i<aboutList.length; i++) {
        let divRow = document.createElement("div");
        let name = document.createElement("div");
        let rows = document.createElement("div");
        divRow.classList.add("divRow");
        name.innerHTML = aboutList[i].name;
        let rowsHtml = "";
        for(let j=0; j<aboutList[i].rows.length; j++) {
            let row = aboutList[i].rows[j];
            rowsHtml += (j == 0) ? row : "<br>" + row;
        }
        rows.innerHTML = rowsHtml;
        divRow.appendChild(name);
        divRow.appendChild(rows);
        document.querySelector("#about_loop").appendChild(divRow);
    }
    
    //history
    document.querySelector("#historyContent").innerHTML = "";
    const historyList = getList("history", "history_loop01");
    let parent = document.querySelector("#historyContent");
    for(let i=0; i<historyList.length; i++) {
        let [item, line, year, rows] = Array(4).fill().map(() => document.createElement("div"));
        item.classList.add("historyItem");
        line.classList.add("historyItemLine");
        year.classList.add("historyItemYear");
        rows.classList.add("historyItemRows");
        year.innerHTML = historyList[i].name;
        let ul = document.createElement("ul");
        ul.classList.add("historyItemUl")
        rows.appendChild(ul);
        for(let j=0; j<historyList[i].rows.length; j++) {
            let r = historyList[i].rows[j];
            let li = document.createElement("li");
            li.textContent = r;
            ul.appendChild(li);
        }
        let [start, middle, end] = Array(4).fill().map(() => document.createElement("div"));
        line.appendChild(start);
        line.appendChild(middle);
        line.appendChild(end);
        middle.classList.add("line");
        if(i == 0) {
            start.classList.add("dot");
            end.classList.add("dot-half-left");
        } else if (i == historyList.length - 1) {
            start.classList.add("dot-half-right");
            end.classList.add("dot");
        } else {
            start.classList.add("dot-half-right");
            end.classList.add("dot-half-left");
        }
        if(i % 2 == 0) {
            year.classList.add("alignEnd");
            rows.classList.add("alignStart");
            item.appendChild(year);
            item.appendChild(line);
            item.appendChild(rows);
        } else {
            year.classList.add("alignStart");
            rows.classList.add("alignEnd");
            item.appendChild(rows);
            item.appendChild(line);
            item.appendChild(year);
        }
        parent.appendChild(item);
    }
    
    //service
    getService();
    

    //solution

    //certification
    let certlist = getList("certification", "certification_loop01");
    let certPage = document.querySelector("#certPage");
    let rect = certPage.getBoundingClientRect();
    let height = rect.height / 2;
    certPage.innerHTML = "";
    let certView = document.querySelector("#certViewImg");
    let certPageWidth = 0;
    for(let i=0; i<certlist.length; i++) {        
        let imgPath = certlist[i].path;
        let itemWrap = document.createElement("div");
        itemWrap.classList.add("certImgWrap");
        itemWrap.style.width = "180px";
        itemWrap.style.height = height + "px";
        let item = document.createElement("div");
        item.classList.add("certImg");
        item.style.backgroundImage = `url('${imgPath}')`;        
        itemWrap.appendChild(item);
        certPage.appendChild(itemWrap);
        certPageWidth += itemWrap.getBoundingClientRect().width;
        item.addEventListener("click", (e)=>{
            pause();
            certView.src = imgPath;
            certPage.setAttribute("data-is_slide", "false");
            document.querySelectorAll(".certImg").forEach((v) => {
                setBlur(v);
            });
            setFocus(e.target);
        });
        if(i==0) setFocus(item);
    }
    certView.src = certlist[0].path;
    certPage.style.width = (certPageWidth / 2) + "px";
    let playBtn = document.querySelector("#certPlayBtn");
    let pauseBtn = document.querySelector("#certPauseBtn");
    const pause = () => {

    }
    const slide = () => {

    }
    playBtn.addEventListener("click", slide);
    pauseBtn.addEventListener("click", pause);

    //partner
    let content = document.querySelector("#partnerContent");
    content.innerHTML = "";
    let contentList = getList("partner", "partner_loop01");
    let rowCnt = (contentList.length / 3) + (contentList.length % 3);
    let appendIndex = 0;
    for(let i=0; i<rowCnt; i++) {
        let row = document.createElement("div");
        row.classList.add("partnerRow");
        for(let j=0; j<3; j++) {
            let img = document.createElement("img");
            img.classList.add("partnerItem");
            img.src = contentList[appendIndex].path;
            row.appendChild(img);
            appendIndex++;
        }
        content.appendChild(row);
    }
    
    //contact


}

initIntro = () => {
    
}

initAbout = () => {

}

initHistory = () => {
    
}

initService = () => {
    
}

initSolution = () => {
    
}

initCertification = () => {

}

initPartner = () => { 

}

initContact = () => {
    
}

const getService = () => {
    let serviceList = getList("service", "service_loop01");
    let serviceUl = document.querySelector("#service_menu > ul");
    const showDetail = (idx) => {
        let parent = document.querySelector("#service_detail");        
        parent.innerHTML = "";
        let [text, img, title, desc, rows, link, android, ios, etc] = Array(9).fill().map(() => document.createElement("div"));        
        text.classList.add("service_detail_text");
        parent.appendChild(text);
        if(serviceList[idx].img !== "") {
            img.classList.add("service_detail_img");
            img.style.backgroundImage = "url('" + serviceList[idx].img + "')";
            img.style.backgroundPosition = "center";
            img.style.backgroundSize = "cover";
            parent.appendChild(img);
        }
        if(serviceList[idx].title !== "") {
            title.classList.add("service_detail_title");
            title.innerHTML = serviceList[idx].name;
            text.appendChild(title);
        }
        if(serviceList[idx].desc !== "") {
            desc.classList.add("service_detail_desc");
            desc.innerHTML = serviceList[idx].desc;
            text.appendChild(desc);
        }
        if(serviceList[idx].rows !== "") {            
            let ul = document.createElement("ul");
            rows.classList.add("service_detail_rows");
            for(let i=0; i<serviceList[idx].rows.length; i++) {
                if(typeof serviceList[idx].rows[i] == 'string') {
                    let li = document.createElement("li");
                    li.innerHTML = "-&nbsp;&nbsp;" + serviceList[idx].rows[i];
                    ul.appendChild(li);
                } else {
                    let li = document.createElement("li");
                    let ul2 = document.createElement("ul");
                    li.innerHTML = "-&nbsp;&nbsp;" + serviceList[idx].rows[i].name;
                    for(let j=0; j<serviceList[idx].rows[i].rows.length; j++) {
                        let row2 = serviceList[idx].rows[i].rows[j];
                        let li2 = document.createElement("li");
                        li2.classList.add   ("rowsinrow")
                        li2.innerHTML = "&nbsp;&nbsp;&nbsp;" + (j + 1) + ".&nbsp;" + serviceList[idx].rows[i].rows[j];
                        ul2.appendChild(li2);
                    }
                    li.appendChild(ul2);
                    ul.appendChild(li);
                }
            }
            rows.appendChild(ul);
            text.appendChild(rows);
        }
        if(serviceList[idx].android !== "" || serviceList[idx].ios !== "") {
            link.classList.add("service_detail_link");
            text.appendChild(link);
            if(serviceList[idx].android !== "") {
                android.classList.add("service_detail_android");
                link.appendChild(android);
                android.addEventListener("click", (e)=>{
                    window.open(serviceList[idx].android, "_blank");
                });
            }
            if(serviceList[idx].ios !== "") {
                ios.classList.add("service_detail_ios");
                link.appendChild(ios);
                ios.addEventListener("click", (e)=>{
                    window.open(serviceList[idx].ios, "_blank");
                });
            }
        }
        if(serviceList[idx].etc !== "") {
            etc.classList.add("service_detail_etc");
            etc.innerHTML = serviceList[idx].etc;
            text.appendChild(etc);
        }
    }
    for (let i=0; i<serviceList.length; i++) {
        let li = document.createElement("li");
        li.textContent = serviceList[i].name;
        li.classList.add("service_menu_ul_li");
        li.setAttribute("data-idx", i);
        if(i == 0) {
            li.classList.add("active");
            showDetail(0);
        }
        serviceUl.appendChild(li);
        li.addEventListener("click", (e) => {
            let idx = e.target.getAttribute("data-idx");
            let menus = document.querySelectorAll(".service_menu_ul_li");
            menus.forEach(v => v.classList.remove("active"));
            e.target.classList.add("active");
            showDetail(idx);
        });
    }
}