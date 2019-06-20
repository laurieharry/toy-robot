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
        this.xCoord++;
        break;
      case "EAST":
        this.yCoord++;
        break;
      case "SOUTH":
        this.xCoord--;
        break;
      case "WEST":
        this.yCoord--;
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
    return this.yCoord + "," + this.xCoord + "," + this.facing;
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
      robot.xCoord = 0;
    }
    if (robot.yCoord < 0) {
      robot.yCoord = 0;
    }
    if (robot.xCoord > this.xMax) {
      robot.xCoord = this.xMax;
    }
    if (robot.yCoord > this.yMax) {
      robot.yCoord = this.yMax;
    }
  }
}

const testBot = new Robot(0, 0, "NORTH");
const testTable = new Table(5, 5);

console.log(testBot.reportPosition());
testBot.rotateRight();
testBot.rotateRight();
testBot.rotateRight();
testBot.moveForward();
testTable.checkPosition(testBot);
console.log(testBot.reportPosition());
