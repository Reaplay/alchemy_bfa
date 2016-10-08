var herbs_translate = [
	{name:'aethril', rus:'Айтрил', eng:'Aethril'},
	{name:'dreamleaf', rus:'Грезолист', eng:'Dreamleaf'},
	{name:'starlightrosepetals', rus:'Звездная роза', eng:'Starlight Rose Petals'},
	{name:'foxflower', rus:'Лисоцвет', eng:'Foxflower'},
	{name:'yserallineseed', rus:'Семя Изеры', eng:'Yseralline Seed'},
	{name:'fjarnskaggl', rus:'Фьярнскаггл', eng:'Fjarnskaggl'}
];

var lang_change = document.getElementById("lang-change");
var lang_pr = 0;
	//себестоимость бутылок
var selfcost_flask_strength_1 = document.getElementById('selfcost-flask_strength_1'),
	selfcost_flask_vitality_2 = document.getElementById('selfcost-flask_vitality_2'),
	selfcost_flask_agility_3 = document.getElementById('selfcost-flask_agility_3'),
	selfcost_flask_intelligence_4 = document.getElementById('selfcost-flask_intelligence_4'),
	selfcost_potion_ancient_war_1 = document.getElementById('selfcost-potion_ancient_war_1'),
	selfcost_potion_unstoppable_2 = document.getElementById('selfcost-potion_unstoppable_2'),
	selfcost_potion_power_flow_3 = document.getElementById('selfcost-potion_power_flow_3'),
	selfcost_potion_deadly_present_4 = document.getElementById('selfcost-potion_deadly_present_4'),
	//прибыль-убыток
	profit_flask_strength_1 = document.getElementById('profit-flask_strength_1'),
	profit_flask_vitality_2 = document.getElementById('profit-flask_vitality_2'),
	profit_flask_agility_3 = document.getElementById('profit-flask_agility_3'),
	profit_flask_intelligence_4 = document.getElementById('profit-flask_intelligence_4'),
	profit_potion_ancient_war_1 = document.getElementById('profit-potion_ancient_war_1'),
	profit_potion_unstoppable_2 = document.getElementById('profit-potion_unstoppable_2'),
	profit_potion_power_flow_3 = document.getElementById('profit-potion_power_flow_3'),
	profit_potion_deadly_present_4 = document.getElementById('profit-potion_deadly_present_4'),
	//итог
	allprofit_flask_strength_1 = document.getElementById('allprofit-flask_strength_1'),
	allprofit_flask_vitality_2 = document.getElementById('allprofit-flask_vitality_2'),
	allprofit_flask_agility_3 = document.getElementById('allprofit-flask_agility_3'),
	allprofit_flask_intelligence_4 = document.getElementById('allprofit-flask_intelligence_4'),
	allprofit_potion_ancient_war_1 = document.getElementById('allprofit-potion_ancient_war_1'),
	allprofit_potion_unstoppable_2 = document.getElementById('allprofit-potion_unstoppable_2'),
	allprofit_potion_power_flow_3 = document.getElementById('allprofit-potion_power_flow_3'),
	allprofit_potion_deadly_present_4 = document.getElementById('allprofit-potion_deadly_present_4'),
	//Аннигилят
	totalprice_yserallineseed = document.getElementById('totalprice-yserallineseed'),
	plan_ancient_healing_potions = document.getElementById('plan-ancient-healing-potions'),
	selfcost_annihilat_small = document.getElementById('selfcost-annihilat-small'),
	selfcost_annihilat = document.getElementById('selfcost-annihilat'),
	profit_annihilat = document.getElementById('profit-annihilat'),
	allprofit_annihilat = document.getElementById('allprofit-annihilat');
	
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
	var price_aethril = document.getElementById('price-aethril').value,
		price_dreamleaf = document.getElementById('price-dreamleaf').value,
		price_starlightrosepetals = document.getElementById('price-starlightrosepetals').value,
		price_foxflower = document.getElementById('price-foxflower').value,
		price_yserallineseed = document.getElementById('price-yserallineseed').value,
		price_fjarnskaggl = document.getElementById('price-fjarnskaggl').value,
	//получили рыночную стоимость каждой бутылки
		auccost_flask_strength_1 = document.getElementById('auccost-flask_strength_1').value,
		auccost_flask_vitality_2 = document.getElementById('auccost-flask_vitality_2').value,
		auccost_flask_agility_3 = document.getElementById('auccost-flask_agility_3').value,
		auccost_flask_intelligence_4 = document.getElementById('auccost-flask_intelligence_4').value,
		auccost_potion_ancient_war_1 = document.getElementById('auccost-potion_ancient_war_1').value,
		auccost_potion_unstoppable_2 = document.getElementById('auccost-potion_unstoppable_2').value,
		auccost_potion_power_flow_3 = document.getElementById('auccost-potion_power_flow_3').value,
		auccost_potion_deadly_present_4 = document.getElementById('auccost-potion_deadly_present_4').value,
	//получили количество созданной продукции
		created_flask_strength_1 = document.getElementById('created-flask_strength_1').value,
		created_flask_vitality_2 = document.getElementById('created-flask_vitality_2').value,
		created_flask_agility_3 = document.getElementById('created-flask_agility_3').value,
		created_flask_intelligence_4 = document.getElementById('created-flask_intelligence_4').value,
		created_potion_ancient_war_1 = document.getElementById('created-potion_ancient_war_1').value,
		created_potion_unstoppable_2 = document.getElementById('created-potion_unstoppable_2').value,
		created_potion_power_flow_3 = document.getElementById('created-potion_power_flow_3').value,
		created_potion_deadly_present_4 = document.getElementById('created-potion_deadly_present_4').value,
	//получили количество прокнутой продукции
		procked_flask_strength_1 = document.getElementById('procked-flask_strength_1').value,
		procked_flask_vitality_2 = document.getElementById('procked-flask_vitality_2').value,
		procked_flask_agility_3 = document.getElementById('procked-flask_agility_3').value,
		procked_flask_intelligence_4 = document.getElementById('procked-flask_intelligence_4').value,
		procked_potion_ancient_war_1 = document.getElementById('procked-potion_ancient_war_1').value,
		procked_potion_unstoppable_2 = document.getElementById('procked-potion_unstoppable_2').value,
		procked_potion_power_flow_3 = document.getElementById('procked-potion_power_flow_3').value,
		procked_potion_deadly_present_4 = document.getElementById('procked-potion_deadly_present_4').value,
	//получили информацию по аннигиляту	
		count_yserallineseed = document.getElementById('count-yserallineseed').value,
		fact_ancient_healin_potions = document.getElementById('fact-ancient-healing-potions').value,
		count_annihilat_small = document.getElementById('count-annihilat-small').value,
		auccost_annihilat = document.getElementById('auccost-annihilat').value;
	//
	//
	//НАСТОИ
	//
	//
	//Настой бесчисленных армий
	selfcost_flask_strength_1.innerHTML = price_starlightrosepetals*7+price_aethril*10+price_foxflower*10;
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
	//Настой десяти тысяч шрамов
	selfcost_flask_vitality_2.innerHTML = price_starlightrosepetals*7+price_aethril*10+price_dreamleaf*10;
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
	//Настой седьмого демона
	selfcost_flask_agility_3.innerHTML = price_starlightrosepetals*7+price_foxflower*10+price_fjarnskaggl*10;
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
	//Настой тайного соглашения
	selfcost_flask_intelligence_4.innerHTML = price_starlightrosepetals*7+price_fjarnskaggl*10+price_dreamleaf*10;
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
	//Зелье древней войны potion_ancient_war_1
	selfcost_potion_ancient_war_1.innerHTML = price_starlightrosepetals*2+price_foxflower*4+price_fjarnskaggl*4;
	profit_potion_ancient_war_1.innerHTML = auccost_potion_ancient_war_1 - selfcost_potion_ancient_war_1.innerHTML;
	if (profit_potion_ancient_war_1.innerHTML > 0) {
		profit_potion_ancient_war_1.style.color='lime';
	} else
	if (profit_potion_ancient_war_1.innerHTML < 0) {
		profit_potion_ancient_war_1.style.color='red';
	} else {
		profit_potion_ancient_war_1.style.color='gold';
	}
	allprofit_potion_ancient_war_1.innerHTML = procked_potion_ancient_war_1 * auccost_potion_ancient_war_1 - created_potion_ancient_war_1 * selfcost_potion_ancient_war_1.innerHTML;
	if (allprofit_potion_ancient_war_1.innerHTML > 0) {
		allprofit_potion_ancient_war_1.style.color='lime';
	} else
	if (allprofit_potion_ancient_war_1.innerHTML < 0) {
		allprofit_potion_ancient_war_1.style.color='red';
	} else {
		allprofit_potion_ancient_war_1.style.color='gold';
	}
	//Зелье непреклонности potion_unstoppable_2
	selfcost_potion_unstoppable_2.innerHTML = price_starlightrosepetals*2+price_aethril*4+price_foxflower*4;
	profit_potion_unstoppable_2.innerHTML = auccost_potion_unstoppable_2 - selfcost_potion_unstoppable_2.innerHTML;
	if (profit_potion_unstoppable_2.innerHTML > 0) {
		profit_potion_unstoppable_2.style.color='lime';
	} else
	if (profit_potion_unstoppable_2.innerHTML < 0) {
		profit_potion_unstoppable_2.style.color='red';
	} else {
		profit_potion_unstoppable_2.style.color='gold';
	}
	allprofit_potion_unstoppable_2.innerHTML = procked_potion_unstoppable_2 * auccost_potion_unstoppable_2 - created_potion_unstoppable_2 * selfcost_potion_unstoppable_2.innerHTML;
	if (allprofit_potion_unstoppable_2.innerHTML > 0) {
		allprofit_potion_unstoppable_2.style.color='lime';
	} else
	if (allprofit_potion_unstoppable_2.innerHTML < 0) {
		allprofit_potion_unstoppable_2.style.color='red';
	} else {
		allprofit_potion_unstoppable_2.style.color='gold';
	}
	//Зелье силового потока potion_power_flow_3
	selfcost_potion_power_flow_3.innerHTML = price_starlightrosepetals*2+price_aethril*4+price_dreamleaf*4;
	profit_potion_power_flow_3.innerHTML = auccost_potion_power_flow_3 - selfcost_potion_power_flow_3.innerHTML;
	if (profit_potion_power_flow_3.innerHTML > 0) {
		profit_potion_power_flow_3.style.color='lime';
	} else
	if (profit_potion_power_flow_3.innerHTML < 0) {
		profit_potion_power_flow_3.style.color='red';
	} else {
		profit_potion_power_flow_3.style.color='gold';
	}
	allprofit_potion_power_flow_3.innerHTML = procked_potion_power_flow_3 * auccost_potion_power_flow_3 - created_potion_power_flow_3 * selfcost_potion_power_flow_3.innerHTML;
	if (allprofit_potion_power_flow_3.innerHTML > 0) {
		allprofit_potion_power_flow_3.style.color='lime';
	} else
	if (allprofit_potion_power_flow_3.innerHTML < 0) {
		allprofit_potion_power_flow_3.style.color='red';
	} else {
		allprofit_potion_power_flow_3.style.color='gold';
	}
	//Зелье смертоносной милости potion_deadly_present_4
	selfcost_potion_deadly_present_4.innerHTML = price_starlightrosepetals*2+price_fjarnskaggl*4+price_dreamleaf*4;
	profit_potion_deadly_present_4.innerHTML = auccost_potion_deadly_present_4 - selfcost_potion_deadly_present_4.innerHTML;
	if (profit_potion_deadly_present_4.innerHTML > 0) {
		profit_potion_deadly_present_4.style.color='lime';
	} else
	if (profit_potion_deadly_present_4.innerHTML < 0) {
		profit_potion_deadly_present_4.style.color='red';
	} else {
		profit_potion_deadly_present_4.style.color='gold';
	}
	allprofit_potion_deadly_present_4.innerHTML = procked_potion_deadly_present_4 * auccost_potion_deadly_present_4 - created_potion_deadly_present_4 * selfcost_potion_deadly_present_4.innerHTML;
	if (allprofit_potion_deadly_present_4.innerHTML > 0) {
		allprofit_potion_deadly_present_4.style.color='lime';
	} else
	if (allprofit_potion_deadly_present_4.innerHTML < 0) {
		allprofit_potion_deadly_present_4.style.color='red';
	} else {
		allprofit_potion_deadly_present_4.style.color='gold';
	}
	//Аннигилят
	/*totalprice_yserallineseed
	plan_ancient_healing_potions
	selfcost_annihilat_small
	selfcost_annihilat
	profit_annihilat
	allprofit_annihilat

	count_yserallineseed
	fact_ancient-healin_potions
	count_annihilat_small
	auccost_annihilat*/
	
	totalprice_yserallineseed.innerHTML = count_yserallineseed * price_yserallineseed;
	plan_ancient_healing_potions.innerHTML = count_yserallineseed / 4;
	selfcost_annihilat_small.innerHTML = (totalprice_yserallineseed.innerHTML / count_annihilat_small).toFixed(1);
	if (isNaN(totalprice_yserallineseed.innerHTML / count_annihilat_small)) {selfcost_annihilat_small.innerHTML = 0};
	selfcost_annihilat.innerHTML = (selfcost_annihilat_small.innerHTML * 100).toFixed(1);
	profit_annihilat.innerHTML = (auccost_annihilat - selfcost_annihilat.innerHTML).toFixed(1);
	if (profit_annihilat.innerHTML > 0) {
		profit_annihilat.style.color='lime';
	} else
	if (profit_annihilat.innerHTML < 0) {
		profit_annihilat.style.color='red';
	} else {
		profit_annihilat.style.color='gold';
	}
	allprofit_annihilat.innerHTML = (profit_annihilat.innerHTML * (count_annihilat_small / 100)).toFixed(1);
	if (allprofit_annihilat.innerHTML > 0) {
		allprofit_annihilat.style.color='lime';
	} else
	if (allprofit_annihilat.innerHTML < 0) {
		allprofit_annihilat.style.color='red';
	} else {
		allprofit_annihilat.style.color='gold';
	}
}