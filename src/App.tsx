import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnnOff} from "./components/OnnOff/OnnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {OnnOffControlled} from "./components/OnnOffControlled/OnnOffControlled";
import Select from './components/Select/Select';
import Clock from "./components/Clock/Clock";

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
const SelectMemo = React.memo(Select)
const PageTittleMemo = React.memo(PageTittle)
const AccordionMemo = React.memo(Accordion)
const RatingMemo = React.memo(Rating)
const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)
const OnnOffControlledMemo = React.memo(OnnOffControlled)

function App() {
    const [value, setValue] = useState(1)
    const [isSelectCollapsed, setIsSelectCollapsed] = useState(true)


    return (
        <div className="App">
            <Clock/>
            <SelectMemo
                items={items}
                value={value}
                isSelectCollapsed={isSelectCollapsed}
                setIsSelectCollapsed={setIsSelectCollapsed}
                setValue={setValue}
            />
            <PageTittleMemo title="App page tit1e"/>
            {/*<Rating rating={3}/>*/}
            {/*<Select title="Menu" collapsed={true}/>*/}
            <AccordionMemo title="Users" collapsed={false} items={items}/>
            <RatingMemo rating={6}/>
            <OnnOff/>
            <OnnOff/>
            <UncontrolledAccordionMemo title="UncontrolledAccordion 1"/>
            <UncontrolledAccordionMemo title="UncontrolledAccordion 2"/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <OnnOffControlledMemo on/>
            <OnnOffControlledMemo on={false}/>

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
