var herbs_translate = [
	{name:'anchorweed', rus:'Якорь-трава', eng:'Anchor Weed'},
	{name:'winterskiss', rus:'Поцелуй зимы', eng:'Winter\'s Kiss'},
	{name:'riverbud', rus:'Речной горох', eng:'Riverbud'},
	{name:'starmoss', rus:'Звездный мох', eng:'Star Moss'},
	{name:'sirenspollen', rus:'Пыльца сирены', eng:'Siren\'s Pollen'},
	{name:'akundasbite', rus:'Укус Акунды', eng:'Akunda\'s Bite'},
	{name:'seastalk', rus:'Морской стебель', eng:'Sea Stalk'}
];

var lang_change = document.getElementById("lang-change");
var lang_pr = 0;
	//себестоимость бутылок
var selfcost_flask_strength_1 = document.getElementById('selfcost-flask_strength_1'),
	selfcost_flask_vitality_2 = document.getElementById('selfcost-flask_vitality_2'),
	selfcost_flask_agility_3 = document.getElementById('selfcost-flask_agility_3'),
	selfcost_flask_intelligence_4 = document.getElementById('selfcost-flask_intelligence_4'),
	selfcost_battle_potion_of_stamina = document.getElementById('selfcost-battle_potion_of_stamina'),
	selfcost_battle_potion_of_agility = document.getElementById('selfcost-battle_potion_of_agility'),
	selfcost_battle_potion_of_strength = document.getElementById('selfcost-battle_potion_of_strength'),
	selfcost_battle_potion_of_intellect = document.getElementById('selfcost-battle_potion_of_intellect'),
	//прибыль-убыток
	profit_flask_strength_1 = document.getElementById('profit-flask_strength_1'),
	profit_flask_vitality_2 = document.getElementById('profit-flask_vitality_2'),
	profit_flask_agility_3 = document.getElementById('profit-flask_agility_3'),
	profit_flask_intelligence_4 = document.getElementById('profit-flask_intelligence_4'),
	profit_battle_potion_of_stamina = document.getElementById('profit-battle_potion_of_stamina'),
	profit_battle_potion_of_agility = document.getElementById('profit-battle_potion_of_agility'),
	profit_battle_potion_of_strength = document.getElementById('profit-battle_potion_of_strength'),
	profit_battle_potion_of_intellect = document.getElementById('profit-battle_potion_of_intellect'),
	//итог
	allprofit_flask_strength_1 = document.getElementById('allprofit-flask_strength_1'),
	allprofit_flask_vitality_2 = document.getElementById('allprofit-flask_vitality_2'),
	allprofit_flask_agility_3 = document.getElementById('allprofit-flask_agility_3'),
	allprofit_flask_intelligence_4 = document.getElementById('allprofit-flask_intelligence_4'),
	allprofit_battle_potion_of_stamina = document.getElementById('allprofit-battle_potion_of_stamina'),
	allprofit_battle_potion_of_agility = document.getElementById('allprofit-battle_potion_of_agility'),
	allprofit_battle_potion_of_strength = document.getElementById('allprofit-battle_potion_of_strength'),
	allprofit_battle_potion_of_intellect = document.getElementById('allprofit-battle_potion_of_intellect')
	
	
lang_change.onclick = function() {
	if (this.secondT^=1) {
		console.log('Русский язык включен');
		for (lang_pr = 0; lang_pr <= herbs_translate.length-1; lang_pr++) {
			document.getElementById(herbs_translate[lang_pr].name).innerHTML = herbs_translate[lang_pr].eng;
		}
		lang_change.innerHTML = 'English';
	} else {
		console.log('English language enabled');
		for (lang_pr = 0; lang_pr <= herbs_translate.length-1; lang_pr++) {
			document.getElementById(herbs_translate[lang_pr].name).innerHTML = herbs_translate[lang_pr].rus;
		}
		lang_change.innerHTML = 'Русский';
	}
}

window.onload = function() {
	get_profit();
}

function get_profit() {
	//получили стоимость каждого ингридиента
	var price_anchorweed = document.getElementById('price-anchorweed').value,
		price_winterskiss = document.getElementById('price-winterskiss').value,
		price_riverbud = document.getElementById('price-riverbud').value,
		price_starmoss = document.getElementById('price-starmoss').value,
		price_sirenspollen = document.getElementById('price-sirenspollen').value,
		price_akundasbite = document.getElementById('price-akundasbite').value,
		price_seastalk = document.getElementById('price-seastalk').value,
		
	//получили рыночную стоимость каждой бутылки
		//фласки
		auccost_flask_strength_1 = document.getElementById('auccost-flask_strength_1').value,
		auccost_flask_vitality_2 = document.getElementById('auccost-flask_vitality_2').value,
		auccost_flask_agility_3 = document.getElementById('auccost-flask_agility_3').value,
		auccost_flask_intelligence_4 = document.getElementById('auccost-flask_intelligence_4').value,
		//припоты	
		auccost_battle_potion_of_stamina = document.getElementById('auccost-battle_potion_of_stamina').value,
		auccost_battle_potion_of_agility = document.getElementById('auccost-battle_potion_of_agility').value,
		auccost_battle_potion_of_strength = document.getElementById('auccost-battle_potion_of_strength').value,
		auccost_battle_potion_of_intellect = document.getElementById('auccost-battle_potion_of_intellect').value,
	//получили количество созданной продукции
		created_flask_strength_1 = document.getElementById('created-flask_strength_1').value,
		created_flask_vitality_2 = document.getElementById('created-flask_vitality_2').value,
		created_flask_agility_3 = document.getElementById('created-flask_agility_3').value,
		
		created_flask_intelligence_4 = document.getElementById('created-flask_intelligence_4').value,
		created_battle_potion_of_stamina = document.getElementById('created-battle_potion_of_stamina').value,
		created_battle_potion_of_agility = document.getElementById('created-battle_potion_of_agility').value,
		created_battle_potion_of_strength = document.getElementById('created-battle_potion_of_strength').value,
		created_battle_potion_of_intellect = document.getElementById('created-battle_potion_of_intellect').value,
	//получили количество прокнутой продукции
		procked_flask_strength_1 = document.getElementById('procked-flask_strength_1').value,
		procked_flask_vitality_2 = document.getElementById('procked-flask_vitality_2').value,
		procked_flask_agility_3 = document.getElementById('procked-flask_agility_3').value,
		procked_flask_intelligence_4 = document.getElementById('procked-flask_intelligence_4').value,
		procked_battle_potion_of_stamina = document.getElementById('procked-battle_potion_of_stamina').value,
		procked_battle_potion_of_agility = document.getElementById('procked-battle_potion_of_agility').value,
		procked_battle_potion_of_strength = document.getElementById('procked-battle_potion_of_strength').value,
		procked_battle_potion_of_intellect = document.getElementById('procked-battle_potion_of_intellect').value;
	//
	//
	//НАСТОИ
	//
	//
	//Настой силы прибоя
	selfcost_flask_strength_1.innerHTML = price_anchorweed*5+price_akundasbite*10+price_sirenspollen*15;
	profit_flask_strength_1.innerHTML = auccost_flask_strength_1 - selfcost_flask_strength_1.innerHTML;
	if (profit_flask_strength_1.innerHTML > 0) {
		profit_flask_strength_1.style.color='lime';
	} else
	if (profit_flask_strength_1.innerHTML < 0) {
		profit_flask_strength_1.style.color='red';
	} else {
		profit_flask_strength_1.style.color='gold';
	}
	allprofit_flask_strength_1.innerHTML = procked_flask_strength_1 * auccost_flask_strength_1 - created_flask_strength_1 * selfcost_flask_strength_1.innerHTML;
	if (allprofit_flask_strength_1.innerHTML > 0) {
		allprofit_flask_strength_1.style.color='lime';
	} else
	if (allprofit_flask_strength_1.innerHTML < 0) {
		allprofit_flask_strength_1.style.color='red';
	} else {
		allprofit_flask_strength_1.style.color='gold';
	}
	//Настой бескрайнего горизонта
	selfcost_flask_vitality_2.innerHTML = price_anchorweed*5+price_winterskiss*10+price_starmoss*15;
	profit_flask_vitality_2.innerHTML = auccost_flask_vitality_2 - selfcost_flask_vitality_2.innerHTML;
	if (profit_flask_vitality_2.innerHTML > 0) {
		profit_flask_vitality_2.style.color='lime';
	} else
	if (profit_flask_vitality_2.innerHTML < 0) {
		profit_flask_vitality_2.style.color='red';
	} else {
		profit_flask_vitality_2.style.color='gold';
	}
	allprofit_flask_vitality_2.innerHTML = procked_flask_vitality_2 * auccost_flask_vitality_2 - created_flask_vitality_2 * selfcost_flask_vitality_2.innerHTML;
	if (allprofit_flask_vitality_2.innerHTML > 0) {
		allprofit_flask_vitality_2.style.color='lime';
	} else
	if (allprofit_flask_vitality_2.innerHTML < 0) {
		allprofit_flask_vitality_2.style.color='red';
	} else {
		allprofit_flask_vitality_2.style.color='gold';
	}
	//Настой стремительных течений
	selfcost_flask_agility_3.innerHTML = price_anchorweed*5+price_akundasbite*10+price_seastalk*15;
	profit_flask_agility_3.innerHTML = auccost_flask_agility_3 - selfcost_flask_agility_3.innerHTML;
	if (profit_flask_agility_3.innerHTML > 0) {
		profit_flask_agility_3.style.color='lime';
	} else
	if (profit_flask_agility_3.innerHTML < 0) {
		profit_flask_agility_3.style.color='red';
	} else {
		profit_flask_agility_3.style.color='gold';
	}
	allprofit_flask_agility_3.innerHTML = procked_flask_agility_3 * auccost_flask_agility_3 - created_flask_agility_3 * selfcost_flask_agility_3.innerHTML;
	if (allprofit_flask_agility_3.innerHTML > 0) {
		allprofit_flask_agility_3.style.color='lime';
	} else
	if (allprofit_flask_agility_3.innerHTML < 0) {
		allprofit_flask_agility_3.style.color='red';
	} else {
		allprofit_flask_agility_3.style.color='gold';
	}
	//Настой бездонных глубин
	selfcost_flask_intelligence_4.innerHTML = price_anchorweed*5+price_winterskiss*10+price_riverbud*15;
	profit_flask_intelligence_4.innerHTML = auccost_flask_intelligence_4 - selfcost_flask_intelligence_4.innerHTML;
	if (profit_flask_intelligence_4.innerHTML > 0) {
		profit_flask_intelligence_4.style.color='lime';
	} else
	if (profit_flask_intelligence_4.innerHTML < 0) {
		profit_flask_intelligence_4.style.color='red';
	} else {
		profit_flask_intelligence_4.style.color='gold';
	}
	allprofit_flask_intelligence_4.innerHTML = procked_flask_intelligence_4 * auccost_flask_intelligence_4 - created_flask_intelligence_4 * selfcost_flask_intelligence_4.innerHTML;
	if (allprofit_flask_intelligence_4.innerHTML > 0) {
		allprofit_flask_intelligence_4.style.color='lime';
	} else
	if (allprofit_flask_intelligence_4.innerHTML < 0) {
		allprofit_flask_intelligence_4.style.color='red';
	} else {
		allprofit_flask_intelligence_4.style.color='gold';
	}
	//
	//
	//ЗЕЛЬЯ
	//
	//
	//Боевое зелье выносливости battle_potion_of_stamina
	selfcost_battle_potion_of_stamina.innerHTML = price_seastalk*10+price_starmoss*8;
	profit_battle_potion_of_stamina.innerHTML = auccost_battle_potion_of_stamina - selfcost_battle_potion_of_stamina.innerHTML;
	if (profit_battle_potion_of_stamina.innerHTML > 0) {
		profit_battle_potion_of_stamina.style.color='lime';
	} else
	if (profit_battle_potion_of_stamina.innerHTML < 0) {
		profit_battle_potion_of_stamina.style.color='red';
	} else {
		profit_battle_potion_of_stamina.style.color='gold';
	}
	allprofit_battle_potion_of_stamina.innerHTML = procked_battle_potion_of_stamina * auccost_battle_potion_of_stamina - created_battle_potion_of_stamina * selfcost_battle_potion_of_stamina.innerHTML;
	if (allprofit_battle_potion_of_stamina.innerHTML > 0) {
		allprofit_battle_potion_of_stamina.style.color='lime';
	} else
	if (allprofit_battle_potion_of_stamina.innerHTML < 0) {
		allprofit_battle_potion_of_stamina.style.color='red';
	} else {
		allprofit_battle_potion_of_stamina.style.color='gold';
	}
	//Боевое зелье ловкости battle_potion_of_agility
	selfcost_battle_potion_of_agility.innerHTML = price_sirenspollen*8+price_riverbud*10;
	profit_battle_potion_of_agility.innerHTML = auccost_battle_potion_of_agility - selfcost_battle_potion_of_agility.innerHTML;
	if (profit_battle_potion_of_agility.innerHTML > 0) {
		profit_battle_potion_of_agility.style.color='lime';
	} else
	if (profit_battle_potion_of_agility.innerHTML < 0) {
		profit_battle_potion_of_agility.style.color='red';
	} else {
		profit_battle_potion_of_agility.style.color='gold';
	}
	allprofit_battle_potion_of_agility.innerHTML = procked_battle_potion_of_agility * auccost_battle_potion_of_agility - created_battle_potion_of_agility * selfcost_battle_potion_of_agility.innerHTML;
	if (allprofit_battle_potion_of_agility.innerHTML > 0) {
		allprofit_battle_potion_of_agility.style.color='lime';
	} else
	if (allprofit_battle_potion_of_agility.innerHTML < 0) {
		allprofit_battle_potion_of_agility.style.color='red';
	} else {
		allprofit_battle_potion_of_agility.style.color='gold';
	}
	//Боевое зелье силы battle_potion_of_strength
	selfcost_battle_potion_of_strength.innerHTML = price_seastalk*10+price_starmoss*8;
	profit_battle_potion_of_strength.innerHTML = auccost_battle_potion_of_strength - selfcost_battle_potion_of_strength.innerHTML;
	if (profit_battle_potion_of_strength.innerHTML > 0) {
		profit_battle_potion_of_strength.style.color='lime';
	} else
	if (profit_battle_potion_of_strength.innerHTML < 0) {
		profit_battle_potion_of_strength.style.color='red';
	} else {
		profit_battle_potion_of_strength.style.color='gold';
	}
	allprofit_battle_potion_of_strength.innerHTML = procked_battle_potion_of_strength * auccost_battle_potion_of_strength - created_battle_potion_of_strength * selfcost_battle_potion_of_strength.innerHTML;
	if (allprofit_battle_potion_of_strength.innerHTML > 0) {
		allprofit_battle_potion_of_strength.style.color='lime';
	} else
	if (allprofit_battle_potion_of_strength.innerHTML < 0) {
		allprofit_battle_potion_of_strength.style.color='red';
	} else {
		allprofit_battle_potion_of_strength.style.color='gold';
	}
	//Боевое зелье интеллекта battle_potion_of_intellect
	selfcost_battle_potion_of_intellect.innerHTML = price_sirenspollen*10+price_riverbud*8;
	profit_battle_potion_of_intellect.innerHTML = auccost_battle_potion_of_intellect - selfcost_battle_potion_of_intellect.innerHTML;
	if (profit_battle_potion_of_intellect.innerHTML > 0) {
		profit_battle_potion_of_intellect.style.color='lime';
	} else
	if (profit_battle_potion_of_intellect.innerHTML < 0) {
		profit_battle_potion_of_intellect.style.color='red';
	} else {
		profit_battle_potion_of_intellect.style.color='gold';
	}
	allprofit_battle_potion_of_intellect.innerHTML = procked_battle_potion_of_intellect * auccost_battle_potion_of_intellect - created_battle_potion_of_intellect * selfcost_battle_potion_of_intellect.innerHTML;
	if (allprofit_battle_potion_of_intellect.innerHTML > 0) {
		allprofit_battle_potion_of_intellect.style.color='lime';
	} else
	if (allprofit_battle_potion_of_intellect.innerHTML < 0) {
		allprofit_battle_potion_of_intellect.style.color='red';
	} else {
		allprofit_battle_potion_of_intellect.style.color='gold';
	}

}
function save_cookie(){
	
	document.cookie = "cost=; path=/; expires=-1";
	cost = "auccost-flask_strength_1:"+document.getElementById('auccost-flask_strength_1').value+",auccost-flask_vitality_2:"+document.getElementById('auccost-flask_vitality_2').value+",auccost-flask_agility_3:"+document.getElementById('auccost-flask_agility_3').value+",auccost-flask_intelligence_4:"+document.getElementById('auccost-flask_intelligence_4').value+",auccost-battle_potion_of_stamina:"+document.getElementById('auccost-battle_potion_of_stamina').value+",auccost-battle_potion_of_agility:"+document.getElementById('auccost-battle_potion_of_agility').value+",auccost-battle_potion_of_strength:"+document.getElementById('auccost-battle_potion_of_strength').value+",auccost-battle_potion_of_intellect:"+document.getElementById('auccost-battle_potion_of_intellect').value+",price-anchorweed:"+document.getElementById('price-anchorweed').value+",price-winterskiss:"+document.getElementById('price-winterskiss').value+",price-riverbud:"+document.getElementById('price-riverbud').value+",price-starmoss:"+document.getElementById('price-starmoss').value+",price-sirenspollen:"+document.getElementById('price-sirenspollen').value+",price-akundasbite:"+document.getElementById('price-akundasbite').value+",price-seastalk:"+document.getElementById('price-seastalk').value;
	
	var date = new Date(new Date().getTime() + 60*60*24*14 * 1000);
	document.cookie = "cost="+cost+"; path=/; expires=" + date.toUTCString();
	alert("Данные сохранены на 2 недели");
}

function load_cookie(){
	
	var cost_cookie=document.cookie.split("=");
	
	array_cost_cookie = cost_cookie[1].split(",");
	for (var i = 0; i < 15; i++) {
		array_cost = array_cost_cookie[i].split(":");
		document.getElementById(array_cost[0]).value = array_cost[1];
	}
	get_profit();
}
