describe("[[R7Storage]]", function() {
  describe("[Scope]", function() {
    it("Must have supportsLocalStorage() method", function() {
      expect(typeof R7Storage.supportsLocalStorage).toBe("function");
    });

    it("Must have setItem() method", function() {
      expect(typeof R7Storage.setItem).toBe("function");
    });

    it("Must have getItem() method", function() {
      expect(typeof R7Storage.getItem).toBe("function");
    });

    it("Must have deleteItem() method", function() {
      expect(typeof R7Storage.deleteItem).toBe("function");
    });

    it("Must have hasItem() method", function() {
      expect(typeof R7Storage.hasItem).toBe("function");
    });
  });
});
