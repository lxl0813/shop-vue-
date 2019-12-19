const token_name = 'token'

export function setToken(asd){
	window.localStorage.setItem(token_name,asd);
}

export function getToken(){
	if(window.localStorage.getItem(token_name)){
		return window.localStorage.getItem(token_name);
	}else{
		return "";
	}
	
}
export function delToken(){
	window.localStorage.removeItem(token_name);
}

