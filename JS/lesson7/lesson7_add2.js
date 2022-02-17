//https://github.com/Rostyslav997/js_demos/blob/master/js/preview/lesson7/lesson7_tasks/additional/%D1%81losures.pdf
//створити карту користувача userCard
function UserCard (number){
    let cardinfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
    }
    return {
        getCardOptions: () => cardinfo,
        putCredits: (credit) => {
            cardinfo.balance = credit;
            let transaktion = {
                operationType: 'Received credits',
                credits: credit,
                operationTime: '17/02/2022, 18:32:33'
            }
            cardinfo.historyLogs.push(transaktion)

        },
        takeCredits: (credit) => {
            if (cardinfo.balance && cardinfo.transactionLimit>credit){
                cardinfo.balance = cardinfo.balance - credit;
                let transaktion = {
                    operationType: 'Withdrawal of credits',
                    credits: credit,
                    operationTime: '17/02/2022, 18:38:43'
                }
                cardinfo.historyLogs.push(transaktion)
            } else {
                console.error('Недостатньо коштів')
            }
        },
        setTransactionLimit: (limit) => {
            cardinfo.transactionLimit = limit;
            let transaction = {
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: '17/02/2022, 18:42:49'
            }
            cardinfo.historyLogs.push(transaction)
        },
        transferCredits: (credits, card) => {
            if (cardinfo.balance && cardinfo.transactionLimit>credits){
                card.getCardOptions().balance = card.getCardOptions().balance + credits
                cardinfo.balance = cardinfo.balance - (credits+credits*0.5/100);
            } else {
                console.error('Недостатньо коштів')
            }
        }
    }
}
//let card1 = UserCard(1);
//card1.putCredits(100)
//card1.setTransactionLimit(300)
//card1.takeCredits(10)
//console.log(card1.getCardOptions());

//створити userAccount
class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }
    addCard (card) {
        if (this.cards.length<=3){
            this.cards.push(card)
        } else {
            console.error(`Забагато карток`)
        }
    }
    getCardByKey (card,key) {
        if (card.getCardOptions().key===key){
            return card.getCardOptions()
        } else {
            console.error(`Такої карти немає`)
        }
    }

}
let user1 = new UserAccount('Bob');
let card1 = new UserCard(1)
user1.addCard(card1)
let user2 = new UserAccount('Nick');
let card2 = new UserCard(2);
user2.addCard(card2);
card1.putCredits(400)
card1.setTransactionLimit(300)
card1.transferCredits(150,card2)
console.log(user1.getCardByKey(card1, 1));
console.log(user2.getCardByKey(card2, 2));



