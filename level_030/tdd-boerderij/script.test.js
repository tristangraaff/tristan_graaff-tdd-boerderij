const {
    get_yield_per_plant,
    get_total_yield_of_crops,
    get_total_yield,
  } = require("./farm");
  
  describe("get_yield_per_plant", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(get_yield_per_plant(corn)).toBe(3);
    });
  });
  
  describe("get_total_yield_of_crops", () => {
    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        num_plants: 10,
      };
      expect(get_total_yield_of_crops(input)).toBe(30);
    });
  });
  
  describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const crops = [
        { crop: corn, num_plants: 5 },
        { crop: pumpkin, num_plants: 2 },
      ];
      expect(get_total_yield(crops)).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, num_plants: 0 }];
      expect(get_total_yield(crops)).toBe(0);
    });
  });