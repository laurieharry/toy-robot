class Robot {
  constructor(facing, xCoord, yCoord) {
    this.facing = facing;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  //PLACE X,Y,F

  //MOVE

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

  rotatteLeft() {
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
