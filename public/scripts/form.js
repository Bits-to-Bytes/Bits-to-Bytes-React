"use strict";
function ResourceLoader() {}
function SPForm(t) {
  var e = this,
    o = "//login.sendpulse.com",
    r = "//email.routee.net";
  (window.SPFormRegistry = window.SPFormRegistry || {}),
    (e.id = t),
    (e.formSelector = "#sp-form-" + e.id),
    (e.$form = jQ(e.formSelector)),
    (e.$formMessage = jQ(e.formSelector + " .sp-message")),
    (e.$formOuter = jQ(e.formSelector).parent(".sp-form-outer").length
      ? jQ(e.formSelector).parent(".sp-form-outer")
      : jQ(e.formSelector).parent(".form-outer")),
    (e.$submitButton = jQ(e.formSelector + " button.sp-button")),
    (e.$closeButton = jQ(
      e.formSelector + " .sp-btn-close," + e.formSelector + " .sp-btn-thanks"
    )),
    (e.formHash = e.$form.attr("sp-hash")),
    (e.formType = e.$form.hasClass("sp-form-popup") ? "popup" : "embed"),
    (e.formType = e.$form.hasClass("sp-form-fixed") ? "fixed" : e.formType),
    (e.inputs = {}),
    (e.inputsSelector = e.formSelector + " .sp-element-container :input"),
    (e.language = e.$form.attr("sp-lang")),
    (e.preparedData = {}),
    (e.sent = !1),
    (e.showOptions = (function () {
      var t = e.$form.attr("sp-show-options")
        ? JSON.parse(decodeURIComponent(e.$form.attr("sp-show-options")))
        : {};
      return (
        t.maDomain &&
          (o =
            "login.sendpulse.com" === t.maDomain
              ? "//web.webformscr.com"
              : "//" + t.maDomain),
        t.amd && (o = r),
        void 0 === t.urlFilter && (t.urlFilter = !1),
        void 0 === t.urlFilterConditions && (t.urlFilterConditions = []),
        t
      );
    })()),
    (e.submitURL = (function () {
      return o + "/members/forms/jsonp-submit";
    })()),
    (e.history = new SPHistory(e.formHash)),
    (e.previewMode = (function () {
      var t = [
        "forms.sendpulse.com",
        "forms.sendpulse.local",
        "forms.routee.net",
      ];
      return (
        e.showOptions.formsDomain && t.push(e.showOptions.formsDomain),
        -1 !== t.indexOf(window.location.hostname)
      );
    })()),
    (e.statAgent = new SPStatAgent(o, e.id)),
    (e.valid = !0),
    (e.ipInfo = {}),
    (e.ipSrvURL = "//gp.webformscr.com"),
    (e.urlFilter = new SPURLFilter({
      active: !e.previewMode && e.showOptions.urlFilter,
      conditions: e.showOptions.urlFilterConditions,
    })),
    e.init();
}
function SPHistory(t) {
  var e = this;
  (e.formHash = t), (e.all = e.raise());
}
function SPStatAgent(t, e) {
  var o = this;
  (o.formId = e), (o.targetUrl = t + "/members/forms/stat"), (o.fp = 0);
}
function SPURLFilter(t) {
  function e(t) {
    return t.replace(/((^\w+:|^)\/\/)|(\/$)/g, "");
  }
  var o = this;
  (o.config = { active: !1, conditions: [], url: e(window.location.href) }),
    (o.config = jQ.extend(o.config, t)),
    (o.rules = (function (t) {
      var o = { show: "", hide: "" };
      return (
        t.forEach(function (t) {
          var r = e(t.token);
          switch (t.clause) {
            case "contains":
              o[t.force] += r + "|";
              break;
            case "equal":
              o[t.force] += "^" + r + "$|";
              break;
            case "begins":
              o[t.force] += "^" + r + "|";
              break;
            case "ends":
              o[t.force] += r + "$|";
          }
        }),
        o
      );
    })(o.config.conditions));
}
!(function (t) {
  function e(e) {
    new Promise(function (e, o) {
      void 0 === t.jQuery || Boolean(!t.jQuery.fn.on)
        ? ResourceLoader.loadScript(
            "//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js",
            function () {
              t.jQ = t.jQuery;
            }
          ).then(function () {
            e();
          })
        : ((t.jQ = t.jQuery), e());
    }).then(e);
  }
  function o() {
    var t = jQ(".sp-form-outer").length ? ".sp-form-outer" : ".form-outer",
      e = [],
      o = jQ('div.sp-form [name="sform[phone]"]'),
      n = jQ('div[class*=" sp-animation-"]'),
      i = r(),
      a = function () {
        var t = !1;
        return (
          jQ("[sp-show-options]").each(function () {
            var e = jQ(this).attr("sp-show-options")
              ? JSON.parse(decodeURIComponent(jQ(this).attr("sp-show-options")))
              : {};
            if ("undefined" !== e.utmEnable && !0 === e.utmEnable)
              return (t = !0), !1;
          }),
          t
        );
      };
    try {
      s = "//" + jQ(t).next("script").attr("src").split("/")[2];
    } catch (t) {
      s = "//login.sendpulse.com";
    }
    new Promise(function (t, r) {
      o.length > 0 &&
        (e.push(
          ResourceLoader.loadCss(
            "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/css/intlTelInput.css"
          )
        ),
        e.push(
          ResourceLoader.loadScript(
            "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/intlTelInput.min.js"
          )
        ),
        e.push(
          ResourceLoader.loadScript(
            "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/utils.js"
          )
        )),
        a() &&
          e.push(
            ResourceLoader.loadScript(s + "/apps/fc3/build/spsbuster-libs.js")
          ),
        n.length > 0 &&
          e.push(
            ResourceLoader.loadCss(
              s + "/apps/fc3/build/form-animations.css?1607940994942"
            )
          ),
        e.push(
          ResourceLoader.loadScript(
            "//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.6/mobile-detect.min.js"
          )
        ),
        e.push(
          ResourceLoader.loadCss(
            s + "/apps/fc3/build/form-defaults.css?1607940994942"
          )
        ),
        Promise.all(e).then(
          function () {
            t();
          },
          function (t) {
            console.error("Necessary scripts have not been loaded:", t);
          }
        );
    }).then(function () {
      for (var t = 0, e = i.length; t < e; t++) new SPForm(i[t]).run();
    });
  }
  function r() {
    var t = jQ("div.sp-form"),
      e = t.length,
      o = [];
    if (!e)
      throw new Error(
        "SendPulse: Subscription form ID is missing or code is corrupted!"
      );
    for (var r = 0; r < e; r++) {
      var s = Number(jQ(t[r]).attr("sp-id"));
      if (isNaN(s) || s < 1)
        throw new Error("SendPulse: Subscription form ID is wrong!");
      o.push(s);
    }
    return o;
  }
  var s = "";
  (t.spFormBootstrap = function () {
    "undefined" != typeof Promise &&
    -1 !== Promise.toString().indexOf("[native code]")
      ? e(o)
      : ResourceLoader.loadPromisePolyfill(function () {
          e(o);
        });
  }),
    t.addEventListener("load", t.spFormBootstrap, !1);
})(window),
  (ResourceLoader.loadScript = function (t, e, o) {
    return new Promise(function (r, s) {
      var n = document.createElement("script");
      void 0 === o && (o = !1),
        (n.type = "text/javascript"),
        (n.async = !0),
        (n.src = t + (o ? "?t=" + new Date().getTime() : "")),
        document.getElementsByTagName("head")[0].appendChild(n),
        n.readyState
          ? (n.onreadystatechange = function () {
              ("loaded" !== n.readyState && "complete" !== n.readyState) ||
                ((n.onreadystatechange = null),
                "function" == typeof e && e(),
                r());
            })
          : (n.onload = function () {
              "function" == typeof e && e(), r();
            }),
        (n.onerror = function () {
          s(new Error("Loading fail! " + t));
        });
    });
  }),
  (ResourceLoader.loadCss = function (t, e, o) {
    return new Promise(function (r, s) {
      var n = document.createElement("link");
      void 0 === o && (o = !1),
        (n.rel = "stylesheet"),
        (n.media = "screen"),
        (n.href = t + (o ? "?t=" + new Date().getTime() : "")),
        document.getElementsByTagName("head")[0].appendChild(n),
        n.readyState
          ? (n.onreadystatechange = function () {
              ("loaded" !== n.readyState && "complete" !== n.readyState) ||
                ((n.onreadystatechange = null),
                "function" == typeof e && e(),
                r());
            })
          : (n.onload = function () {
              "function" == typeof e && e(), r();
            }),
        (n.onerror = function () {
          s(new Error("Loading fail! " + t));
        });
    });
  }),
  (ResourceLoader.loadPromisePolyfill = function (t, e) {
    var o =
        "//polyfill.io/v2/polyfill.min.js?flags=gated,always&features=Promise,&rum=0",
      r = document.createElement("script");
    void 0 === e && (e = !1),
      (r.type = "text/javascript"),
      (r.async = !1),
      (r.src = o + (e ? "?t=" + new Date().getTime() : "")),
      document.getElementsByTagName("head")[0].appendChild(r),
      r.readyState
        ? (r.onreadystatechange = function () {
            ("loaded" !== r.readyState && "complete" !== r.readyState) ||
              ((r.onreadystatechange = null), "function" == typeof t && t());
          })
        : (r.onload = function () {
            "function" == typeof t && t();
          }),
      (r.onerror = function () {
        throw new Error("Loading fail! " + o);
      });
  });
var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t &&
          "function" == typeof Symbol &&
          t.constructor === Symbol &&
          t !== Symbol.prototype
          ? "symbol"
          : typeof t;
      };
(SPForm.prototype.init = function () {
  var t = this;
  return (
    t.$closeButton.on("click", function (e) {
      t.close(!0);
    }),
    t.$submitButton.prop("disabled", !t.valid),
    jQ(t.inputsSelector).each(function (e, o) {
      var r = jQ(o);
      (r.hideTip = function () {
        r.hasClass("sp-invalid") &&
          (this.removeClass("sp-invalid"), this.next(".sp-tip").detach());
      }),
        (r.showTip = function (t) {
          var e = JSON.parse(decodeURIComponent(this.attr("sp-tips")));
          this.addClass("sp-invalid"),
            e.hasOwnProperty(t) &&
              this.after(
                jQ("<div/>", { class: "sp-tip sp-invalid", html: e[t] })
              );
        }),
        r.on("focus", function () {
          t.hideAllTips();
        }),
        "sform[phone]" === r.attr("name") &&
          r.intlTelInput({
            initialCountry: "auto",
            separateDialCode: !0,
            geoIpLookup: function (e) {
              jQ.get(t.ipSrvURL, function () {}, "jsonp").always(function (o) {
                t.ipInfo = o;
                var r = o && o.country_code ? o.country_code : "";
                e(r);
              });
            },
            utilScript:
              "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.2.4/js/utils.js",
          }),
        (t.inputs[o.name] = r);
    }),
    t.$submitButton.off("click").on("click", function (e) {
      return t.submit(), !1;
    }),
    t.$form.on("submit", function () {
      return t.submit(), !1;
    }),
    t.previewMode &&
      (t.$form.removeClass("sp-form-popup"),
      t.$form.removeClass("sp-form-fixed"),
      t.$formOuter.removeClass("sp-popup-outer"),
      t.$closeButton.remove(),
      t.$formOuter.hasClass("sp-force-hide") &&
        setTimeout(function () {
          t.$formOuter.removeClass("sp-force-hide"),
            t.$formOuter.addClass("sp-show");
        }, 200)),
    "undefined" != typeof sbjs &&
      "undefined" !== t.showOptions.utmEnable &&
      !0 === t.showOptions.utmEnable &&
      sbjs.init(),
    t
  );
}),
  (SPForm.prototype.run = function () {
    this.show();
  }),
  (SPForm.prototype.hideAllTips = function () {
    var t = this;
    for (var e in t.inputs)
      t.inputs.hasOwnProperty(e) &&
        t.inputs[e].hasOwnProperty("hideTip") &&
        t.inputs[e].hideTip();
  }),
  (SPForm.prototype.disableInputs = function () {
    var t = this;
    jQ(t.inputsSelector).prop("disabled", !0),
      t.$submitButton.prop("disabled", !0);
  }),
  (SPForm.prototype.enableInputs = function () {
    var t = this;
    jQ(t.inputsSelector).prop("disabled", !1),
      t.$submitButton.prop("disabled", !1);
  }),
  (SPForm.prototype.close = function (t) {
    var e = this;
    "embed" !== e.formType &&
      (e.$formOuter.addClass("sp-hide"),
      t &&
        !e.history.getSubmits().length &&
        e.history.addReject(new Date().getTime()),
      e.statAgent.registerRefusing(),
      (function () {
        var t = document.querySelector(".sp-form-outer"),
          o = new CustomEvent("spFormCloseEvent", {
            detail: { formId: e.id },
            bubbles: !0,
          });
        t.dispatchEvent(o);
      })());
  }),
  (SPForm.prototype.show = function () {
    function t(t) {
      (t = t || 0.2),
        (t *= 1e3),
        setTimeout(function () {
          o.$formOuter.addClass("sp-showing"),
            setTimeout(function () {
              o.$formOuter.addClass("sp-show"), e();
            }, 200),
            setTimeout(function () {
              o.$formOuter.removeClass("sp-showing");
            }, 400);
        }, t);
    }
    function e() {
      var t = document.querySelector(".sp-form-outer"),
        e = new CustomEvent("spFormShowEvent", {
          detail: { formId: o.id },
          bubbles: !0,
        });
      t.dispatchEvent(e);
    }
    var o = this;
    if (
      !(
        (function () {
          if (o.showOptions.hideOnMobile) {
            return new MobileDetect(window.navigator.userAgent).mobile();
          }
          return !1;
        })() ||
        ("embed" !== o.formType &&
          (function () {
            if ("onButtonClick" === o.showOptions.condition)
              return (
                jQ("[sp-show-form]").on("click", function () {
                  var t = jQ(this).attr("sp-show-form");
                  jQ("#sp-form-" + t)
                    .parent(".sp-form-outer")
                    .removeClass("sp-force-hide")
                    .removeClass("sp-hide")
                    .addClass("sp-show"),
                    e(),
                    o.statAgent.registerShow();
                }),
                !0
              );
          })())
      )
    ) {
      if ((o.$formOuter.removeClass("sp-force-hide"), o.previewMode))
        return void t();
      if ("embed" !== o.formType) {
        if (o.history.getSubmits().length) return;
        if (o.history.getRejects().length > 1) return;
        if (1 === o.history.getRejects().length) {
          var r = new Date().getTime(),
            s = (r - o.history.getLastShow()) / 864e5;
          if (o.showOptions.repeat > 0 && s < o.showOptions.repeat) return;
        }
        o.urlFilter.isAllowed();
        var n =
            !(
              !o.showOptions.urlFilter ||
              "object" !== _typeof(o.urlFilter.rules.hide)
            ) &&
            o.urlFilter.rules.hide.test(
              decodeURIComponent(o.urlFilter.config.url)
            ),
          i =
            !o.showOptions.urlFilter ||
            "object" !== _typeof(o.urlFilter.rules.show) ||
            o.urlFilter.rules.show.test(
              decodeURIComponent(o.urlFilter.config.url)
            );
        ("popup" !== o.formType && "fixed" !== o.formType) ||
          n ||
          !i ||
          (!(function () {
            switch (o.showOptions.condition) {
              case "onEnter":
                t(o.showOptions.delay);
                break;
              case "onScroll":
                jQ(window).scroll(function () {
                  var e =
                    ((jQ(document).height() - jQ(window).height()) / 100) *
                    o.showOptions.scrollTo;
                  jQ(window).scrollTop() >= e && t();
                });
                break;
              case "onCursorLeave":
                jQ("body").on("mouseleave", function (e) {
                  (e.clientY <= 0 ||
                    e.clientX <= 0 ||
                    e.clientX >= window.innerWidth ||
                    e.clientY >= window.innerHeight) &&
                    t();
                });
                break;
              case "onClose":
                jQ(window).on("unload", function (e) {
                  e.preventDefault(), t();
                });
            }
          })(),
          o.statAgent.registerShow());
      } else o.statAgent.registerShow(), e();
      o.history.addLastShow();
    }
  }),
  (SPForm.prototype.validateAll = function () {
    var t = this;
    t.valid = !0;
    for (var e in t.inputs)
      if (
        t.inputs.hasOwnProperty(e) &&
        void 0 !== t.inputs[e].attr("sp-type")
      ) {
        var o = t.inputs[e],
          r = t.validate(o);
        t.valid = t.valid && r;
      }
    return t;
  }),
  (SPForm.prototype.validate = function (t) {
    var e = this,
      o = t.attr("sp-type");
    if (void 0 === o) return !0;
    "sform[phone]" === t.name && (o = "phone");
    var r = !0,
      s = t.val();
    if ((t.hideTip(), t.prop("required")))
      switch (o) {
        case "checkbox":
        case "gdprTerms":
        case "gdprConfirm":
          r = t.prop("checked");
          break;
        default:
          r = "" !== s;
      }
    if (!r)
      return t.showTip("required"), e.$submitButton.prop("disabled", !1), r;
    if (t.prop("required") && "" === s)
      return (
        (r = !1), t.showTip("required"), e.$submitButton.prop("disabled", !1), r
      );
    if (r && "" !== s)
      switch (o) {
        case "address":
        case "date":
          r = !0;
          break;
        case "email":
          r = (function (t) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              t
            );
          })(s);
          break;
        case "phone":
          t.prop("required") &&
            (r = (function (e) {
              return !!jQ.trim(t.val()) && t.intlTelInput("isValidNumber");
            })(t));
      }
    return r || t.showTip("wrong"), r;
  }),
  (SPForm.prototype.cbSubmit = function (t) {
    var e = this;
    t.hasOwnProperty("html") &&
      t.hasOwnProperty("status") &&
      (e.$form.find(".sp-element-container").hide(),
      "success" === t.status
        ? (e.$formMessage.addClass("sp-message-success"),
          (e.sent = !0),
          e.history.addSubmit(),
          e.$formMessage.html(t.html),
          e.enableInputs(),
          e.statAgent.registerSubmit(),
          e.statAgent.sendAnalyticsEvent(e.showOptions.analytics))
        : "verify" === t.status
        ? ((e.sent = !0),
          e.history.addSubmit(),
          e.enableInputs(),
          e.statAgent.sendAnalyticsEvent(e.showOptions.analytics),
          e.close(),
          (window.location.href =
            "//" +
            e.showOptions.maDomain +
            "/forms/recaptcha?hash=" +
            t.form_hash))
        : (e.$formMessage.addClass("sp-message-error"),
          e.$formMessage.html(t.html),
          e.enableInputs(),
          e.statAgent.registerBadSubmit())),
      e.$submitButton.removeClass("btn-loading"),
      e.removeInstanceFromRegistry();
  }),
  (SPForm.prototype.submit = function () {
    var t = this;
    if (!t.sent && (t.validateAll(), t.valid)) {
      if ("popup" === t.formType && t.history.getSubmits().length > 1)
        return (
          console.warn("Form has been submitted twice already. Enough!"),
          t.close(),
          !1
        );
      t.$submitButton.addClass("btn-loading"),
        t.disableInputs(),
        t.putInstanceToRegistry(),
        (function () {
          for (var e in t.inputs)
            if (t.inputs.hasOwnProperty(e)) {
              var o = t.inputs[e];
              switch (o.attr("sp-type")) {
                case "phone":
                  t.preparedData[e] = o.intlTelInput("getNumber");
                  break;
                case "checkbox":
                case "gdprTerms":
                case "gdprConfirm":
                  o.prop("checked")
                    ? (t.preparedData[e] = o.val())
                    : (t.preparedData[e] = "no");
                  break;
                case "radio":
                  t.preparedData[e] = jQ('[name="' + e + '"]:checked').val();
                  break;
                default:
                  t.preparedData[e] = o.val();
              }
            }
          (t.preparedData.sform_lang = t.language),
            (t.preparedData["sform[hash]"] = t.formHash),
            (t.preparedData["sform[" + window.btoa("autoSite") + "]"] =
              window.location.hostname),
            jQ.isEmptyObject(t.ipInfo) ||
              ((t.preparedData["sform[" + window.btoa("autoIp") + "]"] =
                t.ipInfo.ip),
              (t.preparedData["sform[" + window.btoa("autoCity") + "]"] =
                t.ipInfo.city),
              (t.preparedData["sform[" + window.btoa("autoRegion") + "]"] =
                t.ipInfo.region),
              (t.preparedData["sform[" + window.btoa("autoCountry") + "]"] =
                t.ipInfo.country)),
            "undefined" !== t.showOptions.utmEnable &&
              !0 === t.showOptions.utmEnable &&
              ((t.preparedData["sform[" + window.btoa("visitFirstType") + "]"] =
                sbjs.get.first.typ),
              "(direct)" === sbjs.get.first.src
                ? (t.preparedData[
                    "sform[" + window.btoa("visitFirstUtmSource") + "]"
                  ] = sbjs.get.first.src.substring(
                    1,
                    sbjs.get.first.src.length - 1
                  ))
                : (t.preparedData[
                    "sform[" + window.btoa("visitFirstUtmSource") + "]"
                  ] = sbjs.get.first.src),
              "(none)" !== sbjs.get.first.mdm &&
                (t.preparedData[
                  "sform[" + window.btoa("visitFirstMedium") + "]"
                ] = sbjs.get.first.mdm),
              "(none)" !== sbjs.get.first.cmp &&
                (t.preparedData[
                  "sform[" + window.btoa("visitFirstCampaign") + "]"
                ] = sbjs.get.first.cmp),
              "(none)" !== sbjs.get.first.cnt &&
                (t.preparedData[
                  "sform[" + window.btoa("visitFirstContent") + "]"
                ] = sbjs.get.first.cnt),
              "(none)" !== sbjs.get.first.trm &&
                (t.preparedData[
                  "sform[" + window.btoa("visitFirstUtmTerm") + "]"
                ] = sbjs.get.first.trm),
              (t.preparedData[
                "sform[" + window.btoa("visitSubscribeType") + "]"
              ] = sbjs.get.current.typ),
              "(direct)" === sbjs.get.current.src
                ? (t.preparedData[
                    "sform[" + window.btoa("visitSubscribeSource") + "]"
                  ] = sbjs.get.current.src.substring(
                    1,
                    sbjs.get.current.src.length - 1
                  ))
                : (t.preparedData[
                    "sform[" + window.btoa("visitSubscribeSource") + "]"
                  ] = sbjs.get.current.src),
              "(none)" !== sbjs.get.current.mdm &&
                (t.preparedData[
                  "sform[" + window.btoa("visitSubscribeMedium") + "]"
                ] = sbjs.get.current.mdm),
              "(none)" !== sbjs.get.current.cmp &&
                (t.preparedData[
                  "sform[" + window.btoa("visitSubscribeCampaign") + "]"
                ] = sbjs.get.current.cmp),
              "(none)" !== sbjs.get.current.cnt &&
                (t.preparedData[
                  "sform[" + window.btoa("visitSubscribeContent") + "]"
                ] = sbjs.get.current.cnt),
              "(none)" !== sbjs.get.current.trm &&
                (t.preparedData[
                  "sform[" + window.btoa("visitSubscribeTerm") + "]"
                ] = sbjs.get.current.trm));
        })(),
        (function () {
          jQ.ajax({
            url: t.submitURL + "?callback=?",
            dataType: "jsonp",
            data: t.preparedData,
            jsonpCallback: t.makeCallbackName("cbSubmit"),
            statusCode: function () {
              alert(
                "This form cannot be submitted because the referrer is missing. Appeal to site admin please."
              );
            },
          });
        })(),
        (function () {
          var e = document.querySelector(".sp-form-outer"),
            o = new CustomEvent("spFormSubmitEvent", {
              detail: { formId: t.id },
              bubbles: !0,
            });
          e.dispatchEvent(o);
        })();
    }
  }),
  (SPForm.prototype.makeCallbackName = function (t) {
    return "SPFormRegistry['" + this.formHash + "']." + t;
  }),
  (SPForm.prototype.putInstanceToRegistry = function () {
    var t = this;
    window.SPFormRegistry[t.formHash] = t;
  }),
  (SPForm.prototype.removeInstanceFromRegistry = function () {
    var t = this;
    void 0 !== window.SPFormRegistry[t.formHash] &&
      delete window.SPFormRegistry[t.formHash];
  }),
  (SPHistory.prototype.raise = function () {
    var t = this;
    if (localStorage[t.formHash])
      try {
        return JSON.parse(localStorage.getItem(t.formHash));
      } catch (t) {
        console.error(t);
      }
    return { submits: [], rejects: [], lastShow: 0 };
  }),
  (SPHistory.prototype.persist = function () {
    var t = this;
    localStorage.setItem(t.formHash, JSON.stringify(t.all));
  }),
  (SPHistory.prototype.add = function (t, e) {
    var o = this;
    switch (((e = e || new Date().getTime()), t)) {
      case "submits":
      case "rejects":
        o.all[t].push(e);
        break;
      case "lastShow":
        o.all[t] = e;
    }
    o.persist();
  }),
  (SPHistory.prototype.addSubmit = function (t) {
    this.add("submits", t);
  }),
  (SPHistory.prototype.addReject = function (t) {
    this.add("rejects", t);
  }),
  (SPHistory.prototype.addLastShow = function (t) {
    this.add("lastShow", t);
  }),
  (SPHistory.prototype.get = function (t) {
    var e = this;
    if (e.all.hasOwnProperty(t)) return e.all[t];
  }),
  (SPHistory.prototype.getSubmits = function () {
    return this.get("submits");
  }),
  (SPHistory.prototype.getRejects = function () {
    return this.get("rejects");
  }),
  (SPHistory.prototype.getLastShow = function () {
    return this.get("lastShow");
  }),
  (SPStatAgent.prototype.sendInfo = function (t) {}),
  (SPStatAgent.prototype.registerShow = function () {
    this.sendInfo("show");
  }),
  (SPStatAgent.prototype.registerSubmit = function () {
    this.sendInfo("submit");
  }),
  (SPStatAgent.prototype.registerBadSubmit = function () {
    this.sendInfo("bad_submit");
  }),
  (SPStatAgent.prototype.registerRefusing = function () {
    this.sendInfo("refusing");
  }),
  (SPStatAgent.prototype.sendAnalyticsEvent = function (t) {
    void 0 !== t &&
      (t.ga &&
        t.ga.send &&
        "undefined" != typeof ga &&
        ga(function () {
          var e = ga.getAll();
          if ((console.log("GA trackers", e), e.length)) {
            var o = e.shift().get("name");
            ga(o + ".send", {
              hitType: "event",
              eventCategory: "Sendpulse Email Form",
              eventAction: "Email Signup",
              eventLabel: t.ga.eventLabel,
            });
          }
        }),
      t.ym &&
        t.ym.send &&
        (console.log(
          "Yandex.Metrica Counter",
          window["yaCounter" + t.ym.counterId]
        ),
        void 0 !== t.ym.counterId &&
          void 0 !== t.ym.targetId &&
          void 0 !== window["yaCounter" + t.ym.counterId] &&
          window["yaCounter" + t.ym.counterId].reachGoal(t.ym.targetId)));
  }),
  (SPURLFilter.prototype.isAllowed = function () {
    var t = this;
    return (
      !t.config.active ||
      (function () {
        var e = { show: !1, hide: !0 },
          o = 0;
        return (
          jQ.each(t.rules, function (r, s) {
            s.length > 0
              ? ((t.rules[r] = new RegExp(s.slice(0, -1), "i")),
                (e[r] = t.rules[r].test(t.config.url)))
              : (o += 1);
          }),
          2 === o && (e.show = !0),
          e.show + !e.hide
        );
      })()
    );
  });
