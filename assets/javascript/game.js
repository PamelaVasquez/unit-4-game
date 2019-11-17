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
            this.hp -= player.counterAttack;
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

    },
    eliminate: function () {
        $(".defender").css("display", "none");
        $('#winlosemsg').append(`<p>You have eliminated Princess Leia!</p>`)
    }

}
var hanSolo = {
    name: "Han Solo",
    hp: 170,
    attackPower: 10,
    counterAttack: 18,
    attack: function (player) {
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

    },
    eliminate: function () {
        $(".defender").css("display", "none");
        $('#winlosemsg').append(`<p>You have eliminated Han Solo!</p>`)
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
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

    },
    eliminate: function () {
        $(".defender").css("display", "none");
        $('#winlosemsg').append(`<p>You have eliminated Chewy!</p>`)
    }

}
var yoda = {
    name: "Yoda",
    hp: 140,
    attackPower: 7,
    counterAttack: 12,
    attack: function (player) {
        var damage = this.attackPower * n;
        if (player.hp > 0) {
            player.hp -= damage;
            this.hp -= player.counterAttack
        }
        if (player.hp <= 0) {
            console.log(`${player.name} is eliminated`);
            player.eliminate();
        }
        if (this.hp <= 0) {
            console.log(`${this.name} is eliminated`)
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);
        console.log(player.hp);
        console.log(this.hp);

    },
    eliminate: function () {
        $(".defender").css("display", "none");
        $('#winlosemsg').append(`<p>You have eliminated Yoda!</p>`)

    }

}
var n = 1;

function increment() {
    n++;
    return n;
}

function leiaVSsolo() {
    if (hanSolo.hp > 0) {
        princessLeia.attack(hanSolo);
        increment();
    }
}

function leiaVSchewy() {
    if (chewy.hp > 0) {
        princessLeia.attack(chewy);
        increment();
    }
}

function leiaVSyoda() {
    if (yoda.hp > 0) {
        princessLeia.attack(yoda);
        increment();
    }
}

function soloVSleia() {
    if (princessLeia.hp > 0) {
        hanSolo.attack(princessLeia);
        increment();
    }
}

function soloVSchewy() {
    if (chewy.hp > 0) {
        hanSolo.attack(chewy);
        increment();
    }
}

function soloVSyoda() {
    if (yoda.hp > 0) {
        hanSolo.attack(yoda);
        increment();
    }
}

function chewyVSleia() {
    if (princessLeia.hp > 0) {
        chewy.attack(princessLeia);
        increment();
    }
}

function chewyVSsolo() {
    if (hanSolo.hp > 0) {
        chewy.attack(hanSolo);
        increment();
    }
}

function chewyVSyoda() {
    if (yoda.hp > 0) {
        chewy.attack(yoda);
        increment();
    }
}

function yodaVSleia() {
    if (princessLeia.hp > 0) {
        yoda.attack(princessLeia);
        increment();
    }
}

function yodaVSsolo() {
    if (hanSolo.hp > 0) {
        yoda.attack(hanSolo);
        increment();
    }
}

function yodaVSchewy() {
    if (chew.hp > 0) {
        yoda.attack(chewy);
        increment();
    }
}

$('.princessLeiaHP').prepend(`<p>${princessLeia.hp}</p>`).addClass('hp')
$('.hanSoloHP').append(`<p>${hanSolo.hp}</p>`).addClass('hp')
$('.chewyHP').append(`<p>${chewy.hp}</p>`).addClass('hp')
$('.yodaHP').append(`<p>${yoda.hp}</p>`).addClass('hp')



$('#princessLeia').one("click", function () {
    $('#princessLeia').appendTo('#selectedCharacterBank').addClass('selectedCharacter')
    $('#Leia-enemiesToAttack').css('display', 'flex')
    $('#hanSolo').css('display', 'none')
    $('#chewy').css('display', 'none')
    $('#yoda').css('display', 'none')

    $('#hanSolo-Leia-enemies').one("click", function () {
        $('#hanSolo-Leia-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            leiaVSsolo();
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
            $('.hanSoloHP').text(`${hanSolo.hp}`)
        });
    });
    $('#chewy-Leia-enemies').one("click", function () {
        $('#chewy-Leia-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            leiaVSchewy();
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
            $('.chewyHP').text(`${chewy.hp}`)
        });

    });
    $('#yoda-Leia-enemies').one("click", function () {
        $('#yoda-Leia-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            leiaVSyoda();
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
            $('.yodaHP').text(`${yoda.hp}`)
        });
    });
});


$('#hanSolo').one("click", function () {
    $('#hanSolo').appendTo('#selectedCharacterBank').addClass('selectedCharacter')
    $('#solo-enemiesToAttack').css('display', 'flex')
    $('#princessLeia').css('display', 'none')
    $('#chewy').css('display', 'none')
    $('#yoda').css('display', 'none')


    $('#princessLeia-solo-enemies').one("click", function () {
        $('#princessLeia-solo-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            soloVSleia();
            $('.hanSoloHP').text(`${hanSolo.hp}`)
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
        });
    });
    $('#yoda-solo-enemies').one("click", function () {
        $('#yoda-solo-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            soloVSyoda();
            $('.hanSoloHP').text(`${hanSolo.hp}`)
            $('.yodaHP').text(`${yoda.hp}`)
        });
    });
    $('#chewy-solo-enemies').one("click", function () {
        $('#chewy-solo-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            soloVSchewy();
            $('.hanSoloHP').text(`${hanSolo.hp}`)
            $('.chewyHP').text(`${chewy.hp}`)
        });
    });
});

$('#chewy').one("click", function () {
    $('#chewy').appendTo('#selectedCharacterBank').addClass('selectedCharacter')
    $('#chewy-enemiesToAttack').css('display', 'flex')
    $('#hanSolo').css('display', 'none')
    $('#princessLeia').css('display', 'none')
    $('#yoda').css('display', 'none')


    $('#princessLeia-chewy-enemies').one("click", function () {
        $('#princessLeia-chewy-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            chewyVSleia();
            $('.chewyHP').text(`${chewy.hp}`)
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
        });
    });
    $('#yoda-chewy-enemies').one("click", function () {
        $('#yoda-chewy-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            chewyVSyoda();
            $('.chewyHP').text(`${chewy.hp}`)
            $('.yodaHP').text(`${yoda.hp}`)
        });
    });
    $('#hanSolo-chewy-enemies').one("click", function () {
        $('#hanSolo-chewy-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            chewyVSsolo();
            $('.chewyHP').text(`${chewy.hp}`)
            $('.hanSoloHP').text(`${hanSolo.hp}`)
        });
    });
});

$('#yoda').one("click", function () {
    $('#yoda').appendTo('#selectedCharacterBank').addClass('selectedCharacter')
    $('#yoda-enemiesToAttack').css('display', 'flex')
    $('#hanSolo').css('display', 'none')
    $('#princessLeia').css('display', 'none')
    $('#chewy').css('display', 'none')


    $('#princessLeia-yoda-enemies').one("click", function () {
        $('#princessLeia-yoda-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            yodaVSleia();
            $('.yodaHP').text(`${yoda.hp}`)
            $('.princessLeiaHP').text(`${princessLeia.hp}`)
        });
    });
    $('#chewy-yoda-enemies').one("click", function () {
        $('#chewy-yoda-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            yodaVSchewy();
            $('.yodaHP').text(`${yoda.hp}`)
            $('.chewyHP').text(`${chewy.hp}`)
        });
    });
    $('#hanSolo-yoda-enemies').one("click", function () {
        $('#hanSolo-yoda-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            yodaVSsolo();
            $('.yodaHP').text(`${yoda.hp}`)
            $('.hanSoloHP').text(`${hanSolo.hp}`)
        });
    });
});