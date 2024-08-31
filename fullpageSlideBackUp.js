let slideSpeed = 1;

const setQuick = (isDisplay) => {
	let totalPageCnt = document.querySelectorAll("#fullpage > .fullsection").length;

	if(document.querySelector(".quick")) document.querySelector(".quick").remove();
	let quickContainer = document.createElement("div");
	let quickUl = document.createElement("ul");
	quickContainer.classList.add("quick");
	quickContainer.style.display = isDisplay ? "block" : "none";
	
	if(document.querySelector("#menu")) document.querySelector("#menu").remove();
	let menuContainer = document.createElement("div");
	let menuUl = document.createElement("ul");
	menuContainer.id = "menu";
	
	let menuList = getList("menu", "menu_loop01");
	
	for(let i=1; i<=totalPageCnt; i++){
		let li = document.createElement("li");
		let dataId = document.querySelectorAll("#fullpage > .fullsection")[i-1].getAttribute("data-id");
		li.setAttribute("data-id", dataId);
		quickUl.appendChild(li);
		
		if(i > 1) {
			let li2 = document.createElement("li");
			let aTag = document.createElement("a");
			aTag.setAttribute("data-id", dataId);
			aTag.textContent = menuList[i-1].name;
			li2.appendChild(aTag);
			menuUl.appendChild(li2);
		}
		
	}
	
	quickContainer.appendChild(quickUl);
	document.querySelector("#fullpage").appendChild(quickContainer);

	menuContainer.appendChild(menuUl);
	document.querySelector("#menuWrap").insertBefore(menuContainer, document.querySelector("#lang"));
	
	document.querySelector("#menu > ul > li > a:nth-child(1)").classList.add("on");
	quickUl.childNodes[0].classList.add("on");
}

const fullset = () => {

	setQuick(true);
	document.querySelector("#fullpage").style.transition = slideSpeed + "s ease";

	window.addEventListener("mousewheel", function(event) {
		let page = document.querySelector(".quick ul li.on");

		if(document.querySelector("body #fullpage").getAnimations().length >= 1) return false;

		if(event.wheelDelta >= 0) {

			var before = Array.prototype.indexOf.call(page.parentNode.children, page);
			console.log("before : ", before);
			
			if(before >= 0) {
				if(page.previousElementSibling) {
					page.classList.remove("on");
					page.previousElementSibling.classList.add("on");
				}
			}
			let pagelength = 0;
			for(let i=1; i<before; i++) {
				pagelength += document.querySelector(".full" + i).clientHeight;
			}
			if(before > 0){
				document.querySelector("#fullpage").style.top = -pagelength + "px";
				page = page.previousElementSibling;
				setHash(page.getAttribute("data-id"));
			}

		} else { // 마우스 휠을 아래로	
			let before = Array.prototype.indexOf.call(page.parentNode.children, page);
			let nextPage = parseInt(before + 1);
			let lastPageNum = parseInt(document.querySelectorAll(".quick ul li").length);
			if(before <= document.querySelectorAll(".quick ul li").length - 1){ 
				if(page.nextElementSibling) {
					page.nextElementSibling.classList.add("on");
					page.classList.remove("on");
				}
			}			
			if(nextPage < lastPageNum){
				let pagelength=0;
				for(var i = 1; i<nextPage + 1; i++){ 
					pagelength += document.querySelector(".full" + i).clientHeight;
				}
				document.querySelector("#fullpage").style.top = - pagelength + "px";
				page = page.nextElementSibling;
				setHash(page.getAttribute("data-id"));
			}
			
		}
	});

	window.addEventListener("resize", () => {
		let page = document.querySelector(".quick ul li.on");
		let hash = page.getAttribute("data-id")
		setHash(hash);
	});
}

const setHash = (targetId) => {
	handleNavColor(targetId);
	setInit(targetId);
    setTimeout(()=>{
        location.hash = targetId;
    }, slideSpeed * 1000);
}

const hashScroll = (targetHash, type) => {
	if(document.querySelector("body #fullpage").getAnimations().length >= 1) return false;
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