do {
    //switch and router connected to buttons that swap all the pre populated text and changes the buttons between each scene.
}
while (player.health > 0);


render = () => {return (
<>


{
//Store (1-1-1)
}

<div id = {"1-1-1"}>
{this.setState({progress:111})}
    <div>
        <p>
            The year is 2172 and you are ${player.name} and you are working in a small store selling
            convience store items. Its raining outside. Its always raining. You go about sorting
            the new items on the shelves before heading back to the register. Some guy walks in, he's got a few cybernetic parts here and there but mostly human.
            You nod to him as he walks down one of the aisles. It'll be closing time soon. You look at your list of tasks you have to get done by the end of the day.
            Reorganize the shelves. Done. 
            Clean the break room.
            Clean the Bathroom.
            Upload the credits to the bank.
            Lock up.
            You guess you should get it done now.
            You check out the guy who enterted the store and flip the sign to closed.
        </p>
    </div>
    <div>
        <button onClick={()=> moveToArea("1-2-1")} className={}>Clean The Break Room</button>
    </div>
</div>


{
    //Break Room (1-2-1)
}

<div id = {"1-2-1"}>
{this.setState({progress:112})}
    <div>
        <p>
            Heading to the break room you open the door and flick on the light.
            A small metal table sits in the middle of the room, a coffee maker and and some bagels sitting on a counter on the otherside of the room.
            The Table is covered in crumbs and there's some trash and spills on the floor.
            }
        </p>
    </div>
    <div> 
        <button onClick={()=> moveToArea("1-2-2")} className={}>Wipe down the table tops</button>
    </div>
</div>






{
    //Break Room 2 (1-2-2)
}

<div id = {"1-2-2"}>
{this.setState({progress:122})}
    <div>
        <p>
            You head in and walk to the back wall, grabbing the bagels and tossing them in the bin.
            Grabbing a cloth and wetting it you start to wipe down the counter top before moving to the tabletop and reapeating.
        </p>
    </div>
    <div> 
        <button onClick={()=> moveToArea("1-2-3")} className={}>Sweep</button>
    </div>
</div>







{
    //Break Room 3 (1-2-3)
}

<div id = {"1-2-3"}>
{this.setState({progress:123})}
    <div>
        <p>
            You grab the little broom out of the corner and work your way across the floor in overlapping lines to make sure you get everything nice and clean.
        </p>
    </div>
    <div> 
        <button onClick={()=> moveToArea("1-2-4")} className={}>Mop</button>
    </div>
</div>






{
    //Break Room 4 (1-2-4)
}

<div id = {"1-2-4"}>
{this.setState({progress:124})}
    <div>
        <p>
            Now that the floor has been swept its time to mop. You put the broom in the corner and grab the mop and bucket,
             which you promptly fill with artificial pine extract and warm water. 
             Swirling the mop over the ground in circles you go over the entire room a few times before wringing out the mop one final time and setting it aside to dry.
             taking the bucket with you out of the room you head down the short hall to the back door so you can dump it out in the alley.
             opening up the door to the outside youre greated with the smell of the large city, fumes concrete and rain.
             It's not all together unpleasant and you take a few breaths of "fresh" air before heading back inside.
             You put the mop back and head back into the main room.
        </p>
    </div>
    <div> 
        <button onClick={()=> moveToArea("1-3-1")} className={}>Clean The Bathroom</button>
    </div>
</div>







{
    //Bathroom (1-3-1)
}

<div id = {"1-3-1"}>
{this.setState({progress:131})}
    <div>
        <p>
            
        </p>
    </div>
    <div>
        <button onClick={()=> moveToArea("1-4-1")} className={}>Upload Credits</button>
    </div>
</div>




{
    //Upload Credits (1-4-1)
}

<div id = {"1-4-1"}>
{this.setState({progress:141})}
    <div>
        <p>
            
        </p>
    </div>
    <div>
        <button onClick={()=> moveToArea("1-5-1")} className={}>Lock Up</button>
    </div>
</div>





{
    //Lock Up (1-5-1)
}
<div id = {"1-5-1"}>
{this.setState({progress:115})}
    <div>
        <p>
            
        </p>
    </div>
    <div>
        <button onClick={()=> moveToArea("1-5-2")} className={}>RUN</button>
    </div>
</div>

{
    //RUN (1-5-2)
}

<div id = {"1-5-2"}>
{this.setState({progress:152})}
    <div>
        <p>
            
        </p>
    </div>
    <div>
        <button onClick={()=> moveToArea("2-1-1")} className={}>You Have To Keep Moving</button>
    </div>
</div>


</>)}