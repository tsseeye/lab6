function Mendchilgee(){ // function component. props-gui
    return <h1>hello11</h1>
}
function Mendchilgee123(props){ console.log(props) // function component. props-toi olon html renderlene
    return (
        <div>
            <h1>{props.ner}</h1>
            <p>{props.nas}</p>
            <p>{props.surchBgaEseh ? "unen": "chuluu avsan"}</p>
            <p>{props.dunguud[0]}</p>
            <p>{props.dunguud[1]}</p>
            <p>{props.dunguud[2]}</p>

            {props.dunguud.map(
                (el, index)=>
                    <p key = {index}>{el}</p>
                )
            }
            <p>{props.myObj.mergejil}</p>
            <p>{props.myObj.index}</p>
        </div>
        
    );
}

ReactDOM.render( // DOM
    // <Mendchilgee/> ,
    // <Mendchilgee123 ner=" Hello Bat" nas='20'/> ,
     <Mendchilgee123 ner={" Hello Dorj"}
     nas={'20'}
     surchBgaEseh={true}
     dunguud={[100, "yurn yus",true]}
     myObj={{mergejil : 'SW', index:'sw18d044'}} />,
     document.getElementById('root') 
  );
