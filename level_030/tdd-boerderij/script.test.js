const {
    getYieldPerPlantWithoutIfStatements,
    getYieldOfCrop,
    getTotalYield,
    getCostsPerCrop,
    getRevenuePerCrop,
    getProfitPerCrop,
    getTotalProfit,
    
  } = require("./farm");
  
  describe("getYieldPerPlantWithoutIfStatements", () => {
    const corn = {
      name: "corn",
      yield: 30,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
            low: 0,
            medium: -30,
            high: -60,
        }
      },
    };
    
    const environmentFactors = {
      sun: "low",
      wind: "high",
    };
  
    test("Get yield for plant considering the environmental factors", () => {
      expect(getYieldPerPlantWithoutIfStatements(corn, environmentFactors)).toBe(0);
    });
  });
  
  describe("getYieldOfCrop", () => {
    test("Get yield for crop considering environmental factors", () => {
      const corn = {
        name: "corn",
        yield: 3,
        factors: {
          sun: {
            low: -50,
            medium: 0,
            high: 50,
          },
          wind: {
              low: 0,
              medium: -30,
              high: -60,
          }
        },
      };
      const input = {
        crop: corn,
        num_plants: 10,
      };

      const environmentFactors = {
        sun: "medium",
        wind: "medium",
      };

      expect(getYieldOfCrop(input, environmentFactors)).toBe(21);
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
      expect(getRevenuePerCrop(input)).toBe(37.5);
    });
  });

  describe("getProfitPerCrop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1,
      sales_price: 2.5,
      factors: {
        sun: {
          low: -50,
          medium: 0,
          high: 50,
        },
        wind: {
            low: 0,
            medium: -30,
            high: -60,
        }
      },
    };

    const input = {
      crop: corn,
      num_plants: 5,
    };

    const environmentFactors = {
      sun: "high",
      wind: "low",
    };
  
    test("Get proft per crop considering environmental factors", () => {
      expect(getProfitPerCrop(input, environmentFactors)).toBe(51.25);
    });
  });

  describe("getTotalProfit", () => {
    const corn = {
      name: "corn",
      yield: 2,
      cost: 2,
      sales_price: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 5,
      cost: 3,
      sales_price: 4,
    };
    const crops = [
      { crop: corn, num_plants: 2 },
      { crop: pumpkin, num_plants: 3 },
    ];
  
    test("Get total profit without considering environmental factors", () => {
      expect(getTotalProfit(crops)).toBe(59);
    });
  });