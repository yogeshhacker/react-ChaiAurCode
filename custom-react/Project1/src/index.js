function MyComponet() {
    return <h1>Hello Custom React</h1>;
    
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render( <MyComponet /> );
