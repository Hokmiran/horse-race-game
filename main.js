const button = document.getElementById('button');
const horse1 = document.getElementById('horse1');
const horse2 = document.getElementById('horse2');
const horse3 = document.getElementById('horse3');
let audio = document.getElementById("myAudio");
let min = 10;
let max = 15;
const wallet = document.getElementById('wallet');
let amountInMyWallet = parseInt(localStorage.getItem('amountInMyWallet')) || 300;
wallet.textContent = `Wallet: $${amountInMyWallet}`;

button.addEventListener('click', (e) => {
    e.preventDefault();
    const selectHorse = document.getElementById('horse');
    const choosenHorse = selectHorse.options[selectHorse.selectedIndex].value;
    const amountOfMyBet = parseInt(document.getElementById('bet').value);
    audio.play();
    if (amountOfMyBet > amountInMyWallet) {
        alert("You don't have enough money to place this bet!");
        return;
    }

    amountInMyWallet -= amountOfMyBet;
    wallet.textContent = `Wallet: ${amountInMyWallet}`;

    const transition1 = (Math.random() * (max - min + 1) + min);
    const transition2 = (Math.random() * (max - min + 1) + min);
    const transition3 = (Math.random() * (max - min + 1) + min);
    horse2.style.marginLeft = `800px`;
    horse1.style.transition = `${transition1}s`;
    horse1.style.marginLeft = `800px`;
    horse2.style.transition = `${transition2}s`;
    horse3.style.marginLeft = `800px`;
    horse3.style.transition = `${transition3}s`;
    let arr = [transition1, transition2, transition3];
    let big = Math.min(...arr);

    setTimeout(() => {
        let amountOfMyWinning = 0;
        if (transition1 < transition2 && transition1 < transition3) {
            alert("Horse number 1 won the race!");
            if (choosenHorse == 0) {
                amountOfMyWinning = amountOfMyBet * 2;
            }
        } else if (transition2 < transition1 && transition2 < transition3) {
            alert("Horse number 2 won the race!");
            if (choosenHorse == 1) {
                amountOfMyWinning = amountOfMyBet * 2;
            }
        } else if (transition3 < transition1 && transition3 < transition2) {
            alert("Horse number 3 won the race!");
            if (choosenHorse == 2) {
                amountOfMyWinning = amountOfMyBet * 2;
            }
        }
        amountInMyWallet += amountOfMyWinning;
        wallet.textContent = `Wallet: ${amountInMyWallet}`;
        if (amountOfMyWinning > 0) {
            alert(`Congratulations! You won $${amountOfMyWinning}!`);
        }
        localStorage.setItem('amountInMyWallet', amountInMyWallet);
        location.reload();
    }, `${big * 1000}`);
});

