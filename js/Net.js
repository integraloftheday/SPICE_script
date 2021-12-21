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

    loadNet(netString){
        var elementSplit = netString.split("\n");
        var i = 0;
        var nodes = [];
        while(elementSplit[i].replaceAll(" ","") !=".END" & i<elementSplit.length){ 
            var element = elementSplit[i].split(" ");
            element = element.filter((e) => {return e !=""});
            //console.log(element)
            nodes.push(parseInt(element[1]));
            nodes.push(parseInt(element[2]));
            if(element[0][0] == "I"){ //current source
                this.addComponent(new CurrentSource(element[0],parseInt(element[1]),parseInt(element[2]),parseFloat(element[3])));
            }
            else if(element[0][0] == "R"){ //resistor
                this.addComponent(new Resistor(element[0],parseInt(element[1]),parseInt(element[2]),1/parseFloat(element[3])));
            }
            i++;
        }
        //console.log(nodes);
        this.totalNets = Math.max(...nodes)+1;
    }

    getMatrix(){
        var matrix = this.components[0].fullMatrix(this.totalNets);
        for(var i=1; i<this.components.length; i++){
            matrix = math.add(matrix, this.components[i].fullMatrix(this.totalNets));
        }
        matrix = removeCol(matrix, this.groundNet);
        matrix = removeRow(matrix, this.groundNet);
        return matrix;
    }

    linearSolve(){
        var matrix = this.getMatrix();
        var solution = this.Solver.rref(matrix);
        return solution;
    }
}