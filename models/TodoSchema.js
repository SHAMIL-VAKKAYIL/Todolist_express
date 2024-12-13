const mongoose=require('mongoose')


const TodoSchema=mongoose.Schema({
    item:{type:String,required:true}
})

module.exports=mongoose.model('lists',TodoSchema)