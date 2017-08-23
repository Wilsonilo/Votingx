webpackJsonp([1,4],{

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 207;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(219);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.isLogged = false;
        // Subscribe to change on User
        this.subscription = this.dataService.userState.subscribe(function (user) {
            // Set
            if (user !== undefined) {
                _this.isLogged = true;
                _this.User = {
                    id: user.id,
                    username: user.username
                };
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(327),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__poll_poll_component__ = __webpack_require__(218);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Imports

//Components




//Services


// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: 'polls/:iduser/:idpoll',
        component: __WEBPACK_IMPORTED_MODULE_11__poll_poll_component__["a" /* PollComponent */],
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__poll_poll_component__["a" /* PollComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    /// Constructor
    function DashboardComponent(dataService, router, http, formBuilder) {
        this.dataService = dataService;
        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.emptypolls = true;
        this.newPoll = false;
        this.errorUp = false;
        this.errorMsg = '';
    }
    /// NG init
    DashboardComponent.prototype.ngOnInit = function () {
        //First check for a callback from twitter.
        this.checkForCallback();
        //Prepare Form group
        //https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
        //https://stackoverflow.com/questions/41256852/how-to-add-more-input-fields-using-a-button-angular-2-dynamic-forms
        this.formNewPoll = this.formBuilder.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            answers: this.formBuilder.array([
                this.initLink(),
            ])
        });
    };
    /// Helpers
    /// Helps to check if user is loged in from a callback(Twitter) 
    /// or username/password
    DashboardComponent.prototype.checkForCallback = function () {
        var _this = this;
        console.log("calling check for callback");
        this.http.get('api/users/session').map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res !== undefined) {
                if (res._id !== undefined && res.username !== undefined) {
                    //User is up, set if is not set yet.
                    var currentUser = _this.dataService.getUser();
                    if (currentUser === undefined) {
                        _this.dataService.setUser(res._id, res.username);
                    }
                }
            }
            //Get user if is holded on the singleton
            // this.User = this.dataService.getUser();
            //Check if is logged
            if (_this.User === undefined) {
                _this.router.navigateByUrl('login');
            }
            // Get polls from this user
            //Development
            // this.User = {
            //   id : '',
            //   username: 'TEMP',
            // }
            // this.dataService.setUser('', 'TempUser')
            if (_this.User !== undefined) {
                //Set binding for new polls
                _this.FormPoll = {
                    question: '',
                    answers: []
                };
                _this.refreshUserPolls();
            }
        });
    };
    //Helpers for add answers
    DashboardComponent.prototype.initLink = function () {
        return this.formBuilder.group({
            answer: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        });
    };
    DashboardComponent.prototype.addAnswer = function () {
        var control = this.formNewPoll.controls['answers'];
        control.push(this.initLink());
    };
    DashboardComponent.prototype.removeAnswer = function (i) {
        if (i !== 0) {
            var control = this.formNewPoll.controls['answers'];
            control.removeAt(i);
        }
    };
    //create poll handler
    DashboardComponent.prototype.createPoll = function (_a) {
        var _this = this;
        var valid = _a.valid, value = _a.value;
        //Post if valid
        if (valid) {
            //Prepare Headers
            var headersPoll = new Headers();
            headersPoll.append('Content-Type', 'application/json');
            var pollCreation = {
                'userid': this.User.id,
                'poll': {
                    'id': this.guid(),
                    'content': value
                }
            };
            //Send and get response
            this.http.post('api/polls/new', pollCreation, headersPoll)
                .map(function (res) { return res.json(); }).subscribe(function (res) {
                if (res.status === 'success') {
                    //Reset
                    _this.newPoll = false;
                    _this.formNewPoll = _this.formBuilder.group({
                        question: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
                        answers: _this.formBuilder.array([
                            _this.initLink(),
                        ])
                    });
                    //Refresh
                    _this.refreshUserPolls();
                }
                else {
                    _this.errorUp = true;
                    _this.errorMsg = res.msg;
                }
            });
        }
    };
    //Delete Poll
    DashboardComponent.prototype.deletePoll = function (pollId) {
        var _this = this;
        //Prepare Headers
        var headersPoll = new Headers();
        headersPoll.append('Content-Type', 'application/json');
        //Send and get response
        this.http.delete('api/polls/delete/' + this.User.id + '/' + pollId)
            .map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.status === 'success') {
                //Refresh
                _this.refreshUserPolls();
            }
        });
    };
    //Refresh user Polls
    DashboardComponent.prototype.refreshUserPolls = function () {
        var _this = this;
        //Ask Api for polls of user
        this.http.get('api/polls/' + this.User.id).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.polls !== undefined) {
                _this.Polls = res.polls;
                if (_this.Polls.length > 0) {
                    _this.emptypolls = false;
                    //console.log(this.Polls);
                }
                else {
                    _this.emptypolls = true;
                }
            }
        });
    };
    //Returns username or null
    DashboardComponent.prototype.getUserName = function () {
        if (this.User !== undefined) {
            return this.User.username;
        }
        else {
            return '';
        }
    };
    //Handles creating of new Poll
    DashboardComponent.prototype.showFormForNewPoll = function () {
        this.newPoll = !this.newPoll;
    };
    //Generates guiid
    //https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    DashboardComponent.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(328),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
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
    function HomeComponent() {
        // http.get('https://jsonplaceholder.typicode.com/users') 
        //   .map(res => res.json())
        //   .subscribe(people => {
        //   	this.people = people;
        //   	console.log(this.people);
        //   });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(329),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    //Constructor
    function LoginComponent(http, router, dataService) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        //Objects for Login and Register Users
        this.userLogin = {
            'username': '',
            'password': ''
        };
        this.userRegister = {
            'username': '',
            'password': '',
            'passwordRepeat': ''
        };
        //Other Holders for errors and stuff
        this.upError = false;
        this.upSuccess = false;
        this.msgError = '';
        this.msgSuccess = '';
    }
    //Ng Init
    LoginComponent.prototype.ngOnInit = function () { };
    //MARK: - Handlers
    //Login
    LoginComponent.prototype.onSubmitLogin = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //Prepare Headers
            var headerslogin = new Headers();
            headerslogin.append('Content-Type', 'application/json');
            //Set information:
            var username = this.userLogin['username'];
            var password = this.userLogin['password'];
            //Last check for empty
            if (username !== undefined && password !== undefined) {
                //Send and get response
                this.http.post('api/users/login', this.userLogin, headerslogin)
                    .map(function (res) { return res.json(); }).subscribe(function (res) {
                    console.log(res);
                    //Set User
                    _this.dataService.setUser(res.user_id, res.username);
                    //Success
                    _this.upSuccess = true;
                    _this.msgSuccess = 'User loged in redirecting to Dashboard...';
                    //Redirect with timeout to dashboard
                    setTimeout(function () {
                        _this.router.navigateByUrl('dashboard');
                    }, 2000);
                }, function (err) {
                    //User or Password incorrect
                    _this.upError = true;
                    _this.msgError = 'Username or Password incorrect.';
                    console.log("Username or Password incorrect.");
                    return;
                });
            }
            else {
                this.upError = true;
                this.msgError = 'Username or Password empty.';
                console.log("Username or Password not defined");
                return;
            }
        }
        else {
            this.upError = true;
            this.msgError = 'Username or Password not set.';
            console.log("Username or Password not defined");
            return;
        }
    }; //Ends onSubmitLogin
    //Register
    LoginComponent.prototype.onSubmitRegister = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            //Prepare Headers
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            //Set information:
            var username = this.userRegister['username'];
            var password = this.userRegister['password'];
            var passwordRepeat = this.userRegister['passwordRepeat'];
            //Check Password
            if (password !== passwordRepeat) {
                console.log("Password are not the same");
                this.upError = true;
                this.msgError = 'Password on registration form are not the same.';
                return;
            }
            //Last check for empty
            if (username !== undefined && password !== undefined && passwordRepeat !== undefined) {
                //Send and get response
                this.http.post('api/users/register', this.userRegister, headers)
                    .map(function (res) { return res.json(); }).subscribe(function (res) {
                    console.log(res);
                    if (res.status === "error") {
                        _this.upError = true;
                        _this.msgError = res.msg;
                    }
                    else {
                        //Success
                        _this.upSuccess = true;
                        _this.msgSuccess = res.msg + ' Redirecting to Dashboard...';
                        //Redirect with timeout to dashboard
                        setTimeout(function () {
                            _this.router.navigateByUrl('dashboard');
                        }, 2000);
                    }
                });
            }
            else {
                console.log("Username and Password not defined");
                this.upError = true;
                this.msgError = 'Empty fields or passwords are not the same.';
                return;
            }
        }
        else {
            console.log("Form not valid.");
            this.upError = true;
            this.msgError = 'Empty fields or passwords are not the same.';
            return;
        }
    }; //Ends onRegister()
    return LoginComponent;
}()); //Ends Class
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(330),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PollComponent = (function () {
    function PollComponent(activatedRoute, http) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        //Properties
        this.question = '';
        this.novotes = true;
        this.loadtxt = 'Loading...';
        this.uservoted = false; //Later gonna work IP check.
        // Doughnut
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
    }
    PollComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['iduser'];
            _this.pollId = params['idpoll'];
            if (_this.userId !== undefined && _this.pollId !== undefined) {
                _this.getValuesFromPoll(_this.userId, _this.pollId);
            }
        });
    };
    //Helpers
    PollComponent.prototype.getValuesFromPoll = function (userId, pollId) {
        var _this = this;
        //Reset
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.novotes = true;
        this.loadtxt = 'Loading...';
        this.http.get('api/polls/info/' + userId + '/' + pollId).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.poll !== undefined) {
                //Set Question
                _this.question = res.poll.content.question;
                //Set Labels
                var data = [];
                for (var i = 0; i < res.poll.content.answers.length; i++) {
                    console.log(res.poll.content.answers[i].answer);
                    _this.doughnutChartLabels.push(res.poll.content.answers[i].answer);
                    //Get votes from this label
                    var votes = res.poll.content.answers[i].votes;
                    if (votes !== undefined) {
                        data.push(parseInt(votes));
                    }
                    else {
                        if (data.length > 0) {
                            data.push(0);
                        }
                    }
                    //Check if we are done
                    if (i === res.poll.content.answers.length - 1) {
                        //If we have votes.
                        if (data.length > 0) {
                            _this.doughnutChartData = data;
                            _this.novotes = false;
                        }
                        else {
                            _this.loadtxt = 'No votes yet.';
                        }
                        //console.log(this.doughnutChartLabels, this.doughnutChartData);
                    }
                }
            }
        });
    };
    PollComponent.prototype.selected = function (valueselected) {
        this.valselect = valueselected;
    };
    PollComponent.prototype.Vote = function () {
        var _this = this;
        if (this.valselect !== undefined) {
            //Prepare Headers
            var headerslogin = new Headers();
            headerslogin.append('Content-Type', 'application/json');
            //Prepare params
            var voteRequest = {
                userid: this.userId,
                pollid: this.pollId,
                vote: this.valselect
            };
            //Send post request
            this.http.post('api/polls/vote', voteRequest, headerslogin)
                .map(function (res) { return res.json(); }).subscribe(function (res) {
                if (res.status === 'success') {
                    _this.uservoted = true;
                    _this.getValuesFromPoll(_this.userId, _this.pollId);
                }
            }, function (err) {
                //User or Password incorrect
                console.log(err);
                return;
            });
        }
        else {
            console.log("No vote selected yet");
        }
    };
    return PollComponent;
}());
PollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-poll',
        template: __webpack_require__(331),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], PollComponent);

var _a, _b;
//# sourceMappingURL=poll.component.js.map

/***/ }),

/***/ 219:
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](undefined);
        this.userState = this._user.asObservable();
    }
    // GETTERS
    //Get user
    DataService.prototype.getUser = function () {
        return this.User;
    };
    // SETTERS
    //Set Username for DataService
    DataService.prototype.setUser = function (id, username) {
        this.User = {
            id: id,
            username: username
        };
        this._user.next(this.User);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "#newPollFormDiv{\n\tbackground:#354E64;\n\tpadding: 10px;\n\tcolor:white;\n\tborder-radius: 10px;\n}\n#newPollFormDiv hr{\n\tdisplay: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid white;\n    margin: 1em 0;\n    padding: 0; \n}\n#existingPolls hr{\n\tdisplay: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #354E64;\n    margin: 1em 0;\n    padding: 0; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "#loginregistersection{\n\tmargin: 20px 0;\n\tbackground: #F0F0F0;\n\tborder-radius: 10px;\n\tpadding: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 79,
	"./af.js": 79,
	"./ar": 86,
	"./ar-dz": 80,
	"./ar-dz.js": 80,
	"./ar-kw": 81,
	"./ar-kw.js": 81,
	"./ar-ly": 82,
	"./ar-ly.js": 82,
	"./ar-ma": 83,
	"./ar-ma.js": 83,
	"./ar-sa": 84,
	"./ar-sa.js": 84,
	"./ar-tn": 85,
	"./ar-tn.js": 85,
	"./ar.js": 86,
	"./az": 87,
	"./az.js": 87,
	"./be": 88,
	"./be.js": 88,
	"./bg": 89,
	"./bg.js": 89,
	"./bn": 90,
	"./bn.js": 90,
	"./bo": 91,
	"./bo.js": 91,
	"./br": 92,
	"./br.js": 92,
	"./bs": 93,
	"./bs.js": 93,
	"./ca": 94,
	"./ca.js": 94,
	"./cs": 95,
	"./cs.js": 95,
	"./cv": 96,
	"./cv.js": 96,
	"./cy": 97,
	"./cy.js": 97,
	"./da": 98,
	"./da.js": 98,
	"./de": 101,
	"./de-at": 99,
	"./de-at.js": 99,
	"./de-ch": 100,
	"./de-ch.js": 100,
	"./de.js": 101,
	"./dv": 102,
	"./dv.js": 102,
	"./el": 103,
	"./el.js": 103,
	"./en-au": 104,
	"./en-au.js": 104,
	"./en-ca": 105,
	"./en-ca.js": 105,
	"./en-gb": 106,
	"./en-gb.js": 106,
	"./en-ie": 107,
	"./en-ie.js": 107,
	"./en-nz": 108,
	"./en-nz.js": 108,
	"./eo": 109,
	"./eo.js": 109,
	"./es": 111,
	"./es-do": 110,
	"./es-do.js": 110,
	"./es.js": 111,
	"./et": 112,
	"./et.js": 112,
	"./eu": 113,
	"./eu.js": 113,
	"./fa": 114,
	"./fa.js": 114,
	"./fi": 115,
	"./fi.js": 115,
	"./fo": 116,
	"./fo.js": 116,
	"./fr": 119,
	"./fr-ca": 117,
	"./fr-ca.js": 117,
	"./fr-ch": 118,
	"./fr-ch.js": 118,
	"./fr.js": 119,
	"./fy": 120,
	"./fy.js": 120,
	"./gd": 121,
	"./gd.js": 121,
	"./gl": 122,
	"./gl.js": 122,
	"./gom-latn": 123,
	"./gom-latn.js": 123,
	"./he": 124,
	"./he.js": 124,
	"./hi": 125,
	"./hi.js": 125,
	"./hr": 126,
	"./hr.js": 126,
	"./hu": 127,
	"./hu.js": 127,
	"./hy-am": 128,
	"./hy-am.js": 128,
	"./id": 129,
	"./id.js": 129,
	"./is": 130,
	"./is.js": 130,
	"./it": 131,
	"./it.js": 131,
	"./ja": 132,
	"./ja.js": 132,
	"./jv": 133,
	"./jv.js": 133,
	"./ka": 134,
	"./ka.js": 134,
	"./kk": 135,
	"./kk.js": 135,
	"./km": 136,
	"./km.js": 136,
	"./kn": 137,
	"./kn.js": 137,
	"./ko": 138,
	"./ko.js": 138,
	"./ky": 139,
	"./ky.js": 139,
	"./lb": 140,
	"./lb.js": 140,
	"./lo": 141,
	"./lo.js": 141,
	"./lt": 142,
	"./lt.js": 142,
	"./lv": 143,
	"./lv.js": 143,
	"./me": 144,
	"./me.js": 144,
	"./mi": 145,
	"./mi.js": 145,
	"./mk": 146,
	"./mk.js": 146,
	"./ml": 147,
	"./ml.js": 147,
	"./mr": 148,
	"./mr.js": 148,
	"./ms": 150,
	"./ms-my": 149,
	"./ms-my.js": 149,
	"./ms.js": 150,
	"./my": 151,
	"./my.js": 151,
	"./nb": 152,
	"./nb.js": 152,
	"./ne": 153,
	"./ne.js": 153,
	"./nl": 155,
	"./nl-be": 154,
	"./nl-be.js": 154,
	"./nl.js": 155,
	"./nn": 156,
	"./nn.js": 156,
	"./pa-in": 157,
	"./pa-in.js": 157,
	"./pl": 158,
	"./pl.js": 158,
	"./pt": 160,
	"./pt-br": 159,
	"./pt-br.js": 159,
	"./pt.js": 160,
	"./ro": 161,
	"./ro.js": 161,
	"./ru": 162,
	"./ru.js": 162,
	"./sd": 163,
	"./sd.js": 163,
	"./se": 164,
	"./se.js": 164,
	"./si": 165,
	"./si.js": 165,
	"./sk": 166,
	"./sk.js": 166,
	"./sl": 167,
	"./sl.js": 167,
	"./sq": 168,
	"./sq.js": 168,
	"./sr": 170,
	"./sr-cyrl": 169,
	"./sr-cyrl.js": 169,
	"./sr.js": 170,
	"./ss": 171,
	"./ss.js": 171,
	"./sv": 172,
	"./sv.js": 172,
	"./sw": 173,
	"./sw.js": 173,
	"./ta": 174,
	"./ta.js": 174,
	"./te": 175,
	"./te.js": 175,
	"./tet": 176,
	"./tet.js": 176,
	"./th": 177,
	"./th.js": 177,
	"./tl-ph": 178,
	"./tl-ph.js": 178,
	"./tlh": 179,
	"./tlh.js": 179,
	"./tr": 180,
	"./tr.js": 180,
	"./tzl": 181,
	"./tzl.js": 181,
	"./tzm": 183,
	"./tzm-latn": 182,
	"./tzm-latn.js": 182,
	"./tzm.js": 183,
	"./uk": 184,
	"./uk.js": 184,
	"./ur": 185,
	"./ur.js": 185,
	"./uz": 187,
	"./uz-latn": 186,
	"./uz-latn.js": 186,
	"./uz.js": 187,
	"./vi": 188,
	"./vi.js": 188,
	"./x-pseudo": 189,
	"./x-pseudo.js": 189,
	"./yo": 190,
	"./yo.js": 190,
	"./zh-cn": 191,
	"./zh-cn.js": 191,
	"./zh-hk": 192,
	"./zh-hk.js": 192,
	"./zh-tw": 193,
	"./zh-tw.js": 193
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 324;


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t\t\t  <a class=\"navbar-brand\" href=\"#\">VotingX</a>\n\t\t\t  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t    <span class=\"navbar-toggler-icon\"></span>\n\t\t\t  </button>\n\t\t\t  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n\t\t\t    <div class=\"navbar-nav\">\n\t\t\t      <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t\t      <a class=\"nav-item nav-link\" href=\"/login\" *ngIf=\"!isLogged\">Login / Register</a>\n\t\t\t      <a class=\"nav-item nav-link\" href=\"/dashboard\" *ngIf=\"isLogged\">Dashboard</a>\n\t\t\t      <a class=\"nav-item nav-link\" href=\"/api/users/logout\" *ngIf=\"isLogged\">Logout</a>\n\t\t\t      \n\t\t\t      <!--<a class=\"nav-item nav-link\" href=\"/about\">About</a>\n\t\t\t      <a class=\"nav-item nav-link disabled\" href=\"#\">iOS App</a>-->\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<hr>\n\t\t\t<footer class=\"text-center\">\n\t\t\t\t<small><a href=\"https://opensource.org/licenses/MIT\" target=\"_blank\">MIT</a> - Coded with <i class=\"material-icons\">favorite</i> for <a href=\"http://freecodecamp.org\" target=\"_blank\">Freecodecamp</a> by <a href=\"https://www.twitter.com/yosoywil\" target=\"_blank\">@yosoywil</a></small>\n\t\t\t</footer>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:20px\">\n\t<div class=\"col\">\n\t\t<p class=\"align-middle\">Welcome back {{ getUserName() }}</p>\n\t</div>\n\t<div class=\"col\" align=\"right\">\n\t\t<button (click)=\"showFormForNewPoll()\"  class=\"btn btn-outline-primary\"> New Poll </button>\n\t</div>\n\t<hr>\n</div>\n<div class=\"row animated pulse\" style=\"margin-top:20px\" id=\"newPollFormDiv\" *ngIf=\"newPoll\">\n\t<div class=\"col\">\n\t\t<hr>\n\t\t<div class=\"alert alert-warning\" *ngIf='errorUp'>{{ errorMsg }}</div>\n\t\t<h3>Create new Poll:</h3>\n\t\t<form [formGroup]=\"formNewPoll\">\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"question\">Question</label>\n\t\t    <input type=\"text\" class=\"form-control\" formControlName=\"question\">\n\t\t  </div>\n\t\t  <div formArrayName=\"answers\">\n\t\t\t  <div *ngFor=\"let answer of formNewPoll.controls.answers.controls; let i=index\" class=\"form-group\">\n\t\t\t  \t<label for=\"answer{{i + 1}}\">Answer {{i + 1}}</label>\n\t            <span *ngIf=\"formNewPoll.controls.answers.controls.length > 1\" (click)=\"removeAddress(i)\">\n\t            </span>\n\t            <div [formGroupName]=\"i\">\n\t            \t<input type=\"text\" formControlName=\"answer\" class=\"form-control\">\n\t                <!--display error message if street is not valid-->\n\t                <small [hidden]=\"formNewPoll.controls.answers.controls[i].controls.answer.valid\">\n\t                    Answer is required.\n\t                </small><br>\n\t                <button (click)=\"removeAnswer(i)\" class=\"btn btn-outline-danger btn-sm\">remove</button>\n\t                <hr>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t  </div>\n\t\t  <button (click)=\"createPoll(formNewPoll)\" class=\"btn btn-primary\" [disabled]=\"!formNewPoll.valid\">Create</button>\n\t\t  <button (click)=\"addAnswer()\" class=\"btn btn-info\">Add Answer</button>\n\t\t</form>\n\t</div>\n</div>\n<hr>\n<div class=\"row\" style=\"margin-top:20px\">\n\t<div class=\"col animated fadeIn\" *ngIf=\"emptypolls\">\n\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t  <h4 class=\"card-header\">No polls yet :(</h4>\n\t\t  <div class=\"card-body\">\n\t\t    <p class=\"card-text\">Create your first poll and start sharing with your friends.</p>\n\t\t    <button (click)=\"showFormForNewPoll()\" class=\"btn btn-primary\">Create my first poll</button>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"!emptypolls\" class=\"row justify-content-center\">\n\t<div class=\"col-lg-4 col-md-6 animated flip\" *ngFor=\"let poll of Polls\" style=\"margin-top: 20px;\">\n\t\t<div class=\"card\" style=\"width: 20rem;\">\n\t\t\t<h4 class=\"card-header\">{{ poll.content.question }}</h4>\n\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let i of poll.content.answers\"> {{ i.answer }}</li>\n\t\t\t</ul>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<a class=\"btn btn-success\" href=\"polls/{{ User.id }}/{{ poll.id }}\" target=\"_blank\">Share</a>\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"deletePoll(poll.id)\">Delete</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 20px;\">\n  <h1 class=\"display-3\">VotingX</h1>\n  <p class=\"lead\">Create simple Polls for your friends and share it!</p>\n  <hr class=\"my-4\">\n  <p>Completely free and easy to use.\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/login\" role=\"button\">Start</a>\n  </p>\n</div>"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated pulse\">\n\t<div class=\"col\">\n\n\t\t<div id=\"loginregistersection\">\n\t\t\t\n\t\t\t<div *ngIf=\"upError\" class=\"alert alert-danger animated shake\">{{ msgError }}</div>\n\n\t\t\t<div *ngIf=\"upSuccess\" class=\"alert alert-success animated fadeIn\">{{ msgSuccess }}</div>\n\t\t\t\n\t\t\t<ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n\t\t\t  <li class=\"nav-item\">\n\t\t\t    <a class=\"nav-link active\" id=\"pills-login-tab\" data-toggle=\"pill\" href=\"#pills-login\" role=\"tab\" aria-controls=\"pills-login\" aria-expanded=\"true\">Login</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t    <a class=\"nav-link\" id=\"pills-register-tab\" data-toggle=\"pill\" href=\"#pills-register\" role=\"tab\" aria-controls=\"pills-register\" aria-expanded=\"true\">Register</a>\n\t\t\t  </li>\n\t\t\t</ul>\n\n\t\t\t<div class=\"tab-content\" id=\"pills-tabContent\">\n\t\t\t  \n\t\t\t  <div class=\"tab-pane fade show active\" id=\"pills-login\" role=\"tabpanel\" aria-labelledby=\"pills-login-tab\">\n\n\t\t\t  \t<h3>Login</h3>\n\t\t\t   <form #formLogin=\"ngForm\" \n\t\t\t   (ngSubmit)=\"onSubmitLogin(formLogin)\" \n\t\t\t   novalidate>\n\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t        <label><i class=\"material-icons\">mail</i> E-mail (username):</label>\n\t\t\t\t        <input type=\"email\" \n\t\t\t\t        name=\"username\" \n\t\t\t\t        class=\"form-control\" \n\t\t\t\t        [(ngModel)]=\"userLogin.username\" \n\t\t\t\t        #usernameLogin=\"ngModel\"\n\t\t\t\t        minlength=\"4\" \n\t\t\t\t        required/>\n\t\t\t\t        <div *ngIf=\"usernameLogin.errors?.required && usernameLogin.touched\" class=\"alert alert-danger animated fadeIn\">Required.</div>\n\t\t\t\t        <div *ngIf=\"usernameLogin.errors?.minlength && usernameLogin.touched\" class=\"alert alert-danger animated fadeIn\">Min 4 characters.</div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div>\n\t\t\t\t        <label> <i class=\"material-icons\">security</i> Password:</label>\n\t\t\t\t        <input type=\"password\" \n\t\t\t\t        name=\"password\" \n\t\t\t\t        class=\"form-control\" \n\t\t\t\t        [(ngModel)]=\"userLogin.password\" \n\t\t\t\t\t\t#passwordLogin=\"ngModel\"\n\t\t\t\t\t\tminlength=\"6\" \n\t\t\t\t        required/>\n\t\t\t\t        <div *ngIf=\"passwordLogin.errors?.required && passwordLogin.touched\" class=\"alert alert-danger animated fadeIn\">Required.</div>\n\t\t\t\t        <div *ngIf=\"passwordLogin.errors?.minlength && passwordLogin.touched\" class=\"alert alert-danger animated fadeIn\">Min 6 characters.</div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div style=\"margin-top:10px;\">\n\t\t\t\t        <input type=\"submit\" value=\"Log In\" class=\"btn btn-primary\"/>\n\t\t\t\t        <a href=\"api/auth/twitter\" class=\"btn btn-info\">Log In with Twitter </a>\n\t\t\t\t        <br>\n\t\t\t\t        <small>If you registered your account with Twitter use Twitter to Log in. If you registered with email/password, use that to Log in.</small>\n\t\t\t\t    </div>\n\n\t\t\t\t</form>\n\n\t\t\t  </div>\n\n\t\t\t  <div class=\"tab-pane fade\" id=\"pills-register\" role=\"tabpanel\" aria-labelledby=\"pills-register-tab\">\n\t\t\t  \t\n\t\t\t  \t<h3>Register</h3>\n\t\t\t   <form #formRegister=\"ngForm\" \n\t\t\t   (ngSubmit)=\"onSubmitRegister(formRegister)\" \n\t\t\t   novalidate>\n\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t        <label><i class=\"material-icons\">mail</i> E-mail (username):</label>\n\t\t\t\t        <input type=\"email\" \n\t\t\t\t        name=\"username\" \n\t\t\t\t        class=\"form-control\" \n\t\t\t\t        [(ngModel)]=\"userRegister.username\" \n\t\t\t\t        #usernameRegister=\"ngModel\"\n\t\t\t\t        minlength=\"4\" \n\t\t\t\t        required/>\n\t\t\t\t        <div *ngIf=\"usernameRegister.errors?.required && usernameRegister.touched\" class=\"alert alert-danger animated fadeIn\">Required.</div>\n\t\t\t\t        <div *ngIf=\"usernameRegister.errors?.minlength && usernameRegister.touched\" class=\"alert alert-danger animated fadeIn\">Min 4 characters.</div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div>\n\t\t\t\t        <label> <i class=\"material-icons\">security</i> Password:</label>\n\t\t\t\t        <input type=\"password\" \n\t\t\t\t        name=\"password\" \n\t\t\t\t        class=\"form-control\" \n\t\t\t\t        [(ngModel)]=\"userRegister.password\" \n\t\t\t\t\t\t#passwordRegister=\"ngModel\"\n\t\t\t\t\t\tminlength=\"6\" \n\t\t\t\t        required/>\n\t\t\t\t        <div *ngIf=\"passwordRegister.errors?.required && passwordRegister.touched\" class=\"alert alert-danger animated fadeIn\">Required.</div>\n\t\t\t\t        <div *ngIf=\"passwordRegister.errors?.minlength && passwordRegister.touched\" class=\"alert alert-danger animated fadeIn\">Min 6 characters.</div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div>\n\t\t\t\t        <label> <i class=\"material-icons\">security</i> Password Repeat:</label>\n\t\t\t\t        <input type=\"password\" \n\t\t\t\t        name=\"password\" \n\t\t\t\t        class=\"form-control\" \n\t\t\t\t        [(ngModel)]=\"userRegister.passwordRepeat\" \n\t\t\t\t\t\t#passwordRepeatRegister=\"ngModel\"\n\t\t\t\t\t\tminlength=\"6\" \n\t\t\t\t        required/>\n\t\t\t\t        <div *ngIf=\"passwordRepeatRegister.errors?.required && passwordRepeatRegister.touched\" class=\"alert alert-danger animated fadeIn\">Required.</div>\n\t\t\t\t        <div *ngIf=\"passwordRepeatRegister.errors?.minlength && passwordRepeatRegister.touched\" class=\"alert alert-danger animated fadeIn\">Min 6 characters.</div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div style=\"margin-top:10px;\">\n\t\t\t\t        <input type=\"submit\" value=\"Register\" class=\"btn btn-primary\"/>\n\t\t\t\t        <a href=\"api/auth/twitter\" class=\"btn btn-info\">Register with Twitter </a>\n\t\t\t\t        <br>\n\t\t\t\t        <small>If you register you account with Twitter use Twitter to Log in. If you register with email/password, use that for Log in.</small>\n\t\t\t\t    </div>\n\n\t\t\t\t</form>\n\n\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" align=\"center\">\n\t<h1>{{ question }}</h1>\n\t<a class=\"twitter-share-button\"\n\t\thref=\"https://twitter.com/intent/tweet?text={{question}}\"\n\t\tdata-size=\"large\">\n\tTweet</a>\n\t<div *ngIf=\"novotes\">{{loadtxt}}</div>\n</div>\n<div class=\"row justify-content-center\">\n\t<div class=\"col-7\" *ngIf=\"!novotes\">\n\t\t<div style=\"display: block\">\n\t  \t\t<canvas baseChart\n\t              [data]=\"doughnutChartData\"\n\t              [labels]=\"doughnutChartLabels\"\n\t              [chartType]=\"doughnutChartType\"\n\t              (chartHover)=\"chartHovered($event)\"\n\t              (chartClick)=\"chartClicked($event)\">\n\t  \t\t</canvas>\n  \t\t</div>\n\t</div>\n</div>\n<div class=\"row\" *ngIf=\"!uservoted\">\n\t<div class=\"col\">\n\t\t<h3>Vote:</h3>\n\t\t<form #voteForm=\"ngForm\">\n\t\t\t<div class=\"form-group\" *ngFor=\"let answer of doughnutChartLabels\">\n\t\t\t\t<hr>\n\t\t\t\t<div class=\"form-check\">\n\t\t\t\t  <label class=\"form-check-label\">\n\t\t\t\t    <input class=\"form-check-input\" type=\"radio\" name=\"answersradios\" id=\"{{answer}}\" value=\"{{answer}}\" (click)=\"selected( answer )\">\n\t\t\t\t    {{answer}}\n\t\t\t\t  </label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<button class=\"btn btn-outline-dark btn-lg\" (click)=\"Vote()\">Vote</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208);


/***/ })

},[363]);
//# sourceMappingURL=main.bundle.js.map