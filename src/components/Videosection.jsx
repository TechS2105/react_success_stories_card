import React, {useState} from 'react';
import VideoSection from '../../public/styles/Videocontainer.module.css';
import { CiPlay1 } from "react-icons/ci";

let image1 = "../../public/images/pexels-nahmadofficial-10467168.jpg";
let image2 = "../../public/images/pexels-helenalopes-27086886.jpg";
let image3 = "../../public/images/pexels-vanessa-garcia-6326346.jpg";
let image4 = "../../public/images/pexels-cristian-rojas-10041267.jpg";

function Videosection(props) {

    const [changeWidth, setWidth] = useState();
    const [textRotation, setTextRotation] = useState();
    const [buttonRotation, setButtonRotation] = useState();
    const [paraText, setParaText] = useState();
    const [imageAnimation, setImageAnimation] = useState();

    function changeContainerWidth() {
        
        setWidth({

            width: "300px",
            transition: "all 0.8s ease",
            border: "5px solid #fff"

        });

        setTextRotation({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            textTransform: "Capitalize",
            left: "20px",
            bottom: "80px",
            letterSpacing: "0px",

        });

        setButtonRotation({

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.8s ease",
            fontSize: "80px",
            color: "#f2f32f",

        });

        setParaText({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            fontSize: "17px"

        });

        setImageAnimation({

            opacity: "0.7",
            transition: "all 0.8s ease"

        });

        // Second Container

        setSecondContainerWidth({

            width: "200px",
            transition: "all 0.8s ease"

        });

        setSecondTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setSecondButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: 'all 0.8s ease'

        });

        setSecondParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease"

        });

        setSecondImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        // Third container animation

        setThirdContainerWidth({

            width: "200px",
            transition: "all 0.8s ease"

        });

        setThirdTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setThirdImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        setThirdParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setThirdButtonRotation({

            bottom: "26px",
            left: "142px",
            transform: "translate(0%, 0%)",
            transition: "all 0.8s ease"

        });

                // Fourth Image Container 
        setFourthContainerWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setFourthImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease",

        });

        setFourthTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setFourthParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setFourthButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease",
            transform: "translate(0%, 0%)",

        });


    }

    {/** Second Container useState */ }

    const [secondContainerWidth, setSecondContainerWidth] = useState();
    const [secondTextRotation, setSecondTextRotation] = useState();
    const [secondButtonRotation, setSecondButtonRotation] = useState();
    const [secondImageAnimation, setSecondImageAnimation] = useState();
    const [secondParaText, setSecondParaText] = useState();

    function secondContainerWidthFun() {
        
        // Second Container

        setSecondContainerWidth({

            width: "300px",
            transition: 'all 0.8s ease',
            border: "5px solid #fff"

        });

        setSecondTextRotation({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            left: "20px",
            bottom: "80px",
            textTransform: "capitalize",
            letterSpacing: "0px"

        });

        setSecondButtonRotation({

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.8s ease",
            fontSize: "80px",
            color: "#f2f32f"

        });

        setSecondImageAnimation({

            opacity: "0.7",
            transition: "all 0.8s ease"

        });

        setSecondParaText({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            fontSize: "17px"

        });

        // First container

        setWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease"

        });

        setParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        // Third iamge container

        setThirdContainerWidth({

            width: "200px",
            transition: "all 0.8s ease"

        });

        setThirdTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setThirdImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        setThirdParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setThirdButtonRotation({

            bottom: "26px",
            left: "142px",
            transform: "translate(0%, 0%)",
            transition: "all 0.8s ease"

        });

                // Fourth Image Container 
        setFourthContainerWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setFourthImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease",

        });

        setFourthTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setFourthParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setFourthButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease",
            transform: "translate(0%, 0%)",

        });


    }
    
    {/** Third Container useState */ }
    
    const [thirdContainerWidth, setThirdContainerWidth] = useState();
    const [thirdTextRotation, setThirdTextRotation] = useState();
    const [thirdButtonRotation, setThirdButtonRotation] = useState();
    const [thirdParaText, setThirdParaText] = useState();
    const [thirdImageAnimation, setThirdImageAnimation] = useState();

    function thirdContainerWidthFun() {

        // Third image container 

        setThirdContainerWidth({

            width: "300px",
            transition: "all 0.8s ease",
            border: "5px solid #fff"

        });

        setThirdTextRotation({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            left: "20px",
            bottom: "80px",
            textTransform: "capitalize",
            letterSpacing: "0px",

        });

        setThirdButtonRotation({

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.8s ease",
            fontSize: "80px",
            color: "#f2f32f"

        });

        setThirdParaText({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            fontSize: "17px"

        });

        setThirdImageAnimation({

            opacity: "0.7",
            transition: "all 0.8s ease"

        });

        // Second image container

        setSecondContainerWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setSecondTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setSecondButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease",

        });

        setSecondParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setSecondImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        })

        // First container

        setWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease"

        });

        setParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        // Fourth Image Container 
        setFourthContainerWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setFourthImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease",

        });

        setFourthTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setFourthParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setFourthButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease",
            transform: "translate(0%, 0%)",

        });

    }

    {/** Fourth Image Container */ }
    
    const [fourthContainerWidth, setFourthContainerWidth] = useState();
    const [fourthImageAnimation, setFourthImageAnimation] = useState();
    const [fourthTextRotation, setFourthTextRotation] = useState();
    const [fourthParaText, setFourthParaText] = useState();
    const [fourthButtonRotation, setFourthButtonRotation] = useState();

    function fourthContainerWidthFun() {
        
        setFourthContainerWidth({

            width: "300px",
            transition: "all 0.8s ease",
            border: "5px solid #fff",

        });

        setFourthImageAnimation({

            opacity: "0.7",
            transition: "all 0.8s ease",

        });

        setFourthTextRotation({

            transform: "rotate(0deg)",
            transition: "all 0.8s ease",
            letterSpacing: "0px",
            left: "20px",
            bottom: "80px",
            textTransform: "capitalize",

        });

        setFourthParaText({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            fontSize: "17px",

        });

        setFourthButtonRotation({

            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.8s ease",
            fontSize: "80px",
            color: "#f2f32f"

        });

        // First container

        setWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease"

        });

        setParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        // Second image container

        setSecondContainerWidth({

            width: "200px",
            transition: "all 0.8s ease",

        });

        setSecondTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setSecondButtonRotation({

            bottom: "26px",
            left: "142px",
            transition: "all 0.8s ease",

        });

        setSecondParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setSecondImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        // Third container animation

        setThirdContainerWidth({

            width: "200px",
            transition: "all 0.8s ease"

        });

        setThirdTextRotation({

            transform: "rotate(-90deg)",
            transition: "all 0.8s ease",

        });

        setThirdImageAnimation({

            opacity: "1",
            transition: "all 0.8s ease"

        });

        setThirdParaText({

            transform: "translateY(500px)",
            transition: "all 0.8s ease",

        });

        setThirdButtonRotation({

            bottom: "26px",
            left: "142px",
            transform: "translate(0%, 0%)",
            transition: "all 0.8s ease"

        });

    }

    return (

        <div className={VideoSection.container}>

            <div className={VideoSection.text}>

                <h4> { props.subheading } </h4>
                <h1> {props.heading} </h1>   

            </div>

            <div className={VideoSection.videocontainer}>

                {/** First Container */}

                <div className={VideoSection.imagecontainer} onMouseOver={changeContainerWidth} style={changeWidth}>

                    <img src={image1} style={imageAnimation} />
                    <h2 style={textRotation}> Rohan Sarkar </h2>
                    <p style={paraText}> Our capacity to be dependable and committed allowed us to expand our customer base vertically.</p>
                    <button style={buttonRotation}><CiPlay1 /></button>

                </div>

                {/**  Second Container */} 
                
                <div className={VideoSection.imagecontainer} onMouseOver={secondContainerWidthFun} style={secondContainerWidth}>

                    <img src={image2} style={secondImageAnimation} />
                    <h2 style={secondTextRotation}> Helena Lopes </h2>
                    <p style={secondParaText}> I'd want to suggest ACTF Pvt. Ltd. to create your website.</p>
                    <button style={secondButtonRotation}><CiPlay1 /></button>

                </div>

                {/** Third Container */}

                <div className={VideoSection.imagecontainer} onMouseOver={thirdContainerWidthFun} style={thirdContainerWidth}>

                    <img src={image3} style={thirdImageAnimation} />
                    <h2 style={thirdTextRotation}> Monish Barma </h2>
                    <p style={thirdParaText}> ACTF Pvt. Ltd. premium custom website construction was excellent, and their prices are quite affordable.</p>
                    <button style={thirdButtonRotation}><CiPlay1 /></button>

                </div>

                {/** Fourth Container */}

                <div className={VideoSection.imagecontainer} onMouseOver={fourthContainerWidthFun} style={fourthContainerWidth}>

                    <img src={image4} style={fourthImageAnimation} />
                    <h2 style={fourthTextRotation}> Cristiana Roji </h2>
                    <p style={fourthParaText}> Choosing ACTF Pvt. Ltd. was smart—their customer support is fast, reliable, and genuinely helpful every time.</p>
                    <button style={fourthButtonRotation}><CiPlay1 /></button>

                </div>

            </div>

        </div>

    );

}

export default Videosection;