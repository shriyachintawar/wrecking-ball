class Box{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.5,
            density: 1,
            friction: 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height = height;
        //this.image = loadImage("yellow.png");
        World.add(myworld,this.body);
        //this.Visiblity = 255;
    }
    display(){
        console.log(this.body.speed);
        var pos = this.body.position;
        var angle = this.body.angle;


        push();
       rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
        
    }
}