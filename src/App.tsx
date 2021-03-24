import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnnOff} from "./components/OnnOff/OnnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {OnnOffControlled} from "./components/OnnOffControlled/OnnOffControlled";

function App() {
    return (
        <div className="App">
            <PageTittle title="App page tit1e"/>
            {/*<Rating rating={3}/>*/}
            {/*<Accordion title="Menu" collapsed={true}/>*/}
            <Accordion title="Users" collapsed={false}/>
            <Rating rating={6}/>
            <OnnOff />
            <OnnOff />

            <UncontrolledAccordion title="UncontrolledAccordion 1"/>
            <UncontrolledAccordion title="UncontrolledAccordion 2"/>
            <UncontrolledRating />
            <UncontrolledRating />
            <OnnOffControlled on/>
            <OnnOffControlled on={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTittle(props: PageTitlePropsType) {
    return <h2>{props.title}</h2>
}

export default App;
