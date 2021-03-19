import React, {useState} from "react";


export function UncontrolledRating() {

    const [rating, setRating] = useState(0)
    return (
        <div>
            <Star selected={rating > 0} starNumber={1} setRating={setRating}/>
            <Star selected={rating > 1} starNumber={2} setRating={setRating}/>
            <Star selected={rating > 2} starNumber={3} setRating={setRating}/>
            <Star selected={rating > 3} starNumber={4} setRating={setRating}/>
            <Star selected={rating > 4} starNumber={5} setRating={setRating}/>
            <Star selected={rating > 5} starNumber={6} setRating={setRating}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    starNumber: number
    setRating: (value: number) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setRating(props.starNumber)
    }}>{props.selected ? <b>Star</b> : "Star"}
    </span>
}

export default UncontrolledRating