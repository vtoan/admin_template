angular.module("app").factory("productService", [
	"$q",
	function ($q) {
		return {
			reqLists: function () {
				console.log("Product: get data");
				let defered = $q.defer();
				let data = [];
				for (let i = 1; i <= 20; i++) {
					data.push({
						id: i,
						name: "SS924",
						categoryName: "Đồng hồ nam",
						wireName: "Đây da",
						bandName: "Tissot",
						discount: 0,
						price: 1990000,
						categoryId: Math.ceil(i / 4),
						typeWireId: 2,
						bandId: Math.ceil(i / 4),
						image: "asset/products/img.jpg",
						saleCount: 51,
						isShow: false,
					});
				}
				defered.resolve(data);
				// defered.reject("Danh sách trống");
				return defered.promise;
			},
			reqDetail: function (id) {
				console.log("Product: get detail " + id);
				let defered = $q.defer();
				defered.resolve({
					images:
						"asset/products/img.jpg,asset/products/img2.jpg,asset/products/img3.jpg",
					typeGlass: "aaaa",
					typeBorder: "aaaa",
					typeMachine: "aaaa",
					parameter: "aaaa",
					resistWater: "aaaa",
					warranty: "aaaa",
					origin: "aaaa",
					color: "aaaa",
					func: "aaaa",
					//SEO
					seoImage: "aaaa",
					seoTitle: "aaaa",
					seoDescription: "aaaa",
				});
				return defered.promise;
			},
			reqUpdateStatus: function (id, status) {
				console.log(`Product: update status ${id} ${status}`);
				let defered = $q.defer();
				defered.resolve("change " + id + "- " + status);
				// defered.reject();
				return defered.promise;
			},
			reqDelete: function (id) {
				console.log(`Product: delete ${id}`);
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
			reqUpdate: function (root, modified, images) {
				console.log(`Product: update`);
				console.log("Root");
				console.log(root);
				console.log("Modified");
				console.log(modified);
				console.log("Image");
				console.log(images);
				console.log("=================");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqAdd: function (item, images) {
				console.log(`Product: add`);
				console.log("Item");
				console.log(item);
				console.log("Image");
				console.log(images);
				console.log("=================");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqExportData: function () {
				console.log(`Product: export`);
				let defered = $q.defer();
				setTimeout(
					() => defered.reject("chức năng chưa sẵn sàng"),
					1000
				);
				return defered.promise;
			},
			reqImportData: function () {
				console.log(`Product: import`);
				let defered = $q.defer();
				setTimeout(
					() => defered.reject("chức năng chưa sẵn sàng"),
					1000
				);
				return defered.promise;
			},
			reqItems: function (stringIds) {
				console.log(`Product: get items ${stringIds}`);
				let defered = $q.defer();
				let data = [];
				for (let i = 1; i <= 2; i++) {
					data.push({
						id: i,
						name: "SS924",
						categoryName: "Đồng hồ nam",
						wireName: "Đây da",
						bandName: "Tissot",
						discount: 0,
						price: 1990000,
						categoryId: 1,
						typeWireId: 2,
						bandId: 1,
						image: "img.jpg",
						saleCount: 51,
						isShow: false,
					});
				}
				defered.resolve(data);
				return defered.promise;
			},
		};
	},
]);
