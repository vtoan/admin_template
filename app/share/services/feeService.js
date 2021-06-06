angular.module("app").factory("feeService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				let defered = $q.defer();
				defered.resolve([
					{
						id: 1,
						name: "Thuế",
						cost: 0.1,
					},
					{
						id: 2,
						name: "Vận chuyển",
						cost: 30000,
					},
				]);
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
