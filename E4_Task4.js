// прототип электроприбора
function Appliance(vin){
    this.inputVoltage = vin;
    this.plugged = false;
}

Appliance.prototype.plugIn = function(){
    if (this.plugged) {
        console.log("Прибор уже включен в розетку");
    }
    else {
        this.plugged = true;
        console.log("Вы включили прибор в розетку");
    }
}

Appliance.prototype.unplug = function(){
    if (this.plugged) {
        console.log("Вы выключили прибор из розетки");
        this.plugged = false;
    }
    else {

        console.log("Прибор уже выключен из розетки");
    }
}

Appliance.prototype.calculatePower = function() {
    console.log(`Потребляемая мощность: ${this.inputVoltage*10}`);
}

// Фен для волос
function HairDryer(vin, temp){
    this.inputVoltage = vin;
    this.airTemperature = temp;
}

HairDryer.prototype = new Appliance();

HairDryer.prototype.dryHair = function() {
    console.log("Вы сушите волосы");
}

// Посудомойка
function DishWasher(vin, capacity){
    this.inputVoltage = vin;
    this.capacity = capacity;
}

DishWasher.prototype = new Appliance();

DishWasher.prototype.washDishes = function() {
    console.log("Посудомойка моет посуду");
}

