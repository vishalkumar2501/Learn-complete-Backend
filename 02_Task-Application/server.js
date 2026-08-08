//server ko start ke liye iss file ka kaam hota hai
const app = require('./src/app');


app.listen(3000, () => {
    console.log('server is running at port 3000');  
} );