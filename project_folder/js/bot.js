let array = [0.646046];
let newArr = [0.689104,0.755614,0.929379, 1.4, 1.35,1.27,1.35,1.28,1.3];
const userPriceStart = document.querySelector('input');

counter = 0;
setInterval(()=>{
	array.push(newArr[counter]);
	//console.log(array);
	let lastPriceValue = newArr[counter];
	checker(lastPriceValue);
	
	getPrice();

	counter++;
},5000);

function checker(lastPrice){
	let percentageSell = 25;
	let percentageBuy = 10;

	//console.log();

	//let topPriceToSell = userPriceStart.value + (userPriceStart.value/100) * percentageSell;
	let topPriceToSell = +userPriceStart.value + (+userPriceStart.value/100) * percentageSell;
	//console.log(topPriceToSell);
	let topPriceToBuy = +userPriceStart.value - (+userPriceStart.value/100) * percentageBuy;
	//console.log(topPriceToBuy);

	setNew_BuySell(topPriceToSell, topPriceToBuy, lastPrice);
}


function setNew_BuySell(getSellPrice, getBuyPrice, getLastPrice){
	if(getLastPrice > getSellPrice){

		//console.log('sell 1');
	}
	else if(getLastPrice < getBuyPrice){
		//console.log('Buy, come on 2');
	}
	else{
		if(getLastPrice){
			//console.log('Oh, keep calm, рухаэмося в боковику');
		}
		else{
			//console.log(getLastPrice + 'Зробив помилку');
		}
	}
}
