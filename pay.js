function pay(acountId, amount) {
    console.log(`paying ${amount} to ${acountId}`);
}

function watchDog(context, target) {
    let oldTarget = context[target.name]
    context[target.name] = function() {
        console.info(`LOG: function "${oldTarget.name}" begin`)
        let result = oldTarget.call(context, arguments[0], arguments[1])
        console.info(`LOG: function "${oldTarget.name}" end`)
        return result
    }
}

// call with context the window
watchDog(window, pay)


// call with context the parseInt
watchDog(window, parseInt)

