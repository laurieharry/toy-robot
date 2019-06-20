class Robot {
  constructor(facing, xCoord, yCoord) {
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
    return this.xCoord + "," + this.yCoord + "," + this.facing;
  }
}

class Table {
  constructor(xMax, yMax) {
    this.xMax = xMax;
    this.yMax = yMax;
  }
}
