let $input = document.getElementById("email");
let $btn = document.getElementById("submid");
let err = document.getElementById("err");

$btn.addEventListener("click", (e) => {
	e.preventDefault();
	validarEmail($input.value);
});

function validarEmail(email){
	let expReg =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	if (expReg.test(email) == true) {
        $input.style.border = "1px solid hsl(223, 87%, 63%) ";
				err.style.visibility = "hidden";
	} else {
		$input.style.border = "1px solid red ";
		err.style.visibility = "visible";
	}
};
