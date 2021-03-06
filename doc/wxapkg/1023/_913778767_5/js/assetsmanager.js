var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = window.egret, t = function(e, r, t) {
    e.__class__ = r, t ? t.push(r) : t = [ r ], e.__types__ = e.__types__ ? t.concat(e.__types__) : t;
}, o = function(e, r) {
    function t() {
        this.constructor = e;
    }
    for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
    t.prototype = r.prototype, e.prototype = new t();
}, n = function(r, t, o, n) {
    var i, s = arguments.length, a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" === ("undefined" == typeof Reflect ? "undefined" : e(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(r, t, o, n); else for (var u = r.length - 1; u >= 0; u--) (i = r[u]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, o, a) : i(t, o)) || a);
    return s > 3 && a && Object.defineProperty(t, o, a), a;
};

i || (i = {});

!function(e) {
    function r(r) {
        var t = e.config.config.fileSystem.getFile(r);
        return t || (r = e.resourceNameSelector(r), t = e.config.config.fileSystem.getFile(r)), 
        t;
    }
    e.resourceNameSelector = function(e) {
        return e;
    }, e.getResourceInfo = r;
    var o;
    e.setConfigURL = function(e, r) {
        var t;
        t = e.indexOf(".json") >= 0 ? "legacyResourceConfig" : "resourceConfig", o = {
            type: t,
            root: r,
            url: e,
            name: e
        };
    };
    var n = function() {
        function t() {}
        return t.prototype.init = function() {
            return this.config || (this.config = {
                alias: {},
                groups: {},
                resourceRoot: o.root,
                typeSelector: function() {
                    return "unknown";
                },
                mergeSelector: null,
                fileSystem: null,
                loadGroup: []
            }), e.queue.pushResItem(o).catch(function(r) {
                return r.__resource_manager_error__ || (console.error(r.stack), r = new e.ResourceManagerError(1002)), 
                e.host.remove(o), Promise.reject(r);
            });
        }, t.prototype.getGroupByName = function(r, t) {
            var o = this.config.groups[r], n = [];
            if (!o) {
                if (t) throw new e.ResourceManagerError(2005, r);
                return null;
            }
            for (var i = 0, s = o; i < s.length; i++) {
                var a = s[i], u = e.config.getResourceWithSubkey(a, !0), c = u.key, f = (u.subkey, 
                e.config.getResource(c, !0));
                -1 == n.indexOf(f) && n.push(f);
            }
            return n;
        }, t.prototype.__temp__get__type__via__url = function(r) {
            var t = this.config.alias[r];
            if (t || (t = r), e.resourceTypeSelector) {
                var o = e.resourceTypeSelector(t);
                if (!o) throw new e.ResourceManagerError(2004, t);
                return o;
            }
            return console.warn("RES.mapConfig 并未设置 typeSelector"), "unknown";
        }, t.prototype.getResourceWithSubkey = function(r, t) {
            var o = (r = this.getKeyByAlias(r)).indexOf("#"), n = "";
            o >= 0 && (n = r.substr(o + 1), r = r.substr(0, o));
            var i = this.getResource(r);
            if (i) return {
                r: i,
                key: r,
                subkey: n
            };
            if (t) {
                var s = n ? r + "#" + n : r;
                throw new e.ResourceManagerError(2006, s);
            }
            return null;
        }, t.prototype.getKeyByAlias = function(e) {
            return this.config.alias[e] ? this.config.alias[e] : e;
        }, t.prototype.getResource = function(t, o) {
            var n = this.config.alias[t];
            n || (n = t);
            var i = r(n);
            if (!i) {
                if (o) throw new e.ResourceManagerError(2006, t);
                return null;
            }
            return i;
        }, t.prototype.getGroup = function(e) {
            return this.getGroupByName(e);
        }, t.prototype.createGroup = function(e, r, t) {
            if (void 0 === t && (t = !1), !t && this.config.groups[e] || !r || 0 == r.length) return !1;
            for (var o = [], n = 0, i = r; n < i.length; n++) {
                var s = i[n];
                if (this.config.groups[s]) {
                    var a = this.config.groups[s];
                    o = o.concat(a);
                } else o.push(s);
            }
            return this.config.groups[e] = o, !0;
        }, t.prototype.addSubkey = function(e, r) {
            this.addAlias(e, r + "#" + e);
        }, t.prototype.addAlias = function(e, r) {
            this.config.alias[r] && (r = this.config.alias[r]), this.config.alias[e] = r;
        }, t.prototype.getType = function(e) {
            return this.getResource(e, !0).type;
        }, t.prototype.addResourceData = function(r) {
            e.hasRes(r.name) || (r.type || (r.type = this.__temp__get__type__via__url(r.url)), 
            e.config.config.fileSystem.addFile(r.url, r.type, r.root, r.extra), r.name && (this.config.alias[r.name] = r.url));
        }, t.prototype.removeResourceData = function(r) {
            e.hasRes(r.name) && (e.config.config.fileSystem.removeFile(r.url), this.config.alias[r.name] && delete this.config.alias[r.name]);
        }, t;
    }();
    e.ResourceConfig = n, t(n.prototype, "RES.ResourceConfig");
}(i || (i = {}));

!function(e) {
    var o = function() {
        function t() {
            this.groupTotalDic = {}, this.numLoadedDic = {}, this.groupErrorDic = {}, this.retryTimesDic = {}, 
            this.maxRetryTimes = 3, this.reporterDic = {}, this.dispatcherDic = {}, this.failedList = new Array(), 
            this.loadItemErrorDic = {}, this.errorDic = {}, this.itemListPriorityDic = {}, this.itemLoadDic = {}, 
            this.promiseHash = {}, this.lazyLoadList = new Array(), this.loadingCount = 0, this.thread = 4;
        }
        return t.prototype.pushResItem = function(e) {
            if (this.promiseHash[e.name]) return this.promiseHash[e.name];
            this.lazyLoadList.push(e), this.itemListPriorityDic[Number.NEGATIVE_INFINITY] = this.lazyLoadList, 
            this.updatelistPriority(this.lazyLoadList, Number.NEGATIVE_INFINITY);
            var t = new r.EventDispatcher();
            this.dispatcherDic[e.name] = t;
            var o = new Promise(function(e, r) {
                t.addEventListener("complete", function(r) {
                    e(r.data);
                }, null), t.addEventListener("error", function(e) {
                    r(e.data);
                }, null);
            });
            return this.promiseHash[e.name] = o, this.loadNextResource(), o;
        }, t.prototype.pushResGroup = function(e, t, o, n) {
            if (this.promiseHash[t]) return this.promiseHash[t];
            for (var i = e.length, s = 0; s < i; s++) {
                var a = e[s];
                a.groupNames || (a.groupNames = []), a.groupNames.push(t);
            }
            this.groupTotalDic[t] = e.length, this.numLoadedDic[t] = 0, this.updatelistPriority(e, o), 
            this.reporterDic[t] = n;
            var u = new r.EventDispatcher();
            this.dispatcherDic[t] = u;
            var c = new Promise(function(e, r) {
                u.addEventListener("complete", e, null), u.addEventListener("error", function(e) {
                    r(e.data);
                }, null);
            });
            return this.promiseHash[t] = c, this.loadNextResource(), c;
        }, t.prototype.updatelistPriority = function(e, r) {
            void 0 == this.itemListPriorityDic[r] && (this.itemListPriorityDic[r] = []);
            for (var t = 0, o = e; t < o.length; t++) {
                var n = o[t];
                if (1 != this.itemLoadDic[n.name]) {
                    var i = this.findPriorityInDic(n);
                    if (void 0 == i) this.itemListPriorityDic[r].push(n); else if (i < r) {
                        this.itemListPriorityDic[r].push(n);
                        var s = this.itemListPriorityDic[i].indexOf(n);
                        this.itemListPriorityDic[i].splice(s, 1);
                    }
                }
            }
        }, t.prototype.findPriorityInDic = function(e) {
            for (var r in this.itemListPriorityDic) if (this.itemListPriorityDic[r].indexOf(e) > -1) return parseInt(r);
        }, t.prototype.loadNextResource = function() {
            for (;this.loadingCount < this.thread && this.loadSingleResource(); ) ;
        }, t.prototype.loadSingleResource = function() {
            var r = this, t = this.getOneResourceInfoInGroup();
            return !!t && (this.itemLoadDic[t.name] = 1, this.loadingCount++, this.loadResource(t).then(function(o) {
                r.loadingCount--, delete r.itemLoadDic[t.name], e.host.save(t, o), r.promiseHash[t.name] && r.deleteDispatcher(t.name).dispatchEventWith("complete", !1, o);
                var n = t.groupNames;
                if (n) {
                    delete t.groupNames;
                    for (var i = 0, s = n; i < s.length; i++) {
                        var a = s[i];
                        r.setGroupProgress(a, t) && r.loadGroupEnd(a);
                    }
                }
                r.loadNextResource();
            }).catch(function(o) {
                if (!o) throw t.name + " load fail";
                if (!o.__resource_manager_error__) throw o;
                delete r.itemLoadDic[t.name], r.loadingCount--, delete e.host.state[t.root + t.name];
                var n = r.retryTimesDic[t.name] || 1;
                if (!(n > r.maxRetryTimes)) return r.retryTimesDic[t.name] = n + 1, r.failedList.push(t), 
                void r.loadNextResource();
                delete r.retryTimesDic[t.name], r.promiseHash[t.name] && r.deleteDispatcher(t.name).dispatchEventWith("error", !1, {
                    r: t,
                    error: o
                });
                var i = t.groupNames;
                if (i) {
                    delete t.groupNames;
                    for (var s = 0, a = i; s < a.length; s++) {
                        var u = a[s];
                        r.loadItemErrorDic[u] || (r.loadItemErrorDic[u] = []), -1 == r.loadItemErrorDic[u].indexOf(t) && r.loadItemErrorDic[u].push(t), 
                        r.groupErrorDic[u] = !0, r.setGroupProgress(u, t) ? r.loadGroupEnd(u, o) : r.errorDic[u] = o;
                    }
                }
                r.loadNextResource();
            }), !0);
        }, t.prototype.getOneResourceInfoInGroup = function() {
            if (this.failedList.length > 0) return this.failedList.shift();
            var e = Number.NEGATIVE_INFINITY;
            for (var r in this.itemListPriorityDic) e = Math.max(e, r);
            var t = this.itemListPriorityDic[e];
            if (t) return 0 == t.length ? (delete this.itemListPriorityDic[e], this.getOneResourceInfoInGroup()) : t.shift();
        }, t.prototype.setGroupProgress = function(e, r) {
            var t = this.reporterDic[e], o = ++this.numLoadedDic[e], n = this.groupTotalDic[e];
            return t && t.onProgress && t.onProgress(o, n, r), o == n;
        }, t.prototype.loadGroupEnd = function(e, r) {
            delete this.groupTotalDic[e], delete this.numLoadedDic[e], delete this.reporterDic[e];
            var t = this.deleteDispatcher(e);
            if (r) {
                delete this.groupErrorDic[e];
                n = this.loadItemErrorDic[e];
                delete this.loadItemErrorDic[e], t.dispatchEventWith("error", !1, {
                    itemList: n,
                    lastError: r
                });
            } else {
                var o = this.groupErrorDic[e];
                if (delete this.groupErrorDic[e], o) {
                    var n = this.loadItemErrorDic[e];
                    delete this.loadItemErrorDic[e];
                    var i = this.errorDic[e];
                    delete this.errorDic[e], t.dispatchEventWith("error", !1, {
                        itemList: n,
                        error: i
                    });
                } else t.dispatchEventWith("complete");
            }
        }, t.prototype.deleteDispatcher = function(e) {
            delete this.promiseHash[e];
            var r = this.dispatcherDic[e];
            return delete this.dispatcherDic[e], r;
        }, t.prototype.loadResource = function(r, t) {
            if (!t) {
                if (1 == e.FEATURE_FLAG.FIX_DUPLICATE_LOAD) {
                    var o = e.host.state[r.root + r.name];
                    if (2 == o) return Promise.resolve(e.host.get(r));
                    if (1 == o) return r.promise;
                }
                t = e.processor.isSupport(r);
            }
            if (!t) throw new e.ResourceManagerError(2001, r.name, r.type);
            e.host.state[r.root + r.name] = 1;
            var n = t.onLoadStart(e.host, r);
            return r.promise = n, n;
        }, t.prototype.unloadResource = function(r) {
            if (!e.host.get(r)) return console.warn("尝试释放不存在的资源:", r.name), !1;
            var t = e.processor.isSupport(r);
            return !t || (t.onRemoveStart(e.host, r), e.host.remove(r), 1 == r.extra && e.config.removeResourceData(r), 
            !0);
        }, t;
    }();
    e.ResourceLoader = o, t(o.prototype, "RES.ResourceLoader");
}(i || (i = {}));

!function(e) {
    e.checkNull = function(e, r, t) {
        var o = t.value;
        t.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return e[0] ? o.apply(this, e) : (console.warn("方法" + r + "的参数不能为null"), null);
        };
    }, e.FEATURE_FLAG = {
        FIX_DUPLICATE_LOAD: 1
    };
    !function(e) {
        var r = "warning";
        e.setUpgradeGuideLevel = function(e) {
            r = e;
        };
    }(e.upgrade || (e.upgrade = {}));
}(i || (i = {}));

!function(e) {
    e.nameSelector = function(r) {
        return e.path.basename(r).split(".").join("_");
    }, e.registerAnalyzer = function(r, t) {
        throw new e.ResourceManagerError(2002);
    }, e.loadConfig = function(r, t) {
        if (t.indexOf("://") >= 0) {
            var o = t.split("://");
            t = o[0] + "://" + e.path.normalize(o[1] + "/"), r = r.replace(t, "");
        } else t = e.path.normalize(t + "/"), r = r.replace(t, "");
        return e.setConfigURL(r, t), s || (s = new i()), s.loadConfig();
    }, e.loadGroup = function(e, r, t) {
        return void 0 === r && (r = 0), s.loadGroup(e, r, t);
    }, e.isGroupLoaded = function(e) {
        return s.isGroupLoaded(e);
    }, e.getGroupByName = function(r) {
        return s.getGroupByName(r).map(function(r) {
            return e.ResourceItem.convertToResItem(r);
        });
    }, e.createGroup = function(e, r, t) {
        return void 0 === t && (t = !1), s.createGroup(e, r, t);
    }, e.hasRes = function(e) {
        return s.hasRes(e);
    }, e.getRes = function(e) {
        return s.getRes(e);
    }, e.getResAsync = function(e, r, t) {
        return s.getResAsync.apply(s, arguments);
    }, e.getResByUrl = function(e, r, t, o) {
        void 0 === o && (o = ""), s.getResByUrl(e, r, t, o);
    }, e.destroyRes = function(e, r) {
        return s.destroyRes(e, r);
    }, e.setMaxLoadingThread = function(e) {
        s || (s = new i()), s.setMaxLoadingThread(e);
    }, e.setMaxRetryTimes = function(e) {
        s.setMaxRetryTimes(e);
    }, e.addEventListener = function(e, r, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = 0), s || (s = new i()), s.addEventListener(e, r, t, o, n);
    }, e.removeEventListener = function(e, r, t, o) {
        void 0 === o && (o = !1), s.removeEventListener(e, r, t, o);
    }, e.$addResourceData = function(e) {
        s.addResourceData(e);
    }, e.getVersionController = function() {
        return s || (s = new i()), s.vcs;
    }, e.registerVersionController = function(e) {
        s || (s = new i()), s.registerVersionController(e);
    }, e.getVirtualUrl = function(e) {
        return s.vcs ? s.vcs.getVirtualUrl(e) : e;
    };
    var i = function(r) {
        function t() {
            var t = r.call(this) || this;
            return t.isVcsInit = !1, e.VersionController && (t.vcs = new e.VersionController()), 
            t;
        }
        return o(t, r), t.prototype.registerVersionController = function(e) {
            this.vcs = e, this.isVcsInit = !1;
        }, t.prototype.loadConfig = function() {
            var r = this, t = function() {
                return e.config.init().then(function(t) {
                    e.ResourceEvent.dispatchResourceEvent(r, e.ResourceEvent.CONFIG_COMPLETE);
                }, function(t) {
                    return e.ResourceEvent.dispatchResourceEvent(r, e.ResourceEvent.CONFIG_LOAD_ERROR), 
                    Promise.reject(t);
                });
            };
            return !this.isVcsInit && this.vcs ? (this.isVcsInit = !0, this.vcs.init().then(function() {
                return t();
            })) : t();
        }, t.prototype.isGroupLoaded = function(r) {
            return e.config.getGroupByName(r, !0).every(function(r) {
                return null != e.host.get(r);
            });
        }, t.prototype.getGroupByName = function(r) {
            return e.config.getGroupByName(r, !0);
        }, t.prototype.loadGroup = function(r, t, o) {
            var n = this;
            void 0 === t && (t = 0);
            var i = {
                onProgress: function(t, i, s) {
                    o && o.onProgress && o.onProgress(t, i, s), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_PROGRESS, r, s, t, i);
                }
            };
            return this._loadGroup(r, t, i).then(function(t) {
                -1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), 
                e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_COMPLETE, r);
            }, function(t) {
                if (-1 == e.config.config.loadGroup.indexOf(r) && e.config.config.loadGroup.push(r), 
                t.itemList) for (var o = t.itemList, i = o.length, s = 0; s < i; s++) {
                    var a = o[s];
                    delete a.promise, e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, r, a);
                }
                return e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.GROUP_LOAD_ERROR, r), 
                Promise.reject(t.error);
            });
        }, t.prototype._loadGroup = function(r, t, o) {
            void 0 === t && (t = 0);
            var n = e.config.getGroupByName(r, !0);
            return 0 == n.length ? new Promise(function(t, o) {
                o({
                    error: new e.ResourceManagerError(2006, r)
                });
            }) : e.queue.pushResGroup(n, r, t, o);
        }, t.prototype.createGroup = function(r, t, o) {
            return void 0 === o && (o = !1), e.config.createGroup(r, t, o);
        }, t.prototype.hasRes = function(r) {
            return null != e.config.getResourceWithSubkey(r);
        }, t.prototype.getRes = function(r) {
            var t = e.config.getResourceWithSubkey(r);
            if (t) {
                var o = t.r, n = t.key, i = t.subkey, s = e.processor.isSupport(o);
                return s && s.getData && i ? s.getData(e.host, o, n, i) : e.host.get(o);
            }
            return null;
        }, t.prototype.getResAsync = function(r, t, o) {
            var n = this, i = r, s = e.config.getResourceWithSubkey(r, !0), a = s.r, u = s.subkey;
            return e.queue.pushResItem(a).then(function(n) {
                e.host.save(a, n);
                var s = e.processor.isSupport(a);
                return s && s.getData && u && (n = s.getData(e.host, a, r, u)), t && t.call(o, n, i), 
                n;
            }, function(r) {
                return e.host.remove(a), e.ResourceEvent.dispatchResourceEvent(n, e.ResourceEvent.ITEM_LOAD_ERROR, "", a), 
                Promise.reject(r);
            });
        }, t.prototype.getResByUrl = function(r, t, o, n) {
            var i = this;
            void 0 === n && (n = "");
            var s = e.config.getResource(r);
            if (!(s || (n || (n = e.config.__temp__get__type__via__url(r)), s = {
                name: r,
                url: r,
                type: n,
                root: "",
                extra: 1
            }, e.config.addResourceData(s), s = e.config.getResource(r)))) throw "never";
            return e.queue.pushResItem(s).then(function(r) {
                return e.host.save(s, r), t && s && t.call(o, r, s.url), r;
            }, function(r) {
                return e.host.remove(s), e.ResourceEvent.dispatchResourceEvent(i, e.ResourceEvent.ITEM_LOAD_ERROR, "", s), 
                Promise.reject(r);
            });
        }, t.prototype.destroyRes = function(r, t) {
            void 0 === t && (t = !0);
            var o = e.config.getGroup(r);
            if (o && o.length > 0) {
                if (t || 1 == e.config.config.loadGroup.length && e.config.config.loadGroup[0] == r) {
                    for (var n = 0, i = o; n < i.length; n++) {
                        var s = i[n];
                        e.queue.unloadResource(s);
                    }
                    g = e.config.config.loadGroup.indexOf(r);
                    e.config.config.loadGroup.splice(g, 1);
                } else {
                    for (var a = {}, u = 0, c = e.config.config.loadGroup; u < c.length; u++) {
                        var f = c[u];
                        for (var l in e.config.config.groups[f]) a[p = e.config.config.groups[f][l]] ? a[p]++ : a[p] = 1;
                    }
                    for (var p in a) a[p] && 1 == a[p] && (s = e.config.getResource(p)) && e.queue.unloadResource(s);
                    var g = e.config.config.loadGroup.indexOf(r);
                    e.config.config.loadGroup.splice(g, 1);
                }
                return !0;
            }
            return (s = e.config.getResource(r)) ? e.queue.unloadResource(s) : (console.warn("无法删除指定组:" + r), 
            !1);
        }, t.prototype.setMaxLoadingThread = function(r) {
            r < 1 && (r = 1), e.queue.thread = r;
        }, t.prototype.setMaxRetryTimes = function(r) {
            r = Math.max(r, 0), e.queue.maxRetryTimes = r;
        }, t.prototype.addResourceData = function(r) {
            e.config.addResourceData(r);
        }, n([ e.checkNull ], t.prototype, "hasRes", null), n([ e.checkNull ], t.prototype, "getRes", null), 
        n([ e.checkNull ], t.prototype, "getResAsync", null), n([ e.checkNull ], t.prototype, "getResByUrl", null), 
        t;
    }(r.EventDispatcher);
    e.Resource = i, t(i.prototype, "RES.Resource");
    var s;
}(i || (i = {}));

!function(e) {
    !function(e) {
        e.normalize = function(e) {
            var r = e.split("/");
            return r.filter(function(e, t) {
                return !!e || t == r.length - 1;
            }).join("/");
        }, e.basename = function(e) {
            return e.substr(e.lastIndexOf("/") + 1);
        }, e.dirname = function(e) {
            return e.substr(0, e.lastIndexOf("/"));
        };
    }(e.path || (e.path = {}));
}(i || (i = {}));

!function(e) {
    var o = function() {
        function e() {}
        return e.prototype.init = function() {
            return this.versionInfo = this.getLocalData("all.manifest"), Promise.resolve();
        }, e.prototype.getVirtualUrl = function(e) {
            return e;
        }, e.prototype.getLocalData = function(e) {
            if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
                var r = egret_native.readUpdateFileSync(e);
                if (null != r) return JSON.parse(r);
                if (null != (r = egret_native.readResourceFileSync(e))) return JSON.parse(r);
            }
            return null;
        }, e;
    }();
    e.NativeVersionController = o, t(o.prototype, "RES.NativeVersionController", [ "RES.IVersionController" ]), 
    r.Capabilities.runtimeType == r.RuntimeType.NATIVE && (e.VersionController = o);
}(i || (i = {}));

!function(e) {
    !function(t) {
        function o(t, o) {
            var n = this;
            return new Promise(function(i, s) {
                t.addEventListener(r.Event.COMPLETE, function() {
                    var e = t.data ? t.data : t.response;
                    i(e);
                }, n), t.addEventListener(r.IOErrorEvent.IO_ERROR, function() {
                    var r = new e.ResourceManagerError(1001, o.url);
                    s(r);
                }, n);
            });
        }
        function n(e, r) {
            if (-1 != r.indexOf("://")) return r;
            var t = (e = e.split("\\").join("/")).match(/#.*|\?.*/), o = "";
            t && (o = t[0]);
            var n = e.lastIndexOf("/");
            return (e = -1 != n ? e.substring(0, n + 1) + r : r) + o;
        }
        t.isSupport = function(e) {
            return t._map[e.type];
        }, t.map = function(e, r) {
            t._map[e] = r;
        }, t.getRelativePath = n, t.ImageProcessor = {
            onLoadStart: function(t, n) {
                var i = new r.ImageLoader();
                return i.load(e.getVirtualUrl(n.root + n.url)), o(i, n).then(function(e) {
                    var o = new r.Texture();
                    o._setBitmapData(e);
                    var i = t.resourceConfig.getResource(n.name);
                    if (i && i.scale9grid) {
                        var s = i.scale9grid.split(",");
                        o.scale9Grid = new r.Rectangle(parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3]));
                    }
                    return o;
                });
            },
            onRemoveStart: function(e, r) {
                e.get(r).dispose();
            }
        }, t.BinaryProcessor = {
            onLoadStart: function(t, n) {
                var i = new r.HttpRequest();
                return i.responseType = r.HttpResponseType.ARRAY_BUFFER, i.open(e.getVirtualUrl(n.root + n.url), "get"), 
                i.send(), o(i, n);
            },
            onRemoveStart: function(e, r) {}
        }, t.TextProcessor = {
            onLoadStart: function(t, n) {
                var i = new r.HttpRequest();
                return i.responseType = r.HttpResponseType.TEXT, i.open(e.getVirtualUrl(n.root + n.url), "get"), 
                i.send(), o(i, n);
            },
            onRemoveStart: function(e, r) {
                return !0;
            }
        }, t.JsonProcessor = {
            onLoadStart: function(e, r) {
                return e.load(r, "text").then(function(e) {
                    return JSON.parse(e);
                });
            },
            onRemoveStart: function(e, r) {}
        }, t.XMLProcessor = {
            onLoadStart: function(e, t) {
                return e.load(t, "text").then(function(e) {
                    return r.XML.parse(e);
                });
            },
            onRemoveStart: function(e, r) {
                return !0;
            }
        }, t.CommonJSProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "text").then(function(r) {
                    var o = new Function("require", "exports", r), n = {};
                    try {
                        o(function() {}, n);
                    } catch (r) {
                        throw new e.ResourceManagerError(2003, t.name, r.message);
                    }
                    return n;
                });
            },
            onRemoveStart: function(e, r) {}
        }, t.SheetProcessor = {
            onLoadStart: function(t, o) {
                return t.load(o, "json").then(function(i) {
                    var s = t.resourceConfig.getResource(e.nameSelector(i.file));
                    if (!s) {
                        var a = n(o.url, i.file);
                        s = {
                            name: a,
                            url: a,
                            type: "image",
                            root: o.root
                        };
                    }
                    return t.load(s).then(function(e) {
                        var o = i.frames, n = new r.SpriteSheet(e);
                        n.$resourceInfo = s;
                        for (var a in o) {
                            var u = o[a], c = n.createTexture(a, u.x, u.y, u.w, u.h, u.offX, u.offY, u.sourceW, u.sourceH);
                            if (u.scale9grid) {
                                var f = u.scale9grid.split(",");
                                c.scale9Grid = new r.Rectangle(parseInt(f[0]), parseInt(f[1]), parseInt(f[2]), parseInt(f[3]));
                            }
                        }
                        return t.save(s, e), n;
                    });
                });
            },
            getData: function(e, r, t, o) {
                var n = e.get(r);
                return n ? n.getTexture(o) : null;
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r), o = t.$resourceInfo;
                t.dispose(), e.unload(o);
            }
        };
        var i = function(e, r) {
            var t = "", o = r.split("\n")[2], n = o.indexOf('file="');
            return -1 != n && (n = (o = o.substring(n + 6)).indexOf('"'), t = o.substring(0, n)), 
            e = -1 != (n = (e = e.split("\\").join("/")).lastIndexOf("/")) ? e.substring(0, n + 1) + t : t;
        };
        t.FontProcessor = {
            onLoadStart: function(t, o) {
                return t.load(o, "text").then(function(s) {
                    var a;
                    try {
                        a = JSON.parse(s);
                    } catch (e) {
                        a = s;
                    }
                    var u;
                    u = "string" == typeof a ? i(o.url, a) : n(o.url, a.file);
                    var c = t.resourceConfig.getResource(e.nameSelector(u));
                    return c || (c = {
                        name: u,
                        url: u,
                        type: "image",
                        root: o.root
                    }), t.load(c).then(function(e) {
                        var o = new r.BitmapFont(e, a);
                        return o.$resourceInfo = c, t.save(c, e), o;
                    });
                });
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r).$resourceInfo;
                e.unload(t);
            }
        }, t.SoundProcessor = {
            onLoadStart: function(t, n) {
                var i = new r.Sound();
                return i.load(e.getVirtualUrl(n.root + n.url)), o(i, n).then(function() {
                    return i;
                });
            },
            onRemoveStart: function(e, r) {}
        }, t.MovieClipProcessor = {
            onLoadStart: function(t, o) {
                var n, i;
                return t.load(o, "json").then(function(r) {
                    n = r;
                    var s = o.name, a = s.substring(0, s.lastIndexOf(".")) + ".png";
                    if (!(i = t.resourceConfig.getResource(a, !0))) throw new e.ResourceManagerError(1001, a);
                    return t.load(i);
                }).then(function(e) {
                    t.save(i, e);
                    var o = e;
                    return new r.MovieClipDataFactory(n, o);
                });
            },
            onRemoveStart: function(e, r) {
                var t = e.get(r);
                t.clearCache(), t.$spriteSheet.dispose();
                var o = r.name, n = o.substring(0, o.lastIndexOf(".")) + ".png", i = e.resourceConfig.getResource(n, !0);
                e.unload(i);
            }
        }, t.MergeJSONProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "json").then(function(r) {
                    for (var o in r) e.config.addSubkey(o, t.name);
                    return r;
                });
            },
            getData: function(e, r, t, o) {
                var n = e.get(r);
                return n ? n[o] : (console.error("missing resource :" + r.name), null);
            },
            onRemoveStart: function(e, r) {}
        }, t.LegacyResourceConfigProcessor = {
            onLoadStart: function(r, t) {
                return r.load(t, "json").then(function(o) {
                    var n = e.config.config, i = t.root, s = n.fileSystem;
                    s || (s = {
                        fsData: {},
                        getFile: function(e) {
                            return p[e];
                        },
                        addFile: function(e, r, t, o) {
                            r || (r = ""), void 0 == t && (t = ""), p[e] = {
                                name: e,
                                type: r,
                                url: e,
                                root: t,
                                extra: o
                            };
                        },
                        profile: function() {
                            console.log(p);
                        },
                        removeFile: function(e) {
                            delete p[e];
                        }
                    }, n.fileSystem = s);
                    for (var a = n.groups, u = 0, c = o.groups; u < c.length; u++) {
                        var f = c[u];
                        "" == f.keys ? a[f.name] = [] : a[f.name] = f.keys.split(",");
                    }
                    for (var l = n.alias, p = s.fsData, g = 0, d = o.resources; g < d.length; g++) !function(e) {
                        p[e.name] = e, p[e.name].root = i, e.subkeys && e.subkeys.split(",").forEach(function(r) {
                            l[r] = e.name + "#" + r, l[e.name + "." + r] = e.name + "#" + r;
                        });
                    }(d[g]);
                    return r.save(t, n), n;
                });
            },
            onRemoveStart: function() {}
        }, t._map = {
            image: t.ImageProcessor,
            json: t.JsonProcessor,
            text: t.TextProcessor,
            xml: t.XMLProcessor,
            sheet: t.SheetProcessor,
            font: t.FontProcessor,
            bin: t.BinaryProcessor,
            commonjs: t.CommonJSProcessor,
            sound: t.SoundProcessor,
            movieclip: t.MovieClipProcessor,
            mergeJson: t.MergeJSONProcessor,
            legacyResourceConfig: t.LegacyResourceConfigProcessor
        };
    }(e.processor || (e.processor = {}));
}(i || (i = {}));

!function(e) {
    var n = function(t) {
        function n(e, r, o) {
            void 0 === r && (r = !1), void 0 === o && (o = !1);
            var n = t.call(this, e, r, o) || this;
            return n.itemsLoaded = 0, n.itemsTotal = 0, n.groupName = "", n;
        }
        return o(n, t), n.dispatchResourceEvent = function(t, o, i, s, a, u) {
            void 0 === i && (i = ""), void 0 === s && (s = void 0), void 0 === a && (a = 0), 
            void 0 === u && (u = 0);
            var c = r.Event.create(n, o);
            c.groupName = i, s && (c.resItem = e.ResourceItem.convertToResItem(s)), c.itemsLoaded = a, 
            c.itemsTotal = u;
            var f = t.dispatchEvent(c);
            return r.Event.release(c), f;
        }, n.ITEM_LOAD_ERROR = "itemLoadError", n.CONFIG_COMPLETE = "configComplete", n.CONFIG_LOAD_ERROR = "configLoadError", 
        n.GROUP_PROGRESS = "groupProgress", n.GROUP_COMPLETE = "groupComplete", n.GROUP_LOAD_ERROR = "groupLoadError", 
        n;
    }(r.Event);
    e.ResourceEvent = n, t(n.prototype, "RES.ResourceEvent");
}(i || (i = {}));

!function(e) {
    !function(r) {
        r.TYPE_XML = "xml", r.TYPE_IMAGE = "image", r.TYPE_BIN = "bin", r.TYPE_TEXT = "text", 
        r.TYPE_JSON = "json", r.TYPE_SHEET = "sheet", r.TYPE_FONT = "font", r.TYPE_SOUND = "sound", 
        r.convertToResItem = function(r) {
            var t = r.name;
            if (e.config.config) for (var o in e.config.config.alias) e.config.config.alias[o] == r.url && (t = o); else t = r.url;
            return {
                name: t,
                url: r.url,
                type: r.type,
                data: r,
                root: r.root
            };
        };
    }(e.ResourceItem || (e.ResourceItem = {}));
}(i || (i = {}));

!function(e) {
    var r = function() {
        function r(e) {
            this.data = e;
        }
        return r.prototype.profile = function() {
            console.log(this.data);
        }, r.prototype.addFile = function(r, t) {
            t || (t = ""), r = e.path.normalize(r);
            var o = e.path.basename(r), n = e.path.dirname(r);
            this.exists(n) || this.mkdir(n), this.resolve(n)[o] = {
                url: r,
                type: t
            };
        }, r.prototype.getFile = function(e) {
            var r = this.resolve(e);
            return r && (r.name = e), r;
        }, r.prototype.resolve = function(r) {
            if ("" == r) return this.data;
            for (var t = (r = e.path.normalize(r)).split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                if (!o) return o;
                o = o[s];
            }
            return o;
        }, r.prototype.mkdir = function(r) {
            for (var t = (r = e.path.normalize(r)).split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                o[s] || (o[s] = {}), o = o[s];
            }
        }, r.prototype.exists = function(r) {
            if ("" == r) return !0;
            for (var t = (r = e.path.normalize(r)).split("/"), o = this.data, n = 0, i = t; n < i.length; n++) {
                var s = i[n];
                if (!o[s]) return !1;
                o = o[s];
            }
            return !0;
        }, r;
    }();
    e.NewFileSystem = r, t(r.prototype, "RES.NewFileSystem");
}(i || (i = {}));

var i;

!function(e) {
    var n = {};
    e.profile = function() {
        e.config.config.fileSystem.profile(), console.log(n);
        var t = 0;
        for (var o in n) {
            var i = n[o];
            i instanceof r.Texture && (t += i.$bitmapWidth * i.$bitmapHeight * 4);
        }
        console.log("gpu size : " + (t / 1024).toFixed(3) + "kb");
    }, e.host = {
        state: {},
        get resourceConfig() {
            return e.config;
        },
        load: function(r, t) {
            var o = "string" == typeof t ? e.processor._map[t] : t;
            return e.queue.loadResource(r, o);
        },
        unload: function(r) {
            return e.queue.unloadResource(r);
        },
        save: function(r, t) {
            e.host.state[r.root + r.name] = 2, r.promise = void 0, n[r.url] = t;
        },
        get: function(e) {
            return n[e.url];
        },
        remove: function(r) {
            delete e.host.state[r.root + r.name], delete n[r.url];
        }
    }, e.config = new e.ResourceConfig(), e.queue = new e.ResourceLoader();
    var i = function(e) {
        function r(t, o, n) {
            var i = e.call(this) || this;
            return i.__resource_manager_error__ = !0, i.name = t.toString(), i.message = r.errorMessage[t].replace("{0}", o).replace("{1}", n), 
            i;
        }
        return o(r, e), r.errorMessage = {
            1001: "文件加载失败:{0}",
            1002: "ResourceManager 初始化失败：配置文件加载失败",
            2001: "{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2002: "Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",
            2003: "{0}解析失败,错误原因:{1}",
            2004: "无法找到文件类型:{0}",
            2005: "资源配置文件中无法找到特定的资源组:{0}",
            2006: "资源配置文件中无法找到特定的资源:{0}"
        }, r;
    }(Error);
    e.ResourceManagerError = i, t(i.prototype, "RES.ResourceManagerError");
}(i || (i = {})), window.RES = i;