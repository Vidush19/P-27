class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:0.0,
            density:0.5
        }
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill("magenta");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}