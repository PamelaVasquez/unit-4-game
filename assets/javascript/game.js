// Declare characters
var princessLeia = {
    name: "Princess Leia",
    hp: 150,
    attackPower: 8,
    counterAttack: 20,
    attack: function (player) {
        console.log(player.hp);
        console.log(this.hp);
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        } else if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
        }

        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
    },
    eliminate: function () {
        $("#princessLeia").css("display", "none")
    }

}
var hanSolo = {
    name: "Han Solo",
    hp: 170,
    attackPower: 10,
    counterAttack: 25,
    attack: function (player) {
        console.log(player.hp);
        console.log(this.hp);
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        } else if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
            round2();
            return;
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);

    },
    eliminate: function () {
        $("#hanSolo").css("display", "none")
    }

}
var chewy = {
    name: "Chewy",
    hp: 185,
    attackPower: 9,
    counterAttack: 15,
    attack: function (player) {
        console.log(player.hp);
        console.log(this.hp);
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        } else if (player.hp <= 0) {
            alert(`You have eliminated ${player.name}!`)
            console.log(`${player.name} is eliminated`);
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
    },
    eliminate: function () {
        $("#chewy").css("display", "none")
    }

}
var yoda = {
    name: "Yoda",
    hp: 140,
    attackPower: 7,
    counterAttack: 30,
    attack: function (player) {
        console.log(player.hp);
        console.log(this.hp);
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        } else if (player.hp <= 0) {
            alert(`You have eliminated ${player.name}!`)
            console.log(`${player.name} is eliminated`);

        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
    },
    eliminate: function () {
        $("#yoda").css("display", "none")
    }

}
var n = 1;

function increment() {
    n++;
    return n;
}

function round1() {
    hanSolo.attack(yoda);
    increment();
}

function round2() {
    hanSolo.attack(chewy);
    increment();
}

$("#attacks").click(function () {
    if (yoda.hp != 0) {
        round1();
    } else if {
        round2();
    } else {
        return;
    }
});

// Assign stats to characters - Health Points, Attack Power, Counter Attack Power
// Function that will increase selected player attack by its base Attack Power
// attack: function (player, attackPower) {
// var move = this.attackPower;
// console.log(`${this.name} attack power is ${move.name}`)
// });
// Push Attack Power everytime in increases to selected players attack power
// Opponent power remains the same
// Eliminate opponent once Health Power is at 0
// Continue game after defeating opponent
// Stop game if player health points reaches 0