let score = 0;
let clickValue = 1;
let upgradeCost = 10;

const scoreEl = document.getElementById('score');
const clickBtn = document.getElementById('click-btn');
const upgradeBtn = document.getElementById('upgrade-btn');
const upgradeCostEl = document.getElementById('upgrade-cost');

clickBtn.addEventListener('click', () => {
    score += clickValue;
    scoreEl.textContent = score;
});

upgradeBtn.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickValue += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        scoreEl.textContent = score;
        upgradeCostEl.textContent = upgradeCost;
    }
});
