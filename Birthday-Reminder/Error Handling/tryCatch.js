function fail() {
    try {

    console.log('This works')
    throw new Error('Oops!!!!');

    } catch (error) {

        console.log(error.name)
    }
}

fail()