function fail() {
    try {

    console.log('This works')
    throw new Error('Oops!!!!');

    } catch (error) {

        console.log(error.name)
    } finally {
        console.log("Still good")
        return "This was a fail"
    }
}

fail()


try {

    try {
        something()

    } catch (err) {

        throw new Error(err)
    }
    
} catch (error) {
  
    console.log('got it', error)

}

try {

    setTimeout(function () {
            fakevariable;
    }, 1000)
    
} catch (error) {
    console.log('got it', error)
}