function retornaFunc(nome){
    return () => {
        return nome
}
}

let f1 = retornaFunc('carlos')
let f2 = retornaFunc('lanny')

console.dir(f1)
console.dir(f2)

console.log(f1())