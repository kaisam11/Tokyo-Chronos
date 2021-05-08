import React from 'react'
import tc2 from '../images/tc2.webp'
import tc3 from '../images/tc3.webp'

const Features = () => {

    return (
        <>
            <section className="features">
                <div className="features__first">
                    <div className="img">
                        <img src={tc2} alt="tc2" />
                    </div>
                    <div className="text v1">
                        <h1>vibrant</h1>
                        <h1>3d graphics</h1>
                    </div>
                </div>
                <div className="features__second">
                    <div className="img">
                        <img src={tc3} alt="tc3" />
                    </div>
                    <div className="text v2">
                        <h1>Heavily</h1>
                        <h1>story driven</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
