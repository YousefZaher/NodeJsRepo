
 const SayHello = (name: string) => {
    console.log(`Hello ${name}`)
}

const sayGoodbye = () : void => {
    console.log("Goodbye")
}

console.log("Hello World")

module.exports = [SayHello, sayGoodbye]