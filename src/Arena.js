class Arena {
  constructor(hero, monsters, size = 10, message) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
    this.message = "";
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(
      Math.pow(fighter2.x - fighter1.x, 2) +
        Math.pow(fighter2.y - fighter1.y, 2)
    ).toFixed(2);
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange();
  }

  // Hero movement managment
  // Gestion du déplacement du héros
  move(direction) {
    // console.log(this.hero.y);
    /* Your code goes here */
    let y = this.hero.y;
    let x = this.hero.x;
    if (direction === "N") this.hero.y -= 1;
    if (direction === "S") this.hero.y += 1;
    if (direction === "E") this.hero.x -= 1;
    if (direction === "W") this.hero.x += 1;

    if (!this.outArena(this.hero.x, this.hero.y)) {
      this.message = "⛔ La sortie de carte n'est pas autorisé ⛔";
    } else if (!this.colMonster(this.hero.x, this.hero.y)) {
      this.message = "⛔la case est déjà occupée ⛔";
      this.hero.life -= 1;
    } else {
      console.log(this.hero.life);
      document.getElementById("life").innerText = this.hero.life;
      return { x, y };
    }
    document.getElementById("error").innerText = this.message;
    this.hero.x = x;
    this.hero.y = y;
    return this.hero;
  }
  // return oldPosition;
  outArena(x, y) {
    return x >= 0 && x < this.size && y >= 0 && y < this.size;
  }
  colMonster(x, y) {
    return !this.monsters.some((monster) => monster.x === x && monster.y === y);
  }
}
