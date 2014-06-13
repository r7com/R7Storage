describe("R7Storage", function() {
	describe("R7Storage Scope", function() {
		it("Must have supportsLocalStorage() method", function() {
			expect(typeof R7Storage.supportsLocalStorage).toBe("function");
		});

		it("Must have set() method", function() {
			expect(typeof R7Storage.set).toBe("function");
		});

		it("Must have get() method", function() {
			expect(typeof R7Storage.get).toBe("function");
		});

		it("Must have delete() method", function() {
			expect(typeof R7Storage.delete).toBe("function");
		});

		it("Must have has() method", function() {
			expect(typeof R7Storage.has).toBe("function");
		});
	});
});
