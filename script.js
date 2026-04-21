//1
//1.1
let user = {
  hobby: "football",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);

for (const key1 in user) {
   const value1 = user[key1];
   console.log(`${key1}: ${value1}`)
}
//1.2

const user2 = {
  car: "Toyota",
  home: "flat",
  placeOflive: "Kyiv",
  children: false,
  cat: true,
  countProps(obj) {
    return Object.keys(obj).length;
  },
};
console.log(user2.countProps(user2));
//1.3
const employees = {
  Andriy: 45,
  Olena: 128,
  Nazar: 150,
  Vlad: 0,
  Anastasia: 95,
};
function findBestEmployee(employees) {
  let TheBestEmployerName = "";
  let TheBestEmployerNumber = 0;
  for (const employer1 in employees) {
    const countOfZadach = employees[employer1]
    if(countOfZadach > TheBestEmployerNumber){
        TheBestEmployerNumber = countOfZadach;
        TheBestEmployerName = employer1;
    }
  }
  return `${TheBestEmployerName}: ${TheBestEmployerNumber}`
}


console.log(findBestEmployee(employees));

//1.4
const employeesSalaries = {
  Andriy: 34000,
  Olena: 103000,
  Nazar: 78000,
  Vlad: 0, 
  Anastasia: 59000,
};
function countTotalSalary(employeesSalaries) {
  let sum = 0;
const zarplaty = Object.values(employeesSalaries)
for (const zarplata of zarplaty) {
    sum += zarplata
}
for (const name in employeesSalaries) {
    const Salary = employeesSalaries[name]
    console.log(`${name}: ${Salary}`)                      
}
return sum
}
console.log(countTotalSalary(employeesSalaries));
//1.5
const arr = [
  { prop: "tomato", exp: 10 },
  { prop: "auto", exp: 2000 },
  { prop: "lopast", exp: 50 },
  { prop: "eight", exp: 8 },
  { prop: "CSGO", exp: 0 },
];

function getAllPropValues(arr, prop) {
  const result = [];
  for (let i1 = 0; i1 < arr.length; i1++) {
    result.push(arr[i1][prop]);
  }
  return result;
}

console.log(getAllPropValues(arr, "prop"))
console.log(getAllPropValues(arr, "exp"))
//1.6



const allProdcuts = [
  { product: "sandwich", price: 20, count: 1 },
  { product: "milk", price: 55, count: 2 },
  { product: "butter", price: 80, count: 3 },
];
function calculateTotalPrice(allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.product === productName) {
      return product.price * product.count;
    }
  }
  return 0;
}
console.log(calculateTotalPrice(allProdcuts, "butter"));
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const account = {
 
  balance: 0,
  transactions: [],
  
  createTransaction(amount, type) {
    const everyTrancsaction = {
      id: 1,
      type,
      amount,
    };
    return everyTrancsaction;
  },
 
  deposit(amount) {
    account.balance += amount;
    const callForFunction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(callForFunction);
  },

  
  withdraw(amount) {},

  getBalance() {},
  
  getTransactionDetails(id) {
    for (const Transaction of this.transactions) {
      if (Transaction.id === id) {
        return Transaction;
      } else {
        console.log("Анлак");
      }
    }
  },

  getTransactionTotal(type) {
    let hightransaction = 0;

    for (const Transaction of this.transactions) {
      if (Transaction.type === type) {
        hightransaction += Transaction.amount;
      }
    }
    return hightransaction;
  },
};

account.deposit(1000);
account.getTransactionDetails(1);
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
account.deposit(1278);
console.log(account);
console.log(account.getTransactionTotal(Transaction.DEPOSIT));