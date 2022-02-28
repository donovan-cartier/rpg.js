var weaponNameText = document.getElementById('weapon-name');
var weaponDescriptionText = document.getElementById('weapon-description');

var playerNameText = document.getElementById('player-name');
var playerHpText = document.getElementById('player-hp');
var playerGoldText = document.getElementById('player-gold');

var timeText = document.getElementById('time');

var exploreButton = document.getElementById('explore');
var exploreText = document.getElementById('explore-text');

var attackButton = document.getElementById('attack');
var itemsButton = document.getElementById('items');

var questTitleText = document.getElementById('quest-title');
var questDescriptionText = document.getElementById('quest-description');
var questRewardText = document.getElementById('quest-reward');

var backgroundTime = document.getElementById('background-time');



var minutes = 59;
var hours = 22;

var treasuresObtained = 0;

weaponNameText.innerHTML = player.currentWeapon.name;
weaponDescriptionText.innerHTML = player.currentWeapon.description;

playerNameText.innerHTML = player.name;
playerHpText.innerHTML = player.hp + "/" + player.maxHp + " PV";
playerGoldText.innerHTML = player.gold + " pièces d'or";

exploreButton.addEventListener('click', function(){
    explore();
    this.disabled = true; 
});

attackButton.addEventListener('click', function(){
    console.log("player.attack()");
    this.disabled = true; 
});

expeditionLevel = 0;

questTitleText.innerHTML = player.currentQuest.title;
questDescriptionText.innerHTML = player.currentQuest.description;
questRewardText.innerHTML = player.currentQuest.reward + " pièces d'or";

var monstersList;

function importMonsters(file){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var monstersJSON = rawFile.responseText;
                    monstersList = JSON.parse(monstersJSON);

                }
            }
        }
        rawFile.send(null);
}

importMonsters("/script/monsters.json");

