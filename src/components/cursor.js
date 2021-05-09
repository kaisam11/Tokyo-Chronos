import React from 'react'
import gsap from 'gsap'
import { useGlobalStateContext } from '../context/globalContext'
import tkv2 from '../images/tkv2.webm'

const Cursor = () => {
    const { cursorType } = useGlobalStateContext()

    const cursor = React.useRef(null)
    const cursorConfigs = {
        x: { previous: 0, current: 0, amt: 0.2 },
        y: { previous: 0, current: 0, amt: 0.2 }
    }

    const onMouseMove = event => {

        const { clientX, clientY } = event
        cursorConfigs.x = `${clientX}px`;
        cursorConfigs.y = `${clientY}px`

        gsap.to(cursor.current, {
            left: cursorConfigs.x,
            top: cursorConfigs.y,
            duration: .8,
            ease: 'Power3.easeOut'
        })

    }

    React.useEffect(() => {

        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <div className={`cursor ${!!cursorType ? 'hovered' : ''} ${cursorType}`} ref={cursor}>
                <div className="cursor__media">
                    <video src={tkv2} autoPlay loop muted></video>
                </div>
            </div>
        </>
    )
}

export default Cursor
