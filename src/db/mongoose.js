const mongoose = require("mongoose")

//Setup connection for mongoDB 
mongoose.connect(process.env.MONGODB_URL, {                                  
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false               
}) 