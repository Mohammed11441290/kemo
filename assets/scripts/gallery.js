/*!
 * LBT Lightbox v1.1.2
 * by Jean Kássio
 *
 * More info:
 * https://jeankassio.dev
 *
 * Copyright Jean Kássio
 * Released under the MIT license
 * https://github.com/jeankassio/LBT-Lightbox/blob/main/LICENSE
 *
 * @preserve
 */ !(function (t) {
  t.fn.lbtLightBox = function (e) {
    ($closebutton =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.227 4.227a.774.774 0 0 1 1.095 0L12 10.905l6.678-6.678a.774.774 0 1 1 1.095 1.095L13.095 12l6.678 6.678a.774.774 0 1 1-1.095 1.095L12 13.095l-6.678 6.678a.774.774 0 1 1-1.095-1.095L10.905 12 4.227 5.322a.774.774 0 0 1 0-1.095Z" fill="currentColor"/></svg>'),
      ($dotoptions =
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402 2.2 2.2 0 0 0 0-4.402z" fill="currentColor"/></svg>'),
      ($odownload =
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" fill="currentColor"/></svg>'),
      ($oforward =
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 14.249v5.228l8.4-8.028-8.4-7.886v4.78c-10.53 0-13.2 11.678-13.2 11.678 2.981-5.266 7.484-5.772 13.2-5.772z" fill="currentColor"/></svg>'),
      ($osmile =
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z" fill="currentColor"/></svg>'),
      ($ostar =
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 15-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" fill="currentColor"/></svg>'),
      ($ochat =
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z" fill="currentColor"/></svg>'),
      ($loading =
        '<svg version="1.1" id="lbt-loading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve"> <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"> <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.5s" from="0 50 50" to="360 50 50" repeatCount="indefinite" /></path></svg>'),
      ($btn_play =
        '<svg class="lbt_btn_play" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path stroke-width="16.667" d="M100 183.333c46.024 0 83.333-37.309 83.333-83.333S146.024 16.667 100 16.667 16.667 53.976 16.667 100 53.976 183.333 100 183.333Zm-20.833-54.166 50-29.167-50-29.167v58.334ZM87.5 112.5l16.667-12.5L87.5 87.5v25Z"/></svg>'),
      ($oprofile = "https://github.com/jeankassio.png");
    let i, n;
    ($innerHeight = window.innerHeight),
      ($innerWidth = 0.7 * window.innerWidth);
    let a, o, l, r, s, c, d, h, b, u, g, $, p, m, v, f;
    var e = t.extend(
      {
        qtd_pagination: 8,
        pagination_width: "60px",
        pagination_height: "60px",
        captions: !1,
        captions_selector: ".caption",
        custom_children: "img",
        db: !1,
      },
      e
    );
    function x(t) {
      new Image().src = t;
    }
    function _(t, e, i) {
      return new Promise(function (i, n) {
        var a = indexedDB.open("lbt_lightbox");
        (a.onerror = function (t) {
          n(Error("Error text"));
        }),
          (a.onupgradeneeded = function (t) {
            t.target.transaction.abort(), n(Error("Not found"));
          }),
          (a.onsuccess = function (a) {
            var o = a.target.result
              .transaction([t])
              .objectStore(t)
              .index("type")
              .get(e);
            (o.onerror = function (t) {
              n(Error("Error text"));
            }),
              (o.onsuccess = function (t) {
                o.result ? i(o.result) : n(Error("object not found"));
              });
          });
      });
    }
    function w(t) {
      return new Promise((e, i) => {
        let n = new FileReader();
        (n.onloadend = () => e(n.result)), n.readAsDataURL(t);
      });
    }
    function y() {
      (n = i.length),
        0 == t(".lbr-thumb.active", e.container_lightbox).data("thumb_id")
          ? t("#lbt_previous", e.container_lightbox).css("display", "none")
          : t("#lbt_previous", e.container_lightbox).css("display", "block"),
        t(".lbr-thumb.active", e.container_lightbox).data("thumb_id") == n - 1
          ? t("#lbt_next", e.container_lightbox).css("display", "none")
          : t("#lbt_next", e.container_lightbox).css("display", "block");
    }
    function q() {
      ($th =
        t(".lbr-thumb.active", e.container_lightbox).outerWidth() *
          (e.qtd_pagination / 2) +
        t(".lbr-thumb.active", e.container_lightbox).outerWidth() / 3),
        ($sl = t("#lbt-thumbnails", e.container_lightbox).scrollLeft()),
        t("#lbt-thumbnails", e.container_lightbox).css(
          "left",
          "calc((50vw - " + $th + "px) + " + $sl + "px)"
        );
    }
    function C() {
      if (
        (t("#lbt-loading", e.container_lightbox).show(),
        (n = i.length),
        ($iIndex = t(".lbr-thumb.active", e.container_lightbox).data(
          "thumb_id"
        )),
        ++$iIndex >= n)
      ) {
        t("#lbt-loading", e.container_lightbox).hide();
        return;
      }
      H($iIndex),
        M(
          $iIndex,
          ($tid = t(".lbr-thumb.active", e.container_lightbox)
            .closest("li")
            .next()
            .find(".lbr-thumb")
            .index(".lbr-thumb"))
        ),
        q(),
        y();
    }
    function L() {
      if (
        (t("#lbt-loading", e.container_lightbox).show(),
        (n = i.length),
        ($iIndex = t(".lbr-thumb.active", e.container_lightbox).data(
          "thumb_id"
        )),
        --$iIndex < 0)
      ) {
        t("#lbt-loading", e.container_lightbox).hide();
        return;
      }
      H($iIndex),
        M(
          $iIndex,
          ($tid = t(".lbr-thumb.active", e.container_lightbox)
            .closest("li")
            .prev()
            .find(".lbr-thumb")
            .index(".lbr-thumb"))
        ),
        q(),
        y();
    }
    function S() {
      t("body").removeClass("lbr-ToFixed"),
        t("#lbt-lightbox_imgs", e.container_lightbox).remove();
    }
    function k(i) {
      S(),
        t(e.container_lightbox).append([
          t("<div/>", { id: "lbt-lightbox_imgs" }).append([
            t("<div/>", { id: "lbt_previous" }).append([
              t("<i/>", { class: "fa fa-angle-left" }).attr(
                "aria-hidden",
                "true"
              ),
            ]),
            t("<div/>", { id: "lbt_lightbox-wrapper" }).append([
              t("<div/>", { class: "lbt-image-wrapper" }).append([
                $loading,
                t("<div/>", { id: "lbt-lightbox-media" }),
                !0 === e.captions
                  ? t("<p/>", { id: "lbt-lightbox-caption" }).css({
                      bottom:
                        Number(e.pagination_height.replace("px", "")) +
                        50 +
                        "px",
                    })
                  : "",
              ]),
            ]),
            t("<div/>", { id: "lbt_next" }).append([
              t("<i/>", { class: "fa fa-angle-right" }).attr(
                "aria-hidden",
                "true"
              ),
            ]),
            t("<div/>", { class: "lt-thumbnail-wrapper" }).append([
              t("<ul/>", { id: "lbt-headertop" }).append([
                t("<div/>", { id: "lbt-profile_lightbox" }).append([
                  t("<img/>").attr("src", $oprofile),
                ]),
                t("<div/>", { id: "lbt-name_lightbox" }).text("Jean K\xe1ssio"),
                t("<div/>", { id: "lbt-date_lightbox" }).text(
                  "Hoje \xe0s 12:30"
                ),
                t("<a/>", { id: "lbt-chat_lightbox" }).append($ochat),
                t("<a/>", { id: "lbt-star_lightbox" }).append($ostar),
                t("<a/>", { id: "lbt-smile_lightbox" }).append($osmile),
                t("<a/>", { id: "lbt-forward_lightbox" }).append($oforward),
                t("<a/>", { id: "lbt-download_lightbox" }).append($odownload),
                t("<a/>", { id: "lbt-dot_lightbox" }).append($dotoptions),
                t("<a/>", { id: "lbt-close_lightbox" }).append($closebutton),
              ]),
            ]),
            t("<div/>", { class: "lb-thumbnail-wrapper" }).append([
              t("<ul/>", { id: "lbt-thumbnails" }).css({
                height:
                  Number(e.pagination_height.replace("px", "")) + 40 + "px",
              }),
            ]),
          ]),
        ]);
    }
    function H(a) {
      (n = i.length),
        ($loadto =
          ($start_index = t(".lbr-thumb.active", e.container_lightbox).data(
            "thumb_id"
          )) - a) < 0
          ? (function a(o) {
              n = i.length;
              for (var l = 1; l <= o; l++)
                ($i_next =
                  Math.abs(t("img.lbr-thumb").last().data("thumb_id")) + 1),
                  ($i_id = t(".lbr-thumb.active").data("thumb_id") + l),
                  !(
                    n <= $i_next ||
                    $i_id <
                      (Number.isInteger(
                        ($f = Math.ceil(
                          e.qtd_pagination / 2 +
                            (e.qtd_pagination % 2 != 0 ? -1 : 0)
                        ))
                      )
                        ? $f + 1
                        : $f)
                  ) &&
                    (($obj = t("img.lbr-thumb", e.container_lightbox)
                      .not(".removed")
                      .first()).addClass("removed"),
                    $obj
                      .closest("li")
                      .animate({ width: "0" }, { duration: 120, queue: !0 })
                      .queue(function () {
                        t(this).remove().dequeue();
                      }),
                    t("#lbt-thumbnails", e.container_lightbox).append([
                      ($anim = t("<li/>")
                        .append([
                          ($thumb = t("<img/>", { class: "lbr-thumb" })
                            .data("thumb_id", $i_next)
                            .css({
                              width: e.pagination_width,
                              height: e.pagination_height,
                            })),
                        ])
                        .css("width", "0")
                        .animate(
                          {
                            width: t(
                              ".lbr-thumb.active",
                              e.container_lightbox
                            ).outerWidth(),
                          },
                          120,
                          function () {
                            $anim.removeAttr("style");
                          }
                        )),
                    ]),
                    void 0 === i.eq($i_next).data("lbt-thumb")
                      ? B(
                          i.eq($i_next),
                          {
                            h: Number(e.pagination_height.replace("px", "")),
                            w: Number(e.pagination_width.replace("px", "")),
                          },
                          $thumb
                        )
                      : t($thumb).attr("src", i.eq($i_next).data("lbt-thumb")));
            })(Math.abs($loadto))
          : $loadto > 0 &&
            (function a(o) {
              n = i.length;
              for (var l = 1; l <= o; l++)
                ($i_previous =
                  Math.abs(t("img.lbr-thumb").first().data("thumb_id")) - 1),
                  ($i_id =
                    t(".lbr-thumb.active", e.container_lightbox).data(
                      "thumb_id"
                    ) - l),
                  !(
                    $i_previous < 0 ||
                    $i_id >=
                      Math.ceil(
                        n -
                          (e.qtd_pagination / 2 +
                            (e.qtd_pagination % 2 != 0 ? 1 : 0))
                      )
                  ) &&
                    (($obj = t("img.lbr-thumb", e.container_lightbox)
                      .not(".removed")
                      .last()).addClass("removed"),
                    $obj
                      .closest("li")
                      .animate({ width: "0" }, { duration: 120, queue: !0 })
                      .queue(function () {
                        t(this).remove().dequeue();
                      }),
                    t("img.lbr-thumb", e.container_lightbox)
                      .closest("li")
                      .first()
                      .before([
                        ($anim = t("<li/>")
                          .append([
                            ($thumb = t("<img/>", { class: "lbr-thumb" })
                              .data("thumb_id", $i_previous)
                              .css({
                                width: e.pagination_width,
                                height: e.pagination_height,
                              })),
                          ])
                          .css("width", "0")
                          .animate(
                            {
                              width: t(
                                ".lbr-thumb.active",
                                e.container_lightbox
                              ).outerWidth(),
                            },
                            120,
                            function () {
                              $anim.removeAttr("style");
                            }
                          )),
                      ]),
                    void 0 === i.eq($i_previous).data("lbt-thumb")
                      ? B(
                          i.eq($i_previous),
                          {
                            h: Number(e.pagination_height.replace("px", "")),
                            w: Number(e.pagination_width.replace("px", "")),
                          },
                          $thumb
                        )
                      : t($thumb).attr(
                          "src",
                          i.eq($i_previous).data("lbt-thumb")
                        ));
            })($loadto);
    }
    function M(n, l) {
      var f, x, _, w, y;
      t("#lbt-lightbox-media", e.container_lightbox).empty(),
        t("img.lbr-thumb", e.container_lightbox).removeClass("active"),
        null !== l &&
          t(".lbr-thumb", e.container_lightbox).eq(l).addClass("active"),
        i.eq(n).data("iframe_src")
          ? ((f = n),
            ($iframe = i.eq(f).data()),
            t("#lbt-lightbox-media", e.container_lightbox).append([
              ($_iframe = t("<iframe/>", { src: $iframe.iframe_src })
                .attr("frameborder", $iframe.frameborder)
                .attr("allow", $iframe.iframe_allow)
                .attr("fullscreen", $iframe.fullscreen)
                .addClass("lbt-iframe-video")
                .css("visibility", "hidden")),
            ]),
            $_iframe.on("load", function () {
              t(".lbt-iframe-video", e.container_lightbox).css(
                "visibility",
                "visible"
              ),
                t("#lbt-loading", e.container_lightbox).hide();
            }))
          : i.eq(n).data("html5Video")
          ? ((x = n),
            ($HVideo = i.eq(x).data()),
            t("#lbt-lightbox-media", e.container_lightbox).append(
              '<div id="lbt_videoplayer">			<div class="lbt_loadingVideo"></div>			 ' +
                $btn_play +
                '			<video preload="metadata" id="lbt_vsrc">				<source src="' +
                $HVideo.html5Video +
                '" type="' +
                $HVideo.html5type +
                '" />			</video>			<div class="lbt_videoTime">0:00</div>			<div class="lbt_videoControls active">				<div class="video_progress-line">					<canvas class="video_buffer-bar"></canvas>					<div class="video_progress-bar">						<span></span>					</div>				</div>				<div class="lbt_videoControls-list">					<div class="lbt_videoControls-left">						<span class="icon">						<i class="material-icons lbt_vPlayPause">play_arrow</i>						</span>						<span class="icon">						<i class="material-icons lbt_videoVolume">volume_up</i>						<input type="range" min="0" max="100" class="lbt_videoVolumeRange" />						</span>						<div class="timer">							<span class="lbt_videoCurrent">0:00</span> / 							<span class="lbt_videoDuration">0:00</span>						</div>					</div>					<div class="lbt_videoControls-right">						<span class="icon">						<i class="material-icons lbt_videoPip">picture_in_picture_alt</i>						</span>						<span class="icon">						<i class="material-icons lbt_fullScreen">fullscreen</i>						</span>					</div>				</div>			</div>		</div>'
            ),
            t("#lbt-loading", e.container_lightbox).hide(),
            (o = (a = document.querySelector("#lbt_videoplayer")).querySelector(
              "#lbt_vsrc"
            )),
            (r = a.querySelector(".lbt_videoTime")),
            (s = a.querySelector(".lbt_videoControls")),
            (c = a.querySelector(".video_progress-line")),
            (d = a.querySelector(".video_progress-bar")),
            (fastRewind = a.querySelector(".lbt_fastRewind")),
            (h = a.querySelector(".lbt_vPlayPause")),
            (b = a.querySelector(".lbt_videoVolume")),
            (u = a.querySelector(".lbt_videoVolumeRange")),
            (g = a.querySelector(".lbt_videoCurrent")),
            ($ = a.querySelector(".lbt_videoDuration")),
            (p = a.querySelector(".lbt_videoPip")),
            (m = a.querySelector(".lbt_fullScreen")),
            (v = a.querySelector(".lbt_loadingVideo")),
            t("#lbt_vsrc", e.container_lightbox).on("loadeddata", function (i) {
              var n;
              let a, o;
              (n = i),
                (a = n.target.duration),
                (o = Math.floor(a % 60)),
                o < 10 && (o = "0" + o),
                ($.innerHTML = `${Math.floor(a / 60)} : ${o}`),
                t(".lbt_btn_play", e.container_lightbox).show();
            }),
            t("#lbt_vsrc", e.container_lightbox).on("timeupdate", function (t) {
              var e;
              let i, n, a;
              (e = t),
                (i = e.target.currentTime),
                (n = Math.floor(i % 60)),
                n < 10 && (n = "0" + n),
                (g.innerHTML = `${Math.floor(i / 60)} : ${n}`),
                (a = e.target.duration),
                (d.style.width = `${(i / a) * 100 + 0.5}%`);
            }))
          : (console.log(i.eq(n).data()),
            (_ = $img = i.eq(n).attr("src")),
            t("#lbt-lightbox-media", e.container_lightbox).append([
              t("<img/>", { id: "lbt-lightbox-image" }).css({
                "max-height":
                  "calc(100% - " +
                  (165 + Number(e.pagination_height.replace("px", ""))) +
                  "px)",
                top:
                  "calc(50% - " +
                  e.pagination_height.replace("px", "") / 2 +
                  "px)",
              }),
            ]),
            (w = new Image()),
            (y = document.getElementById("lbt-lightbox-image")),
            (w.src = _),
            (w.onload = function () {
              (y.src = w.src), t("#lbt-loading", e.container_lightbox).hide();
            })),
        !0 === e.captions &&
          (i.eq(n).find(e.captions_selector).length
            ? t("#lbt-lightbox-caption", e.container_lightbox).text(
                i.eq(n).find(e.captions_selector).text()
              )
            : i.eq(n).next(e.captions_selector).length
            ? t("#lbt-lightbox-caption", e.container_lightbox).text(
                i.eq(n).next(e.captions_selector).text()
              )
            : i.eq(n).parent().find(e.captions_selector).length &&
              t("#lbt-lightbox-caption", e.container_lightbox).text(
                i.eq(n).parent().find(e.captions_selector).text()
              ));
    }
    function T() {
      (h.innerHTML = "pause"),
        (h.title = "pause"),
        t(a).addClass("paused"),
        t(".lbt_btn_play", e.container_lightbox).hide(),
        o.play();
    }
    function z() {
      (h.innerHTML = "play_arrow"),
        (h.title = "play"),
        t(a).removeClass("paused"),
        t(".lbt_btn_play", e.container_lightbox).show(),
        o.pause();
    }
    function A(t) {
      let e = o.duration,
        i = c.clientWidth + 2,
        n = t.offsetX;
      o.currentTime = (n / i) * e;
      let a = (o.currentTime / e) * 100 + 0.5;
      d.style.width = `${a}%`;
      let l = o.currentTime,
        r = Math.floor(l % 60);
      r < 10 && (r = "0" + r), (g.innerHTML = `${Math.floor(l / 60)} : ${r}`);
    }
    function V() {
      ($lbt_hvideos = t("video", e.container_images)),
        t($lbt_hvideos).each(function (e) {
          t(this).after([
            ($obj = t("<img/>", { class: t(this).attr("class") })
              .data("html5Video", t(this).find("source").attr("src"))
              .data("html5type", t(this).find("source").attr("type"))),
          ]),
            E(
              t(this).find("source").attr("src"),
              $obj,
              t(this).width(),
              t(this).height()
            ),
            t(this).remove();
        }),
        (i = t(e.custom_children, e.container_images));
    }
    function P() {
      ($lbt_ivideos = t("iframe", e.container_images)),
        t($lbt_ivideos).each(function (n) {
          ($lbt_ivideos_thumbnail = ""),
            ($lbt_ivideos_src = t(this).attr("src")),
            ($lbt_ivideos_width = t(this).css("width")),
            ($lbt_ivideos_height = t(this).css("height")),
            ($lbt_ivideos_frameborder = t(this).attr("frameborder")),
            ($lbt_ivideos_fullscre =
              void 0 !== t(this).attr("allowfullscreen") &&
              !1 !== t(this).attr("allowfullscreen")),
            ($lbt_ivideos_allow = t(this).attr("allow"));
          var a = RegExp(
              "(?:https?://)?(?:www.)?youtu(?:.be/|be.com/S*(?:watch|embed)(?:(?:(?=/[-a-zA-Z0-9_]{11,}(?!S))/)|(?:S*v=|v/)))([-a-zA-Z0-9_]{11,})"
            ),
            o = RegExp(
              "(?:https?://)?(?:www.|player.)?vimeo.com(?:/*(?:video/|))([-a-zA-Z0-9_]{9})|.([w\\-_]+)&?=([-a-zA-Z0-9_]{10})"
            );
          if (a.test($lbt_ivideos_src))
            ($lbt_ivideos_thumbnail =
              "https://i3.ytimg.com/vi/" +
              ($lbt_ivideos_id = $lbt_ivideos_src.match(
                /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be).(?:embed)(?:\/watch\?v=|\/)([^\s&]+)/
              )[1]) +
              "/maxresdefault.jpg"),
              t(this).after([
                t("<img/>")
                  .attr("src", $lbt_ivideos_thumbnail)
                  .data("lbt-thumb", $lbt_ivideos_thumbnail)
                  .css("height", $lbt_ivideos_height)
                  .css("width", $lbt_ivideos_width)
                  .data("iframe_src", $lbt_ivideos_src)
                  .data("frameborder", $lbt_ivideos_frameborder)
                  .data("fullscreen", $lbt_ivideos_fullscre)
                  .data("iframe_allow", $lbt_ivideos_allow),
              ]),
              t(this).remove();
          else {
            if (!o.test($lbt_ivideos_src)) return;
            ($lbt_ivideos_id = $lbt_ivideos_src.match(
              /(?:https?:\/\/)?(?:www.|player.)?vimeo.com(?:\/*(?:video\/|))([-a-zA-Z0-9_]{9}).([\w\\-_]+)\&?/
            )[1]),
              ($vimeo_obj = t(this)),
              t.getJSON(
                "https://vimeo.com/api/oembed.json?url=https://vimeo.com/" +
                  $lbt_ivideos_id,
                { format: "json" },
                function (n) {
                  ($lbt_ivideos_thumbnail = n.thumbnail_url),
                    $vimeo_obj.after([
                      t("<img/>")
                        .attr("src", $lbt_ivideos_thumbnail)
                        .data("lbt-thumb", $lbt_ivideos_thumbnail)
                        .css("height", $lbt_ivideos_height)
                        .css("width", $lbt_ivideos_width)
                        .data("iframe_src", $lbt_ivideos_src)
                        .data("frameborder", $lbt_ivideos_frameborder)
                        .data("fullscreen", $lbt_ivideos_fullscre)
                        .data("iframe_allow", $lbt_ivideos_allow),
                    ]),
                    $vimeo_obj.remove(),
                    (i = t(e.custom_children, e.container_images));
                }
              );
          }
        }),
        (i = t(e.custom_children, e.container_images));
    }
    function I(a, o) {
      (n = i.length),
        ($start = Math.max(
          0,
          Math.ceil(t(a).index(e.custom_children) - e.qtd_pagination / 2)
        )),
        ($final = Math.min(
          n - 1,
          Number.isInteger(
            ($f =
              Math.floor(t(a).index(e.custom_children)) + e.qtd_pagination / 2)
          )
            ? $f - 1
            : $f
        )),
        0 == $start
          ? ($final = Math.min(e.qtd_pagination - 1, n - 1))
          : $final == n - 1 && ($start = Math.max(0, n - e.qtd_pagination));
      for (var l = $start; l <= $final; l++)
        ($thumb = null),
          l != t(a).index(e.custom_children)
            ? t(o, e.container_lightbox).append([
                t("<li/>").append([
                  ($thumb = t("<img/>", { class: "lbr-thumb" })
                    .data("thumb_id", l)
                    .css({
                      width: e.pagination_width,
                      height: e.pagination_height,
                    })),
                ]),
              ])
            : t(o, e.container_lightbox).append([
                t("<li/>").append([
                  ($thumb = t("<img/>", { class: "lbr-thumb" })
                    .data("thumb_id", l)
                    .addClass("active")
                    .css({
                      width: e.pagination_width,
                      height: e.pagination_height,
                    })),
                ]),
              ]),
          void 0 === i.eq(l).data("lbt-thumb")
            ? B(
                i.eq(l),
                {
                  h: Number(e.pagination_height.replace("px", "")),
                  w: Number(e.pagination_width.replace("px", "")),
                },
                $thumb
              )
            : t($thumb).attr("src", i.eq(l).data("lbt-thumb"));
    }
    function W(e) {
      t(e).each(function (e) {
        void 0 !== t(this).attr("src") &&
          null == t(this).attr("src").match("^blob:https?://(?:www.)?") &&
          O(this);
      });
    }
    function j(e, i) {
      t(e).each(function (e) {
        R(t(this).attr("src"), i, this);
      });
    }
    function B(i, n, a) {
      R(t(i).attr("src"), n, t(i, e.container_lightbox), a);
    }
    async function E(e, i, n, a) {
      let o = document.createElement("video"),
        l = document.createElement("canvas");
      (o.style.display = "none"),
        (l.style.display = "none"),
        o.setAttribute("crossOrigin", "anonymous"),
        await new Promise((t, i) => {
          o.addEventListener("loadedmetadata", () => {
            (o.width = n),
              (o.height = a),
              (l.width = n),
              (l.height = a),
              (o.currentTime = 0.25 * o.duration);
          }),
            o.addEventListener("seeked", () => t()),
            (o.src = e);
        }),
        l.getContext("2d").drawImage(o, 0, 0, n, a);
      let r = l.toDataURL("image/png");
      t(i).attr("src", r);
    }
    function R(t, e, i, n = null) {
      ((e = e || {}).q = e.q || 1), (e.r = e.r || 1);
      var a = new Image();
      a.setAttribute("crossOrigin", "anonymous"),
        (a.src = t),
        (a.onload = function () {
          var t = document.createElement("canvas");
          e.w && e.h
            ? e.w > e.h
              ? ((t.width = e.w),
                (t.height = (this.naturalHeight * e.w) / this.naturalWidth))
              : ((t.width = (this.naturalWidth * e.h) / this.naturalHeight),
                (t.height = e.h))
            : e.w
            ? ((t.width = e.w),
              (t.height = (this.naturalHeight * e.w) / this.naturalWidth))
            : e.h
            ? ((t.width = (this.naturalWidth * e.h) / this.naturalHeight),
              (t.height = e.h))
            : ((t.width = this.naturalWidth * e.r),
              (t.height = this.naturalHeight * e.r)),
            t.getContext("2d").drawImage(this, 0, 0, t.width, t.height),
            D(t.toDataURL(), i, n);
        });
    }
    async function O(e) {
      var i = new Image();
      i.setAttribute("crossOrigin", "anonymous"),
        (i.src = t(e).attr("src")),
        (i.onload = function () {
          var t = document.createElement("canvas");
          (t.height = this.naturalHeight),
            (t.width = this.naturalWidth),
            t.getContext("2d").drawImage(this, 0, 0),
            D(t.toDataURL(), e, !1, !0);
        }),
        await i.decode();
    }
    function D(i, n, a, o = !1) {
      if (o) {
        let l;
        ($oimage = t(n, e.container_lightbox).attr("src")),
          t(n, e.container_lightbox).attr("src", i),
          ($blob =
            ((s = i),
            (l = s.split(";base64")[0].replace("data:", "")),
            (function t(e, i) {
              i = i || "";
              for (
                var n = atob(e),
                  a = n.length,
                  o = Math.ceil(a / 1024),
                  l = Array(o),
                  r = 0;
                r < o;
                ++r
              ) {
                for (
                  var s = 1024 * r,
                    c = Math.min(s + 1024, a),
                    d = Array(c - s),
                    h = s,
                    b = 0;
                  h < c;
                  ++b, ++h
                )
                  d[b] = n[h].charCodeAt(0);
                l[r] = new Uint8Array(d);
              }
              return new Blob(l, { type: i });
            })(s.split(",")[1], l))),
          t(n, e.container_lightbox).attr("src", URL.createObjectURL($blob));
        let r = { type: $oimage, image: $blob, created: new Date() };
        var s,
          c,
          d = "images";
        (c = r),
          new Promise(function (t, e) {
            var i = indexedDB.open("lbt_lightbox");
            (i.onerror = function (t) {
              e(Error("IndexedDB database error"));
            }),
              (i.onupgradeneeded = function (t) {
                t.target.result.createObjectStore(d, {
                  keyPath: "id",
                  autoIncrement: !0,
                });
              }),
              (i.onsuccess = function (i) {
                var n = i.target.result
                  .transaction([d], "readwrite")
                  .objectStore(d)
                  .put(c);
                (n.onerror = function (t) {
                  e(Error("Error text"));
                }),
                  (n.onsuccess = function (e) {
                    t("Data saved OK");
                  });
              });
          });
      } else t(n, e.container_lightbox).data("lbt-thumb", i);
      a && t(a, e.container_lightbox).attr("src", i);
    }
    async function Z(e) {
      for (var n = 0; n < t(e).length; n++)
        await _("images", t(e).eq(n).attr("src"))
          .then(function (i) {
            t(e).eq(n).attr("src", URL.createObjectURL(i.image));
          })
          .catch(function (t) {});
      W(i);
    }
    return (
      (t.fn.OpenViewer = function (i) {
        k(i),
          M(t(i).index(e.custom_children), null),
          I(i, "#lbt-thumbnails"),
          q(),
          t("body").addClass("lbr-ToFixed"),
          y();
      }),
      (t.fn.update = function () {
        P(),
          V(),
          setTimeout(function () {
            (n = (i = t(e.custom_children, e.container_images)).length), W(i);
          }, 500);
      }),
      (t.fn.preload = function () {
        n = (i = t(e.custom_children, e.container_images)).length;
        for (var a = 0; a < n; a++)
          void 0 === i.eq(a).data("lbt-thumb")
            ? (B(
                i.eq(a),
                {
                  h: Number(e.pagination_height.replace("px", "")),
                  w: Number(e.pagination_width.replace("px", "")),
                },
                null
              ),
              x(i.eq(a).attr("src")))
            : t($thumb).attr("src", i.eq(a).data("lbt-thumb"));
      }),
      t("img.lbr-thumb").queue(function (e) {
        t(this).remove(), e();
      }),
      this.each(function (d) {
        ($id = "#lbt-lightbox_" + (Math.floor(999 * Math.random()) + d)),
          ($idi =
            "#" +
            (void 0 === t(this).attr("id")
              ? t(this)
                  .attr(
                    "id",
                    "lbt-imgs_" + (Math.floor(999 * Math.random()) + d)
                  )
                  .attr("id")
              : t(this).attr("id"))),
          t("body").append([
            ($con_lightbox = t("<div/>", { id: $id.replace("#", "") })),
          ]),
          (function d(h, g) {
            if (
              (P(),
              V(),
              (n = (i = t(g.custom_children, g.container_images)).length),
              !0 == g.db)
            ) {
              $version_db = 1;
              let $ = indexedDB.open("lbt_lightbox", $version_db);
              ($.onupgradeneeded = function (t) {
                if (((f = $.result), t.oldVersion == $version_db)) return;
                let e = f.createObjectStore("images", {
                  keyPath: "id",
                  autoIncrement: !0,
                });
                e.createIndex("type", "type"),
                  e.createIndex("image", "image"),
                  e.createIndex("created", "created");
              }),
                ($.onsuccess = function () {
                  (f = $.result), Z(i);
                }),
                ($.onerror = function () {
                  console.error("Error", $.error);
                }),
                ($.onblocked = function () {
                  $.result.close(),
                    alert(
                      "Database is outdated, refresh the page in previous tab."
                    );
                });
            }
            t(document).on(
              "click",
              g.lbr_id + " " + g.custom_children,
              function (i) {
                var n;
                (n = t(this)),
                  k(n),
                  M(t(n).index(e.custom_children), null),
                  I(n, "#lbt-thumbnails"),
                  q(),
                  t("body").addClass("lbr-ToFixed"),
                  y();
              }
            ),
              t(document).on(
                "click",
                g.lbt_id + " #lbt-close_lightbox",
                function (t) {
                  S();
                }
              ),
              t(document).keyup(function (t) {
                "Escape" === t.key
                  ? S()
                  : "ArrowRight" === t.key
                  ? C()
                  : "ArrowLeft" === t.key && L();
              }),
              t(document).on(
                "click",
                g.lbt_id + " img.lbr-thumb",
                function (a) {
                  var o;
                  (o = t(this)),
                    t("#lbt-loading", e.container_lightbox).show(),
                    (n = i.length),
                    H(($iIndex = t(o).data("thumb_id"))),
                    M($iIndex, ($tid = t(o).index(".lbr-thumb"))),
                    q(),
                    y();
                }
              ),
              t(document).on(
                "click",
                g.lbt_id + " #lbt_previous",
                function (t) {
                  L();
                }
              ),
              t(document).on("click", g.lbt_id + " #lbt_next", function (t) {
                C();
              }),
              t(document).on(
                "pointerdown",
                g.lbt_id + " .video_progress-line",
                function (e) {
                  c.setPointerCapture(e.pointerId),
                    A(e),
                    t(".video_progress-line", g.container_lightbox).on(
                      "pointermove",
                      function (t) {
                        A(t);
                      }
                    ),
                    t(".video_progress-line", g.container_lightbox).on(
                      "pointerup",
                      function (e) {
                        t(this).off("pointermove");
                      }
                    );
                }
              ),
              t(document).on(
                "mouseout",
                g.lbt_id + " #lbt_videoplayer",
                function (e) {
                  l = setTimeout(function () {
                    if (
                      0 ==
                      t("#lbt_videoplayer:hover", g.container_lightbox).length
                    ) {
                      let e = t(a).hasClass("paused");
                      e && t(s).removeClass("active");
                    }
                  }, 2e3);
                }
              ),
              t(document).on(
                "mouseout",
                g.lbt_id + " .video_progress-line",
                function (e) {
                  t(".lbt_videoTime", g.container_lightbox).css(
                    "display",
                    "none"
                  );
                }
              ),
              t(document).on("click", g.lbt_id + " #lbt_vsrc", function (e) {
                let i = t(a).hasClass("paused");
                i ? z() : T();
              }),
              t(document).on(
                "mouseenter",
                g.lbt_id + " #lbt_videoplayer",
                function (e) {
                  clearTimeout(l), t(s).addClass("active");
                }
              ),
              t(document).on("waiting", g.lbt_id + " #lbt_vsrc", function (t) {
                v.style.display = "block";
              }),
              t(document).on("canplay", g.lbt_id + " #lbt_vsrc", function (t) {
                v.style.display = "none";
              }),
              t(document).on("play", g.lbt_id + " #lbt_vsrc", function (t) {
                T();
              }),
              t(document).on("pause", g.lbt_id + " #lbt_vsrc", function (t) {
                z();
              }),
              t(document).on(
                "click",
                g.lbt_id + " .lbt_vPlayPause," + g.lbt_id + " .lbt_btn_play",
                function (e) {
                  let i = t(a).hasClass("paused");
                  i ? z() : T();
                }
              ),
              t(document).on(
                "input",
                g.lbt_id + " .lbt_videoVolumeRange",
                function (t) {
                  (o.volume = u.value / 100),
                    0 == u.value
                      ? (b.innerHTML = "volume_off")
                      : u.value < 39
                      ? (b.innerHTML = "volume_down")
                      : (b.innerHTML = "volume_up");
                }
              ),
              t(document).on(
                "click",
                g.lbt_id + " .lbt_videoVolume",
                function (t) {
                  0 == u.value
                    ? ((u.value = 60),
                      (o.volume = 0.6),
                      (b.innerHTML = "volume_up"))
                    : ((u.value = 0),
                      (o.volume = 0),
                      (b.innerHTML = "volume_off"));
                }
              ),
              t(document).on(
                "click",
                g.lbt_id + " .lbt_fullScreen",
                function (e) {
                  t(a).hasClass("openFullScreen")
                    ? (t(a).removeClass("openFullScreen"),
                      t(m).html("fullscreen"),
                      document.exitFullscreen())
                    : (t(a).addClass("openFullScreen"),
                      t(m).html("fullscreen_exit"),
                      a.requestFullscreen());
                }
              ),
              t(document).on(
                "click",
                g.lbt_id + " .lbt_videoPip",
                function (t) {
                  o.requestPictureInPicture();
                }
              ),
              t(document).on(
                "mousemove",
                g.lbt_id + " .video_progress-line",
                function (t) {
                  let e = c.clientWidth + 2,
                    i = t.offsetX,
                    n = Math.floor((i / e) * o.duration),
                    a = Math.floor(n % 60);
                  r.style.setProperty("--x", `${i}px`),
                    (r.style.display = "block"),
                    (i = i >= e - 80 ? e - 80 : i <= 75 ? 75 : t.offsetX),
                    a < 10 && (a = "0" + a),
                    (r.innerHTML = `${Math.floor(n / 60)} : ${a}`);
                }
              );
          })(
            this,
            (e = t.extend(
              {
                lbt_id: $id,
                lbr_id: $idi,
                container_images: this,
                container_lightbox: $con_lightbox,
              },
              e
            ))
          );
      })
    );
  };
})(jQuery);