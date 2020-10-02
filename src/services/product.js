const Product = require('../models/Product')

const _promise  =   require('../helpers/simpleAsync');

module.exports.createProduct = async product => {
	return Product.create(product);
};
module.exports.getAllProduct = async  product=>{
	return Product.find(product)

}
module.exports.getUpdateProduct = async  product =>{
	return Product.findOneAndUpdate(product)

}
module.exports.deletePorduct = async  product =>{
	return Product.findOneAndDelete(product);
}

// exports.creactProduct = (req, res)=>{
// 	let {name, price, url} = req.body;
// 	let product = new Products({
// 		name,
// 		price,
// 		url
// 	})
// 	product.save()
// 		.then(c=>{
// 			res.json(c)
// 		})
// 		.catch(e=>{
// 			res.json({
// 				console.log(e);
// 				message:'Error Occureed'
// 			})
// 		})
//
// }