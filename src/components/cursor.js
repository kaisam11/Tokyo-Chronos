import React from 'react'
import gsap from 'gsap'

const Cursor = () => {
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
            <div className='cursor' ref={cursor}>
            </div>
        </>
    )
}

export default Cursor
