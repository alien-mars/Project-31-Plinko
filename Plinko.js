class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display(){
        // var pos = this.body.posititon;
        //var angle = this.body.angle;

        push();
        //translate(pos.x,pos.y);
        //rotate(angle);
        noStroke();
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r,this.r);
        pop();
    }
}