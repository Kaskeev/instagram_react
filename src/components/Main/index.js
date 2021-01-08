import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import Slider from '../Slider'
import styles from "./Main.css"

export default function Main() {

    const [cards] = useState([1, 2, 3])
    return (
        <div>
            <div className="main">
                <div className="main__wrapper">
                <Slider/>
                <div className="main__cardWrapper">
                  {cards.map(() => {
                      return(
                          <Card/>
                      )
                  })}
                </div>
                </div>
                <div className="main__reccomendation">
                <div className="main__header">
                    <div className = "main__UserLogo"></div>
                        <div className="main__userDate">
                        <div className = "main__userName">Kaskeev17</div>
                        <div className="main__userPosition">Kyrgyzstan, Bishkek</div>
                        </div>
                        <div className="main__reloc">
                            Переключиться
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
