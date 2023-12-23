/*
*
<div class="parent">
  <div class ="child">
    <h1>Im H1 TAG<h1>
   </div>
</div>
*
*/ const head = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Im H1 tag"),
        React.createElement("h2", {}, "Im H2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "Im H1 tag"),
        React.createElement("h2", {}, "Im H2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

//# sourceMappingURL=index1.7c0ccee6.js.map
