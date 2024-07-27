// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//        [ React.createElement("h1",{}," nested hello! "), React.createElement("h1",{}," nested hello2! ")]
//     )
// )
const parent=React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child1"},
    [ React.createElement("h1",{}," nested hello! "), React.createElement("h1",{}," nested hello2! ")]
 ), React.createElement("div",{id:"child2"},
    [ React.createElement("h1",{}," nested hello! "), React.createElement("h1",{}," nested hello2! ")]
 )]
)


const h=React.createElement('h1',{
    id:"heading"
},"hello from react");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);