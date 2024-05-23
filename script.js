function getFormvalue() {
    //Write your code here
	const sub= document.querySelector('[type="submit"]');
	const Fn= document.querySelector('[name="fname"]');
	const Ln= document.querySelector('[name="lname"]');

	sub.addEventListener("click", pop)

	function pop(){
		event.preventDefault();
        alert(Fn.value+" "+Ln.value);
	}

}
