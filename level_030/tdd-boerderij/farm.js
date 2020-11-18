const getYieldPerPlant = plant => plant.yield;

const getTotalYieldOfCrops = crops => crops.num_plants * crops.crop.yield;

const getTotalYield = cropsArray => {
    let total = 0
    cropsArray.forEach(item => {
        total = total + item.crop.yield * item.num_plants;
    });
    return total
};

const getCostsPerCrop = crops => crops.crop.cost * crops.num_plants;

const getRevenuePerCrop = crops => crops.crop.sales_price * crops.num_plants;

module.exports = {
    getYieldPerPlant,
    getTotalYieldOfCrops,
    getTotalYield,
    getCostsPerCrop,
    getRevenuePerCrop,
};