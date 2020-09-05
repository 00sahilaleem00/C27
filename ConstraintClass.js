class ConstraintClass {
    constructor(bodyA,bodyB){
        var constraintoptions = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 100,
            stiffness: 0.5
        }
        
        this.chain = Constraint.create(constraintoptions);
        World.add(world,this.chain);

    }

    display(){
        strokeWeight(10);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}