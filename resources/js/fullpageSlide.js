let slideSpeed = 1;
let fullPageIsAnimate = false;

const initFullPage = () => {
	setFullPageMenu();
	setFullPageQuick(true);
	setFullPageEvent();
	setFullPageHandleHash();
}

const setFullPageHandleHash = () => {
	if(!location.hash) hashScroll('intro', 'menu');
	else hashScroll(location.hash.substring(1), 'menu');
}

const setFullPageMenu = () => {
	document.querySelector("#fullpage").style.transition = slideSpeed + "s ease";
	let menuList = getList("menu", "menu_loop01");
	if(document.querySelector("#menu")) document.querySelector("#menu").remove();
	let menuContainer = document.createElement("div");
	let menuUl = document.createElement("ul");
	menuContainer.id = "menu";
	for(let i=1; i<menuList.length; i++){
		let li2 = document.createElement("li");
		let aTag = document.createElement("a");
		aTag.setAttribute("data-id", menuList[i].href.substring(1));
		aTag.textContent = menuList[i].name;
		li2.appendChild(aTag);
		menuUl.appendChild(li2);
	}
	menuContainer.appendChild(menuUl);
	document.querySelector("#menuWrap").insertBefore(menuContainer, document.querySelector("#lang"));
	document.querySelector("#menu > ul > li > a:nth-child(1)").classList.add("on");
}

const setFullPageQuick = (isDisplay) => {
	let menuList = getList("menu", "menu_loop01");
	if(document.querySelector(".quick")) document.querySelector(".quick").remove();
	let quickContainer = document.createElement("div");
	let quickUl = document.createElement("ul");
	quickContainer.classList.add("quick");
	quickContainer.style.display = isDisplay ? "block" : "none";
	for(let i=0; i<menuList.length; i++){
		let li = document.createElement("li");
		li.setAttribute("data-id", menuList[i].href.substring(1));
		quickUl.appendChild(li);
	}	
	quickContainer.appendChild(quickUl);
	document.querySelector("#fullpage").appendChild(quickContainer);
	quickUl.childNodes[0].classList.add("on");
}

const setHash = (targetId) => {
	handleNavColor(targetId);
    setTimeout(()=>{
		location.hash = targetId;
		fullPageIsAnimate = false;
		setEffect(targetId);
    }, slideSpeed * 1000);
}

const hashScroll = (targetHash, type) => {
	if(fullPageIsAnimate) return false;
	fullPageIsAnimate = true;
	let btns = type == 'quick' ? document.querySelectorAll(".quick li") : document.querySelectorAll("#menu ul li a");
	let target = type == 'quick' ? document.querySelector(".quick li[data-id='" + targetHash + "']") : document.querySelector("#menu > ul > li > a[data-id='" + targetHash + "']");
	document.querySelectorAll(".quick li").forEach(item => item.classList.remove("on"));
	document.querySelector(".quick li[data-id='" + targetHash + "']").classList.add("on");
	let targetIdx = type == 'quick' ? Array.prototype.indexOf.call(btns, target) + 1 : Array.prototype.indexOf.call(btns, target) + 2;
	let pageLength = 0;		
	for(let i=1; i<targetIdx; i++) {
		pageLength += document.querySelector(".full" + i).clientHeight;
	}
	document.querySelector("#fullpage").style.top = - pageLength + "px";
	setHash(targetHash);
}

const setFullPageEvent = () => {

	// 마우스 휠
	window.addEventListener("mousewheel", function(event) {
		let page = document.querySelector(".quick ul li.on");
		let menuList = getList("menu", "menu_loop01");
		if(fullPageIsAnimate) return false;
		let curIdx = Array.prototype.indexOf.call(page.parentNode.children, page);
		if(event.wheelDelta >= 0) {
			if(curIdx == 0) return;
			let targetHash = menuList[curIdx - 1].href.substring(1);
			hashScroll(targetHash, 'menu');
		} else { // 마우스 휠을 아래로	
			if(curIdx == menuList.length - 1) return;
			let targetHash = menuList[curIdx + 1].href.substring(1);
			hashScroll(targetHash, 'menu');			
		}
	});

	// 리사이즈
	window.addEventListener("resize", () => {
		let page = document.querySelector(".quick ul li.on");
		let hash = page.getAttribute("data-id")
		setHash(hash);
	});

	// 상단메뉴 클릭
	document.querySelectorAll("#menu > ul > li > a").forEach((v,i) => {
        v.addEventListener("click", (e) => {
            hashScroll(e.target.getAttribute("data-id"), 'menu');
        });
    });

	// 로고 클릭
	document.querySelector("#logo > a").addEventListener("click", (e) => {
		hashScroll('intro');
	});

	// 우측 퀵버튼 클릭
    document.querySelectorAll(".quick li").forEach((v,i) => {
		v.addEventListener("click", (e) => {
			hashScroll(e.target.getAttribute("data-id"), 'quick');
		});
	});

	// 키보드 눌렀을 때
    window.addEventListener("keyup", (e) => {
        if(e.key == 'ArrowDown' || e.key == 'PageDown' || e.key == ' ' || e.code == 'Space') {
            moveStep('down');
        } else if(e.key == 'ArrowUp' || e.key == 'PageUp') {
            moveStep('up')
        } else if(e.key == 'Home') {
            let list = getList("menu", "menu_loop01");
            hashScroll(list[0].href.substring(1), 'menu');
        } else if(e.key == 'End') {
            let list = getList("menu", "menu_loop01");
            hashScroll(list[list.length - 1].href.substring(1), 'menu');
        }
    });
}

const handleNavColor = (hash) => {	
    let menu = document.querySelectorAll("#menu li a");
    let hamburger = document.querySelector("#hamburger svg");
    let quickBtn = document.querySelectorAll(".quick > ul > li");
    let mainColor, logo;
    if(hash == 'intro' || !hash) {
        mainColor = "#fff", logo = "resources/images/logo/logo-white.svg";
    } else {
        mainColor = "#000", logo = "resources/images/logo/logo.svg";
    }
    document.querySelector("#navLogo").src = logo;
    document.querySelector("#navLogo_mo").src = logo;
    menu.forEach(v => v.style.color = mainColor);
    quickBtn.forEach((v) => {
        v.style.borderColor = mainColor; //고민좀 해보자... 안이쁜듯...
        if(v.classList.contains("on")) v.style.background = mainColor;
        else v.style.background = "transparent";
    });
    hamburger.setAttribute("fill", mainColor);
}

const moveStep = (type) => {
    let menuList = getList("menu", "menu_loop01");
    let targetIdx = menuList.indexOf(menuList.filter(v => v.href == location.hash)[0]) + (type == 'down' ? 1 : (type == 'up' ? -1 : 0));
    if(targetIdx == -1 || targetIdx == menuList.length) return;
    let targetHash = menuList[targetIdx].href.substring(1);
    hashScroll(targetHash, 'menu');
}