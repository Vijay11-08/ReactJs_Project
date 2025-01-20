//3. implementation image change with the help of useeffects.
//   create a list of 4 images and change images at interval of 4 seconds

import * as react from "react";

function ImageChange(){
    const [image, setImage] = react.useState("image1.jpg");
    let intial=0;
    let interval;
    react.useEffect(()=>{
        const imaList = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]
        interval = setInterval(()=>{
            setImage(imaList[intial % imaList.length])
            intial++;
        },4000);
    },[]);
            return(
                <div>
                    <img width="270px" height="400px" src={"src/Lecture20_01_2025/image/"+image} alt="Image"/>
                    <p>Change every 4 seconds</p>
                    <button onClick={() =>clearInterval(interval)}>Stop</button>
                    </div>
            
            );
    }
export default ImageChange;