class Slider {
    constructor(options) {
        this.getRgba = getRgba;
        this.createElement = createElement;

        this.width = 1000;
        this.height = 500;
        this.folderPath = "";
        this.fileArr = [];
        this.imgDivArr = [];
        this.showCnt = 1;
        this.showText = false;
        this.showInfo = false;
        this.hover = true;
        this.hoverAnimation = "blur";
        this.textColor = "#ffffff";
        this.textBackground = "#131842";
        this.indicator = true;
        this.indBtnArr = [];
        this.autoPlay = false;
        this.loop = "infinite";
        this.currentIndex = 0;
        this.intervalIndex = 0;
        this.playSpeed = 2000;
        this.playSmooth = false;
        this.smoothPoint = 0;
        this.isMouseDown = false;
        this.startX;
        this.scrollLeft;
        this.scrollTop;
        this.isViewer;
    
        
        if(options && Object.entries(options).length > 0) {
            for(let key in options) {
                this[key] = options[key];
            }
        }

        this.fontSize = (this.width / this.showCnt) / 16 +  "px";

        if(this.indicator == true) this.indicator = this.showCnt !== 1 ? false : true;
        if(this.showCnt == 1) this.indicator = true;
        if(this.showCnt > this.fileArr.length) this.showCnt = this.fileArr.length;
        
        this.modal = new ImageModal(
            {
                backgroundColor : this.textBackground, 
                showText : this.showText, 
                folderPath : this.folderPath, 
                fileArr : this.fileArr, 
                indciator : this.indicator,
                autoPlay : this.autoPlay
            }
        );
        return this.init();
    }

    init() {

        this.container = this.createElement("div", "", 
            {
                "width" : this.width + "px",
                "height" : this.height + "px",
                "overflow" : "hidden",
                "position" : "relative",
                "display" : "flex"
            }
        );
        this.slideDiv = this.createElement("div", "slideDiv", {"width":this.width + "px","height":this.height + "px","position":"relative", "display":"flex","overflow":"hidden"});
        
        let itemCnt = this.fileArr.length;
        for(let i=0; i<itemCnt; i++) {

            let imgDiv = this.createElement("div", "sliderImgDiv", 
                {
                    "width" : this.showCnt <= 1 ? "100%" : "calc(100% / " + this.showCnt + ")",
                    "height" : this.indicator ? "95%" : "100%",
                    "padding" : "20px 10px",
                    "boxSizing" : "border-box",
                    "transition" : "0.5s ease-in-out",
                    "flexShrink" : "0"
                }
            );
            imgDiv.setAttribute("dragable", false);

            let imgContent = this.createElement("div", "", 
                {
                    "width" : "100%",
                    "height" : "100%",
                    "backgroundImage" : "url('" + (this.folderPath + this.fileArr[i].path) + "')",
                    "backgroundRepeat" : "no-repeat",
                    "backgroundSize" : "cover",
                    "backgroundPosition" : "center center",
                    "cursor" : "pointer",
                    "transition" : "0.3s ease-in-out",
                    "borderRadius" : "5px",
                    "overflow" : "hidden",
                    "position" : "relative",
                    "margin" : "auto"
                }
            );

            let filterDiv = this.createElement("div", "", 
                {
                    "width" : "100%",
                    "height" : "100%",
                    "transition" : "0.3s ease-in-out",
                    "backdropFilter" : "blur(0px) contrast(100%) brightness(100%)"
                }
            );

            let infoDiv = this.createElement("div", "", 
                {
                    "width" : "100%",
                    "height" : "30%",
                    "position" : "absolute",
                    "left" : 0,
                    "bottom" : "-30%",
                    "backgroundColor" : this.textBackground,
                    "color" : this.textColor,
                    "userSelect" : "auto"
                }
            );

            let title = this.createElement("div", "", 
                {
                    "width" : "100%",
                    "overflow" : "hidden",
                    "textOverflow" : "ellipsis",
                    "whiteSpace" : "nowrap",
                    "fontSize" : this.fontSize,
                    "fontWeight" : "bolder",
                    "userSelect" : "auto"
                }
            );
            title.innerText = this.fileArr[i].title;

            let desc = this.createElement("div", "", 
                {
                    "width" : "100%",
                    "overflow" : "hidden",
                    "fontSize" : this.fontSize,
                    "userSelect" : "auto"
                }
            );
            desc.innerText = this.fileArr[i].desc;

            infoDiv.appendChild(title);
            infoDiv.appendChild(desc);

            imgContent.appendChild(filterDiv);
            (this.fileArr[i].title || this.fileArr[i].desc) && imgContent.appendChild(infoDiv);
            imgDiv.appendChild(imgContent);
            this.imgDivArr.push(imgDiv);
            this.slideDiv.appendChild(imgDiv);

            imgContent.addEventListener("mouseenter", (e) => {
                if(this.hoverAnimation == 'blur') this.handleBlur(filterDiv, 'on');
                this.infoAnimation(infoDiv, "on");
            });         
            imgContent.addEventListener("mouseleave", (e) => {
                if(this.hoverAnimation == 'blur') this.handleBlur(filterDiv, 'off');
                this.infoAnimation(infoDiv, "off");
            });
            

            if(this.isViewer) {
                imgContent.addEventListener("click", (e) => {
                    if(this.autoPlay) this.playStop();
                    this.fileArr[i].src = this.folderPath + this.fileArr[i].path;
                    this.modal.open(i);
                    this.infoAnimation(infoDiv, "off");
                });
            }
            
        }
        this.container.appendChild(this.slideDiv);

        if(this.indicator) {
            this.ind = this.createElement("div", "", 
                {"width":"100%", "height":"5%", "position":"absolute","left":"0", "bottom":"0", "textAlign":"center"}
            );
            for(let i=0; i<this.fileArr.length; i++) {
                let indBtn = this.createElement("div", "", 
                    {
                        "display":"inline-block",
                        "width" : this.currentIndex == i ? "20px" : "15px",
                        "height" : "10px",
                        "backgroundColor" : this.currentIndex == i ? this.getRgba(this.textBackground, 1) : this.getRgba(this.textBackground, 0.5),
                        "borderRadius" : "5px",
                        "margin" : "0 7px",
                        "cursor" : "pointer",
                        "transition" : "0.2s ease-in-out"
                    }
                );
                this.indBtnArr.push(indBtn);
                this.ind.appendChild(indBtn);
                indBtn.addEventListener("click", (e)=>{
                    this.slide(i);
                });
            }
            this.container.appendChild(this.ind);
        }

        if(this.autoPlay) this.playStart();

        this.slideDiv.addEventListener("mouseenter", (e) => {
            console.log("container mouseenter!");
            if(this.autoPlay) {
                this.playStop();
            }
        });

        this.slideDiv.addEventListener("mouseleave", (e) => {
            this.isMouseDown = false;
            if(this.autoPlay && !this.modal.isOpen) {
                this.playStart();
            }
        });

        this.slideDiv.addEventListener("mousedown", (e) => {
            this.isMouseDown = true;
            this.startX = e.pageX - this.slideDiv.offsetLeft;
            this.startY = e.pageY - this.slideDiv.offsetTop;
            this.scrollLeft = this.slideDiv.scrollLeft;
            this.scrollTop = this.slideDiv.scrollTop;
        });
        this.slideDiv.addEventListener("mousemove", (e) => {
            if(!this.isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - this.slideDiv.offsetLeft;
            const y = e.pageY - this.slideDiv.offsetTop;
            const walkX = (x - this.startX) * 1; // 스크롤 속도 조절
            const walkY = (y - this.startY) * 1; // 스크롤 속도 조절
            this.slideDiv.scrollLeft = this.scrollLeft - walkX;
            this.slideDiv.scrollTop = this.scrollTop - walkY;
        });
        this.slideDiv.addEventListener("mouseup", (e) => {
            setTimeout(()=>{
                this.isMouseDown = false;
            },1000);
        });

        return this.container;
    }

    slide(index) {
        let target = this.imgDivArr[index];
        this.slideDiv.scroll({
            behavior : "smooth",
            left : target.offsetLeft
        });
        this.currentIndex = index;
        if(this.indicator) this.setIndStyle();
    }

    playStart() {
        if(this.playSmooth) {
            this.playInterval = setInterval(() => {
                this.smoothPoint++;
                this.slideDiv.scrollLeft = this.smoothPoint;
                if(this.smoothPoint >= parseInt(this.width + (this.width / this.showCnt) * 2)) {
                    if(typeof this.loop == 'number') {
                        this.loop--;
                        if(this.loop <= 0) this.playStop();
                    }
                    this.smoothPoint = 0;
                }
            }, 10);
        } else {
            this.playInterval = setInterval(()=>{
                this.slide(this.intervalIndex);
                this.intervalIndex++;
                if(this.intervalIndex == this.fileArr.length) {
                    if(typeof this.loop == 'number') {
                        this.loop--;
                        if(this.loop <= 0) this.playStop();
                    }
                    this.intervalIndex = 0;
                }
            }, this.playSpeed);            

        }
    }

    playStop() {
        console.log("stop!");
        clearInterval(this.playInterval);
    }

    infoAnimation(el, type) {        
        if(type == "on" && this.showInfo) el.animate([{ bottom:"-30%", offset:0 },{ bottom:"0%", offset:1 }], {duration: 200,iterations: 1,fill : 'forwards'});
        if(type == "off" && this.showInfo) el.animate([{ bottom:"0%", offset:0 },{ bottom:"-30%", offset:1 }], {duration: 200,iterations: 1,fill : 'forwards'});
    }

    handleBlur(el, type) {
        if(type == 'on' && this.hover && this.hoverAnimation == 'blur') el.style.backdropFilter = "blur(2px) contrast(80%) brightness(90%)";
        if(type == 'off' && this.hover && this.hoverAnimation == 'blur') el.style.backdropFilter = "blur(0px) contrast(100%) brightness(100%)";
    }

    setIndStyle() {
        for(let i=0; i<this.fileArr.length; i++) {
            this.indBtnArr[i].style.width = this.currentIndex == i ? "20px" : "15px";
            this.indBtnArr[i].style.backgroundColor = this.currentIndex == i ? this.getRgba(this.textBackground, 1) : this.getRgba(this.textBackground, 0.5);
        }
    }
}

class ImageModal {
    constructor(options) {
        this.getRgba = getRgba;
        this.createElement = createElement;
        this.backgroundColor = "#000000";
        this.textColor = "#fff";
        this.showText = false;
        this.folderPath = "";
        this.fileArr = [];
        this.currentIndex = 0;
        this.isOpen = false;
        this.timerCnt = 5;
        this.isSlide = false;
        this.fullScreen = false;

        if(options && Object.entries(options).length > 0) {
            for(let key in options) {
                this[key] = options[key];
            }
        }

        this.init();
    }

    init() {
        this.modal = this.createElement("div", "modal", {"position" : "fixed","left" : "0","top" : "0","width" : "100%","height" : "100%","display" : "none","flexDirection" : "column","justifyContent" : "center","alignItems" : "center","backgroundColor" : this.getRgba(this.backgroundColor, 0.9),"zIndex" : "100","transition" : "0.3s ease-in-out"});

        this.prevBtn = this.createElement("button", "", {"border" : "none","outline" : "none", "color":"#fff", "backgroundColor" : "transparent","cursor" : "pointer", "position":"absolute", "left":"1vw"});
        this.prevBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="' + this.getRgba(this.backgroundColor, 0.1) + '" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">'
        + '<path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>'
        + '</svg>';

        this.nextBtn = this.createElement("button", "", {"border" : "none","outline" : "none", "color":"#fff", "backgroundColor" : "transparent","cursor" : "pointer", "position":"absolute", "right":"1vw"});
        this.nextBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="' + this.getRgba(this.backgroundColor, 0.1) + '" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">'
        + '<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>'
        + '</svg>';

        this.bar = this.createElement("div", "", {"padding":"5px 0", "textAlign":"end", "position":"absolute"});
        this.closeBtn = this.createElement("button", "", {"border" : "none","outline" : "none", "color":"#fff", "backgroundColor" : "transparent","cursor" : "pointer"});
        this.closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">'
        + '<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>'
        + '</svg>';
        this.downBtn = this.createElement("button", "", {"border" : "none","outline" : "none", "color":"#fff", "backgroundColor" : "transparent","cursor" : "pointer","margin":"0 10px"});
        this.downBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">'
        + '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>'
        + '<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>'
        + '</svg>';
        this.slideStartBtn = this.createElement("button", "", {"border":"none","outline":"none","color":"#fff", "backgroundColor":"transparent","cursor":"pointer","float":"left","display":"flex","justifyContent":"center","alignItems":"cneter"});
        this.slideStartBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">'
        + '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>'
        + '</svg><div style="line-height:32px;">슬라이드쇼 실행</div>';
        this.slideStopBtn = this.createElement("button", "", {"border":"none","outline":"none","color":"#fff", "backgroundColor":"transparent","cursor":"pointer","display":"none","float":"left","display":"none","justifyContent":"center","alignItems":"cneter"});
        this.slideStopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">'
        + '<path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>'
        + '</svg><div style="line-height:32px;">슬라이드쇼 중지</div>';
        this.slideTimer = this.createElement("div", "", {"lineHeight":"32px"});
        this.slideTimer.innerText = "(5)";
        this.bar.appendChild(this.slideStartBtn);
        this.slideStopBtn.appendChild(this.slideTimer);
        this.bar.appendChild(this.slideStopBtn);
        this.bar.appendChild(this.downBtn);
        this.bar.appendChild(this.closeBtn);

        this.imgContent = this.createElement("img", "", {"width" : "auto","height" : "100%","objectFit" : "contain","cursor" : "auto"});
        this.board = this.createElement("div", "", {"width" : "fit-content", "maxHeight" : "80%", "display":"flex","boxSizing":"border-box"});
        this.imgPart = this.createElement("div", "", {"width":"fit-content", "height":"100%", "backgroundColor":"black"});
        this.imgPart.appendChild(this.imgContent);
        this.board.appendChild(this.imgPart);
        if(this.showText){
            this.textPart = this.createElement("div", "", {"width":"20vw", "height":"100%","backgroundColor":"#fff","padding":"1vw"});
            this.title = this.createElement("div", "", {"width":"100%","height":"fit-content","fontSize":"1.5vw","padding":"0.5vw 0","fontWeight":"bolder","borderBottom":"1px solid " + this.getRgba(this.backgroundColor, 0.1)});
            this.desc = this.createElement("div", "", {"width":"100%","height":"80%","fontSize":"1.2vw","padding":"1vw 0","color":this.getRgba(this.backgroundColor, 0.8)});
            this.textPart.appendChild(this.title);
            this.textPart.appendChild(this.desc);
            this.board.appendChild(this.textPart);
        }
        this.modal.appendChild(this.bar);
        this.modal.appendChild(this.board);
        this.modal.appendChild(this.prevBtn);
        this.modal.appendChild(this.nextBtn);
        document.body.appendChild(this.modal);

        this.closeBtn.addEventListener("click", (e) => {
            this.close();
        });
        this.downBtn.addEventListener("click", (e) => {
            this.down();
        });
        this.prevBtn.addEventListener("click", (e) => {
            this.move('prev')
        });
        this.nextBtn.addEventListener("click", (e) => {
            this.move('next')
        });
        this.slideStartBtn.addEventListener("click", (e)=>{
            this.slideShow('start');
        });
        this.slideStopBtn.addEventListener("click", (e)=>{
            this.slideShow('stop');
        });

        window.addEventListener("keyup", (e)=>{
            if(e.key == " " || e.key == 'Space' || e.keyCode == 32) {
                if(this.isSlide) {
                    this.slideShow('stop');
                } else {
                    this.slideShow('start');
                }
            }
        });

        return this.modal;
    }

    open(index) {
        clearInterval(this.slideInterval);
        clearInterval(this.timerInterval);
        if(this.fullScreen) {
            document.documentElement.requestFullscreen();
        }
        this.isOpen = true;
        this.currentIndex = index;
        let file = this.fileArr[index];
        this.imgContent.src = file.src || file.path;
        if(this.showText) {
            this.title.innerText = file.title || "제목없음";
            this.desc.innerText = file.desc || "설명없음";
        }
        this.modal.style.opacity = 0;
        this.modal.style.display = "flex";
        setTimeout(() => {
            this.modal.style.opacity = 1;
            document.body.style.overflow = "hidden";
            if(this.isSlide) {
                this.slideShow('start');
            }
        }, 300);

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                this.bar.style.width = this.showText ? "calc(" + this.imgContent.offsetWidth + "px + 20vw)" : this.imgContent.offsetWidth + "px";
                this.bar.style.top = (this.board.offsetTop - this.bar.offsetHeight) + "px";

                if(this.isSlide) {
                    this.nextBtn.style.display = "none";
                    this.prevBtn.style.display = "none";
                } else {
                    this.nextBtn.style.display = (this.currentIndex == this.fileArr.length -1) ? "none" : "block";
                    this.prevBtn.style.display = (this.currentIndex == 0) ? "none" : "block";
                }
            }
        });
        resizeObserver.observe(this.imgContent);

    }

    close() {
        if(this.fullScreen) document.exitFullscreen();
        clearInterval(this.slideInterval);
        clearInterval(this.timerInterval);
        this.isOpen = false;
        this.modal.style.opacity = "0";
        setTimeout(()=>{
            this.modal.style.display = "none";
            document.body.style.overflow = "auto";
        }, 300);
    }
    
    down() {
        let a = this.createElement("a", "", {});
        let src = this.imgContent.src;
        let fileName = src.substring(src.lastIndexOf("/") + 1, src.length);
        a.href = this.imgContent.src;
        a.download = fileName;
        a.click();
    }

    move(type) {
        this.timerCnt = 5;
        this.currentIndex = type == 'prev' ? 
        (this.currentIndex > 0 ? this.currentIndex - 1 : this.currentIndex) : 
        (this.currentIndex < this.fileArr.length -1 ? this.currentIndex + 1 : this.currentIndex);
        let targetFile = this.fileArr[this.currentIndex];
        this.imgContent.src = this.folderPath + targetFile.path;
        if(this.showText) {
            this.title.innerText = targetFile.title || "제목없음";
            this.desc.innerText = targetFile.desc || "설명없음";
        }
        if(this.isSlide) {
            if(this.currentIndex == this.fileArr.length -1) {
                this.currentIndex = 0;
            }
        }
    }

    slideShow(type) {
        if(type == 'start') {
            this.isSlide = true;
            this.modal.style.backgroundColor = this.getRgba(this.backgroundColor, 1);
            this.slideStartBtn.style.display = "none";
            this.slideStopBtn.style.display = "flex";
            this.nextBtn.style.display = "none";
            this.prevBtn.style.display = "none";
            this.timerCnt = 5;
            this.slideTimer.innerText = "(" + this.timerCnt + ")";            
            this.updateTimer = () => {
                this.timerCnt--;
                this.slideTimer.innerText = "(" + this.timerCnt + ")";
                if (this.timerCnt == 0) {
                    clearInterval(this.timerInterval);
                    this.move("next");
                    this.timerCnt = 5;
                    this.slideTimer.innerText = "(5)";
                    this.startTimer();
                }
            };
            this.startTimer = () => {
                this.timerInterval = setInterval(this.updateTimer, 1000);
            };

            this.startSlideShow = () => {
                this.startTimer();
                this.slideInterval = setInterval(() => {
                    clearInterval(this.timerInterval);
                    this.move("next", true);
                    this.timerCnt = 5;
                    this.slideTimer.innerText = "(5)";
                    this.startTimer();
                }, 5000);
            };
            this.startSlideShow();
        }
        if(type == 'stop') {
            this.isSlide = false;
            this.modal.style.backgroundColor = this.getRgba(this.backgroundColor, 0.9);
            this.slideStartBtn.style.display = "flex";
            this.slideStopBtn.style.display = "none";
            this.nextBtn.style.display = "block";
            this.prevBtn.style.display = "block";
            clearInterval(this.slideInterval);
            clearInterval(this.timerInterval);
        }
    }

}