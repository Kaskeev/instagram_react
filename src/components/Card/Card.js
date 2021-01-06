import React from 'react'
import styles from "../Card/Card.css"

const Card = () => {
    return (
        <div>
            <div className = "card">
                <div className="card__header">
                    <div className = "card__UserLogo"></div>
                        <div className="card__userDate">
                        <div className = "card__userName">Kaskeev17</div>
                        <div className="card__userPosition">Kyrgyzstan, Bishkek</div>
                        </div>
                        <div className="card__burger">
                            . . .
                        </div>
                </div>
                <div className="card__content"></div>
                <div className="card__communication">
                    <span class="material-icons" >
                         favorite_border
                    </span>
                        <span class="material-icons">
                        mode_comment
                        </span>
                    <span className="material-icons">
                            send
                        </span>
                </div>
                <div className="card__footer">
                    <input className="card__inputComment" type="text" placeholder="Добавьте комментарий"/>
                    <div>
                        <p className="card__button">Опубликовать</p></div>
                </div>
            </div>
        </div>
    )
}

export default Card