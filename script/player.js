var player = {
    name: "Linsen",
    hp: 10,
    maxHp: 10,
    currentWeapon: basicSword,
    currentQuest: questList[0],
    currentLocation : 'plaine',
    gold: 0,
    inventory: [],

    updateGold(amount){
        this.gold += amount;
        playerGoldText.innerHTML = player.gold + " pièces d'or";
    },

    updateHp(amount){
        this.hp += amount;
        if(this.hp > this.maxHp){
            this.hp = this.maxHp;
        }
        playerHpText.innerHTML = player.hp + "/" + player.maxHp + " PV";
    },

    takeDamage(amount){
        this.hp -= amount;
        if(this.hp <= 0){
            this.hp = 0;
            exploreText.innerHTML = "Vous rentrez bredouille...";
            checkQuestConditions();
            expeditionLevel = 0;
            treasuresObtained = 0;

            this.hp = this.maxHp;
            playerHpText.innerHTML = player.hp + "/" + player.maxHp;
            exploreButton.disabled = false; 
        } else {
            attackButton.disabled = false;
            playerHpText.innerHTML = player.hp + "/" + player.maxHp + " PV";
            exploreText.innerHTML = "Combat : " + currentEnemy.name + " (" + currentEnemy.health + " PV)";
        }
    },

    addToInventory(item){
        this.inventory.push(item);
        itemList.innerHTML += "<li class='item-element'>" + item.name + " <button class='button-use-item' data-item='" + item.name + "'>Utiliser</button></li>";
    }
}