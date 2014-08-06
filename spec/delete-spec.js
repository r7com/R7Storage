describe("R7Storage", function() {
  describe("R7Storage Getting Values", function() {
    beforeEach(function(){
      R7Storage.setItem("name", "Guilherme");
      R7Storage.setItem(123, "onetwothree");
    });

    it("Should remove properly the string value by using the key", function() {
      expect(R7Storage.delete("name")).toBeTruthy();
      expect(R7Storage.get("name")).toBeFalsy();
    });

    it("Should remove properly the string value by using the key", function() {
      expect(R7Storage.delete(123)).toBeTruthy();
      expect(R7Storage.get(123)).toBeFalsy();
    });

    it("Should not delete a not defined string key", function() {
      expect(R7Storage.delete("nameFail")).toBeFalsy();
      expect(R7Storage.get("nameFail")).toBeFalsy();
    });

    it("Should not delete a not defined number key", function() {
      expect(R7Storage.delete(321)).toBeFalsy();
      expect(R7Storage.get(321)).toBeFalsy();
    });

    it("Getting a data without a key - return error", function() {
      expect(function(){
        R7Storage.delete()
      }).toThrow();
    });
  });
});
