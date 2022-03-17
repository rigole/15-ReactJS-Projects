const promisify = (item, delay) => 
    new Promise((resolve) =>
        setTimeout(() => 
            resolve (item), delay));