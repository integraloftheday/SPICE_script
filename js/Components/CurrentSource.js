class CurrentSource extends ComponentTemplate{
    constructor(id="0", netA=0, netB=0, current=0){
        var matrix = [new MatrixEntry(netA,MatrixEntry.colEnd,-current), new MatrixEntry(netB,MatrixEntry.colEnd,current)];
        super(matrix);
        this.netA = netA;
        this.netB = netB;
        this.current = current;
        this.value = current;
        this.id = id; 
    }
}