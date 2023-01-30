   function setup() {
    print("Ready to roll");
    rollDice(6);
    rollDice(6);
    rollDice(6);
    print("Finished!");
   }

   function rollDice(numSides) {
    var d = 1 + int(random(numSides));
    print("Rolling... " + d);
   }