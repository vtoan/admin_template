angular.module("app").factory("promService", [
	"$q",
	function ($q) {
		return {
			// ================ Promotion ================
			reqLists: function () {
				console.log("Promotion: get list");
				let defered = $q.defer();
				let data = [];

				data.push({
					id: 1,
					name: "Khuyen mai 40%",
					fromDate: "12/10/2020",
					toDate: "12/11/2020",
					status: false,
					type: 0,
				});
				data.push({
					id: 2,
					name: "Free ship",
					fromDate: "",
					toDate: "",
					status: true,
					type: 1,
				});

				defered.resolve(data);
				// defered.reject("Danh sách trống");
				return defered.promise;
			},
			reqItem: function (id) {
				console.log("Promotion: get " + id);
				let defered = $q.defer();
				let data = {
					id: 1,
					name: "Khuyen mai 40%",
					fromDate: new Date("12/10/2020"),
					toDate: new Date("12/11/2020"),
					status: false,
					type: 0,
				};
				defered.resolve(data);
				// defered.reject("Danh sách trống");
				return defered.promise;
			},
			reqUpdateStatus: function (id, status) {
				console.log(`Promotion: update status ${id} ${status}`);
				let defered = $q.defer();
				defered.resolve("change " + id + "- " + status);
				// defered.reject();
				return defered.promise;
			},
			reqDelete: function (id) {
				console.log(`Promotion: delete ${id}`);
				let defered = $q.defer();
				defered.resolve("delete " + id);
				return defered.promise;
			},
			// ================ Prom Product ================
			reqPromProduct: function () {
				console.log("Promotion: get prom product data");
				let defered = $q.defer();
				let data = [];
				data.push({
					id: 1,
					name: "Khuyen mai 40%",
					fromDate: "12/10/2020",
					toDate: "12/11/2020",
					status: false,
					type: 0,
					discount: 0.4,
					productIds: "1,2,3,4,5,7",
					categoryId: 2,
					bandId: 0,
				});
				data.push({
					id: 2,
					name: "Khuyen mai 10%",
					fromDate: "12/10/2020",
					toDate: "12/11/2020",
					status: false,
					type: 0,
					discount: 0.1,
					productIds: "5,7,12,15",
					categoryId: 0,
					bandId: 0,
				});
				defered.resolve(data);
				return defered.promise;
			},
			reqAddPromProduct: function (item) {
				console.log(`Promotion: product add `);
				console.log(item);
				console.log("===========");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqUpdatePromProduct: function (root, modified) {
				console.log(`Promotion: product update `);
				console.log(modified[0]);
				console.log("===========");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqChangeProductProm: function (promIdOld, promIDNew, productId) {
				console.log(
					`Promotion: change - product ${productId} prom ${promIdOld} => prom ${promIDNew}`
				);
				let defered = $q.defer();
				if (promIDNew === promIdOld)
					defered.reject("SP đã thuộc khuyễn mãi này");
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},

			reqRemoveProductProm: function (promId, productId) {
				console.log(
					`Promotion: change - product ${productId} prom ${promId} => prom 0`
				);
				let defered = $q.defer();
				if (promId == 0) defered.reject("Không có khuyễn mãi để xoá");
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			// ================ Prom Bil ================

			reqAddPromBill: function (item) {
				console.log(`Promotion: bill add `);
				console.log(item);
				console.log("===========");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
			reqUpdatePromBill: function (root, modified) {
				console.log(`Promotion: bill update `);
				console.log(modified[0]);
				console.log("===========");
				let defered = $q.defer();
				setTimeout(() => defered.resolve(), 1000);
				return defered.promise;
			},
		};
	},
]);
