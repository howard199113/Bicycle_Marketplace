webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.register = function (userObj) {
        return this._http.post('/register', userObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.login = function (loginObj) {
        return this._http.post('/login', loginObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getRandomBike = function () {
        return this._http.get('/randomBike')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentUser = function () {
        return this._http.get('/home')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.create = function (createObj) {
        return this._http.post('/home/create', createObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentListings = function () {
        return this._http.get('/home/getCurrentListings')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.deleteBike = function (bikeId) {
        return this._http.post('/home/deleteBike', { bikeId: bikeId })
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.update = function (updateObj) {
        return this._http.post('/home/update', updateObj)
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.getAllListings = function () {
        return this._http.get('/home/getAllListings')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.contact = function (uId) {
        return this._http.post('/home/contact', { uId: uId })
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    ApiService.prototype.logOut = function () {
        return this._http.get('/home/logOut')
            .map(function (Response) { return Response.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logreg_logreg_component__ = __webpack_require__("../../../../../src/app/logreg/logreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_listings_my_listings_component__ = __webpack_require__("../../../../../src/app/my-listings/my-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__logreg_logreg_component__["a" /* LogregComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: 'my-list',
                component: __WEBPACK_IMPORTED_MODULE_4__my_listings_my_listings_component__["a" /* MyListingsComponent */]
            },
            {
                path: 'browse',
                component: __WEBPACK_IMPORTED_MODULE_5__browse_browse_component__["a" /* BrowseComponent */]
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logreg_logreg_component__ = __webpack_require__("../../../../../src/app/logreg/logreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_listings_my_listings_component__ = __webpack_require__("../../../../../src/app/my-listings/my-listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__logreg_logreg_component__["a" /* LogregComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__my_listings_my_listings_component__["a" /* MyListingsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__["a" /* BrowseComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#description{\n  display: inline-block;\n}\n\n#price{\n  display: inline-block;\n}\n\n#titleDesc{\n  vertical-align: top;\n  display: inline-block;\n  width: 332px;\n  height:210px;\n}\n\n#priceLoc{\n  display: inline-block;\n  vertical-align: top;\n  width: 150px;\n}\n\nimg{\n  width:200px;\n  height:150px;\n}\n\n.contact{\n  border: 1px solid black;\n  background-color: yellow;\n  cursor: pointer;\n  font-size: 20px;\n  width: 80px;\n  height: 50px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.contact:hover {background-color: #ffff007d}\n\n.contact:active {\n  background-color: #ffff007d;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.delete{\n  border: 1px solid black;\n  background-color: red;\n  cursor: pointer;\n  font-size: 20px;\n  width: 80px;\n  height: 50px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.delete:hover {background-color: #ff0000bf}\n\n.delete:active {\n  background-color: #ff0000bf;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.box{\n  width: 740px;\n  height: 1200px;\n  border: 1px groove;\n  overflow: scroll;\n}\n\n.listing{\n  width:700px;\n  height:220px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <h3>Search: <input type=\"text\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"searchScore()\"></h3>\n  <div class=\"box\">\n    <fieldset *ngFor=\"let listing of shownListings\" class=\"listing\">\n      <img src=\"{{listing.imageURL}}\">\n      <div id=\"titleDesc\">\n        <h1>{{listing.title}}</h1>\n        <p id=\"description\">{{listing.description}}</p>\n      </div>\n      <div id=\"priceLoc\">\n        <h1 id=\"price\">${{listing.price}}</h1>\n        <h3>{{listing.location}}</h3>\n        <button *ngIf=\"listing._user != userId\" (click)=\"contact(listing._user)\" class=\"contact\">Contact</button>\n        <button *ngIf=\"listing._user == userId\" (click)=\"deleteBike(listing._id)\" class=\"delete\">Delete</button>\n      </div>\n    </fieldset>\n  </div>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.getAllListings();
        this.getCurrentUser();
    };
    BrowseComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.userId = data._id;
            console.log("this is current userId " + _this.userId);
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    BrowseComponent.prototype.getAllListings = function () {
        var _this = this;
        this._apiService.getAllListings()
            .then(function (data) {
            console.log(data);
            _this.allListings = data;
            _this.shownListings = data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    BrowseComponent.prototype.deleteBike = function (id) {
        console.log('hit deletebike');
        this._apiService.deleteBike(id)
            .then(function (data) {
            console.log(data);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    BrowseComponent.prototype.contact = function (uId) {
        console.log('hit contact');
        console.log(uId);
        this._apiService.contact(uId)
            .then(function (data) {
            console.log(data);
            alert("Name: " + data.first_name + "\nEmail: " + data.email);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    BrowseComponent.prototype.searchScore = function () {
        var _this = this;
        console.log("hit searchScore", this.searchString);
        this.shownListings = this.allListings.filter(function (listing) {
            console.log(listing.description.includes(_this.searchString));
            console.log(listing.title);
            return listing.description.toLowerCase().includes(_this.searchString) || listing.title.toLowerCase().includes(_this.searchString);
            // score.score.toString().includes(this.searchString);
        });
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BrowseComponent);

var _a, _b;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace</h1>\n<h3>Welcome, {{currentUser.first_name}}~</h3>\n<a [routerLink]=\"['browse']\">Browse</a> | <a [routerLink]=\"['my-list']\">My Listings</a> | <a href=\"\" (click)=\"logOut()\">Log Off</a>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.currentUser = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    HomeComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.logOut = function () {
        console.log('hit logOut');
        this._apiService.logOut()
            .then(function (data) {
            console.log(data.currentUserSession);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset{\n  display: inline-block;\n}\n\n.login{\n  vertical-align: top;\n}\n\n#description{\n  display: inline-block;\n}\n\n#price{\n  display: inline-block;\n}\n\n#titleDesc{\n  vertical-align: top;\n  display: inline-block;\n  width: 332px;\n  height:210px;\n}\n\n#priceLoc{\n  display: inline-block;\n  vertical-align: top;\n  width: 150px;\n}\n\nimg{\n  width:200px;\n  height:150px;\n}\n\n.listing{\n  width: 400px;\n  height: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace</h1>\n<h2>Bike of the Day!</h2>\n<fieldset *ngFor=\"let Bike of randomBike\">\n  <img src=\"{{Bike.imageURL}}\">\n  <div id=\"titleDesc\">\n    <h1>{{Bike.title}}</h1>\n    <p id=\"description\">{{Bike.description}}</p>\n  </div>\n  <div id=\"priceLoc\">\n    <h1 id=\"price\">${{Bike.price}}</h1>\n    <h3>{{Bike.location}}</h3>\n  </div>\n</fieldset>\n\n<div>\n  <fieldset class=\"login\">\n    <form (submit)=\"login()\" #logForm=\"ngForm\">\n      <h4>*Email: <input type=\"text\" name=\"email\" [(ngModel)]=\"loginInfo.email\" required></h4>\n      <h4>*Password: <input type=\"password\" name=\"password\" [(ngModel)]=\"loginInfo.password\" #logpassword=\"ngModel\" required minlength=8></h4>\n      <p *ngIf=\"logpassword.invalid && logpassword.dirty\">Password minimum of 8 characters</p>\n      <p *ngIf=\"logMessage\">{{logMessage.message}}</p>\n      <input type=\"submit\" value=\"Login\" [disabled]=\"logForm.invalid\">\n    </form>\n  </fieldset>\n\n  <fieldset>\n    <form (submit)=\"register()\" #regForm=\"ngForm\">\n      <h4>*First Name: <input type=\"text\" name=\"first_name\" [(ngModel)]=\"newUser.first_name\" required></h4>\n      <h4>*Last Name: <input type=\"text\" name=\"last_name\" [(ngModel)]=\"newUser.last_name\" required></h4>\n      <h4>*Email: <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\" required></h4>\n      <h4>*Password: <input type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\" required minlength=8></h4>\n      <p *ngIf=\"password.invalid && password.dirty\">Password minimum of 8 characters</p>\n      <h4>*Password Confirmation: <input type=\"password\" name=\"confirm_password\" [(ngModel)]=\"newUser.confirm_password\" required minlength=8></h4>\n      <input type=\"submit\" value=\"Register\" [disabled]=\"regForm.invalid\">\n      <p *ngIf=\"PassError\">{{PassError.message}}</p>\n      <p *ngIf=\"takenEmail\">{{takenEmail.message}}</p>\n    </form>\n  </fieldset>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogregComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogregComponent = (function () {
    function LogregComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.newUser = { first_name: "", last_name: "", email: "", password: "", confirm_password: "" };
        this.PassError = { message: "" };
        this.takenEmail = { message: "" };
        this.loginInfo = { email: "", password: "" };
        this.logMessage = { message: "" };
    }
    LogregComponent.prototype.ngOnInit = function () {
        this.getRandomBike();
    };
    LogregComponent.prototype.register = function () {
        var _this = this;
        if (this.newUser.password != this.newUser.confirm_password) {
            this.PassError.message = "Passwords must match!";
        }
        else {
            console.log(this.newUser);
            this._apiService.register(this.newUser)
                .then(function (data) {
                if (data == true) {
                    console.log(data);
                    _this._router.navigate(['/home']);
                }
                else {
                    console.log(data);
                    _this.takenEmail.message = data;
                }
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    LogregComponent.prototype.login = function () {
        var _this = this;
        console.log('hit login');
        this._apiService.login(this.loginInfo)
            .then(function (data) {
            if (data == true) {
                console.log(data);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(data);
                _this.logMessage.message = data;
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    LogregComponent.prototype.getRandomBike = function () {
        var _this = this;
        console.log('hit getRandomBike');
        this._apiService.getRandomBike()
            .then(function (data) {
            console.log(data);
            _this.randomBike = data;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return LogregComponent;
}());
LogregComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-logreg',
        template: __webpack_require__("../../../../../src/app/logreg/logreg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logreg/logreg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogregComponent);

var _a, _b;
//# sourceMappingURL=logreg.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-listings/my-listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgUpload{\n  display: inline-block;\n}\n.titleDesc{\n  display: inline-block;\n}\n.priceLocation{\n  vertical-align: top;\n  display: inline-block;\n  width:139px;\n}\n.location{\n  display: block;\n}\n.create{\n  border: 1px solid black;\n  background-color: green;\n  cursor: pointer;\n  font-size: 20px;\n  width: 80px;\n  height: 50px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.create:hover {background-color: #3e8e41}\n\n.create:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\np{\n  height: 5px;\n}\n\n.update{\n  display: inline-block;\n  border: 1px solid black;\n  background-color: yellow;\n  cursor: pointer;\n  font-size: 15px;\n  width: 80px;\n  height: 20px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.update:hover {background-color: #ffff004f}\n\n.update:active {\n  background-color: #ffff004f;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.delete{\n  display: inline-block;\n  border: 1px solid black;\n  background-color: red;\n  cursor: pointer;\n  font-size: 15px;\n  width: 80px;\n  height: 20px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.delete:hover {background-color: #ff0000a3}\n\n.delete:active {\n  background-color: #ff0000a3;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-listings/my-listings.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <h2>Create Listing</h2>\n  <fieldset>\n    <form (submit)=\"create()\">\n      <div class=\"imgUpload\">\n        <p>Image URL: <input type=\"text\" name=\"imageURL\" [(ngModel)]=\"createInfo.imageURL\"></p>\n        <img src=\"https://assets.academy.com/mgen/56/10505656.jpg\" width=\"180\" height=\"150\">\n      </div>\n      <div class=\"titleDesc\">\n        <p>Title:</p>\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"createInfo.title\">\n        <p>Description:</p>\n        <textarea name=\"description\" rows=\"6\" cols=\"40\" [(ngModel)]=\"createInfo.description\"></textarea>\n      </div>\n      <div class=\"priceLocation\">\n        <p>Price:</p>\n        $<input type=\"text\" name=\"price\" [(ngModel)]=\"createInfo.price\">\n        <p>Location:</p>\n        <input class=\"location\" type=\"text\" name=\"location\" [(ngModel)]=\"createInfo.location\">\n        <button type=\"submit\" class=\"create\">Create</button>\n      </div>\n    </form>\n  </fieldset>\n</fieldset>\n<fieldset>\n  <h2>Edit/Delete Listings</h2>\n  <fieldset *ngFor=\"let currentBike of currentBikes; let idx = index\">\n    <form (submit)=\"update(idx)\">\n      <div class=\"imgUpload\">\n        <p>Image URL: <input type=\"text\" value={{currentBike.imageURL}} name=\"imageURL\" [(ngModel)]=\"currentBike.imageURL\"></p>\n        <img src=\"{{currentBike.imageURL}}\" width=\"180\" height=\"150\">\n      </div>\n      <div class=\"titleDesc\">\n        <p>Title:</p>\n        <input type=\"text\" value={{currentBike.title}} name=\"title\" [(ngModel)]=\"currentBike.title\">\n        <p>Description:</p>\n        <textarea name=\"description\" value={{currentBike.description}} rows=\"6\" cols=\"40\" [(ngModel)]=\"currentBike.description\"></textarea>\n      </div>\n      <div class=\"priceLocation\">\n        <p>Price:</p>\n        $<input type=\"text\" value={{currentBike.price}} name=\"price\" [(ngModel)]=\"currentBike.price\">\n        <p>Location:</p>\n        <input class=\"location\" value={{currentBike.location}} type=\"text\" name=\"location\" [(ngModel)]=\"currentBike.location\">\n        <!-- <button type=\"submit\" class=\"update\">Update</button> -->\n        <input type=\"submit\" class=\"update\" value=\"Update\">\n        <button class=\"delete\" type=\"button\" (click)=\"deleteBike(currentBike._id)\">Delete</button>\n      </div>\n    </form>\n  </fieldset>\n</fieldset>\n"

/***/ }),

/***/ "../../../../../src/app/my-listings/my-listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyListingsComponent = (function () {
    function MyListingsComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.createInfo = { imageURL: "", title: "", description: "", price: "", location: "" };
    }
    MyListingsComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getCurrentListings();
    };
    MyListingsComponent.prototype.create = function () {
        console.log('hit create');
        this._apiService.create(this.createInfo)
            .then(function (data) {
            console.log(data);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MyListingsComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._apiService.getCurrentUser()
            .then(function (data) {
            _this.userId = data._id;
            console.log("this is current userId " + _this.userId);
        })
            .catch(function (error) {
            console.log(error);
            _this._router.navigate(['']);
        });
    };
    MyListingsComponent.prototype.getCurrentListings = function () {
        var _this = this;
        console.log('hit getCurrentListings');
        this._apiService.getCurrentListings()
            .then(function (data) {
            _this.currentBikes = data;
            console.log(_this.currentBikes);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MyListingsComponent.prototype.deleteBike = function (id) {
        console.log('hit deletebike');
        this._apiService.deleteBike(id)
            .then(function (data) {
            console.log(data);
            location.reload();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MyListingsComponent.prototype.update = function (idx) {
        var _this = this;
        console.log('update this bike index:', idx);
        console.log(this.currentBikes[idx]);
        this._apiService.update(this.currentBikes[idx])
            .then(function (data) {
            console.log(data);
            _this._router.navigate(['/home']);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return MyListingsComponent;
}());
MyListingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-listings',
        template: __webpack_require__("../../../../../src/app/my-listings/my-listings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/my-listings/my-listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MyListingsComponent);

var _a, _b;
//# sourceMappingURL=my-listings.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map