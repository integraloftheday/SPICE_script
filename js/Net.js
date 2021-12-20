class Net { 
    constructor(totalNets = 0,groundNet=0, components = []){
        this.components = components; 
        this.totalNets = totalNets;
        this.groundNet = groundNet; 
        this.Solver = new Solver();
    }

    addComponent(component){
        this.components.push(component);
    }

    getMatrix(){
        var matrix = this.components[0].fullMatrix(this.totalNets);
        for(var i=1; i<this.components.length; i++){
            matrix = math.add(matrix, this.components[i].fullMatrix(this.totalNets));
        }
        return matrix;
    }

    solve(){
        var matrix = this.getMatrix();
        var solution = this.Solver.rref(matrix);
        return solution;
    }
}