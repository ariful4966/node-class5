
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
mongoose.Promise = global.Promise;

const productSchema = new Schema({
	name:{
		type:String,
		required: true,
		trim: true
	},
	price:{
		type: Number,
		required: true,
		trim: true

	},
	image:{
		type: String,
		required: true,
		trim: true
	},
	id:{
		type: String,
		required: true,
		trim: true
	}
}, {timestamps: true});

module.exports = mongoose.model('Products', productSchema)