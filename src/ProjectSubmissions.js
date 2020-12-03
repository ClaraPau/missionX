import './ProjectSubmissions.css';
import Aiden from './aiden.JPG';
import aidenEnlarge from './aidenEnlarge.JPG';
import Rawiri from './rawiri.JPG';
import Neveah from './neveah.JPG';
import './react-medium-image-zoom/styles.css';
import Zoom, { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import React, {useCallback, useState} from 'react';
// import SideNavbar from './SideNavbar'; Callum's sidenavbarlink


// function ProjSub() {

    const MyComponent = () => {
        const [isZoomed, setIsZoomed] = useState(false)

        const handleImgLoad = useCallback(() => {
            setIsZoomed(true)
        }, [])

      const handleZoomChange = useCallback(shouldZoom => {
           setIsZoomed(shouldZoom)
       }, [])
     
        return (

            <div>
                <div className='headNav'>
                    White here with logo -
            </div>
                <div className='Container'>

                    <div className='buttonGroup'>
                        <button className="button3" onClick={() => this.handleClick()}> Take Screenshot
                        </button>
                        <button className="button4" onClick={() => this.handleClick()}> Help Centre
                        </button>
                        <button className="button5" onClick={() => this.handleClick()}> More Projects
                        </button>
                    </div>

                    <div className='projectSubmissions'>
                        <div className='sideBarButtons'>
                            <button className='Checkbox1' type="submit"></button>
                            <button className='Checkbox2' type="submit"></button>
                            <button className='Checkbox3' type="submit"></button>
                        </div>


                        <div className='projectSubmissionsText'>
                            PROJECT SUBMISSIONS
                            DOWNLOAD FILES
                            MARK AS COMPLETE PROJECT
                        </div>

                        <div className='aidenSubmit'>

                        <div className="item07"> 
                        
                        <img className="Aiden" src={Aiden} alt = "aiden" />  </div>

                        <div className="item08"><p>AIDEN submitted his project</p>

                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                                <img
                                    alt = "aidenEnlarge"
                                    onLoad={handleImgLoad}
                                    src= {aidenEnlarge}
                                    width="300"
                                />
                            </ControlledZoom>   

        
                            <p>ENLARGE PHOTO</p> 
                            </div>
                                {/* <button className ="imgLink">
	                            <img src = {aidenEnlarge} alt= "AE" />
                                </button></div> */}


                        <div className="item09">TUE 28 April 2020<br></br>
                                                          10:43AM</div>  

                             {/* <article className='aidenPic'>
                                <img className="Aiden" src={Aiden} alt = "aiden" /> 
                    
                             </article> 
                       AIDEN wants to submit his project
                            <div className = "Englage">
                    {/* <button className ="imgLink">
	                <img
	                src ={aidenEnlarge}
	                alt="AE"
	                />
                    </button> */}
</div>

                        <div className='rawiriShow'>
                        <div className="item04"><img className="Rawiri" src={Rawiri} alt = "rawiri" /> </div>
                         <div className="item05"><p>RAWIRI wants to show her project</p></div>
                        <div className="item06">TUE 28 April 2020<br></br>
                                                          10:27AM</div>  
              
                        {/* <article className="rawiriPic">
                        <img className="Rawiri" src={Rawiri} alt = "rawiri" />
                        </article>
                        <p>RAWIRI wants to show his project</p>  */}
                        </div>

                        <div className='neveahShow'>

                          {/* <article className="neveahPic">  */}

        <div className="item01"> <img className="Neveah" src={Neveah} alt = "neveah" /></div>
        <div className="item02"><p>NEVEAH wants to show her project</p></div>
        <div className="item03">TUE 28 April 2020<br></br>
                                          9:58AM</div> 
                             {/* </article>  */}
                           

                        </div>
                    </div>

                    <div className='sideBar'>
                        Callum's nav bar
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

export default MyComponent;