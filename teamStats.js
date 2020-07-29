// Program Team Stats
// extracts information about basketball teams
// date : 29/07/2020
// author : Julien Violette

const team = {
    _players: [
        {
            firstName: 'Nicolas', lastName: 'Batum', age: 31
        }, {
            firstName: 'Teddy', lastName: 'Rozier', age: 26
        }, {
            firstName: 'Cody', lastName: 'Zeller', age: 27
        }
    ],
    _games: [
        {
            opponent: 'Knicks', teamPoints: 97, opponentPoints: 92
        }, {
            opponent: 'Pistons', teamPoints: 109, opponentPoints: 106
        }, {
            opponent: 'Wizards', teamPoints: 114, opponentPoints: 107
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName, 
            lastName: lastName, 
            age: age
        };
        return this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        return this.games.push(game);
    }
};

team.addPlayer('Miles', 'Bridges', 22);
team.addPlayer('Devonte\'', 'Graham', 25);
team.addPlayer('P.J.', 'Washington', 21);

console.log(team.players);

team.addGame('Lakers', 101, 120);
team.addGame('Spurs', 103, 104);
team.addGame('Rockets', 108, 99);

console.log(team.games);