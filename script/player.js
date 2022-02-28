var player = {
    name: "Linsen",
    hp: 2,
    maxHp: 5,
    currentWeapon: basicSword,
    currentQuest: questList[0],
    currentLocation : 'plaine',
    gold: 0,

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
    }
}