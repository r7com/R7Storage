describe("R7Storage", function() {
  describe("R7Storage Setting Values", function() {
    it("Setting string key a string value", function() {
      expect(R7Storage.set("key", "value")).toBeTruthy();
    });

    it("Setting string key a number value", function() {
      expect(R7Storage.set("test", 123)).toBeTruthy();
    });

    it("Setting string key a boolean value", function() {
      expect(R7Storage.set("test", true)).toBeTruthy();
    });

    it("Setting number key a number value", function() {
      expect(R7Storage.set(123, 123)).toBeTruthy();
    });

    it("Setting number key a string value", function() {
      expect(R7Storage.set(123, "test")).toBeTruthy();
    });

    it("Setting a key without a value - return error", function() {
      expect(function(){
        R7Storage.set("errorkey")
      }).toThrow();
    });

    it("Setting a key without a key and value - return error", function() {
      expect(function(){
        R7Storage.set()
      }).toThrow();
    });
  });
});
