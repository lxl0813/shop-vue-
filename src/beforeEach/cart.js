const cart_name = 'zjcart'

export function setCart(cart){
    cart=JSON.stringify(cart)
	window.localStorage.setItem(cart_name,cart);
}

export function getCart(){
    const cart =window.localStorage.getItem(cart_name)
	if(cart){
		return JSON.parse(cart)
	}else{
		return {};
	}
	
}

export function delCart(){
	window.localStorage.removeItem(cart_name);
}

