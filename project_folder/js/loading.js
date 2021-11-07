//function timeout for deleting any elements after time
function startAfterTime(el,sec, setClass){
	let isArray = Array.from(el);
	if(isArray.length < 1){
		setTimeout(()=>{
			el.classList.remove(setClass);
		},sec);
	}
	else{
	    el.forEach(item => {
	        setTimeout(()=>{
	        	item.classList.remove(setClass);
	        },sec);
	    });

	}
	
};
//Word which you can see when page is loading, and stroke below - starting counter
const animation = "CoinGraph";
let i = -1;

//function which help us to see all animation effects
function animationContent(){
	startAfterTime(document.querySelector('.bg__wrapper'), 100, 'bg_active');
	
	startAfterTime(document.querySelector('.hello__text_wrapper'), 150, 'active');

	setTimeout(()=>{
		
		let none = document.querySelectorAll('.d-none');
		startAfterTime(none, 700, 'd-none');

		let opacity_0 = document.querySelectorAll('.opacity_0');
		startAfterTime(opacity_0, 800, 'opacity_0');

	},300);
}

//cycle for writing main WORD (sitetitle) added only one symbol after some time
for (let i = 0; i<animation.length; i++) {
    setTimeout(function timer(){

    	if(i < (animation.length - 1)){
    		document.getElementById('hello__text').innerHTML += animation[i]
    	}
        else{

        	document.getElementById('hello__text').innerHTML += animation[i]

        	animationContent();
        }
    }, i*100 );
}

//function-controling site theme
function siteTheme() {
  // Get the checkbox
  const checkBox = document.getElementById("site_theme");
  // Get the output text
  const text = document.getElementById("black");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.querySelector('body').classList.add('light');
    document.querySelector('.fa-moon').className = 'far fa-moon';
    document.querySelector('.logo__box').classList.add('deg_180');
  } else {
  	document.querySelector('body').classList.remove('light');
  	document.querySelector('.fa-moon').className = 'fas fa-moon';
  	document.querySelector('.logo__box').classList.remove('deg_180');
  }
}
//start function-control site-theme
document.addEventListener('change', siteTheme);