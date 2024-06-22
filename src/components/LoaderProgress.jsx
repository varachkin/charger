import { useEffect, useState } from "react"
import {BATARY_SIZE, COST} from "../constants";

export const LoaderProgress = ({full = 0, counter}) => {
    

    return (
        <>
            <div className="station-card-icon-wrapper">
                <span className="loader-counter">{counter} %</span>
                <div className={`station-card-icon Charging`}></div>
            </div>
           
        </>

    )
}