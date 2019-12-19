const retoken_name = 'refresh_token'

export function setRetoken(asd){
	window.localStorage.setItem(retoken_name,asd);
}

export function getReToken(){
	if(window.localStorage.getItem(retoken_name)){
		return window.localStorage.getItem(retoken_name);
	}else{
		return "";
	}
	
}
export function delRetoken(){
	window.localStorage.removeItem(retoken_name);
}
