var rootElement = document.getElementById('root'); //take the HTML element from the DOM

var reactRoot = ReactDOM.createRoot(rootElement); //create React Element

// const reactElement = React.createElement('h1', {}, 'Hello from React') //create h1 react Element

//NATIVE REACT
// const reactElement = React.createElement( //създаваме хедър, който има клас и чилдрън елемент h1
//     'header',
//      {className: "site-header"},
//       React.createElement('h1', {}, 'Hello from React'),
//       React.createElement('h2', {}, 'React slogan'))

// JSX SYNTAX

var reactElement = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello from React!!!'
    ),
    React.createElement(
        'h2',
        null,
        'React slogan'
    )
);

reactRoot.render(reactElement); // render the element

// to start babel: npm babel