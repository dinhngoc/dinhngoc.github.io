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
    var d = {"mouseWheelEnabled":true,"class":"Player","shadow":false,"horizontalAlign":"left","backgroundColorRatios":[0],"definitions": [{"items":[{"media":"this.video_1E6C3E87_0C5A_248B_4197_49B33899CBCC","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_1A02F0F3_0CDE_5C8B_41A2_DBF610342ABD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1A02F0F3_0CDE_5C8B_41A2_DBF610342ABD, 0)"}],"id":"playList_1A02F0F3_0CDE_5C8B_41A2_DBF610342ABD","class":"PlayList"},{"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","zoomEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false},{"class":"Video","height":720,"video":{"width":1280,"levels":[{"width":1280,"url":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1862,"height":720,"posterURL":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1_poster.jpg"}],"class":"VideoResource","height":720},"label":trans('video_03520B5A_0C23_7BF3_4197_544811BDA7B1.label'),"id":"video_03520B5A_0C23_7BF3_4197_544811BDA7B1","thumbnailUrl":"media/video_03520B5A_0C23_7BF3_4197_544811BDA7B1_t.jpg","width":1280,"loop":false,"scaleMode":"fit_inside","data":{"label":"HoiAnDor"},"autoplay":true},{"items":[{"media":"this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","camera":"this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_camera","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"class":"Video","height":720,"chromaThreshold":0.2,"id":"video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC","thumbnailUrl":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_t.jpg","chromaSmoothing":0.1,"width":1280,"label":trans('video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.label'),"loop":false,"chromaColor":"#28C034","scaleMode":"fit_inside","data":{"label":"green screen dancing girl 01"},"autoplay":true,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":29.97,"bitrate":481,"height":644,"posterURL":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_poster.jpg"}],"class":"VideoResource","height":644}},{"items":[{"media":"this.panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_camera"}],"id":"playList_1A03309E_0CDE_5CBD_418A_9CC23979418C","class":"PlayList"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_1CA0F36F_0C56_FD9B_4194_FC762255AE99","hoverFactor":0,"id":"panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_camera","automaticZoomSpeed":10},{"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/0/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"width":6144,"tags":"ondemand","height":1024},{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/1/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":3072,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_0/{face}/vr/0.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":6144,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_t.jpg"}],"class":"Panorama","partial":false,"label":trans('panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC.label'),"id":"panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC","thumbnailUrl":"media/panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_t.jpg","vfov":180,"pitch":0,"hfovMin":"150%","hfov":360,"overlays":["this.overlay_01250E11_0C26_FD71_4196_598F371C9200","this.overlay_1CA8F376_0C5A_3D8D_418F_DAE3EA9852C5","this.overlay_1D3CE35E_0C56_3DBD_4187_D21EB23D8292"],"hfovMax":130,"data":{"label":"01"},"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"select":"this.overlay_1D3CE35E_0C56_3DBD_4187_D21EB23D8292.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E","backwardYaw":-15.49,"yaw":146.32,"data":{"overlayID":"overlay_1D3CE35E_0C56_3DBD_4187_D21EB23D8292"}}]},{"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"url":"media/panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_0/{face}/0/{row}_{column}.jpg","rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"width":6144,"tags":"ondemand","height":1024},{"url":"media/panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_0/{face}/1/{row}_{column}.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":3072,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_0/{face}/vr/0.jpg","rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"width":6144,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_t.jpg"}],"class":"Panorama","partial":false,"label":trans('panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E.label'),"id":"panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E","thumbnailUrl":"media/panorama_1CC5A4AF_0C56_249B_4181_822492C7F69E_t.jpg","vfov":180,"pitch":0,"hfovMin":"150%","hfov":360,"overlays":["this.overlay_1DD79281_0C5A_7C87_4188_AA777339A1C0","this.overlay_1F661314_0C5A_FD8D_4187_4ABE2051815E","this.overlay_1A3B1C17_0CDE_EB8B_417B_7BFBE00061FF"],"hfovMax":130,"data":{"label":"02"},"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":4.95,"select":"this.overlay_1A3B1C17_0CDE_EB8B_417B_7BFBE00061FF.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC","backwardYaw":146.32,"yaw":-15.49,"data":{"overlayID":"overlay_1A3B1C17_0CDE_EB8B_417B_7BFBE00061FF"}}]},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_05B9E2CD_0C1E_AAD0_4193_26F035F3AD2E","hoverFactor":0,"id":"panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC_camera","automaticZoomSpeed":10},{"items":[{"media":"this.video_03520B5A_0C23_7BF3_4197_544811BDA7B1","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_1A02E0F3_0CDE_5C8B_4190_38F53E753360, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1A02E0F3_0CDE_5C8B_4190_38F53E753360, 0)"}],"id":"playList_1A02E0F3_0CDE_5C8B_4190_38F53E753360","class":"PlayList"},{"viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlayOverlay":true,"id":"MainViewerVideoPlayer","displayPlaybackBar":true,"clickAction":"play_pause"},{"borderSize":0,"translationTransitionDuration":1000,"transitionDuration":500,"playbackBarHeadHeight":15,"subtitlesGap":0,"toolTipShadowOpacity":1,"subtitlesOpacity":1,"id":"MainViewer","subtitlesVerticalAlign":"bottom","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesHorizontalAlign":"center","playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","transitionMode":"blending","playbackBarHeadShadow":true,"width":"100%","playbackBarHeadBorderSize":0,"subtitlesBorderSize":0,"playbackBarHeadOpacity":1,"toolTipBorderRadius":3,"subtitlesTextShadowOpacity":1,"toolTipPaddingTop":4,"subtitlesTextShadowVerticalLength":1,"displayTooltipInSurfaceSelection":true,"subtitlesFontColor":"#FFFFFF","toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","doubleClickAction":"toggle_fullscreen","toolTipShadowColor":"#333333","toolTipShadowHorizontalLength":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"subtitlesFontWeight":"normal","playbackBarBottom":5,"vrPointerSelectionTime":2000,"toolTipShadowBlurRadius":3,"paddingTop":0,"height":"100%","playbackBarHeadShadowHorizontalLength":0,"progressBackgroundColorRatios":[0],"displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColorDirection":"vertical","paddingBottom":0,"subtitlesPaddingLeft":5,"progressRight":0,"toolTipDisplayTime":600,"playbackBarBackgroundColor":["#FFFFFF"],"progressOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","subtitlesPaddingRight":5,"playbackBarHeight":10,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","toolTipFontWeight":"normal","playbackBarProgressBorderSize":0,"toolTipShadowSpread":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"surfaceReticleOpacity":0.6,"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","shadow":false,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"progressBarOpacity":1,"toolTipOpacity":1,"progressBottom":0,"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"progressHeight":10,"propagateClick":false,"progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipTextShadowOpacity":0,"toolTipShadowVerticalLength":0,"progressBarBorderSize":0,"progressBackgroundOpacity":1,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","paddingLeft":0,"subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"subtitlesTop":0,"toolTipFontFamily":"Arial","subtitlesPaddingBottom":5,"paddingRight":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarProgressOpacity":1,"toolTipHorizontalAlign":"center","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":0,"progressLeft":0,"toolTipFontStyle":"normal","subtitlesTextShadowBlurRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextDecoration":"none","firstTransitionDuration":0,"subtitlesFontFamily":"Arial","subtitlesTextShadowHorizontalLength":1,"data":{"name":"Main Viewer"},"borderRadius":0,"subtitlesPaddingTop":5,"toolTipBorderSize":1,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"minWidth":100,"toolTipFontColor":"#606060","subtitlesShadow":false},{"class":"Video","height":676,"video":{"width":1182,"levels":[{"width":1182,"url":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1659,"height":624,"posterURL":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC_poster.jpg"}],"class":"VideoResource","height":624},"label":trans('video_1E6C3E87_0C5A_248B_4197_49B33899CBCC.label'),"id":"video_1E6C3E87_0C5A_248B_4197_49B33899CBCC","thumbnailUrl":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC_t.jpg","width":1280,"loop":false,"scaleMode":"fit_inside","data":{"label":"KING CROWN INFINITY"},"autoplay":true},{"items":[{"media":"this.video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_1A02D0F3_0CDE_5C8B_4195_0BEAEB2738C5, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_1A02D0F3_0CDE_5C8B_4195_0BEAEB2738C5, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1A02D0F3_0CDE_5C8B_4195_0BEAEB2738C5, 0)"}],"id":"playList_1A02D0F3_0CDE_5C8B_4195_0BEAEB2738C5","class":"PlayList"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_1CA0F36F_0C56_FD9B_4194_FC762255AE99"},{"chromaThreshold":0.2,"blending":0.05,"id":"overlay_01250E11_0C26_FD71_4196_598F371C9200","chromaSmoothing":0.1,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":29.97,"bitrate":481,"height":644,"posterURL":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_poster.jpg"}],"class":"VideoResource","height":644},"loop":true,"class":"VideoPanoramaOverlay","image":"this.res_01603318_0C27_AB70_419A_E99BBFC5E915","useHandCursor":true,"hfov":36.68,"yaw":0.81,"pitch":-5.08,"rotationY":5.73,"rotationX":-0.06,"cues":[],"chromaColor":"#28C034","videoVisibleOnStop":false,"enabledInCardboard":true,"autoplay":true,"distance":50,"roll":-0.74,"vfov":18.23,"data":{"label":"Video"}},{"class":"VideoPanoramaOverlay","blending":0.08,"video":{"width":1182,"levels":[{"width":1182,"url":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1659,"height":624,"posterURL":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC_poster.jpg"}],"class":"VideoResource","height":624},"loop":true,"id":"overlay_1CA8F376_0C5A_3D8D_418F_DAE3EA9852C5","image":"this.res_1DF3FA83_0C5A_EC8B_41A6_1676EEC0911C","useHandCursor":true,"rotationX":1.33,"pitch":-1.16,"rotationY":-8.63,"yaw":29.22,"cues":[],"hfov":3.86,"videoVisibleOnStop":false,"enabledInCardboard":true,"autoplay":true,"distance":50,"roll":-1.16,"vfov":15.34,"data":{"label":"Video"}},{"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_1D015371_0C56_3D87_4171_4DE75E7227F1"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Image"},"vfov":12.24,"scaleMode":"fit_inside","distance":50,"image":"this.res_1DF43C08_0C5A_EB85_41A1_2258B06167BE","pitch":20.85,"hfov":8.67,"yaw":146.32}],"id":"overlay_1D3CE35E_0C56_3DBD_4187_D21EB23D8292","data":{"label":"Image"},"enabledInCardboard":true},{"class":"VideoPanoramaOverlay","blending":0.12,"id":"overlay_1DD79281_0C5A_7C87_4188_AA777339A1C0","video":{"width":1182,"levels":[{"width":1182,"url":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":30,"bitrate":1659,"height":624,"posterURL":"media/video_1E6C3E87_0C5A_248B_4197_49B33899CBCC_poster.jpg"}],"class":"VideoResource","height":624},"loop":true,"image":"this.res_1DF3FA83_0C5A_EC8B_41A6_1676EEC0911C","pitch":4.8,"useHandCursor":true,"rotationX":-4.76,"yaw":14.33,"cues":[],"rotationY":3.68,"hfov":6.21,"videoVisibleOnStop":false,"enabledInCardboard":true,"click":"this.overlay_1DD79281_0C5A_7C87_4188_AA777339A1C0.play()","autoplay":false,"distance":50,"roll":-0.01,"vfov":23.03,"data":{"label":"Video"}},{"chromaThreshold":0.2,"chromaSmoothing":0.1,"video":{"width":1144,"levels":[{"width":1144,"url":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC.mp4","class":"VideoResourceLevel","type":"video/mp4","framerate":29.97,"bitrate":481,"height":644,"posterURL":"media/video_009FADC0_0C1E_BECF_418A_DA1F54F5D8BC_poster.jpg"}],"class":"VideoResource","height":644},"loop":true,"id":"overlay_1F661314_0C5A_FD8D_4187_4ABE2051815E","class":"VideoPanoramaOverlay","image":"this.res_01603318_0C27_AB70_419A_E99BBFC5E915","useHandCursor":true,"hfov":14.69,"yaw":-14.27,"pitch":-12.61,"rotationY":-25.6,"rotationX":24.21,"cues":[],"chromaColor":"#28C034","videoVisibleOnStop":false,"enabledInCardboard":true,"autoplay":true,"distance":50,"roll":-0.92,"vfov":9.84,"data":{"label":"Video"}},{"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_1A39EC26_0CDE_EB8D_4195_280CFCBF90D6"],"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","verticalAlign":"middle","data":{"label":"Image"},"vfov":4.33,"scaleMode":"fit_inside","distance":50,"image":"this.res_1AFEA036_0CDE_DB8D_4162_FFE551993490","pitch":-18.94,"hfov":8.13,"yaw":-15.49}],"id":"overlay_1A3B1C17_0CDE_EB8B_417B_7BFBE00061FF","data":{"label":"Image","hasPanoramaAction":true},"enabledInCardboard":true},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323,"easing":"linear"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_05B9E2CD_0C1E_AAD0_4193_26F035F3AD2E"},{"levels":[{"url":"media/res_01603318_0C27_AB70_419A_E99BBFC5E915_0.jpg","width":1280,"class":"ImageResourceLevel","height":720}],"id":"res_01603318_0C27_AB70_419A_E99BBFC5E915","class":"ImageResource"},{"levels":[{"url":"media/res_1DF3FA83_0C5A_EC8B_41A6_1676EEC0911C_0.jpg","width":1280,"class":"ImageResourceLevel","height":676}],"id":"res_1DF3FA83_0C5A_EC8B_41A6_1676EEC0911C","class":"ImageResource"},{"mapColor":"any","click":"this.setMediaBehaviour(this.playList_1A03309E_0CDE_5CBD_418A_9CC23979418C, 0, this.panorama_064FB34E_0C1D_6BD0_4183_A442C875F2EC, true)","id":"HotspotPanoramaOverlayArea_1D015371_0C56_3D87_4171_4DE75E7227F1","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_1DF43C08_0C5A_EB85_41A1_2258B06167BE_0.png","width":100,"class":"ImageResourceLevel","height":99}],"id":"res_1DF43C08_0C5A_EB85_41A1_2258B06167BE","class":"ImageResource"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_1A39EC26_0CDE_EB8D_4195_280CFCBF90D6","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_1AFEA036_0CDE_DB8D_4162_FFE551993490_0.png","width":107,"class":"ImageResourceLevel","height":93}],"id":"res_1AFEA036_0CDE_DB8D_4162_FFE551993490","class":"ImageResource"}],"id":"rootPlayer","start":"this.init()","children":["this.MainViewer"],"overflow":"hidden","width":"100%","propagateClick":false,"backgroundOpacity":1,"scrollBarVisible":"rollOver","downloadEnabled":false,"paddingLeft":0,"scrollBarWidth":10,"backgroundColor":["#FFFFFF"],"contentOpaque":false,"desktopMipmappingEnabled":false,"scrollBarOpacity":0.5,"paddingRight":0,"paddingTop":0,"toolTipHorizontalAlign":"center","vrPolyfillScale":0.75,"mediaActivationMode":"window","paddingBottom":0,"gap":10,"scripts":{"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"historyGoForward":TDV.Tour.Script.historyGoForward,"playAudioList":TDV.Tour.Script.playAudioList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"clone":TDV.Tour.Script.clone,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setValue":TDV.Tour.Script.setValue,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizFinish":TDV.Tour.Script.quizFinish,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizStart":TDV.Tour.Script.quizStart,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showPopupImage":TDV.Tour.Script.showPopupImage,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumePlayers":TDV.Tour.Script.resumePlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"isPanorama":TDV.Tour.Script.isPanorama,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlays":TDV.Tour.Script.getOverlays,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics},"backgroundColorDirection":"vertical","height":"100%","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","layout":"absolute","data":{"name":"Player541","textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"}},"verticalAlign":"top","backgroundPreloadEnabled":true,"borderRadius":0,"minHeight":20,"scrollBarMargin":2,"borderSize":0,"minWidth":20,"scrollBarColor":"#000000"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Wed Sep 22 2021