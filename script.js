function getFormvalue() {
    //Write your code here
	const sub= document.querySelector('[value="submit"]');
	const Fn= document.querySelector('[name="fname"]';
	const Ln= document.querySelector('[name="lname"]');

	sub.addEventListener("click", pop)

	function pop(){
		alert(Fn.innerText+" "+Ln.innerText);
	}

}
