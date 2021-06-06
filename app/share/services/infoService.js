angular.module("app").factory("infoService", [
	"$q",
	function ($q) {
		return {
			reqData: function () {
				console.log(`Info: get data`);
				let defered = $q.defer();
				defered.resolve([]);
				return defered.promise;
			},
			reqUpdate: function (root, modified) {
				console.log(`Category: update`);
				console.log("root");
				console.log(root);
				console.log("modified");
				console.log(modified);
				console.log("===========");
				let defered = $q.defer();
				console.log("object");
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
		};
	},
]);
