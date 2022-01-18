window.onload = initializeListeners;
function initializeListeners() {
    let createButton = document.getElementById("create-button");
    createButton.onclick = AccountModule();

    let textArea = document.getElementById("text-area");
    textArea.value = accountInfoList;
}

let accountInfoList = [];
function refreshUi() {
    let newAccount = accountInfoList[accountInfoList.length - 1];
    document.getElementById("text-area").value += "\n" + "Account name: " + newAccount.name + " Balance: " + newAccount.balance;
    document.getElementById("account-name").value="";
    document.getElementById("deposit").value="";
}
let AccountModule = (function () {
        function Account(name, deposit) {
            this.name = name;
            this.balance = deposit;
        }

        return function createNewAccount() {
            let account = new Account(document.getElementById("account-name").value,
                document.getElementById("deposit").value);
            accountInfoList.push(account)
            refreshUi();
        }
    }

)


function closureAndModuleExample() {
    document.getElementById("output").innerHTML += "Rudy!";
}
let rudyTimer = (function () {
    let timer = null;

    return function printRudy() {
        if (timer === null) {
            timer = setInterval(closureAndModuleExample, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();
