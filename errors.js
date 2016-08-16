/**
 * Created by alex on 16.08.2016.
 */


module.exports = app=>{
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function (err, req, res, next) {
        //var err = new Error('Not Found');
        //err.status = 404;
        switch (err.cod){
            case 3: err.status = 400;
        }
        next(err);
    });
//
// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            const content = req.header('content-type');
            if (/json/.test(content)) {
                res.json(err);
            } else
                res.render('error', {
                    message: err.message,
                    error: err
                });
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });



}