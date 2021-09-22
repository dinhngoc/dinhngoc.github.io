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
    var d = {"mouseWheelEnabled":true,"class":"Player","shadow":false,"horizontalAlign":"left","backgroundColorRatios":[0],"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_05B9E2CD_0C1E_AAD0_4193_26F035F3AD2E","hoverFactor":0,"id":"panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_camera","automaticZoomSpeed":10},{"class":"Video","height":720,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1657,"height":644,"posterURL":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1_poster.jpg"}],"class":"VideoResource","height":644},"label":trans('video_03520B5A_0C23_7BF3_4197_544811BDA7B1.label'),"id":"video_03520B5A_0C23_7BF3_4197_544811BDA7B1","thumbnailUrl":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1_t.jpg","width":1280,"loop":false,"scaleMode":"fit_inside","data":{"label":"HoiAnDor"},"autoplay":true},{"items":[{"media":"this.video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_1CFC6FD1_0C7E_6487_41A2_D44FFC23CB47, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_1CFC6FD1_0C7E_6487_41A2_D44FFC23CB47, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1CFC6FD1_0C7E_6487_41A2_D44FFC23CB47, 0)"}],"id":"playList_1CFC6FD1_0C7E_6487_41A2_D44FFC23CB47","class":"PlayList"},{"items":[{"media":"this.video_03520B5A_0C23_7BF3_4197_544811BDA7B1","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_1CFC7FD1_0C7E_6487_41A1_253D2BD8A8B7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1CFC7FD1_0C7E_6487_41A1_253D2BD8A8B7, 0)"}],"id":"playList_1CFC7FD1_0C7E_6487_41A1_253D2BD8A8B7","class":"PlayList"},{"class":"Video","height":720,"chromaThreshold":0.2,"id":"video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC","thumbnailUrl":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_t.jpg","chromaSmoothing":0.1,"width":1280,"label":trans('video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.label'),"loop":false,"chromaColor":"#28C034","scaleMode":"fit_inside","data":{"label":"green screen dancing girl 01"},"autoplay":true,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":29.97,"bitrate":481,"height":644,"posterURL":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_poster.jpg"}],"class":"VideoResource","height":644}},{"borderSize":0,"translationTransitionDuration":1000,"transitionDuration":500,"playbackBarHeadHeight":15,"subtitlesGap":0,"toolTipShadowOpacity":1,"subtitlesOpacity":1,"id":"MainViewer","subtitlesVerticalAlign":"bottom","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesHorizontalAlign":"center","playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","transitionMode":"blending","playbackBarHeadShadow":true,"width":"100%","playbackBarHeadBorderSize":0,"subtitlesBorderSize":0,"playbackBarHeadOpacity":1,"toolTipBorderRadius":3,"subtitlesTextShadowOpacity":1,"toolTipPaddingTop":4,"subtitlesTextShadowVerticalLength":1,"displayTooltipInSurfaceSelection":true,"subtitlesFontColor":"#FFFFFF","toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","doubleClickAction":"toggle_fullscreen","toolTipShadowColor":"#333333","toolTipShadowHorizontalLength":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesFontWeight":"normal","playbackBarBottom":5,"vrPointerSelectionTime":2000,"toolTipShadowBlurRadius":3,"paddingTop":0,"height":"100%","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColorRatios":[0],"displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColorDirection":"vertical","paddingBottom":0,"subtitlesPaddingLeft":5,"progressRight":0,"toolTipDisplayTime":600,"playbackBarBackgroundColor":["#FFFFFF"],"progressOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingRight":5,"playbackBarHeight":10,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","toolTipFontWeight":"normal","playbackBarProgressBorderSize":0,"toolTipShadowSpread":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","shadow":false,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"progressBarOpacity":1,"toolTipOpacity":1,"progressBottom":0,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":10,"propagateClick":false,"progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipTextShadowOpacity":0,"toolTipShadowVerticalLength":0,"progressBarBorderSize":0,"progressBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","paddingLeft":0,"subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"subtitlesTop":0,"toolTipFontFamily":"Arial","subtitlesPaddingBottom":5,"paddingRight":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarProgressOpacity":1,"toolTipHorizontalAlign":"center","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":0,"progressLeft":0,"toolTipFontStyle":"normal","subtitlesTextShadowBlurRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextDecoration":"none","firstTransitionDuration":0,"subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"borderRadius":0,"subtitlesPaddingTop":5,"toolTipBorderSize":1,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"minWidth":100,"toolTipFontColor":"#606060","subtitlesShadow":false},{"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","zoomEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false},{"viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlayOverlay":true,"id":"MainViewerVideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause"},{"items":[{"media":"this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_camera","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/0/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"width":6144,"tags":"ondemand","height":1024},{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/1/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":3072,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/vr/0.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":6144,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_t.jpg"}],"class":"Panorama","label":trans('panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC.label'),"id":"panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC","thumbnailUrl":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_t.jpg","vfov":180,"pitch":0,"hfovMin":"150%","hfov":360,"overlays":["this.overlay_01250E11_0C26_FD71_4196_598F371C9200","this.overlay_02B39602_0C4E_6785_4140_A0130AD8C90C"],"hfovMax":130,"data":{"label":"01"},"partial":false},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_05B9E2CD_0C1E_AAD0_4193_26F035F3AD2E"},{"chromaThreshold":0.2,"blending":0.05,"id":"overlay_01250E11_0C26_FD71_4196_598F371C9200","chromaSmoothing":0.1,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":29.97,"bitrate":481,"height":644,"posterURL":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_poster.jpg"}],"class":"VideoResource","height":644},"loop":true,"class":"VideoPanoramaOverlay","image":"this.res_01603318_0C27_AB70_419A_E99BBFC5E915","useHandCursor":true,"hfov":74.78,"yaw":-1.77,"pitch":-17.37,"rotationY":0.2,"rotationX":17.38,"cues":[],"chromaColor":"#28C034","videoVisibleOnStop":false,"enabledInCardboard":true,"autoplay":true,"distance":50,"roll":-0.37,"vfov":50.28,"data":{"label":"Video"}},{"blending":0.08,"id":"overlay_02B39602_0C4E_6785_4140_A0130AD8C90C","video":{"width":1144,"levels":[{"width":1144,"url":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1657,"height":644,"posterURL":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1_poster.jpg"}],"class":"VideoResource","height":644},"loop":true,"class":"VideoPanoramaOverlay","image":"this.res_1CD0417E_0C4A_7C7D_4196_9001DC9A24EC","useHandCursor":true,"hfov":3.86,"yaw":29.26,"pitch":-1.18,"rotationY":-8.63,"rotationX":1.35,"cues":[],"videoVisibleOnStop":false,"enabledInCardboard":true,"autoplay":true,"distance":50,"roll":-1.16,"vfov":15.34,"data":{"label":"Video"}},{"levels":[{"url":"media/res_01603318_0C27_AB70_419A_E99BBFC5E915_0.jpg","width":1280,"class":"ImageResourceLevel","height":720}],"id":"res_01603318_0C27_AB70_419A_E99BBFC5E915","class":"ImageResource"},{"levels":[{"url":"media/res_1CD0417E_0C4A_7C7D_4196_9001DC9A24EC_0.jpg","width":1280,"class":"ImageResourceLevel","height":720}],"id":"res_1CD0417E_0C4A_7C7D_4196_9001DC9A24EC","class":"ImageResource"}],"id":"rootPlayer","start":"this.init()","children":["this.MainViewer"],"overflow":"hidden","width":"100%","propagateClick":false,"backgroundOpacity":1,"scrollBarVisible":"rollOver","downloadEnabled":false,"paddingLeft":0,"scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"contentOpaque":false,"desktopMipmappingEnabled":false,"scrollBarOpacity":0.5,"paddingRight":0,"paddingTop":0,"toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"mediaActivationMode":"window","paddingBottom":0,"gap":10,"scripts":{"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clone":TDV.Tour.Script.clone,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizStart":TDV.Tour.Script.quizStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupImage":TDV.Tour.Script.showPopupImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"isPanorama":TDV.Tour.Script.isPanorama,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlays":TDV.Tour.Script.getOverlays,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics},"backgroundColorDirection":"vertical","height":"100%","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","layout":"absolute","data":{"name":"Player541","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"}},"verticalAlign":"top","backgroundPreloadEnabled":true,"borderRadius":0,"minHeight":20,"scrollBarMargin":2,"borderSize":0,"minWidth":20,"scrollBarColor":"#000000"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Wed Sep 22 2021