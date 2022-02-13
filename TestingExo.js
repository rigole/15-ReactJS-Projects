/*const obj = {
    name: 'Placide',
    sing() {
        return 'lalala ' + this.name
    },

    singAgain(){
        return this.sing() + '!'
    }
}
obj.singAgain()*/


function importantPerson() {
    const name = 'Foleu'
    console.log(this.name)
}


const obj1 = {
    name:'Placide',
    importantPerson: importantPerson
}
const obj2 = {
    name:'Rigole',
    importantPerson: importantPerson
}

obj1.importantPerson()