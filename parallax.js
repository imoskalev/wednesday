let bg = document.querySelector('.bg');
let wensday = document.querySelector('.wensday');

document.onmousemove = (e)=>{
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;

	bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
	wensday.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
};
document.touchmove = (e)=>{
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;

	bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
	wensday.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
};
