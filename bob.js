class Bob {
    constructor(x,y,r) {
        var options={
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body)
    }
    
    display() {
        push();
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();


    }

}