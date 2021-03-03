class Plinko {
    constructor(x,y){
        var options = {
            //restitution : 1.2 , 
            //friction: 0.1,
            isStactic : true

        }
        this.r =10 ;
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.position ;
        var angle = this.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(centre);
        noStroke();
        fill("white")
        ellipseMode(centre)
        ellipse(0,0,this.r,this.r);
        pop();
    }
}