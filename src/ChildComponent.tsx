type props = {
    title: string;
    nr?: number;
    action: (a: string) => void;
}


function ChildComponent(props: Readonly<props>){
    return <div onClick={() => {
        props.action("Hallo, Aufruf");
        {props.nr && <p>{props.nr}</p>}
    }}></div>
}

export default ChildComponent;