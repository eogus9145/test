document.addEventListener("DOMContentLoaded", function() {
    fullset();
    quickClick();
});

function fullset() {
    var pageindex = document.querySelectorAll("#fullpage > .fullsection").length;
    var quickUl = document.querySelector("#fullpage > .quick > ul");

    for (var i = 1; i <= pageindex; i++) {
        var li = document.createElement("li");
        quickUl.appendChild(li);
    }

    document.querySelector("#fullpage .quick ul li").classList.add("on");

    window.addEventListener("mousewheel", function(event) {
        var page = document.querySelector(".quick ul li.on");
        if (document.querySelector("#fullpage").classList.contains("animated")) return false;

        if (event.wheelDelta >= 0) {
            var before = Array.from(page.parentNode.children).indexOf(page);
            if (before >= 0) {
                if (page.previousElementSibling) {
                    page.previousElementSibling.classList.add("on");
                    page.classList.remove("on");
                }
            }

            var pagelength = 0;
            for (var i = 1; i < before; i++) {
                pagelength += document.querySelector(".full" + i).offsetHeight;
            }

            if (before > 0) {
                document.querySelector("#fullpage").style.top = -pagelength + "px";
            } else {
                alert("첫번째페이지 입니다.");
            }
        } else {
            var nextPage = Array.from(page.parentNode.children).indexOf(page) + 1;
            var lastPageNum = document.querySelectorAll(".quick ul li").length;

            if (nextPage < lastPageNum) {
                if (page.nextElementSibling) {
                    page.nextElementSibling.classList.add("on");
                    page.classList.remove("on");
                }

                var pagelength = 0;
                for (var i = 1; i <= nextPage; i++) {
                    pagelength += document.querySelector(".full" + i).offsetHeight;
                }

                document.querySelector("#fullpage").style.top = -pagelength + "px";
            } else {
                alert("마지막 페이지 입니다!");
            }
        }
    });

    window.addEventListener("resize", function() {
        var resizeindex = Array.from(document.querySelectorAll(".quick ul li")).indexOf(document.querySelector(".quick ul li.on")) + 1;

        var pagelength = 0;
        for (var i = 1; i < resizeindex; i++) {
            pagelength += document.querySelector(".full" + i).offsetHeight;
        }

        document.querySelector("#fullpage").style.top = -pagelength + "px";
    });
}

function quickClick() {
    var quickLis = document.querySelectorAll(".quick li");
    quickLis.forEach(function(li) {
        li.addEventListener("click", function() {
            var gnbindex = Array.from(li.parentNode.children).indexOf(li) + 1;

            var length = 0;
            for (var i = 1; i < gnbindex; i++) {
                length += document.querySelector(".full" + i).offsetHeight;
            }

            if (document.querySelector("#fullpage").classList.contains("animated")) return false;

            li.classList.add("on");
            li.parentNode.querySelectorAll("li").forEach(function(sibling) {
                if (sibling !== li) sibling.classList.remove("on");
            });

            document.querySelector("#fullpage").style.top = -length + "px";
        });
    });
}
