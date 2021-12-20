
class Resistor extends ComponentTemplate{

    constructor(netA, netB, conductance){
        var matrix = [new MatrixEntry(netA,netA,conductance), new MatrixEntry(netA,netB,-conductance),
            new MatrixEntry(netB,netA,-conductance), new MatrixEntry(netB,netB,conductance)];
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.conductance = conductance;
        this.resistance = 1 / conductance;
    }

}