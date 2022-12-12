const app = require('./app');
const mongoose = require('mongoose');


//connect to DB
const main = async () => {
    await mongoose.connect("mongodb://localhost/blogs")
    console.log("connected");
    app.listen(3000, () => console.log('Server running......'));

}
main()


