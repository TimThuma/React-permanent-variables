// server code
// it is basically just a bit modified copy of documentation at https://github.com/fridays/next-routes#on-the-server

const next = require('next');                   // }
const routes = require('./routes');             // }
const app = next({                              // } creates a next app and tells it to use routes.js
    dev: process.env.NODE_ENV !== 'production'  // }
});                                             // }
const handler = routes.getRequestHandler(app);  // }

const { createServer } = require('http');                             // }
app.prepare().then(() => {                                            // }
    createServer(handler).listen(process.env.PORT || 3000, err => {   // } creates a server and hosts the app
        if (err) throw err;                                           // }
        console.log('Ready on http://localhost:3000');                // }
    });
});
