import React from 'react'
import Card from '../Card/Card'
import Slider from '../Slider'
import styles from "./Main.css"

export default function Main() {
    return (
        <div>
            <div className="main">
                <div>
                <Slider/>
                <Card />
                </div>
                <div className="main__reccomendation">
                    
                </div>
            </div>
        </div>
    )
}
