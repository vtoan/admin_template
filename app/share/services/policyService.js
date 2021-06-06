angular.module("app").factory("policyService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				console.log(`Policy: get list data`);
				let defered = $q.defer();
				defered.resolve([
					{
						id: 1,
						name: "SD",
						icon: "asset/icon/policy1.svg",
					},
					{
						id: 2,
						name: "DM",
						icon: "asset/icon/policy2.svg",
					},
				]);
				return defered.promise;
			},
			reqDelete: function (id) {
				console.log(`Policy: delete ${id}`);
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
			reqUpdate: function (root, modified) {
				console.log(`Policy: update`);
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
				console.log("Policy: add");
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
