let x = window.matchMedia('(max-width: 700px)');
if(!x.matches){
	window.onscroll = function(){

		const scroll = window.pageYOffset;
		const nav = document.querySelector('.nav-bar');
		const navItems = document.querySelectorAll('.item-nav');
		const logo = document.querySelector('#welcome-header');
		
			if(scroll != 0){
			nav.style.backgroundColor = 'white';
			nav.style.borderBottom = 'solid 1px black';
			
	
			for(let i=0;i<navItems.length; i++){
				navItems[i].style.color = 'black';
			}
			logo.style.color = 'black';
	
	
		}
		else{
			nav.style.backgroundColor = 'transparent';
			nav.style.borderBottom = 'none';
	
			for(let i=0;i<navItems.length; i++){
				navItems[i].style.color = 'black';
			}
			logo.style.color = 'black';
		}
	}
}
else{
	let sideBarIcon = document.querySelector('.sidebar-icon');
	let sideBar = document.querySelector('.sidebar');
	let close = document.querySelector('.close');

	sideBarIcon.onclick = function(){
		sideBar.style.display = 'flex';
	}
	close.onclick = function(){
		sideBar.style.display = 'none';
	}

	
	
}
