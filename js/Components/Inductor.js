
class Inductor extends ComponentTemplate{

    constructor(id="0", netA=0, netB=0, inductance=1,omega=0,gMax = 100000){
        if(omega == 0){
            var matrix = [new MatrixEntry(netA,netA,gMax), new MatrixEntry(netA,netB,gMax),
                new MatrixEntry(netB,netA,gMax), new MatrixEntry(netB,netB,gMax)];
        }
        else{
            var matrix = [new MatrixEntry(netA,netA,1/(math.i*omega*inductance)), new MatrixEntry(netA,netB,-1/(math.i*omega*inductance)),
                new MatrixEntry(netB,netA,-1/(math.i*omega*inductance)), new MatrixEntry(netB,netB,1/(math.i*omega*inductance))];
        }
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.inductance = inductance;
        this.omega = omega;
        this.value = this.inductance;
        this.id = id; 
    }

}