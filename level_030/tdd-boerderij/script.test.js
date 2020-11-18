const {
    getYieldPerPlant,
    getTotalYieldOfCrops,
    getTotalYield,
    getCostsPerCrop,
    getRevenuePerCrop,
  } = require("./farm");
  
  describe("getYieldPerPlant", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(getYieldPerPlant(corn)).toBe(3);
    });
  });
  
  describe("getTotalYieldOfCrops", () => {
    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        num_plants: 10,
      };
      expect(getTotalYieldOfCrops(input)).toBe(30);
    });
  });
  
  describe("getTotalYield", () => {
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
      expect(getTotalYield(crops)).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, num_plants: 0 }];
      expect(getTotalYield(crops)).toBe(0);
    });
  });

  describe("getCostsPerCrop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1,
    };

    const input = {
      crop: corn,
      num_plants: 5
    };
  
    test("Get costs per crop", () => {
      expect(getCostsPerCrop(input)).toBe(5);
    });
  });

  describe("getRevenuePerCrop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1,
      sales_price: 2.5,
    };

    const input = {
      crop: corn,
      num_plants: 5,

    };
  
    test("Get revenue per crop", () => {
      expect(getRevenuePerCrop(input)).toBe(12.5);
    });
  });