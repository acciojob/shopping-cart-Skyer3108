//your code here
const nam=document.getElementById('name')

const pric=document.getElementById('price')

const addbtn=document.getElementById('add')

const tbody=document.getElementById('data')

addbtn.addEventListener('click',()=>{
	const name=nam.value
	const price=pric.value

	const tr=document.createElement('tr');
	tr.innerHTML=`
	<td>${name}</td>
				<td>${price}</td>
	`

	tbody.appendChild(tr)

	nam.value=''
	pric.value=''
	

	
	
})