import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnnOff} from "./components/OnnOff/OnnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {OnnOffControlled} from "./components/OnnOffControlled/OnnOffControlled";
import Select from './components/Select/Select';

export const items = [
    {
        title: "Gena", value: 1
    },
    {
        title: "Kolya", value: 2
    },
    {
        title: "Sergey", value: 3
    }
]

function App() {
    const [value, setValue] = useState(1)
    const [isSelectCollapsed, setIsSelectCollapsed] = useState(true)


    return (
        <div className="App">
            <Select
                items={items}
                value={value}
                isSelectCollapsed={isSelectCollapsed}
                setIsSelectCollapsed={setIsSelectCollapsed}
                setValue={setValue}
            />
            <PageTittle title="App page tit1e"/>
            {/*<Rating rating={3}/>*/}
            {/*<Select title="Menu" collapsed={true}/>*/}
            <Accordion title="Users" collapsed={false} items={items}/>
            <Rating rating={6}/>
            <OnnOff/>
            <OnnOff/>
            <UncontrolledAccordion title="UncontrolledAccordion 1"/>
            <UncontrolledAccordion title="UncontrolledAccordion 2"/>
            <UncontrolledRating/>
            <UncontrolledRating/>
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
