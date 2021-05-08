import React from 'react'
import tc4 from '../images/tc4.webp'
import tc5 from '../images/tc5.webp'
import tc6 from '../images/tc6.webp'

const Cards = () => {
    return (
        <>
            <section className="cards container">
                <div className="cards__1">
                    <img src={tc4} alt="tc4" />
                    <div className="text">
                        <h3>Best VR experience</h3>
                        <p>
                            Ullamcorper feugiat nisi, faucibus sit dui, sodales viverra pellentesque. Libero, pellentesque pharetra pretium diam sagittis, nullam mattis condimentum sed.
                        </p>
                    </div>
                </div>

                <div className="cards__2">
                    <img src={tc5} alt="tc4" />
                    <div className="text">
                        <h3>Long story</h3>
                        <p>
                            Ullamcorper feugiat nisi, faucibus sit dui, sodales viverra pellentesque. Libero, pellentesque pharetra pretium diam sagittis, nullam mattis condimentum sed.
                            </p>
                    </div>
                </div>

                <div className="cards__3">
                    <img src={tc6} alt="tc4" />
                    <div className="text">
                        <h3>Weekly updates</h3>
                        <p>
                            Ullamcorper feugiat nisi, faucibus sit dui, sodales viverra pellentesque. Libero, pellentesque pharetra pretium diam sagittis, nullam mattis condimentum sed.
                            </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards
