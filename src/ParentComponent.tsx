
import ChildComponent from './ChildComponent.tsx'
import {useState} from "react";

const DATA = ["test1", "test2"];
function ParentComponent(){
  //  const data2 = [...DATA];
    const [data, setData] = useState<string[]>([...DATA])
    const [count, setCount] = useState<number>(0)
// zum inhalt von einem array in ein anderes kopieren
    const increaseCounter = () => {
        setCount(oldCount => oldCount + 1);
    }
    const filterData = (s: string) => {
        setData(DATA.filter((d) => d.startsWith(s)))
    };
}
    return <div className="parent" style ={{
        padding: '30px',
        margin: '20px'
    }}>
        <p>{count}</p>
        <button onClick={increaseCounter}/>
        <input onChange={(e)} => {
            console.log("meow");
            filterData(e.targe.value);
        }} />
        {
            ...data.map((_d, index) => {
                return <ChildComponent key={index} title="meow" nr={2} action={() => {
                    console.log();
                }}/>
            })}
    </div>
}

export default ParentComponent;