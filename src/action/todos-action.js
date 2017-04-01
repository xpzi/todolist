export  default {
	LIST_ADDITEM :'LIST_ADDITEM',
	LIST_DELITEM : 'LIST_DELITEM',



	listAddItemAction( text ){ return {type:  this.LIST_ADDITEM, text: text}},
	listDelItemAction( index ){ return {type:  this.LIST_DELITEM, index: index}},

}