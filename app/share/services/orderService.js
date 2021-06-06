angular.module("app").factory("orderService", [
	"$q",
	function ($q) {
		return {
			reqLists: function (start, end) {
				console.log(`Order: get list ${start} - ${end}`);
				let defered = $q.defer();
				let data = [];
				for (let i = 1; i <= 20; i++) {
					data.push({
						id: i,
						dateCreated: Date().toString(),
						customerName: "Nguyễn Văn A",
						customerPhone: "0768042216",
						customerEmail: "dtoan2805@gmail.com",
						customerProvince: "TP.HCM",
						customerAddress: "123 Nguyễn Tri Phương, P.5, Q.10",
						customerNote: "",
						promotion: "50000",
						fees:
							'[{"id":1,"name":"Vận chuyển","cost":30000},{"id":2,"name":"Thuế","cost":0.5}]',
						status: 1,
					});
				}
				defered.resolve(data);
				return defered.promise;
			},
			reqDetail: function (id) {
				console.log(`Order: get detail ${id}`);
				let defered = $q.defer();
				defered.resolve([
					{
						orderID: 1,
						id: 1,
						quantity: 2,
						price: 1999000,
						discount: 0,
					},
					{
						orderID: 1,
						id: 2,
						quantity: 2,
						price: 1999000,
						discount: 0.1,
					},
				]);
				return defered.promise;
			},
			reqUpdateStatus: function (id, status) {
				console.log(`Order: update status ${id} - ${status}`);
				let defered = $q.defer();
				defered.resolve("change " + id + "- " + status);
				return defered.promise;
			},

			reqFind: function (query) {
				console.log(`Order: find ${query}`);
				let defered = $q.defer();
				setTimeout(
					() => defered.reject("Không có đơn hàng phù hợp"),
					1000
				);
				return defered.promise;
			},
			reqExportData: function () {
				console.log(`Order: export`);
				let defered = $q.defer();
				setTimeout(
					() => defered.reject("chức năng chưa sẵn sàng"),
					1000
				);
				return defered.promise;
			},
			reqImportData: function () {
				console.log(`Order: import`);
				let defered = $q.defer();
				setTimeout(
					() => defered.reject("chức năng chưa sẵn sàng"),
					1000
				);
				return defered.promise;
			},
		};
	},
]);
