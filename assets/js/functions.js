"use strict";

function verifyCallback(t) {
    $.post("verification.php", {
        "g-recaptcha-response": t
    }, function (t) {
        "1" === t ? (captchaValidation.set(!0), $("#errorListJS").empty()) : (captchaValidation.set(!1), document.getElementById("errorListJS").innerHTML = "<li>SOME PROBLEM OCCURED, TRY AGAIN OR WAIT A MOMENT!</li>")
    })
}

function expireCallback() {
    captchaValidation.set(!1)
}
var captchaValidation = function () {
    var t = !1;
    return {
        set: function (e) {
            t = e
        },
        get: function () {
            return t
        }
    }
}();
$(document).ready(function () {
    function t() {
        $("#pshadow").css({
            top: "0px",
            opacity: "1"
        }), $("#pphone").css({
            top: "0px",
            opacity: "1"
        }), $("#pmsgblack").css({
            left: "0px",
            opacity: ".9"
        }), $("#pmsggreen").css({
            right: "0px",
            opacity: ".9"
        }), $("#chat").css({
            right: "0px",
            opacity: "1"
        }), $("#ip").css({
            left: "0px",
            opacity: "1"
        }), $(".nao").css("left", "0px"), $(".naologobody").css("opacity", "1"), $(".robot").css({
            left: "0px",
            opacity: "1"
        }), $(".skillElement").css("opacity", "1"), c.setProjectsAnim(!0), c.setSkillsAnim(!0)
    }

    function e(t) {
        s.get() ? "" : ($(t).impulse(), s.set(!0))
    }

    function n(t) {
        s.get() ? ($(t).unbind(), s.set(!1)) : ""
    }

    function i() {
        document.body.style.overflow = "hidden", n("body"), $(".insidebox").scrollTop(0)
    }

    function o() {
        document.body.style.overflow = "visible", e("body")
    }! function () {
        function t(t) {
            n.animate({
                scrollTop: $(t).offset().top - 80
            }, 500)
        }
        var e = $("#svgWrapper"),
            n = $("html, body"),
            i = $(".toggleElement");
        i.fadeOut(0), i.css("opacity", "1");
        var o = $("#navClosedTrigger"),
            a = $("#navClosedElement"),
            s = $("#closeCross"),
            c = $(".header-position"),
            r = $("#mainMobNav,#aboutMobNav,#projectsMobNav,#skillsMobNav,#informationMobNav,#interestsMobNav,#statementMobNav,#contactMobNav"),
            l = new TimelineLite;
        l.add("stagger", "+=0.05"), l.staggerFrom(r, .5, {
            scale: 0,
            autoAlpha: 0
        }, -.05, "stagger"), l.play("stagger"), e.css({
            height: "80px",
            overflow: "hidden"
        });
        var u = function () {
            var t = !1;
            return {
                set: function (e) {
                    t = e
                },
                get: function () {
                    return t
                }
            }
        }();
        o.click(function () {
            u.get() ? (u.set(!1), s.removeClass("spinCrossOut").addClass("spinCrossIn"), i.fadeOut(), setTimeout(function () {
                c.css("background", "hsla(0, 0%, 20%, 0.85)"), a.fadeIn(), e.css("height", "80px")
            }, 350)) : (e.css("height", "225px"), l.resume("stagger"), u.set(!0), a.fadeOut(), i.fadeIn(300), c.css("background", "#333333"), s.removeClass("spinCrossIn").addClass("spinCrossOut"))
        }), $("#aboutMobNav").click(function () {
            t("#about")
        }), $("#projectsMobNav").click(function () {
            t("#projects")
        }), $("#skillsMobNav").click(function () {
            t("#skills")
        }), $("#informationMobNav").click(function () {
            t("#information")
        }), $("#interestsMobNav").click(function () {
            t("#interests")
        }), $("#statementMobNav").click(function () {
            t("#statement")
        }), $("#contactMobNav").click(function () {
            t("#contact")
        })
    }(),
    function () {
        var t = $("#triangleWrapper");
        t.click(function () {
            t.fadeOut()
        })
    }(),
    function () {
        function t(t) {
            t.preventDefault, $(".loader").animate({
                opacity: 1
            }, 4e3), n.to(o, 1, {
                opacity: 1,
                rotationY: 0,
                ease: Expo.easeOut
            }), n.add("flip"), n.to($(".submit"), .5, {
                rotationX: 90,
                ease: Circ.easeOut
            }, "flip-=1.7"), n.to($(".submit"), .5, {
                opacity: 0
            }, "flip-=0.5"), n.to($(".quill"), .5, {
                opacity: 0,
                top: 0,
                left: 300,
                ease: Expo.easeIn
            }, "flip+=1.5"), n.to(o, .25, {
                css: {
                    borderRadius: "50%",
                    backgroundColor: "#82a580"
                },
                ease: Circ.easeOut
            }, "flip-=0.5"), n.to(o, 1.2, {
                scaleX: .16,
                transformOrigin: "50% 50%",
                ease: Expo.easeOut
            }, "flip-=0.5"), n.to(o, .8, {
                rotationX: 90,
                scaleY: 0
            }, "flip+=1.2"), n.to(s, .1, {
                opacity: 1
            }, "flip+=1.8"), n.to(s, .5, {
                opacity: 1,
                transformOrigin: "50% 50%",
                scaleX: 0,
                rotation: 180
            }, "flip+=2"), n.to(s, .5, {
                opacity: 1,
                transformOrigin: "50% 50%",
                scaleX: 1,
                rotation: 180
            }, "flip+=2.5"), n.add("success"), n.to($(".circle-quill"), .5, {
                scaleY: 0,
                transformOrigin: "50% 50%",
                ease: Circ.easeOut
            }, "success"), n.to(r, .5, {
                scaleY: 1,
                opacity: 1,
                transformOrigin: "50% 50%",
                ease: Circ.easeIn
            }, "success"), n.to($(".circle-quill"), .5, {
                scaleY: 0,
                transformOrigin: "50% 50%",
                ease: Circ.easeOut
            }, "success"), n.to($("input"), .5, {
                scaleY: 0
            }, "success"), n.to($("textarea"), .5, {
                scaleY: 0
            }, "success"), n.to($(".success"), .5, {
                scaleY: 1,
                opacity: 1
            }, "success+=1"), n.to($(".success-dialog"), 1, {
                opacity: 1
            }, "success+=1"), n.from($(".paper"), .5, {
                opacity: 0,
                left: -500,
                top: 600
            }, "success+=1"), n.to($(".paper"), .1, {
                opacity: 1,
                ease: Expo.easeIn
            }, "success+=1"), n.to(c, .5, {
                scaleY: 0,
                stroke: "#b1dbd3",
                transformOrigin: "50% 50%"
            }, "success"), n.to(i, .5, {
                css: {
                    backgroundColor: "#2d2b2b"
                }
            }, "success")
        }

        function e(t) {
            var e = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return e.test(t)
        }
        var n = new TimelineLite,
            i = $(".sub-form"),
            o = $(".submit-under"),
            a = ($(".allsub"), $(".loader circle")),
            s = $(".loader2 circle"),
            c = [a, s],
            r = $(".circle-paper");
        TweenMax.set(o, {
            opacity: .7,
            rotationY: 90
        }), TweenMax.set($(".submit-under, .loader, .loader2, .circle-paper, p.success-dialog, h2.success"), {
            visibility: "visible"
        }), TweenMax.set(r, {
            scaleY: 0,
            transformOrigin: "50% 50%"
        }), TweenMax.set([s, r], {
            opacity: 0
        }), TweenMax.set($(".success, .success-dialog, .paper"), {
            opacity: 0
        }), $("#submitBtn").on("click", function (n) {
            $("#errorListJS").empty();
            var i = $("#fullname").val(),
                o = $("#email").val(),
                a = $("#message").val();
            return $.isEmptyObject(i) || $.isEmptyObject(o) || $.isEmptyObject(a) ? document.getElementById("errorListJS").innerHTML = "<li>Please make sure to fill out all fields!</li>" : e(o) ? captchaValidation.get() ? $.post("contact.php", {
                fullname: i,
                email: o,
                message: a
            }, function (e) {
                $("#contactform")[0].reset(), captchaValidation.set(!1), $(".captchaWrapper").fadeOut(), t(n)
            }) : document.getElementById("errorListJS").innerHTML = '<li>Please make sure to validate the "reCAPTCHA"!</li>' : document.getElementById("errorListJS").innerHTML = "<li>Something is wrong with your email!</li>", !1
        })
    }(), $(".cite").hide(0).fadeIn(6e3);
    var a = function () {
        var t = !0;
        return {
            set: function (e) {
                t = e
            },
            get: function () {
                return t
            }
        }
    }();
    a.set($(window).width() < 642 || $(window).height() < 600);
    var s = function () {
            var t = !1;
            return {
                set: function (e) {
                    t = e
                },
                get: function () {
                    return t
                }
            }
        }(),
        c = function () {
            var t = !1,
                e = !1,
                n = !1;
            return {
                setProjectsAnim: function (e) {
                    t = e
                },
                getProjectsAnim: function () {
                    return t
                },
                setSkillsAnim: function (t) {
                    e = t
                },
                getSkillsAnim: function () {
                    return e
                },
                setTutsAnim: function (t) {
                    n = t
                },
                getTutsAnim: function () {
                    return n
                }
            }
        }();
    $(function () {
            a.get() || s.get() ? s.set(!1) : (e("body"), s.set(!0))
        }), a.get() ? "" : $(".insidebox").mCustomScrollbar({
            theme: "minimal-dark"
        }), $(window).resize(function () {
            a.set($(window).width() < 642 || $(window).height() < 600), a.get() && !c.getProjectsAnim() ? (t(), n("body")) : "", a.get() || s.get() ? "" : e("body"), a.get() && s.get() ? n("body") : ""
        }),
        function () {
            function t(t, e) {
                $(t).click(function () {
                    $(e).fadeIn(), i()
                })
            }

            function e(t) {
                $(t).click(function () {
                    for (var t = 0; a > t; ++t) {
                        var e = ".popup0" + (t + 1);
                        $(e).fadeOut()
                    }
                    o()
                })
            }
            for (var n = $("div[id^='btnInfo']"), a = n.length, s = 0; a > s; ++s) {
                var c = ".popup0" + (s + 1),
                    r = "#" + n[s].id;
                t(r, c)
            }
            e(".close"), e(".outsidebox")
        }(), $('a[href^="#"]').on("click", function (t) {
            t.preventDefault();
            var e = $(this).attr("href");
            "#projects" === e ? $(e).animatescroll({
                scrollSpeed: 2e3,
                easing: "easeOutBounce"
            }) : $(e).animatescroll({
                scrollSpeed: 2e3,
                easing: "easeInOutSine"
            })
        }), $(window).load(function () {
            function t() {
                for (var t = r.createRand(); t === r.getRand();) t = r.createRand();
                r.get.removeClass("animate"), r.get.eq(t).addClass("animate"), r.setOldRand(t)
            }

            function e() {
                r.get.each(function (t) {
                    setTimeout(function () {
                        r.get.eq(t).addClass("skillVisible")
                    }, 300 * t)
                }), c.setSkillsAnim(!0)
            }

            function n() {
                $(".pdf").animate({
                    opacity: "0.8"
                }, 2e3), $(".youtube").animate({
                    opacity: "0.8"
                }, 2e3), c.setTutsAnim(!0)
            }

            function i() {
                $("#pshadow").animate({
                    top: "0px",
                    opacity: "1"
                }, 1e3), $("#pphone").animate({
                    top: "0px",
                    opacity: "1"
                }, 1e3), $("#pmsgblack").animate({
                    left: "0px",
                    opacity: ".9"
                }, 1200), $("#pmsggreen").animate({
                    right: "0px",
                    opacity: ".9"
                }, 1200), $("#chat").animate({
                    right: "0px",
                    opacity: "1"
                }, 1200), $("#ip").animate({
                    left: "0px",
                    opacity: "1"
                }, 1200), $(".nao").animate({
                    left: "0px"
                }, 1200), s(), $(".naologobody").animate({
                    opacity: "1"
                }, 1200), $(".robot").animate({
                    left: "0px",
                    opacity: "1"
                }, 1200), setInterval(function () {
                    t()
                }, 3e3), c.setProjectsAnim(!0)
            }

            function o(t, e, n, i, o, a, s, c) {
                if (!(t > n || n > e)) {
                    var r = Math.round(-i + Math.pow(n - t, 3) * i / Math.pow(e - t, 3));
                    $(o).css(a, r + "px"), $(s).css(c, r + "px")
                }
            }
            var s = function () {
                    $("#naohead").rotate({
                        angle: 0,
                        animateTo: 720,
                        duration: 1800
                    })
                },
                r = function () {
                    var t = $(".skillElement"),
                        e = 13;
                    return {
                        get: t,
                        getRand: function () {
                            return e
                        },
                        setOldRand: function (t) {
                            e = t
                        },
                        createRand: function () {
                            return Math.floor(Math.random() * t.length)
                        }
                    }
                }();
            ! function () {
                a.get() || ($("#fitness").hover(function () {
                    $("#backDB").addClass("element-animation-rev"), $("#frontDB").addClass("element-animation")
                }, function () {
                    $("#backDB").removeClass("element-animation-rev"), $("#frontDB").removeClass("element-animation")
                }), $("#bulbTechnology").hover(function () {
                    $("#zeroLights").addClass("element-animation-bulb"), $("#oneLights").addClass("element-animation-bulb-rev"), $("#twoLights").addClass("element-animation-bulb"), $("#threeLights").addClass("element-animation-bulb")
                }, function () {
                    $("#zeroLights").removeClass("element-animation-bulb"), $("#oneLights").removeClass("element-animation-bulb-rev"), $("#twoLights").removeClass("element-animation-bulb"), $("#threeLights").removeClass("element-animation-bulb")
                }))
            }();
            var l = function () {
                    var t = !1;
                    return {
                        set: function (e) {
                            t = e
                        },
                        get: function () {
                            return t
                        }
                    }
                }(),
                u = $("header, #svgWrapper");
            $(".section-main");
            $(window).scroll(function () {
                    var t = $(window).scrollTop();
                    return a.get() ? (t > 5855 && !l.get() ? (u.fadeOut(), l.set(!0)) : "", void(5855 > t && l.get() ? (u.fadeIn(), l.set(!1)) : "")) : (o(0, 600, t, 197, "#aboutDiamondL", "left", "#aboutDiamondR", "right"), o(1235, 1835, t, 197, "#skillsDiamondL", "left", "#skillsDiamondR", "right"), o(2221, 2821, t, 197, "#interestsDiamondL", "left", "#interestsDiamondR", "right"), t > 900 && !c.getProjectsAnim() ? i() : "", t > 1290 && !c.getSkillsAnim() ? e() : "", t > 2060 && !c.getTutsAnim() ? n() : "", void 0)
                }), $("#triangle").rotate({
                    bind: {
                        click: function () {
                            $(this).rotate({
                                angle: 0,
                                animateTo: 720,
                                easing: $.easing.easeInOutExpo
                            })
                        }
                    }
                }),
                function () {
                    function t(t) {
                        b.attr("src", t.artwork_url.replace("-large", "-crop")), v.html(t.user.username), h.html(t.title), y.html(t.title)
                    }

                    function e(e, n) {
                        SC.get(n, function (n) {
                            t(n), e ? s.setAttribute("src", n.uri + g + u) : a(n.uri, u)
                        })
                    }

                    function n() {
                        $("#player").addClass("open"), $("#record").addClass("spinning"), k.attr("src", r), s.play(), C = !0
                    }

                    function i() {
                        $("#player").removeClass("open"), $("#record").removeClass("spinning"), k.attr("src", c), s.pause(), C = !1
                    }

                    function o() {
                        i(), l += 1, l == f.length ? l = 0 : "", d = m + f[l], e(!0, d)
                    }

                    function a(t, e) {
                        s = new Audio(t + g + e), s.setAttribute("id", "scPlayer"), s.onended = function () {
                            o(), setTimeout(function () {
                                n()
                            }, 500)
                        }, s.onerror = function () {
                            v.html("COULD NOT LOAD THE TRACK :/"), v.css({
                                color: "red",
                                "font-style": "normal",
                                "font-weight": "bold"
                            }), console.log("Ups, something went wrong! :(\nThe song could not be streamed.\nYou can stream the music at www.soundcloud.com/ivorycone")
                        }
                    }
                    var s, c = "assets/img/06-Section-Interests/scplayer/play.svg",
                        r = "assets/img/06-Section-Interests/scplayer/pause.svg",
                        l = 0,
                        u = "f886d5af97932b8588127e3d52d44fae",
                        f = ["212780844", "271763340", "271302653", "242495606", "245362414", "202293251", "208615900", "206863746"],
                        p = f[l],
                        m = "/tracks/",
                        d = "/tracks/" + p,
                        g = "/stream?client_id=",
                        b = $("#artwork"),
                        v = $("#band"),
                        h = $("#track"),
                        y = $("#songTitle"),
                        k = $("#play"),
                        C = !1,
                        w = C,
                        O = !1,
                        T = !0;
                    SC.initialize({
                        client_id: u
                    }), k.hover(function (t) {
                        t.preventDefault(), O || (O = !0, e(!1, d), setTimeout(function () {
                            C ? i() : n()
                        }, 500))
                    }), k.click(function (t) {
                        T ? T = !1 : setTimeout(function () {
                            t.preventDefault(), C ? i() : n()
                        }, 50)
                    }), $("#leftArrow").click(function () {
                        w = C, i(), l -= 1, 0 > l ? l = f.length - 1 : "", d = m + f[l], e(!0, d), w && setTimeout(function () {
                            n()
                        }, 500)
                    }), $("#rightArrow").click(function () {
                        w = C, o(), w && setTimeout(function () {
                            n()
                        }, 500)
                    })
                }()
        })
});