class Iron{
	constructor(x,y)
	{
	    var options = {
			restitution:0.8,
			friction:3,
			density:30
		}
		this.x=x;
		this.y=y;
		this.w=50;
        this.h=50;
		this.body=Bodies.rectangle(x, y, this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("silver");

			rect(0,0,this.w,this.h);

			pop()
    }
}