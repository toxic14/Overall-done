class SlingShot{
constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.04
}
this.pointB=pointB;
this.Sling=Constraint.create(options)
this.Sling1=loadImage("sprites/sling1.png");
this.Sling2=loadImage("sprites/sling2.png");
this.Sling3=loadImage("sprites/sling3.png");
World.add(world,this.Sling);

}
display(){

    if(this.Sling.bodyA){

    var posA=this.Sling.bodyA.position;
    var posB=this.pointB;

    push()
    if(posA.x<=200){
    stroke(48,22,8)
    strokeWeight(10)
    line(posA.x,posA.y,posB.x-10,posB.y)
    line(posA.x,posA.y-5,posB.x+30,posB.y)

    image(this.Sling3, posA.x-30,posA.y-10,15,30);
    }

    else{
    stroke(48,22,8)
    strokeWeight(6)
    line(posA.x+25,posA.y,posB.x-10,posB.y)
    line(posA.x+25,posA.y+5,posB.x+30,posB.y-3)

    }
    pop()
    }
    image(this.Sling1, 200,20 );
    image(this.Sling2, 170,20 );
}

fly(){

    this.Sling.bodyA=null;

}

attach(worldBody){

    this.Sling.bodyA=worldBody;

}

}