import React, {useState, useRef} from 'react'
import styles from "../Slider/Slider.css"
import cn from "classnames"

const Slider = () => {

    const slider = useRef(null)

    const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12])

    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    let position = 0
    const prevHandler = () =>{
        if (position === 0){
            setPrev(true)
        } else{
            position += 105
            setPrev(false)
            slider.current.childNodes.forEach((element) =>{
                element.style = `transform: translateX(${position}px)`
            })
        }
    }
    const nextHandler = () =>{
        if (position <= -(items.length - 6) * 100){
            setNext(true)
        } else{
            position -= 107
            setNext(false)
        slider.current.childNodes.forEach((element) =>{
            element.style = `transform: translateX(${position}px)`
        })
    }
    }
    return (
        <div>
            <div className="slider">
                <div className = "slider__track" ref={slider}>
                    {items.map(() =>{
                        return(
                        <div className="slider__item">
                            
                        </div>
                        )
                    })}
                </div>
                <button className={cn("slider__button", "slider__button_prev")} onClick={prevHandler}>{"<"}</button>
                <button className={cn("slider__button", "slider__button_next")} onClick={nextHandler}>{">"}</button>
            </div>
        </div>
    )
}

export default Slider