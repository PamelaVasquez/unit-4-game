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
            player.eliminate();
        }
        if (this.hp <= 0) {
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);

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
            player.eliminate();
        }
        if (this.hp <= 0) {
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);

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
            player.eliminate();
        }
        if (this.hp <= 0) {
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);

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
            player.eliminate();
        }
        if (this.hp <= 0) {
            alert('You Lost!')
            $('#attack').prop('disabled', true);
        }
        $('#selectedPlayerDamage').text(`${this.name} attack power is ${damage}`);
        $('#enemiesDamage').text(`${player.name} attack power is ${player.counterAttack}`);

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
    if (chewy.hp > 0) {
        yoda.attack(chewy);
        increment();
    }
}

$('.princessLeiaHP').append(`<p>Health Points: ${princessLeia.hp}</p>`).addClass('hp')
$('.hanSoloHP').append(`<p>Health Points: ${hanSolo.hp}</p>`).addClass('hp')
$('.chewyHP').append(`<p>Health Points: ${chewy.hp}</p>`).addClass('hp')
$('.yodaHP').append(`<p>Health Points: ${yoda.hp}</p>`).addClass('hp')



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
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
        });
    });
    $('#chewy-Leia-enemies').one("click", function () {
        $('#chewy-Leia-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            leiaVSchewy();
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
        });

    });
    $('#yoda-Leia-enemies').one("click", function () {
        $('#yoda-Leia-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            leiaVSyoda();
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
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
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
        });
    });
    $('#yoda-solo-enemies').one("click", function () {
        $('#yoda-solo-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            soloVSyoda();
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
        });
    });
    $('#chewy-solo-enemies').one("click", function () {
        $('#chewy-solo-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            soloVSchewy();
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
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
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
        });
    });
    $('#yoda-chewy-enemies').one("click", function () {
        $('#yoda-chewy-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            chewyVSyoda();
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
        });
    });
    $('#hanSolo-chewy-enemies').one("click", function () {
        $('#hanSolo-chewy-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            chewyVSsolo();
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
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
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
            $('.princessLeiaHP').text(`Health Points: ${princessLeia.hp}`)
        });
    });
    $('#chewy-yoda-enemies').one("click", function () {
        $('#chewy-yoda-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            yodaVSchewy();
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
            $('.chewyHP').text(`Health Points: ${chewy.hp}`)
        });
    });
    $('#hanSolo-yoda-enemies').one("click", function () {
        $('#hanSolo-yoda-enemies').appendTo('#oppnent').addClass('defender');
        $("#attack").click(function () {
            yodaVSsolo();
            $('.yodaHP').text(`Health Points: ${yoda.hp}`)
            $('.hanSoloHP').text(`Health Points: ${hanSolo.hp}`)
        });
    });
});