// ES8
movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Left'))
.then(() => movePlayer(10, 'Right'))
.then(() => movePlayer(33, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left')
    const second = await movePlayer(400, 'Left')
    const third = await movePlayer(10, 'Right')
    await movePlayer(330, 'Left')
}

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    /*.then(resp => resp.json())
    .then(console.log)*/

    console.log(data)
}

const urls = [

    'https://jsonplaceholder.typicode.com/users/',
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/albums/'
]

/*Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log('users', array[0])
        console.log('posts', array[1])
        console.log('albums', array[2])
    }).catch('oops')*/

    try {
        const getData = async function () {
            const [ users, posts, albums ] = await Promise.all(urls.map(url =>
                fetch(url).then(resp => resp.json())
                
            ))
    
            console.log('users', users)
            console.log('posts', posts)
            console.log('albums', albums)
        }
        
    } catch (error) {
        console.log(error)
    }
   