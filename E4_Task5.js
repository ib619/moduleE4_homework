class Appliance {
    constructor(vin) {
        this.inputVoltage = vin;
        this.plugged = false;
    }

    plugIn(){
        if (this.plugged) {
            console.log("Прибор уже включен в розетку");
        }
        else {
            this.plugged = true;
            console.log("Вы включили прибор в розетку");
        }
    }

    unplug(){
        if (this.plugged) {
            console.log("Вы выключили прибор из розетки");
            this.plugged = false;
        }
        else {

            console.log("Прибор уже выключен из розетки");
        }
    }

    calculatePower(){
        console.log(`Потребляемая мощность: ${this.inputVoltage*10}`);
    }
}

class HairDryer extends Appliance {
    constructor(vin, temp) {
        super(vin);
        this.airTemperature = temp;
    }

    dryHair(){
        console.log("Вы сушите волосы");
    }
}

class DishWasher extends Appliance {
    constructor(vin, capacity) {
        super(vin);
        this.capacity = capacity;
    }

    washDishes(){
        console.log("Посудомойка моет посуду");
    }
}
