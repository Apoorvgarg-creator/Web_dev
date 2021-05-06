rate = {
    fixed : 50,
    minkm : 5,
    perKm:  10,
    freeMin : 15,
    perMin : 2
}

function calcfare(km, min) {
    let fare = rate.fixed;
    fare += (km > rate.minkm) ? ((km - rate.minkm)* rate.perKm) : 0;
    fare += (min > rate.freeMin) ? ((min -rate.freeMin)* rate.perMin) : 0;

    return fare;
}

exports = module.exports = {
    rate, calcfare

}