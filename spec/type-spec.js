describe("[[R7Storage]]", function() {
  describe("[Setting technology type]", function() {
    var store;
    beforeEach(function(){
      store = R7Storage;
    });

    it("must the type() be empty", function() {
      expect(store.type).toBe("");
    });

    it("Must the type() be cookies", function() {
      R7Storage.use("cookies");
      expect(R7Storage.type).toBe("cookies");
    });

    it("must the type() be localStorage", function() {
      R7Storage.use("localStorage");
      expect(R7Storage.type).toBe("localStorage");
    });
  });
});
