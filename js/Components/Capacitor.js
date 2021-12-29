
class Capacitor extends ComponentTemplate{

    constructor(id="0", netA=0, netB=0, capacitance=1,omega=0){
        if(omega == 0){
            var matrix = [new MatrixEntry(netA,netA,0), new MatrixEntry(netA,netB,0),
                new MatrixEntry(netB,netA,0), new MatrixEntry(netB,netB,0)]; 
        }
        else{
            var matrix = [new MatrixEntry(netA,netA,(math.i*omega*capacitance)), new MatrixEntry(netA,netB,-(math.i*omega*capacitance)),
                new MatrixEntry(netB,netA,-(math.i*omega*capacitance)), new MatrixEntry(netB,netB,(math.i*omega*capacitance))];
        }
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.capacitance = capacitance;
        this.omega = omega;
        this.value = this.capacitance;
        this.id = id; 
    }

}