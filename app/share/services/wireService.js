angular.module("app").factory("wireService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				console.log(`Wire: get list data`);
				let defered = $q.defer();
				defered.resolve([
					{
						id: 1,
						name: "Da",
					},
					{
						id: 2,
						name: "Cao su",
					},
					{
						id: 3,
						name: "Nhựa",
					},
				]);
				return defered.promise;
			},
			reqDelete: function (id) {
				console.log(`Wire: delete ${id}`);
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
			reqUpdate: function (root, modified) {
				console.log(`Wire: update`);
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
			reqAdd: function (item) {
				console.log("Wire: add");
				console.log(item);
				console.log("===========");
				let defered = $q.defer();
				console.log("object");
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
		};
	},
]);
