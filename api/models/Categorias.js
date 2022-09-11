const {Schema, model} = require('mongoose')
const categoriaSchema= new Schema({
  Slug: String,
  desc: String,
  name: String
})

categoriaSchema.set('toJSON',{
  transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id
    delete returnedObject.id
    delete returnedObject._id
  }
})


const categoria = model('categorias', categoriaSchema)
module.exports = categoria