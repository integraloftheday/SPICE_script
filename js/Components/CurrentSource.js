class CurrentSource extends ComponentTemplate{
    constructor(netA, netB, current){
        var matrix = [new MatrixEntry(netA,MatrixEntry.colEnd,current), new MatrixEntry(netB,MatrixEntry.colEnd,-current)];
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.current = current;
        this.value = current;
    }
}