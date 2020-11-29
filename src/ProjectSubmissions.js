import React from 'react';
import './ProjectSubmissions.css';
import Aiden from './aiden.JPG'; 
import AidenEnlarge from './aidenEnlarge.JPG';
import Rawiri from './rawiri.JPG'; 
import Neveah from './neveah.JPG'; 
import './react-medium-image-zoom/styles.css';
import Zoom, { Controlled as ControlledZoom } from 'react-medium-image-zoom';


function ProjSub () {

    return ( 

<div>
    <div className = 'headNav'>
        White here with logo - 
    </div>
    <div className = 'Container'> 

    <div className = 'buttonGroup'>
    <button className="button3" onClick={() => this.handleClick()}> Take Screenshot
        </button> 
        <button className="button4" onClick={() => this.handleClick()}> Help Centre
        </button> 
        <button className="button5" onClick={() => this.handleClick()}> More Projects
        </button> 
    </div>

    <div className = 'projectSubmissions'>
    
    <div className = 'sideBarButtons'>
        
        <button className= 'Checkbox1' type="submit"></button> 
        <button className= 'Checkbox2' type="submit"></button>
        <button className= 'Checkbox3' type="submit"></button>
    </div>


      <div className = 'projectSubmissionsText'>
      PROJECT SUBMISSIONS 
      DOWNLOAD FILES
      MARK AS COMPLETE PROJECT
      </div>

      <div className = 'aidenSubmit'>
    <article className = 'aidenPic'>
      <img className = "Aiden" src={Aiden} />  

    </article>

  <script src="https://unpkg.com/react-medium-image-zoom"></script>

{/* 
     {/* <Zoom>
    <img className = "aidenEnlarge" src={AidenEnlarge} />   
    </Zoom>   */}

 const MyComponent = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
    <img
      alt="aidenEnlarge"
     onLoad={handleImgLoad}
         src='./aidenEnlarge.JPG'
         width="500"
       />
     </ControlledZoom>
   ) 

        </div>
      <div className = 'rawiriShow'>

      <article className = "rawiriPic">
          <img className = "Rawiri" src={Rawiri} />  
      </article>
      <p>RAWIRI wants to show his project</p> 
    
    </div>

    <div className = 'neveahShow'>

      
      <article className  = "neveahPic">
         <img className = "Neveah" src={Neveah} />  
      </article>
      <p>NEVEAH wants to show her project</p> 

    </div>
    </div>

 <div className = 'sideBar'>
     Picture here
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>

  PROGRESS TRACKER<br></br>
  STUDENT PROFILES<br></br>
  HELP REQUESTS<br></br>
  PROJECT LIBRARY<br></br>

        </div>
      
    </div>
</div>

    );

}

export default ProjSub;