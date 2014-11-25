describe("[[R7Storage]]", function() {
  describe("[Setting technology type]", function() {
    var store = R7Storage;

    it("must the type() be empty", function() {
      expect(store.type).toBe("");
    });

    it("Must the type() be cookies", function() {
      store.use("cookies");
      expect(store.type).toBe("cookies");
    });

    it("must the type() be localStorage", function() {
      store.use("localStorage");
      expect(store.type).toBe("localStorage");
    });
  });
});
