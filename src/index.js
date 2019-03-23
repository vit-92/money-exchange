// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};

    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    } else if (currency <= 0) {
        return obj.error = {};
    } else {
        obj.H = Math.floor(currency / 50);
        obj.Q = Math.floor((currency % 50) / 25);
        obj.D = Math.floor((currency % 25) / 10);
        obj.N = Math.floor((currency - obj.H * 50 - obj.Q * 25 - obj.D * 10) / 5);
        obj.P = Math.floor(currency % 5);

        if (obj.H === 0) {
            delete obj.H;
        }

        if (obj.Q === 0) {
            delete obj.Q;
        }

        if (obj.D === 0) {
            delete obj.D;
        }

        if (obj.N === 0) {
            delete obj.N;
        }

        if (obj.P === 0) {
            delete obj.P;
        }

        return obj;
    }

}
