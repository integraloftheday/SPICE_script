var N;

function test(){

    var netString = 
`I1 0 1 3
R1 1 2 5
R2 2 0 10
R3 2 3 5
R4 3 0 10
.END`;

    console.log("NET STRING:\n" + netString);
    N = new Net();
    N.loadNet(netString);

}

function test2(){

    var netString = 
`V1 0 1 1
R1 1 2 5
R2 2 0 10
R3 2 3 5
R4 3 0 10
.END`;

    console.log("NET STRING:\n" + netString);
    N = new Net();
    N.loadNet(netString);

}

function test3(){

    var netString = 
`V1 0 1 1
C1 1 2 5
R2 2 0 10
R3 2 3 5
R4 3 0 10
.END`;

    console.log("NET STRING:\n" + netString);
    N = new Net();
    N.loadNet(netString);

}

function test4(){

    var netString = 
`V1 0 1 1
L1 1 2 5
R2 2 0 10
R3 2 3 5
R4 3 0 10
.END`;

    console.log("NET STRING:\n" + netString);
    N = new Net();
    N.loadNet(netString);

}