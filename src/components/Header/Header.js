import React from 'react'
import styles from "../Header/Header.css"

const Header = () => {
    return (
            <div className="header">
                <div className="header__logo">Instagram</div>
                <input type="text" placeholder="Поиск" className="header__search"/>
                <div className="header__wrapper">
                    <div className="header__item">
                        <span className="material-icons">
                            home
                        </span>
                    </div>
                    <div className="header__item">
                        <span className="material-icons">
                            send
                        </span>
                    </div>
                    <div className="header__item">
                    <span className="material-icons">
                            explore
                        </span>
                    </div>
                    <div className="header__item">
                    <span class="material-icons">
                            favorite
                        </span>
                    </div>
                    <div className="header__item">

                    </div>
                </div>
            </div>
    )
}

export default Header