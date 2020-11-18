const get_yield_per_plant = plant => plant.yield;

const get_total_yield_of_crops = crops => crops.num_plants * crops.crop.yield;

const get_total_yield = cropsArray => {
    let total = 0
    cropsArray.forEach(item => {
        total = total + item.crop.yield * item.num_plants;
    });
    return total
};

module.exports = {
    get_yield_per_plant,
    get_total_yield_of_crops,
    get_total_yield,
};