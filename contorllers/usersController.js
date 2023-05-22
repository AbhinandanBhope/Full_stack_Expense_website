

const path = require('path');
const sequelize = require('../database');
const PRODUCT = require('../User');
const bodyParser = require('body-parser');


const getUsers =  async function(req, res)  {
  try{
  
    await PRODUCT.findAll().then((result) => {
      const rows = result; 
      res.json(rows);
      
    })}
  
    catch(err)  {
      console.log(err)
      
    };
    
  };

  const deleteUser = async function (req, res) {
    
    try {
      const id1 = req.params.Id.replace(':', ''); 
      await PRODUCT.destroy({ where: { id: id1 } });
      res.send(`User with ID ${id1} has been deleted.`);
    } catch (err) {
      console.log(err);
      res.status(500).send('An error occurred while deleting the user.');
    }
  };
  
  
  


const UpdateUser = async function (req, res) {

  try{
  const id = req.params.Id;
  const q =req.params.quant;
  if(req.params.quantity == 0){
    
    
    
    
  }
  else{
  const updatedQuantity = req.params.quantity - q;
  console.log(updatedQuantity);
  const productG = await PRODUCT.findByPk(id);
  if (!productG) {
    return res.status(404).json({ error: 'User not found' });
  }

  productG.quantity = updatedQuantity;

  
  await productG.save();
  res.status(201).json(productG);
}
  }

    catch(err) {

      console.log(err);
      res.status(500).send('An error occurred');
    };
  
}



const postUser = async function (req, res, next) {
try {
  const Name1 = req.body.Name1;
  const price1 = req.body.price1;
  const quantity1 = req.body.quant1;
  
  console.log(req.body);
  
    
    console.log(Name1);
    const data = await PRODUCT.create({
      Name:Name1,
      price:price1,
      quantity:quantity1
    
  
  
      
  
     })
     res.status(201).json({data})
    }
  catch(err){
    console.log(err)
  }
}


module.exports = { getUsers, deleteUser, postUser, UpdateUser };

  