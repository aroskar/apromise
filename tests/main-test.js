var Promise = require('../src/main.js');

var someAsyncAction = function (url) {
    var defer = Promise.defer();

    setTimeout(function () {
        defer.reject({foo: "bar"});
    }, 5000);

    return defer.promise;
};

promise = someAsyncAction();

promise.then(function (data) {
    console.log(data);
}, function (error) {
    console.log(error);
}); 

