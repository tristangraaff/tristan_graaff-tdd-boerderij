// const getYieldPerPlant = (plant, environment) => {
//     const sun = plant.factors.sun;
//     const wind = plant.factors.wind;
//     const calculateYield = (sun, wind) => plant.yield / 100 * (100 + sun +  wind);

//     if (environment.sun === "low" && environment.wind === "low") {
//         return calculateYield(sun.low, wind.low);
//     } else if  (environment.sun === "low" && environment.wind === "medium") {
//         return calculateYield(sun.low, wind.medium);
//     } else if  (environment.sun === "low" && environment.wind === "high") {
//         return calculateYield(sun.low, wind.high);
//     } else if  (environment.sun === "medium" && environment.wind === "low") {
//         return calculateYield(sun.medium, wind.low);
//     } else if  (environment.sun === "medium" && environment.wind === "medium") {
//         return calculateYield(sun.medium, wind.medium);
//     } else if  (environment.sun === "medium" && environment.wind === "high") {
//         return calculateYield(sun.medium, wind.high);
//     } else if  (environment.sun === "high" && environment.wind === "low") {
//         return calculateYield(sun.high, wind.low);
//     } else if  (environment.sun === "high" && environment.wind === "medium") {
//         return calculateYield(sun.high, wind.medium);
//     } else if  (environment.sun === "high" && environment.wind === "high") {
//         return calculateYield(sun.high, wind.high);
//     };
// };

const getYieldPerPlantWithoutIfStatements = (plant, environment) => {
    const sun = plant.factors.sun[environment.sun];
    const wind = plant.factors.wind[environment.wind];
    const calcYield = () => plant.yield / 100 * (100 + sun +  wind);
    if (calcYield() < 0) {
        return 0
    } else {
        return plant.yield / 100 * (100 + sun +  wind);
    };   
};

console.log(getYieldPerPlantWithoutIfStatements(corn, environmentFactors));

const getTotalYieldOfCrops = crops => crops.num_plants * crops.crop.yield;

const getTotalYield = cropsArray => {
    let total = 0
    cropsArray.forEach(item => {
        total = total + item.crop.yield * item.num_plants;
    });
    return total
};

const getCostsPerCrop = crops => crops.crop.cost * crops.num_plants;

const getRevenuePerCrop = crops => crops.crop.sales_price * crops.crop.yield * crops.num_plants;

const getProfitPerCrop = crops => getRevenuePerCrop(crops) - crops.crop.cost * crops.num_plants;

const getTotalProfit = cropsArray => {
    let total = 0;
    cropsArray.forEach(item => {
        total = total +  getProfitPerCrop(item);
    });
    return total;
};

module.exports = {
    getYieldPerPlantWithoutIfStatements,
    getTotalYieldOfCrops,
    getTotalYield,
    getCostsPerCrop,
    getRevenuePerCrop,
    getProfitPerCrop,
    getTotalProfit,
};