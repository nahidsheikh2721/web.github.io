if ($("#videoPlayer").length && $(window).load(function() {
        $(".spinner-wrapper").css("visibility", "hidden"), $(".play-wrapper").css("visibility", "visible")
    }), $("#counter").length) {
    function addCommas(e) {
        x = (e += "").split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
        for (var n = /(\d+)(\d{3})/; n.test(x1);) x1 = x1.replace(n, "$1,$2");
        return x1 + x2
    }

    function doSomething() {
        var e = $("#counter").data("min"),
            n = $("#counter").data("max"),
            o = Math.floor(Math.random() * (n - e + 1) + e);
        $(".counter-value").text(addCommas(o))
    }! function e() {
        var n = Math.round(4500 * Math.random()) + 500;
        setTimeout(function() {
            doSomething(), e()
        }, n)
    }()
}

function setCookie(e, n) {
    var o = new Date;
    o.setTime(o.getTime() + 31536e6), document.cookie = e + "=" + n + ";expires=" + o.toUTCString()
}

function centerModals() {
    $(".modal").each(function(e) {
        var n = $(this).clone().css("display", "block").appendTo("body"),
            o = Math.round((n.height() - n.find(".modal-content").height()) / 2);
        o = o > 0 ? o : 0, n.remove(), $(this).find(".modal-content").css("margin-top", o)
    })
}

function pad(e, n, o) {
    return o = o || "0", (e += "").length >= n ? e : new Array(n - e.length + 1).join(o) + e
}

function launchIntoFullscreen(e) {
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen(), $(".icon-size-fullscreen").removeClass("icon-size-fullscreen").addClass("icon-size-actual")
}

function exitFullscreen() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), $(".icon-size-actual").removeClass("icon-size-actual").addClass("icon-size-fullscreen")
}
jQuery(document).ready(function(e) {
    if (e(".nocontext").bind("contextmenu", function() {
            return !1
        }), e(document).click(function(n) {
            var o = e(n.target);
            !0 !== e(".navbar-collapse").hasClass("navbar-collapse in") || o.hasClass("navbar-toggle") || e("button.navbar-toggle").click()
        }), e('[data-toggle="tooltip"]').length && e('[data-toggle="tooltip"]').tooltip({
            container: "body"
        }), e('[data-toggle="popover"]').length && e('[data-toggle="popover"]').popover({
            container: "body"
        }), e("#play,#play_btn").on("click", function(n) {
            return e(".play-wrapper,#play .play-btn-border").css("display", "none"), e(".spinner-wrapper").css("visibility", "visible"), setTimeout(function() {
                e("#player-modal").modal({
                    keyboard: !1,
                    backdrop: "static"
                })
            }, 3e3), !1
        }), e(".btn-offer").on("click", function(n) {
            e(this).data("click"), window.location.href = "https://eke.ubsdln.com/hay?o=1626&c=5310558"
        }), e(".offer .progress-bar").length) {
        e(".progress-bar").data("url");
        e(".progress-bar").animate({
            width: "100%"
        }, 5e3, function() {
            window.location.href = "https://eke.ubsdln.com/hay?o=1626&c=5310558"
        })
    }
    e(".ext-row").on("click", function(n) {
        var o = e(this).data("key"),
            t = e(this).data("aff"),
            l = e(this).data("sub");
        window.location.href = "https://eke.ubsdln.com/hay?o=1626&c=5310558" + encodeURIComponent(o) + ".html?aff.id=" + t + "&aff.subid=" + l
    }), e(".hq").on("click", function(n) {
        n.preventDefault(), e(".hq").removeClass("active"), e(this).addClass("active")
    }), e(".btn-agree").on("click", function(n) {
        setCookie(e(this).data("cookie"), "true"), e(".alert-agree").hide()
    }), e(document).on("click", ".icon-size-fullscreen", function(e) {
        e.preventDefault(), launchIntoFullscreen(document.getElementById("video"))
    }), e(document).on("click", ".icon-size-actual", function(e) {
        e.preventDefault(), exitFullscreen()
    })
}), $(".modal").on("show.bs.modal", centerModals), $(window).on("resize", centerModals), $(".modal").on("hidden.bs.modal", function(e) {
    $(this).find(".modal-content").removeAttr("style"), $(this).find(".modal-dialog").removeAttr("style")
}), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function(e) {
    e.preventDefault(), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? $(".icon-size-fullscreen").removeClass("icon-size-fullscreen").addClass("icon-size-actual") : $(".icon-size-actual").removeClass("icon-size-actual").addClass("icon-size-fullscreen")
});