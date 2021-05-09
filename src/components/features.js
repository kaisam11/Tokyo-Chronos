import React from 'react'
import tc2 from '../images/tc2.webp'
import tc3 from '../images/tc3.webp'

const Features = ({onCursor}) => {

    return (
        <>
            <section className="features">
                <div className="features__first" onMouseLeave={onCursor} onMouseEnter={() => onCursor("video-min")}>
                    <div className="img">
                        <img src={tc2} alt="tc2" />
                        <p>press below</p>
                    </div>
                    <div className="text v1" >
                        <h1 onMouseLeave={() => onCursor("video-min")} onMouseEnter={() => onCursor("video")}>vibrant</h1>
                        <h1 onMouseLeave={() => onCursor("video-min")} onMouseEnter={() => onCursor("video")}>3d graphics</h1>
                    </div>
                </div>
                <div className="features__second" onMouseLeave={onCursor} onMouseEnter={() => onCursor("video-min")}>
                    <div className="img">
                        <img src={tc3} alt="tc3" />
                        <p>press below</p>
                    </div>
                    <div className="text v2">
                        <h1 onMouseLeave={() => onCursor("video-min")} onMouseEnter={() => onCursor("video")}>Heavily</h1>
                        <h1 onMouseLeave={() => onCursor("video-min")} onMouseEnter={() => onCursor("video")}>story driven</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
