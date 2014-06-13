describe("R7Storage", function() {
	describe("R7Storage Has", function() {
		beforeEach(function(){
			R7Storage.set("name", "Guilherme");
			R7Storage.set(123, "Guilherme");
		});

		it("Should match correctly if exists the data stored by using the key", function() {
			expect(R7Storage.has("name")).toBeTruthy();
		});

		it("Should match correctly if exists the data stored by using the key", function() {
			expect(R7Storage.has(123)).toBeTruthy();
		});

		it("Should match correctly if exists the data stored by using the key", function() {
			expect(R7Storage.has("nameInvalid")).toBeFalsy();
		});

		it("Should throw a error, by not using the key", function() {
			expect(function(){
				R7Storage.has()
			}).toThrow();
		});
	});
});