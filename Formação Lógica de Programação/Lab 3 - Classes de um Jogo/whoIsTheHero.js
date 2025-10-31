class whoIsThisHero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackType;

       
        if (this.type === "mago") {
            attackType = "magia";
        } else if (this.type === "guerreiro") {
            attackType = "espada";
        } else if (this.type === "monge") {
            attackType = "artes marciais";
        } else if (this.type === "ninja") {
            attackType = "shuriken";
        } else {
            attackType = "flashlight"; 
        }

        console.log(`O ${this.type} atacou usando ${attackType}`);
    }

}

let hero = new whoIsThisHero("Alan Wake", 45, "Writer");

hero.attack();