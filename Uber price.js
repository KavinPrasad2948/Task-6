class UberPrice {
    constructor(distance, duration, baseFare = 3.00, costPerKm = 5.10, costPerMinute = 0.30, bookingFee = 3.00) {
        this.distance = distance;
        this.duration = duration;
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    getDistancePrice() {
        return this.distance * this.costPerKm;
    }

    getDurationPrice() {
        return this.duration * this.costPerMinute;
    }

    getPrice() {
        let price = this.baseFare;
        if (this.distance < 10) {
            price += this.getDistancePrice();
        } else if (this.distance >= 10 && this.distance < 20) {
            price += this.getDistancePrice() + this.getDurationPrice();
        } else if (this.distance >= 20 && this.distance < 50) {
            price += this.getDistancePrice() + this.getDurationPrice() + this.bookingFee;
        } else if (this.distance >= 50) {
            price += this.getDistancePrice() + this.getDurationPrice() + this.bookingFee;
        }
        return price;
    }
}

const uberPrice1 = new UberPrice(30, 20);
const uberPrice2 = new UberPrice(60,50);
console.log(uberPrice1.getPrice()); 
console.log(uberPrice2.getPrice());
