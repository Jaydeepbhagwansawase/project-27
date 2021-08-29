class Rope{
    constructor(bodyA,bodyB,x1,y1){
        this.x=x1;
        this.y=y1;
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.x,y:this.y},
            
        }
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
    }
    display(){
    var A = this.sling.bodyA.position;
    var B = this.sling.bodyB.position;
    var C = B.x+this.x;
    var D = B.y+this.y;
    strokeWeight(5);
    fill("black");
    line(A.x,A.y,C,D);
    }
}