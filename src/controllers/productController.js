const _p    =   require('../helpers/simpleAsync');
const _log    =   require('../utils/logger');
const  {createResponse}   =   require('../utils/responseGenerate');
const {createProduct, getAllProduct, getUpdateProduct, deletePorduct} = require('../services/product');


module.exports.createProduct = async  (req, res, next)=>{
	const product = await  createProduct(req.body);
	return res.json(product)
}
module.exports.getAllProduct = async (req, res, next)=>{
	const product = await  getAllProduct();
	return res.json(product)
}
module.exports.getSingleProduct = async (req, res, next)=>{
	let { id } = req.params;
	const product = await getAllProduct({id: id})
	return res.json(product)
}
module.exports.getUpdateById = async (req, res, next)=>{
	let { id } = req.params;

	let { name, price, image, } = req.body;
	let product = getUpdateProduct(id, {
		name,
		price,
		image
	}, {update: true})
	return res.json(product)
}
module.exports.deletePorduct = async (req, res, next)=>{
	let { id } = req.params;
	const product = await deletePorduct({id: id});
	return res.json(product);
}

exports.updateContact = async (req, res, next) => {
	let { name, price, image } = req.body;
	let { id } = req.params;
	let product = await getUpdateProduct(id,
		{
			$set: {
				name, price, image
			}
		},
		{ new: true }
	);

	return res.json(product)
}