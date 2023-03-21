const rootElement = document.getElementById('root'); //take the HTML element from the DOM

const reactRoot = ReactDOM.createRoot(rootElement); //create React Element

// const reactElement = React.createElement('h1', {}, 'Hello from React') //create h1 react Element

//NATIVE REACT
// const reactElement = React.createElement( //създаваме хедър, който има клас и чилдрън елемент h1
//     'header',
//      {className: "site-header"},
//       React.createElement('h1', {}, 'Hello from React'),
//       React.createElement('h2', {}, 'React slogan'))

// JSX SYNTAX

const reactElement = (
    <header className='site-header'>
        <h1>Hello from React!!!</h1>
        <h2>React slogan</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure.</p>
    </header>
);


reactRoot.render(reactElement) // render the element

// to start babel: npm babel
