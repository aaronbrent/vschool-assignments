if(window.__rewardstyle === undefined) {
	!function(doc, win){
		window.__rewardstyle = {
			ev:(doc.addEventListener !== undefined ? {
				add: 'addEventListener',
				rem: 'removeEventListener',
				pre: ''
			}:{
				add: 'attachEvent',
				rem: 'detachEvent',
				pre: 'on'
			}),
			ajax:{
				isIE8:(win.XDomainRequest !== undefined ? true : false),
				IEVersion:(function(){
					var a = navigator.userAgent.toLowerCase();
					return a.indexOf('msie') !== -1 ? parseInt(a.split('msie')[1],10) : false;
				})(),
				get:function(url, data, callback){
					var xhr = (__rewardstyle.ajax.isIE8 === true ? new win.XDomainRequest() : new XMLHttpRequest()),
						handler = function(e){
							if(xhr.readyState === 4 && xhr.status === 200) {
								response();
							}
						},
						response = function(){
							if(typeof(callback) === 'function') {
								callback(data, xhr.responseText);
							}
						};

					try {
						if(__rewardstyle.ajax.isIE8 === true) {
							xhr.onload = response;
							xhr.open('GET', url, true);
							xhr.onprogress = function(){};
							xhr.ontimeout = function(){};
							xhr.onerror = function(){};
							setTimeout(function(){xhr.send();}, 0);
						}
						else {
							xhr.open('GET', url, true);
							xhr.onreadystatechange = handler;
							xhr.send();
						}
					}
					catch(e){
						console.log(e);
					}

				}
			},
			getElementsByClassName:function(c, s){
				if(s === undefined) {
					s = doc;
				}
				return doc.getElementsByClassName !== undefined ? s.getElementsByClassName(c) : s.querySelectorAll('.'+c);
			},
			classFactor:function(e, c){
				var s = e.className.split(' '),
					r = [];
				c = c.toLowerCase();
				for(var i = 0; i < s.length; i++) {
					if(s[i] !== '' && s[i].toLowerCase() !== c) {
						r.push(s[i]);
					}
				}
				return r;
			},
			addClass:function(e, c){
				var r = __rewardstyle.classFactor(e, c);
				r.push(c);
				e.className = r.join(' ');
				return e.className;
			},
			removeClass:function(e, c) {
				var r = __rewardstyle.classFactor(e, c);
				e.className = r.join(' ');
				return e.className;
			},
			hasClass:function(e, c) {
				return RegExp('^(\\s*.*\\s+)*'+c+'(\\s+.*\\s*)*$', 'i').test(e.className);
			},
			camelize:function(s){
				return s.replace(/[\-\s_](\w)/g, function(d, l){
					return l.toUpperCase();
				});
			},
			getStyle:function(e, s){
				var c = __rewardstyle.camelize(s);
				if(e.style[c] !== '') {
					return e.style[c];
				}
				if(e.currentStyle === undefined) {
					return doc.defaultView.getComputedStyle(e, null).getPropertyValue(s);
				}
				return e.currentStyle(c);
			},
			isMobile:(function() {
				var a = navigator.userAgent || navigator.vendor || win.opera;
				return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
			})()
		};
	}(document, window);
}

if(window.__lookbook === undefined) {
	!function(doc, win){
		window.__lookbook = {
			inited: false,
			widgets: [],
			controls: [],
			widths: [],
			outers: [],
			inners: [],
			slides: [],
			products: [],
			chunk: [],
			tracks: [],
			injectResponse:function(id, mk){
				__lookbook.widgets[id].innerHTML = mk;
				__lookbook.widgets[id].setAttribute('data-widget-uid', id);
				__lookbook.controls[id] = __rewardstyle.getElementsByClassName('lb-control', __lookbook.widgets[id]);
				__lookbook.outers[id] = __rewardstyle.getElementsByClassName('lb-outer', __lookbook.widgets[id])[0];
				__lookbook.inners[id] = __rewardstyle.getElementsByClassName('lb-inner', __lookbook.widgets[id])[0];
				__lookbook.slides[id] = __rewardstyle.getElementsByClassName('lb-slide', __lookbook.widgets[id])[0];
				__lookbook.products[id] = __rewardstyle.getElementsByClassName('lb-product', __lookbook.widgets[id]);
				__lookbook.tracks[id] = __rewardstyle.getElementsByClassName('lb-track', __lookbook.widgets[id])[0];
				__lookbook.chunk[id] = 0;
				__lookbook.widths[id] = false;
			},
			clearHover:function(){
				for(var i = 0, l = __lookbook.widgets.length; i < l; i++) {
					var hos = __rewardstyle.getElementsByClassName('lb-hover', __lookbook.widgets[i]);
					for(var j = 0, k = hos.length; j < k; j++) {
						__rewardstyle.removeClass(hos[j], 'lb-hover');
					}
				}
			},
			wrangleTouch:function(){
				doc.addEventListener('touchstart', function(e){
					if(__rewardstyle.hasClass(e.target, 'lb-tap') === true) {
						var el = e.target;
						while(__rewardstyle.hasClass(el, 'lb-product') === false) {
							el = el.parentElement;
						}
						if(__rewardstyle.hasClass(el, 'lb-hover') === false) {
							__lookbook.clearHover();
							__rewardstyle.addClass(el, 'lb-hover');
							e.preventDefault();
						}
					}
					else {
						__lookbook.clearHover();
					}
				});
			},
			click:function(e){
				var t = e.target || e.srcElement,
					url = t.getAttribute('data-social'),
					title = t.getAttribute('title');
				if(url !== null && title !== null && __rewardstyle.hasClass(t.parentNode, 'lb-social') === true) {
					window.open(url, (__rewardstyle.ajax.isIE8 === true ? '' : title), 'width=600,height=300,status=no,location=no,toolbar=no,menubar=no,directories=no,resizable=yes,scrollbars=no');
					e.preventDefault();
				}
				else if(__rewardstyle.hasClass(t, 'lb-control') === true) {
					for(var i = 0, l = __lookbook.controls.length; i < l; i++) {
						for(var j = 0, k = __lookbook.controls[i].length; j < k; j++) {
							if(t === __lookbook.controls[i][j]) {
								if(__rewardstyle.hasClass(t, 'lb-left') === true) {
									__lookbook.left(i);
								}
								else if(__rewardstyle.hasClass(t, 'lb-right') === true) {
									__lookbook.right(i);
								}
								break;
							}
						}
					}
				}
			},
			left:function(i){
				__lookbook.goChunk(i, __lookbook.chunk[i] - 1);
			},
			right:function(i){
				__lookbook.goChunk(i, __lookbook.chunk[i] + 1);
			},
			goChunk:function(i,c){
				if(__lookbook.controls[i].length > 0) {
					if(c < 0) {
						c = __lookbook.products[i].length - 1;
					}
					if(c >= __lookbook.products[i].length) {
						c = 0;
					}
					__lookbook.chunk[i] = c;
					__lookbook.slides[i].setAttribute('style', 'left: -'+c+'00%');
					__lookbook.tracks[i].innerHTML = (c+1)+' of '+__lookbook.products[i].length;
				}
			},
			sizeCheck:function(i){
				var w = __lookbook.widths[i] === false ? {p:__lookbook.products[i][0].offsetWidth,c:(__lookbook.controls[i].length > 0 ? __lookbook.controls[i][0].offsetWidth : 0),w:__lookbook.widgets[i].parentNode.clientWidth} : __lookbook.widths[i];
				if(w.p + (w.c * 2) > w.w) {
					__rewardstyle.addClass(__lookbook.outers[i], 'lb-resp');
					__lookbook.inners[i].setAttribute('style', 'width: '+(w.w - (w.c * 2))+'px');
				}
			},
			resize:function(){
				for(var i = 0, l = __lookbook.widgets.length; i < l; i++) {
					__rewardstyle.removeClass(__lookbook.outers[i], 'lb-resp');
					__lookbook.inners[i].setAttribute('style', 'width: auto');
				}
				for(i = 0; i < l; i++) {
					__lookbook.widths[i] = {w:__lookbook.widgets[i].parentNode.clientWidth,c:(__lookbook.controls[i].length > 0 ? __lookbook.controls[i][0].offsetWidth : 0),p:__lookbook.products[i][0].offsetWidth};
				}
				for(i = 0; i < l; i++) {
					__lookbook.sizeCheck(i);
				}
			},
			init:function(e){
				if(e !== undefined && e.type === 'readystatechange' && doc.readyState !== 'complete') {
					return;
				}

				var ev = __rewardstyle.ev,
					ws = __rewardstyle.getElementsByClassName('lookbook-widget'),
					src = document.getElementById('lookbook-script').src.split('js/lookbook.js')[0];

				for(var i = 0; i < ws.length; i++) {
					__lookbook.widgets[i] = ws[i];

					if(ws[i].getAttribute('data-widget-uid') !== null) {
						continue;
					}

					__rewardstyle.ajax.get(src + 'lookbooks/' + ws[i].getAttribute('data-widget-id') + '.html' + (__rewardstyle.isMobile === true ? '?mobile' : ''), {uid:i}, function(params, data){
						try {
							if(__lookbook.widgets[params.uid].getAttribute('data-widget-uid') !== null) {
								return;
							}
							__lookbook.injectResponse(params.uid, data);
						} catch(err){}

						__lookbook.sizeCheck(params.uid);
						__lookbook.goChunk(params.uid, 0);
					});
				}

				if(__lookbook.inited === false) {
					win[ev.add](ev.pre+'resize', __lookbook.resize, true);
					doc[ev.rem](ev.pre+'DOMContentLoaded', __lookbook.init, false);
					doc[ev.rem](ev.pre+'readystatechange', __lookbook.init, false);
					win[ev.rem](ev.pre+'load', __lookbook.init, false);
					doc[ev.add](ev.pre+(__rewardstyle.isMobile === true ? 'touchstart' : 'click'), __lookbook.click, true);

					if(__rewardstyle.isMobile === true) {
						__lookbook.wrangleTouch();
					}

					__lookbook.inited = true;
				}
			}
		};
	}(document, window);
}

!function(d, w){
	if(document.readyState === 'complete') {
		__lookbook.init();
	}
	else {
		var e = __rewardstyle.ev;
		d[e.add](e.pre+'DOMContentLoaded', __lookbook.init, false);
		d[e.add](e.pre+'readystatechange', __lookbook.init, false);
		w[e.add](e.pre+'load', __lookbook.init, false);
	}
}(document, window);