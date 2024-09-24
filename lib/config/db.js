import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rahuljaiswalacm:01992003@cluster0.wdbny.mongodb.net/todo-app?retryWrites=true&w=majority&appName=Cluster0')
    console.log("DB connected")
}