class Ground{
    //PROPERTIES
    constructor(x, y, w, h){
        var options = { isStatic: true }

        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);

        this.width = w;
        this.height = h;

    }

    //FUNCTIONS
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width,this.height );
    }

}
/*
this - keyword that refers to the object that will be created using this class

trex.scale = 0.5
trex.isTouching()
*/
