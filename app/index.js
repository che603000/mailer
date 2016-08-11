/**
 * Created by alex on 09.08.2016.
 */


require('./model');

require('./db')
    .then(()=> {
        require('./mailer')
    })
    .catch(err=> console.log(err));

