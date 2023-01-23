cars = [];
for (let i = 0; i < 1; i++) {
   let fuelMaxCapacity = Math.random() * 20 + 80;
    cars.push(
        {
        cashBalance: Math.random() * 100,
        cashCurrency: 'USD',
        fuelMaxCapacity,
        currentFuelLevel: Math.random() * fuelMaxCapacity,
        fuelCurrency: 'litres',
        }
    )
}

console.log(cars);


gasStation = {

    //баланс заправки
    priceForLiter: 2,
    priceCurrency: 'USD',

    fuelUp: function (car) {
        if (car.fuelMaxCapacity - car.currentFuelLevel > 0 ) { //если в баке меньше чем максимум , значит заправляем
            let difference = car.fuelMaxCapacity-car.currentFuelLevel; //разница между максимумом и текущим количеством топлива
            let bill = difference * this.priceForLiter; //  счет за заправку

            if (car.cashBalance < bill) { //если денег меньше чем счет, заправляем на количество денег

                car.currentFuelLevel = car.currentFuelLevel + car.cashBalance / this.priceForLiter; //заправляем машину на баланс
                return 'Until full tank: ' + difference + ' ' + car.fuelCurrency + ' Your balance: ' + car.cashBalance + ' ' + car.cashCurrency + ' is not enough to fuel up your car on: ' + difference + ' ' + car.fuelCurrency + ' Because it cost: ' + bill + ' ' +this.priceCurrency +' You fueld up your car by all of your money on: ' + (car.cashBalance / this.priceForLiter) + ' ' + car.fuelCurrency;
            }
            car.currentFuelLevel = car.fuelMaxCapacity; //заправляем машину до максимума
            return 'Your car is fueld up on: ' + difference + ' litres ' + 'and you paid for this: ' + bill + ' ' + this.priceCurrency; //возвращаем результат
        } else {
            return 'Your car is already fueld up' //если бак полный
        }

        }
    }

console.log(gasStation.fuelUp(cars[0]));