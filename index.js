const form = document.getElementById('form')
const lname = document.getElementById('lname')
const fname = document.getElementById('fname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    checkInputs()
})

const checkInputs = () => {
	const lnameVal = lname.value.trim()
    const fnameVal = email.value.trim()
	const emailVal = email.value.trim()
	const passwordVal = password.value.trim()

    if(fnameVal === '') {
		setError(fname, 'First Name cannot be empty')
	}
	
	if(lnameVal === '') {
		setError(lname, 'Last Name cannot be empty')
	}
	
	if(emailVal === '') {
		setError(email, 'Looks like this is not an email')
	} 
	
	if(passwordVal === '') {
		setError(password, 'Password cannot be empty')
	}

}

function setError(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'input error'
	small.innerText = message
}
