import React from "react";

type RatingPropsType = {
    rating: number
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.rating > 0}/>
            <Star selected={props.rating > 1}/>
            <Star selected={props.rating > 2}/>
            <Star selected={props.rating > 3}/>
            <Star selected={props.rating > 4}/>
            <Star selected={props.rating > 5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>Star</b> </span> : <span>Star </span>

}