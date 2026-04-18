function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.point = 0;
}
Player.prototype.gainXp = function (number) {
  if (number > 0 && number < 11) {
    this.point = this.point + number;
  }
  if (this.point >= 10) {
    this.lvl++;
    this.point = this.point - 10;
  }
};
Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.point} experience points`;
};

let player1 = new Player('Zaid');
player1.gainXp(9);

console.log(player1);
