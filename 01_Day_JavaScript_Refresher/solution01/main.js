function test() {
    console.log(countries)
    console.log(webTechs)
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    text = text.replaceAll(".", "")
    text = text.replaceAll(",", "")
    let arr = text.split(" ")
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift(1)
    shoppingCart[0] = "Meat"
    shoppingCart.push("Sugar")
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
    shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
    if(countries.includes("Ethiopia")) {
        console.log("ETHIOPIA")
    } else {
        countries.push("Ethiopia")
    }
    if(webTechs.includes("Sass")) {
        console.log("Sass is a CSS preprocess")
    } else {
        webTechs.push("Sass")
        console.log(webTechs)
    }
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    const fullstack = frontEnd.concat(backEnd)
    console.log(fullstack)
}

function age() {
    let userAge = prompt("Enter your age: ")
    if(userAge < 16) {
        let tmp = 16 - userAge
        if(tmp === 1)
            console.log("You are left with " + tmp + " year to drive.")
        else
            console.log("You are left with " + tmp + " years to drive.")
    } else {
        console.log("You are old enough to drive.")
    }
}

function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

