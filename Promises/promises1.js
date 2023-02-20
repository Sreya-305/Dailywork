var promise = new Promise(function(resolve, reject) {
    const x = "sample string";
    const y = "sample string"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
        
    promise.
        then(function () {
            console.log('Success, Both strings are equal!');
        }).
        catch(function () {
            console.log('Some error has occurred');
        });
    