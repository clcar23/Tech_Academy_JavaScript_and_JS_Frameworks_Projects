class Dog {
    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }
    shake() {
        return "can shake";
    }
    sit() {
        return "can sit";
    }
    layDown() {
        return "can lay down";
    }
}

const fido = new Dog('Hound', 'Brown', '2 feet', '60 lbs');


console.log(`Fido is a ${fido.color} ${fido.breed} that ${fido.layDown()}!`);