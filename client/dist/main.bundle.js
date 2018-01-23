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
exports.push([module.i, "#description{\n  display: inline-block;\n}\n\n#price{\n  display: inline-block;\n}\n\n#titleDesc{\n  vertical-align: top;\n  display: inline-block;\n  width: 332px;\n  height:210px;\n}\n\n#priceLoc{\n  display: inline-block;\n  vertical-align: top;\n  width: 150px;\n}\n\nimg{\n  width:200px;\n  height:150px;\n}\n\n.contact{\n  border: 1px solid black;\n  background-color: yellow;\n  cursor: pointer;\n  font-size: 20px;\n  width: 80px;\n  height: 50px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.contact:hover {background-color: #ffff007d}\n\n.contact:active {\n  background-color: #ffff007d;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.delete{\n  border: 1px solid black;\n  background-color: red;\n  cursor: pointer;\n  font-size: 20px;\n  width: 80px;\n  height: 50px;\n  margin-top: 10px;\n  margin-left: 20px;\n}\n\n.delete:hover {background-color: #ff0000bf}\n\n.delete:active {\n  background-color: #ff0000bf;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.box{\n  width: 740px;\n  height: 1200px;\n  border: 1px groove;\n  overflow: scroll;\n}\n\n.listing{\n  width:700px;\n  height:220px;\n}\n\nfieldset{\n  border-bottom: 1px groove;\n}\n#browse{\n  display: inline-block;\n}\nbody{\n  text-align: center;\n}\nh3{\n  align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"browse\">\n    <h3 align=\"left\">Search: <input type=\"text\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"searchScore()\"></h3>\n    <div class=\"box\">\n      <fieldset *ngFor=\"let listing of shownListings\" class=\"listing\">\n        <img src=\"{{listing.imageURL}}\">\n        <div id=\"titleDesc\">\n          <h1>{{listing.title}}</h1>\n          <p id=\"description\">{{listing.description}}</p>\n        </div>\n        <div id=\"priceLoc\">\n          <h1 id=\"price\">${{listing.price}}</h1>\n          <h3>{{listing.location}}</h3>\n          <button *ngIf=\"listing._user != userId\" (click)=\"contact(listing._user)\" class=\"btn btn-success\">Contact</button>\n          <button *ngIf=\"listing._user == userId\" (click)=\"deleteBike(listing._id)\" class=\"btn btn-danger\">Delete</button>\n        </div>\n      </fieldset>\n    </div>\n  </div>\n</body>\n"

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
exports.push([module.i, ".container-fluid{\n  background-color: lightblue;\n}\nh1{\n  text-align: center;\n}\na{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Bicycle Marketplace</h1>\n  <h3>Welcome, {{currentUser.first_name}}~</h3>\n  <div class=\"row\">\n    <a [routerLink]=\"['browse']\" class=\"col-sm-4\">Browse</a>\n    <a [routerLink]=\"['my-list']\" class=\"col-sm-4\">My Listings</a>\n    <a href=\"\" (click)=\"logOut()\" class=\"col-sm-4\">Log Off</a>\n  </div>\n\n</div>\n<router-outlet></router-outlet>\n"

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
exports.push([module.i, "#description{\n  display: inline-block;\n}\n\n#price{\n  display: inline-block;\n}\n\n#titleDesc{\n  vertical-align: top;\n  display: inline-block;\n  width: 332px;\n  height:210px;\n}\n\n#priceLoc{\n  display: inline-block;\n  vertical-align: top;\n  width: 150px;\n}\n\nimg{\n  width:200px;\n  height:150px;\n}\n\n.registration{\n  display: inline-block;\n  width: 400px;\n  height: 400px;\n  background-color: #f4f4f4;\n}\n.login{\n  display: inline-block;\n  vertical-align: top;\n  width: 400px;\n  height: 200px;\n  background-color: #f4f4f4;\n}\nbody{\n  text-align: center;\n}\n.container{\n  border-bottom: 1px solid black;\n}\n.form{\n  display: inline-block;\n  margin-top: 10px;\n}\nform{\n  margin: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logreg/logreg.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div *ngFor=\"let Bike of randomBike\" class=\"container\">\n    <img src=\"{{Bike.imageURL}}\">\n    <div id=\"titleDesc\">\n      <h1>{{Bike.title}}</h1>\n      <p id=\"description\">{{Bike.description}}</p>\n    </div>\n    <div id=\"priceLoc\">\n      <h1 id=\"price\">${{Bike.price}}</h1>\n      <h3>{{Bike.location}}</h3>\n    </div>\n  </div>\n\n  <div class=\"form\">\n    <div class=\"login\">\n      <form (submit)=\"login()\" #logForm=\"ngForm\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"email\">*Email:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"loginInfo.email\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"password\">*Password:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginInfo.password\" #logpassword=\"ngModel\" required minlength=8>\n          </div>\n          <p *ngIf=\"logpassword.invalid && logpassword.dirty\">Password minimum of 8 characters</p>\n          <p *ngIf=\"logMessage\">{{logMessage.message}}</p>\n        </div>\n        <input type=\"submit\" value=\"Login\" [disabled]=\"logForm.invalid\">\n      </form>\n    </div>\n\n    <div class=\"registration\">\n      <form (submit)=\"register()\" #regForm=\"ngForm\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"first_name\">*First Name:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"first_name\" [(ngModel)]=\"newUser.first_name\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"last_name\">*Last Name:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"last_name\" [(ngModel)]=\"newUser.last_name\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"email\">*Email:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"newUser.email\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"password\">*Password:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\" required minlength=8>\n          </div>\n        </div>\n        <p *ngIf=\"password.invalid && password.dirty\">Password minimum of 8 characters</p>\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-4\" for=\"confirm_password\">*Password Confirmation:</label>\n          <div class=\"col-sm-8\">\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" [(ngModel)]=\"newUser.confirm_password\" required minlength=8>\n          </div>\n        </div>\n        <input type=\"submit\" value=\"Register\" [disabled]=\"regForm.invalid\">\n        <p *ngIf=\"PassError\">{{PassError.message}}</p>\n        <p *ngIf=\"takenEmail\">{{takenEmail.message}}</p>\n      </form>\n    </div>\n  </div>\n\n</body>\n"

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
                    _this._router.navigate(['/home/browse']);
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
                _this._router.navigate(['/home/browse']);
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
exports.push([module.i, ".imgUpload{\n  display: inline-block;\n  vertical-align: top;\n  width: 170px;\n  text-align: left;\n}\n.titleDesc{\n  display: inline-block;\n  text-align: left;\n}\n.priceLocation{\n  vertical-align: top;\n  display: inline-block;\n  width:183px;\n  text-align: left;\n}\n\n.create{\n  border: 1px solid black;\n  background-color: green;\n  cursor: pointer;\n  font-size: 15px;\n  width: 80px;\n  height:25px;\n  margin-top: 25px;\n  margin-left: 8px;\n}\n\n.create:hover {background-color: #3e8e41}\n\n.create:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.update{\n  display: inline-block;\n  border: 1px solid black;\n  background-color: yellow;\n  cursor: pointer;\n  font-size: 15px;\n  width: 80px;\n  height: 25px;\n  margin-top: 10px;\n  margin-left: 13px;\n}\n\n.update:hover {background-color: #ffff004f}\n\n.update:active {\n  background-color: #ffff004f;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n.delete{\n  display: inline-block;\n  border: 1px solid black;\n  background-color: red;\n  cursor: pointer;\n  font-size: 15px;\n  width: 80px;\n  height: 25px;\n  margin-top: 10px;\n  margin-left: 13px;\n}\n\n.delete:hover {background-color: #ff0000a3}\n\n.delete:active {\n  background-color: #ff0000a3;\n  box-shadow: 0 5px #666;\n  -webkit-transform: translateY(4px);\n          transform: translateY(4px);\n}\n\n#imageURL{\n  border: 1px solid black;\n  width:150px;\n  height: 126px;\n  display: inline-block;\n  margin-top: 23px;\n}\np{\n  height: 13px;\n}\n\n#createListing{\n  text-align: center;\n}\n\n.titleDescInput{\n  margin-top:  ;\n}\n\n.priceLocationInput{\n  margin-top: ;\n}\n#price{\n  margin-top: ;\n}\n#location{\n  margin-top: 16px;\n}\n#locationInput{\n  margin-left: 7px;\n}\n#warning{\n  font-size: 11px;\n  color: red;\n  margin-top: 32px;\n  margin-left: 10px;\n}\n\n.url{\n  margin-bottom: 36px;\n  margin-right: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-listings/my-listings.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"createListing\">\n    <h2>Create Listing</h2>\n    <div>\n      <form (submit)=\"create()\" #createForm=\"ngForm\">\n        <div class=\"imgUpload\">\n          <p>*Image URL:</p>\n          <input type=\"text\" name=\"imageURL\" [(ngModel)]=\"createInfo.imageURL\" #imageURL=\"ngModel\" (keyup)=\"loadImage()\">\n          <img *ngIf=\"imageURL.dirty\" src=\"{{createInfo.imageURL}}\" required id=\"imageURL\">\n        </div>\n        <div class=\"titleDesc\">\n          <p>*Title:</p>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"createInfo.title\" required class=\"titleDescInput\">\n          <p>*Description:</p>\n          <textarea name=\"description\" rows=\"6\" cols=\"40\" [(ngModel)]=\"createInfo.description\" required class=\"titleDescInput\"></textarea>\n        </div>\n        <div class=\"priceLocation\">\n          <p>*Price:</p>\n          <p>$<input type=\"text\" name=\"price\" [(ngModel)]=\"createInfo.price\" required id=\"price\"></p>\n          <p id=\"location\">*Location:</p>\n          <p><input type=\"text\" name=\"location\" [(ngModel)]=\"createInfo.location\" required id=\"locationInput\"></p>\n          <button type=\"submit\" class=\"create\" [disabled]=\"createForm.invalid\">Create</button>\n          <p id=\"warning\">All *fields must be filled out</p>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div id=\"createListing\">\n    <h2>Edit/Delete Listings</h2>\n    <div *ngFor=\"let currentBike of currentBikes; let idx = index\">\n      <form (submit)=\"update(idx)\">\n        <div class=\"imgUpload\">\n          <p>Image URL:</p>\n          <input type=\"text\" value={{currentBike.imageURL}} name=\"imageURL\" [(ngModel)]=\"currentBike.imageURL\">\n          <img src=\"{{currentBike.imageURL}}\" id=\"imageURL\">\n        </div>\n        <div class=\"titleDesc\">\n          <p>Title:</p>\n          <input type=\"text\" value={{currentBike.title}} name=\"title\" [(ngModel)]=\"currentBike.title\">\n          <p>Description:</p>\n          <textarea name=\"description\" value={{currentBike.description}} rows=\"6\" cols=\"40\" [(ngModel)]=\"currentBike.description\"></textarea>\n        </div>\n        <div class=\"priceLocation\">\n          <p>Price:</p>\n          $<input type=\"text\" value={{currentBike.price}} name=\"price\" [(ngModel)]=\"currentBike.price\">\n          <p id=\"location\">Location:</p>\n          <input id=\"locationInput\" value={{currentBike.location}} type=\"text\" name=\"location\" [(ngModel)]=\"currentBike.location\">\n          <input type=\"submit\" class=\"update\" value=\"Update\">\n          <button class=\"delete\" type=\"button\" (click)=\"deleteBike(currentBike._id)\">Delete</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</body>\n"

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
    MyListingsComponent.prototype.loadImage = function () {
        console.log('hit loadImage', this.createInfo.imageURL);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map