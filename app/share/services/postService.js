angular.module("app").factory("postService", [
	"$q",
	function ($q) {
		return {
			reqItem: function (id) {
				let defered = $q.defer();
				defered.reject("Not found 404");
				return defered.promise;
			},
			reqUpdate: function (id, content) {
				let defered = $q.defer();
				// setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqDelete: function (id) {
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
		};
	},
]);
