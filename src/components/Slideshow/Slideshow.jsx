import "./Slideshow.css"
import React from 'react';


const delay = 5000;

function Slideshow(data) {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const images = ["https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg", "https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/movie-maker-alternative.jpg", "https://www.arthouse.ch/wp-content/uploads/2015/07/Movie_2_Saal1_heller-1024x683.jpg"];

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]);

    return (
      <div className="slideshow">
        <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
            {images.map((imageUrl, index) => (
              <div className="slide" key={index} >
                <img src={imageUrl} alt="Not available" className="slideImage"/>
                <p className="slideDesc">
                { index == 0 && "Alle Top Filme"}
                { index == 1 && "Neuste Technik"}
                { index == 2 && "Große Kinosäle"}
                </p>
              </div>
            ))}
        </div>
        <div className="slideshowDots">
        {images.map((_, idx) => (
          <div key={idx}  className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
          ></div>
        ))}
      </div>
      </div>
    );
  }

export default Slideshow;