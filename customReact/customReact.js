
function customRender(container,reactElement) {
    // let domElement = document.createElement(reactElement.type)
    // domElement.setAttribute("href" , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)
    // domElement.innerHTML= reactElement.props.target
    // container.appendChild(domElement)

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue ;
        domElement.setAttribute(prop ,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank',
    },
    children : "Go to visite google"
}


let mainContainer = document.querySelector('#root')

customRender(mainContainer,reactElement)
    
