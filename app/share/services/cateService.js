angular.module("app").factory("cateService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				console.log(`Category: get list data`);
				let defered = $q.defer();
				defered.resolve([
					{
						id: 1,
						name: "Nam",
						seoImage: "asset/images/men.jpg",
						seoTitle: "hêllo",
						seoDescription: "oal",
					},
					{
						id: 2,
						name: "Nu",
						seoImage: "asset/images/women.jpg",
						seoTitle: "hêllo",
						seoDescription: "oal",
					},
					{
						id: 3,
						name: "Đôi",
						seoImage: "asset/images/couple.jpg",
						seoTitle: "hêllo",
						seoDescription: "oal",
					},
					{
						id: 4,
						name: "Phu kien",
						seoImage: "asset/images/cuff.jpg",
						seoTitle: "hêllo",
						seoDescription: "oal",
					},
				]);
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
