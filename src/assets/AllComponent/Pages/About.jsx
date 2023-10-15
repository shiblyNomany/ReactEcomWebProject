 
import CardTwo from "../Component/CardTwo"
import Titel from "../Component/Titel"
import Progress from "../Component/Progress"

 

const About = () => {
  return (
    <div>
      <Titel MainTitel="Our Services" SubTitel="Create a shoping with ShopSwiftly"/>
      <div className="flex gap-4">
        <CardTwo/>
        <CardTwo/>
        <CardTwo/>
         
      </div>

      <Titel MainTitel="Our Castomer" SubTitel="Castomer is the king"/>

        <div className="flex justify-center">
          <Progress/>
        </div>
    
      <Titel MainTitel="Our Castomer" SubTitel="Castomer is the king"/>
      <div>
          <CardTwo/>
        </div>
    </div>
  )
}

export default About
