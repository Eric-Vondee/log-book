const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const DB = require('./db');

const app = express();

const port = process.env.port || 4200

app.use(logger('dev'));
app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())

//Connect DB 
DB()

//Routes
app.use('/api/v1', require('./routes/index'))
//Catch 404 and forard to error handler 
app.use((req,res, next) => {
    next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
	// render the error page
	res.status(err.status || 500);
	res.send({
		status: 'ERROR',
		message: err.message,
		payload: { ...err }
	});
});

app.listen(port, ()=>   console.log(`Logbook server started on port http://0.0.0.0:${port}.`));