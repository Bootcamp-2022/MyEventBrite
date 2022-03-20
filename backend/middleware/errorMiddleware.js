const errorHandler = (err, req, res, next) => {
    console.log("I am in the error handler")
    console.log(`res.statuscode: ${res.statusCode}`)
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode

    res.status(statusCode)
    res.json({
        message: err.message
    })
}

export {errorHandler}