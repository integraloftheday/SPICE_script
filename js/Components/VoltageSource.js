class VoltageSource extends ComponentTemplate{  
/*
 Modeled using a source transformation with a small parallel resistor. Determined my Gshunt. 
 This assumes the Rth of the rest of the circuit is negligible is much larger than 1/Gshunt.
*/

    constructor(id="0", netA=0, netB=0, voltage=0,gShunt=1000){
        var matrix = [new MatrixEntry(netA,netA,gShunt), new MatrixEntry(netA,netB,-gShunt),
            new MatrixEntry(netB,netA,-gShunt), new MatrixEntry(netB,netB,gShunt),
            //above is resistors below is current source
            new MatrixEntry(netA,MatrixEntry.colEnd,-voltage*gShunt), new MatrixEntry(netB,MatrixEntry.colEnd,-voltage*gShunt)];
        super(matrix);
        this.gShunt = gShunt; 
        this.netA = netA;
        this.netB = netB;
        this.current = voltage*gShunt;
        this.voltage = voltage;
        this.value = voltage;
        this.id = id; 
    }
}