angular.module("app").factory("bandService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				console.log(`Band: get list data`);
				let defered = $q.defer();
				defered.resolve([
					{
						id: 1,
						name: "Tissot",
					},
					{
						id: 2,
						name: "DW",
					},
					{
						id: 3,
						name: "CASIO",
					},
					{
						id: 3,
						name: "Hulot",
					},
				]);
				// defered.reject("Loi");
				return defered.promise;
			},
			reqDelete: function (id) {
				console.log(`Band: delete ${id}`);
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
			reqUpdate: function (root, modified) {
				console.log(`Band: update`);
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
				console.log("Band: add");
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
