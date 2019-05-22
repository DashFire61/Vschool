import React from "react";
import bodyImage from './TheSardines.jpg'
import bodyImage2 from './TheSardines3.jpg'
import bodyImage3 from './TheSardines2.jpg'


function AboutUsBody(props) {

  const bodyStyle1 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '2vh',
    marginLeft: '20vh',
    clear: 'left',
    float: 'left',
    maxWidth: '40%',
  };

  const image1 = {
    height: "85vh",
    marginRight: '18%',
    float: 'right',
    clear: 'right',
    marginTop: '2%',
  }

  const image2 = {
    height: "60vh",
    marginLeft: '12%',
    float: 'left',
    clear: 'left',
    marginTop: '2%',
  }

  const bodyStyle2 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '5vh',
    marginRight: '16vh',
    clear: 'right',
    float: 'right',
    maxWidth: '45%',
  };
  
  const image3 = {
    height: "50vh",
    marginRight: '12%',
    float: 'right',
    clear: 'right',
    marginTop: '-8%',
    marginBottom:'10%',
  }

  const bodyStyle3 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '4vh',
    marginLeft: '20vh',
    clear: 'left',
    float: 'left',
    maxWidth: '32%',
    marginTop: '10%',
  };

    return (
       

          <div>
            <p style={bodyStyle1}>
            Sean Mena is the lead singer/guitarist for the sardines. Born from a Cuban father and Puerto Rican mother, he grew up in a small town called Heber in Utah. He founded the sardines in high school and continued performing all over Utah trying to find the best fit members for the band. Sean is studying computer engineering at Utah Valley University and likes to build computers and code in his spare time. Aside from songwriting, performing, and computers Sean loves to produce locals bands in his bedroom. Sean’s main songwriting inspirations are DIY musicians such as: Still Woozy, Yellow Days, and Mac Demarco. He has his own DIY project called Kipper Snack.
            </p>
            <img src={bodyImage} style={image1}/>
            <img src={bodyImage2} style={image2}/>
            <p style={bodyStyle2}>
            Tanner Evans is a multi-instrumentalist from Salt Lake City currently playing bass in the Sardines. Aside from writing, recording, and performing music, he enjoys reading, watching historical documentaries, hiking, snowboarding and exploring his current state of Utah living. Although born in the mountains, he would go on to live overseas on the island of Borneo, in Indonesia. This experience instilled a fascination in world culture and geography, as well as a love for the people of our planet. He wants to be the piano player in the Sardines.
            </p>
            <p style={bodyStyle3}>
            Kolby Carrillo is the drummer for The Sardines. He's been playing for 10 years. He started out self taught and then later learned music theory and classical percussion. His biggest inspiration on the drums is a jazz style of drumming. Kolby's biggest Inspirations are Max Roach, Art Blakey, John Bonham, Anderson Paak, Ronald Bruner Jr., Milt Jackson.            
            </p>
            <p style={bodyStyle3}>
            Cole Laulis is the lead guitarist of the Sardines as well as an engineering student at the University of Utah. He was raised in Phoenix, AZ and began playing music when he was 6. Some of his favorite artists are Pink Floyd, George Harrison and Frightened Rabbit. When Cole isn’t studying or playing music he enjoys hiking, climbing, and building things. He also prefers pancakes over waffles.
            </p>
            <img src={bodyImage3} style={image3}/>
          </div>


    )
}

export default AboutUsBody;