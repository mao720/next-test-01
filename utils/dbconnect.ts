import Mongoose from "mongoose";

export default async function dbconnect() {
    if (Mongoose.connection.readyState >= 1) {
        console.log('MongoDB 状态 readyState：' + Mongoose.connection.readyState)
        return
    }
    Mongoose.connection.once('open', function () {
            console.log('MongoDB ' + Mongoose.connection.db.databaseName + ' 连接成功!')
        })
    await Mongoose.connect('mongodb+srv://admin:admin@cluster0.exai6.mongodb.net/nexttest?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    })
}
