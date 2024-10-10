// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../../assets/assets'
import "./appdownload.css"

const AppDownload = () => {
    return (
        <div className="download" id="download">
            <p>for batter experience download <br /> tomato app</p>
            <div className="app-img">
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload