class constrained {
    constructor (bodyA, bodyB) {
        var options = {
            bodyA : bodyA, 
            bodyB : bodyB,
            length: 0
        }

            this.chain = Constrained.create(options); 
            World.add(world, this.chain); 

    }

   display() {
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
   }

}