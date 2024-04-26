

function CustomRender(reactELement, Container){
    /*
    const domElement= document.createElement( reactELement.type )     //abhi khali create ho gaya

    domElement.innerHTML= reactELement.children

    domElement.setAttribute('href', reactELement.props.href)

    domElement.setAttribute('target', reactELement.props._blank)

    Container.appendChild(domElement)
    */

    //method 2 how react works somehow

    const domElement= document.createElement(reactELement.type)

    domElement.innerHTML = reactELement.children

    for (const prop in reactELement.props) {
        if(prop === 'childeren') { continue; }

        domElement.setAttribute (prop, reactELement.props[prop])
    }

    Container.appendChild(domElement)
}

const reactELement= {
    type: 'a',
    props: {
        href: 'https://google.com' ,
        target: '_blank'
    } ,

    children: 'click me to visit google',
}

const mainContainer= document.querySelector('#root');

CustomRender(reactELement, mainContainer)