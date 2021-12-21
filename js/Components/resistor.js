
class Resistor extends ComponentTemplate{

    constructor(id="0", netA=0, netB=0, conductance=1){
        var matrix = [new MatrixEntry(netA,netA,conductance), new MatrixEntry(netA,netB,-conductance),
            new MatrixEntry(netB,netA,-conductance), new MatrixEntry(netB,netB,conductance)];
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.conductance = conductance;
        this.resistance = 1 / conductance;
        this.value = this.conductance;
        this.id = id; 
    }

}