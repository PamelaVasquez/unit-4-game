// Declare characters
var princessLeia = {
    name: "Princess Leia",
    hp: 150,
    attackPower: 8,
    counterAttack: 20,
    attack: function (player) {
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

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
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

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
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

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
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            alert(`You have eliminated ${player.name}!`)
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        console.log(`${this.name} attack power is ${damage}`);
        console.log(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

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

function playGame1() {
    hanSolo.attack(yoda);
    increment();
}

function playGame2() {
    hanSolo.attack(chewy);
    increment();
}

function playGame3() {
    hanSolo.attack(princessLeia);
    increment();
}


$("#attack").click(function () {
    switch (yoda.hp > 0) {
        case (chewy.hp <= 0):
            playGame2();
            break;
        case (princessLeia.hp <= 0):
            playGame3();
            break;
        default:
            playGame1();
            break;
    }
    // if (yoda.hp <= 0) {
    //     playGame2();
    //     // $.when(playGame2()).then(playGame3());

    //     if (chewy.hp <= 0) {
    //         playGame3();
    //     }
    // } else {
    //     playGame1();
    // }
    // if (yoda.hp <= 0 && chewy.hp <= 0 && princessLeia.hp <= 0) {
    //     alert('You WIN!')
    // }

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