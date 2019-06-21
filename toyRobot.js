class Robot {
  constructor(xCoord, yCoord, facing) {
    this.facing = facing;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  //MOVE
  moveForward() {
    switch (this.facing) {
      case "NORTH":
        this.yCoord++;
        break;
      case "EAST":
        this.xCoord++;
        break;
      case "SOUTH":
        this.yCoord--;
        break;
      case "WEST":
        this.xCoord--;
        break;
    }
  }

  //TURN
  rotateRight() {
    switch (this.facing) {
      case "NORTH":
        this.facing = "EAST";
        break;
      case "EAST":
        this.facing = "SOUTH";
        break;
      case "SOUTH":
        this.facing = "WEST";
        break;
      case "WEST":
        this.facing = "NORTH";
        break;
    }
  }

  rotateLeft() {
    switch (this.facing) {
      case "NORTH":
        this.facing = "WEST";
        break;
      case "EAST":
        this.facing = "NORTH";
        break;
      case "SOUTH":
        this.facing = "EAST";
        break;
      case "WEST":
        this.facing = "SOUTH";
        break;
    }
  }

  //REPORT
  reportPosition() {
    return this.xCoord + "," + this.yCoord + "," + this.facing;
  }
}

class Table {
  constructor(xMax, yMax) {
    this.xMax = xMax;
    this.yMax = yMax;
  }

  //Is the bot on the table?
  checkPosition(robot) {
    if (robot.xCoord < 0) {
      console.log("I can't go that way!");
      robot.xCoord = 0;
    }
    if (robot.yCoord < 0) {
      console.log("I can't go that way!");
      robot.yCoord = 0;
    }
    if (robot.xCoord > this.xMax) {
      console.log("I can't go that way!");
      robot.xCoord = this.xMax;
    }
    if (robot.yCoord > this.yMax) {
      console.log("I can't go that way!");
      robot.yCoord = this.yMax;
    }
  }
}

function handleInput(input) {
  let placed = false;
  if (input.startsWith("PLACE")) {
    placed = true;
    return new Robot(input.charAt(6), input.charAt(8), input.substring(10));
  } else if (placed === true) {
    if (input === "MOVE") {
    }
  }
}

const testTable = new Table(5, 5);

var testBot = new Robot(0, 0, "NORTH");

bot1 = handleInput("PLACE 1,2, EAST");
console.log(bot1.reportPosition());
