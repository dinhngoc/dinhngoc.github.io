(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarOpacity":0.5,"backgroundColorRatios":[0],"minWidth":20,"scrollBarColor":"#000000","minHeight":20,"layout":"absolute","propagateClick":false,"gap":10,"start":"this.init()","paddingBottom":0,"scrollBarMargin":2,"shadow":false,"desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"contentOpaque":false,"verticalAlign":"top","paddingLeft":0,"definitions": [{"id":"video_E1FDC506_F33D_75F6_41E6_15764AF96123","class":"Video","thumbnailUrl":"media/video_E1FDC506_F33D_75F6_41E6_15764AF96123_t.jpg","label":trans('video_E1FDC506_F33D_75F6_41E6_15764AF96123.label'),"loop":false,"height":720,"scaleMode":"fit_inside","autoplay":true,"width":1280,"data":{"label":"HoiAnDor"},"video":{"levels":[{"width":1144,"framerate":30,"height":644,"posterURL":"media/video_E1FDC506_F33D_75F6_41E6_15764AF96123_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":1657,"url":"media/video_E1FDC506_F33D_75F6_41E6_15764AF96123.mp4"}],"class":"VideoResource","width":1144,"height":644}},{"id":"MainViewerVideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true,"clickAction":"play_pause","class":"VideoPlayer","viewerArea":"this.MainViewer"},{"id":"video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD","class":"Video","height":720,"thumbnailUrl":"media/video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD_t.jpg","label":trans('video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD.label'),"loop":false,"chromaSmoothing":0.04,"scaleMode":"fit_inside","chromaColor":"#28C034","autoplay":true,"width":1280,"chromaThreshold":0.24,"data":{"label":"green screen dancing girl 01"},"video":{"levels":[{"width":1144,"framerate":29.97,"height":644,"posterURL":"media/video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":481,"url":"media/video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD.mp4"}],"class":"VideoResource","width":1144,"height":644}},{"id":"playList_E713FB82_F354_BCEE_41CD_50EC1141A020","class":"PlayList","items":[{"player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_E713FB82_F354_BCEE_41CD_50EC1141A020, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E713FB82_F354_BCEE_41CD_50EC1141A020, 0)","media":"this.video_E1FDC506_F33D_75F6_41E6_15764AF96123"}]},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","media":"this.panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA"},{"end":"this.trigger('tourEnded')","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.changeOpacityWhilePlay(this.mainPlayList, 1, '0'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","media":"this.video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD"}]},{"id":"panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_camera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_FB5F6940_F2D5_7C6A_41DA_28CDBF3242C2"},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation"},{"surfaceReticleOpacity":0.6,"minWidth":100,"minHeight":50,"toolTipBorderSize":1,"toolTipBorderColor":"#767676","playbackBarOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesGap":0,"playbackBarBorderRadius":0,"subtitlesOpacity":1,"toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","progressBarOpacity":1,"toolTipShadowVerticalLength":0,"shadow":false,"toolTipTextShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","progressBackgroundColorRatios":[0],"playbackBarBottom":5,"progressRight":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"progressBottom":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesVerticalAlign":"bottom","displayTooltipInTouchScreens":true,"progressOpacity":1,"progressHeight":10,"progressBackgroundOpacity":1,"firstTransitionDuration":0,"subtitlesBorderSize":0,"displayTooltipInSurfaceSelection":true,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"transitionDuration":500,"height":"100%","subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarHeight":10,"playbackBarProgressOpacity":1,"toolTipPaddingBottom":4,"toolTipDisplayTime":600,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipTextShadowOpacity":0,"playbackBarHeadWidth":6,"toolTipHorizontalAlign":"center","progressBorderSize":0,"vrPointerSelectionColor":"#FF6600","progressBarBorderRadius":0,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderColor":"#000000","subtitlesFontWeight":"normal","progressBarBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","progressBarBorderSize":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"class":"ViewerArea","paddingTop":0,"paddingBottom":0,"subtitlesBottom":50,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarBorderSize":0,"show":"eval('setMediaIndex(1);');","subtitlesEnabled":true,"progressBarBackgroundColorRatios":[0],"doubleClickAction":"toggle_fullscreen","borderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingLeft":6,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesPaddingRight":5,"subtitlesTop":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorDirection":"vertical","subtitlesPaddingBottom":5,"vrPointerColor":"#FFFFFF","toolTipOpacity":1,"paddingRight":0,"paddingLeft":0,"playbackBarHeadHeight":15,"translationTransitionDuration":1000,"subtitlesFontSize":"3vmin","toolTipFontWeight":"normal","id":"MainViewer","playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","playbackBarHeadShadowColor":"#000000","toolTipShadowColor":"#333333","toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","toolTipBorderRadius":3,"playbackBarHeadShadowVerticalLength":0,"toolTipFontFamily":"Arial","progressBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"progressLeft":0,"toolTipShadowBlurRadius":3,"subtitlesTextDecoration":"none","subtitlesBackgroundOpacity":0.2,"toolTipTextShadowColor":"#000000","playbackBarHeadOpacity":1,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadow":true,"playbackBarBackgroundOpacity":1,"toolTipShadowOpacity":1,"transitionMode":"blending","borderRadius":0,"subtitlesShadow":false,"subtitlesPaddingTop":5,"playbackBarProgressBackgroundColorRatios":[0],"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","surfaceReticleColor":"#FFFFFF"},{"id":"panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA","thumbnailUrl":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_t.jpg","label":trans('panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":12288,"colCount":24,"height":2048,"class":"TiledImageResourceLevel","rowCount":4,"url":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_0/{face}/0/{row}_{column}.jpg"},{"tags":"ondemand","width":6144,"colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_0/{face}/1/{row}_{column}.jpg"},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_0/{face}/2/{row}_{column}.jpg"},{"tags":"mobilevr","width":9216,"colCount":6,"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_0/{face}/vr/0.jpg"}]},"thumbnailUrl":"media/panorama_F8BE3944_F2D5_5C6A_41A2_410FDAED36DA_t.jpg"}],"overlays":["this.overlay_E15091E9_F2D7_6C3A_41BF_3813ABE2E053","this.overlay_E019A48D_F33C_D4FA_41E0_7B10673A46F2"],"pitch":0,"hfovMax":130,"partial":false,"vfov":180,"class":"Panorama","data":{"label":"CAM 01_WM"},"hfov":360,"hfovMin":"150%"},{"id":"sequence_FB5F6940_F2D5_7C6A_41DA_28CDBF3242C2","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear","yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false},{"id":"overlay_E15091E9_F2D7_6C3A_41BF_3813ABE2E053","data":{"label":"Video"},"video":{"levels":[{"width":1144,"framerate":29.97,"height":644,"posterURL":"media/video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":481,"url":"media/video_E1712FB1_F2D5_542A_41CA_DAFA1CD1D6FD.mp4"}],"class":"VideoResource","width":1144,"height":644},"videoVisibleOnStop":true,"loop":true,"useHandCursor":true,"roll":-0.71,"pitch":-2.1,"image":"this.res_E6C8D26E_F2D7_6C36_41CD_34F7C05D7C25","yaw":4.56,"cues":[],"rotationY":7.3,"rotationX":0.92,"vfov":10.77,"chromaSmoothing":0.04,"chromaColor":"#28C034","enabledInCardboard":true,"distance":50,"hfov":16.96,"chromaThreshold":0.24,"class":"VideoPanoramaOverlay","autoplay":true},{"id":"overlay_E019A48D_F33C_D4FA_41E0_7B10673A46F2","data":{"label":"Video"},"video":{"levels":[{"width":1144,"framerate":30,"height":644,"posterURL":"media/video_E1FDC506_F33D_75F6_41E6_15764AF96123_poster.jpg","class":"VideoResourceLevel","type":"video/mp4","bitrate":1657,"url":"media/video_E1FDC506_F33D_75F6_41E6_15764AF96123.mp4"}],"class":"VideoResource","width":1144,"height":644},"videoVisibleOnStop":false,"loop":true,"useHandCursor":true,"roll":-0.24,"pitch":1.24,"image":"this.res_E6539CA1_F33D_542A_41E4_079BB0C19539","rotationX":-0.57,"cues":[],"rotationY":57.46,"yaw":-120.99,"vfov":25.64,"enabledInCardboard":true,"autoplay":true,"distance":50,"hfov":11.3,"class":"VideoPanoramaOverlay"},{"id":"res_E6C8D26E_F2D7_6C36_41CD_34F7C05D7C25","class":"ImageResource","levels":[{"width":1280,"class":"ImageResourceLevel","height":720,"url":"media/res_E6C8D26E_F2D7_6C36_41CD_34F7C05D7C25_0.jpg"}]},{"id":"res_E6539CA1_F33D_542A_41E4_079BB0C19539","class":"ImageResource","levels":[{"width":1280,"class":"ImageResourceLevel","height":720,"url":"media/res_E6539CA1_F33D_542A_41E4_079BB0C19539_0.jpg"}]}],"paddingRight":0,"defaultVRPointer":"laser","backgroundColor":["#FFFFFF"],"downloadEnabled":false,"scrollBarVisible":"rollOver","id":"rootPlayer","backgroundOpacity":1,"vrPolyfillScale":0.75,"children":["this.MainViewer"],"width":"100%","height":"100%","backgroundPreloadEnabled":true,"backgroundColorDirection":"vertical","scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"clone":TDV.Tour.Script.clone,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setValue":TDV.Tour.Script.setValue,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setLocale":TDV.Tour.Script.setLocale,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"init":TDV.Tour.Script.init,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizFinish":TDV.Tour.Script.quizFinish,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"historyGoForward":TDV.Tour.Script.historyGoForward,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByName":TDV.Tour.Script.getMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"shareSocial":TDV.Tour.Script.shareSocial,"translate":TDV.Tour.Script.translate,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlays":TDV.Tour.Script.getOverlays,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"toolTipHorizontalAlign":"center","scrollBarWidth":10,"mediaActivationMode":"window","borderRadius":0,"overflow":"hidden","mouseWheelEnabled":true,"class":"Player","paddingTop":0,"horizontalAlign":"left","data":{"name":"Player516","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"rate":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"volume":1},"defaultLocale":"en"},"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Fri Sep 17 2021