describe("[[R7Storage]]", function() {
  describe("[Setting technology type]", function() {
    var store;
    beforeEach(function(){
      store = R7Storage;
    });

    it("Must the type() be cookies", function() {
      R7Storage.use("cookies");
      expect(R7Storage.type).toBe("cookies");
    });

    it("must the type() be localstorage", function() {
      R7Storage.use("localstorage");
      expect(R7Storage.type).toBe("localstorage");
    });

    it("must the type() be empty", function() {
      console.log(store)
      expect(store.type).toBe("");
    });
  });
});
