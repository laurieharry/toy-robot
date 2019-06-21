# Test data

##Test1
PLACE -1,3,NORTH

Should be ignored

##Test2
PLACE 0,8,WEST

Should be ignored

##Test3
PLACE 0,0,NORTH
MOVE
REPORT

Should display 0,1,NORTH

##Test4
PLACE 0,0,WEST
MOVE
REPORT

Should display 0,0,WEST

##Test5
PLACE 0,5,NORTH
MOVE
REPORT

Should display 0,5,NORTH

##Test6
PLACE 0,0,EAST
RIGHT
RIGHT
REPORT

Should display 0,0,WEST

##Test7
PLACE 5,0,EAST
MOVE
REPORT

Should display 5,0,EAST
