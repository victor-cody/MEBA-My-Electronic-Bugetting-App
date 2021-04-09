const domElements = {
    //header & budget elements
    date: document.querySelector(".budget_title_month"),
    totalIncome: document.querySelector(".budget_income-value"),
    totalExpense: document.querySelector(".budget_expenses-value"),
    totalPercentage: document.querySelector(".budget_expenses-percentage"),
    totalBudget: document.querySelector(".budget_value"),
    sign:document.querySelector(".sign"),
    userCurrency:document.querySelector(".currency"),
    availableBalance:document.querySelector(".available_funds"),
    errMsg: document.querySelector('.err_msg'),
    container: document.querySelector(".container"),
    //input fields
    budgetField: document.querySelector(".add_field"),
    descriptionInput: document.querySelector("#add_description"),
    valueInput: document.querySelector("#add_value"),
    selectType: document.querySelector("#add_type"),
    addBudgetItem: document.querySelector("#add_btn"),
    //Budget Items
    incomeContainer: document.querySelector("#income-list"),
    expenseContainer: document.querySelector("#expenses-list"),
    //
    itemPercentage: document.querySelectorAll(".item_percentage"),
    deleteBtn: document.querySelectorAll(".item_delete-btn"),
    settingsBody: document.querySelector('.settings_body'),
    settingsIcon: document.querySelector('.settings_icon'),
    settingsBodyContent: document.querySelector('.settings_body_content'),
    userCurrency: document.querySelector('.currency'),
    selectCurrency: document.querySelector('#currency'),
    notifications: document.querySelector('#notification')
};

//our central data Structure
const DataStructure = {
  allItem: {
    income: [],
    expense: [],
  },
  totals: {
    income: 0,
    expense: 0,
  },
  Budget: 0,
  percentage: -1,
  // percentages: []
};

const readData = async (type) => {
 try {
  return DataStructure.allItem[type];
 } catch (error) {
   console.log(error);
 }
}

const writeData = async (type,newData) => {
  try {
    DataStructure.allItem[type].push(newData)
  } catch (error) {
    console.log(error);
  }
};

//This file contains functions that define,store and control data and object models for the app. 
const appModel = (function () {  
    //object constructor for the Input Data, both expense and income
    class Income {
      constructor(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }
    }
  
    class Expense {
      constructor(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }
      calcPercentage(totalIncome) {
        if (totalIncome > 0) {
          this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
          this.percentage = -1;
        }
      }
      getPercentage() {
        return this.percentage;
      }
    }

     const  calculatePercentage = (totalIncome,totalExpense) => {
        if (totalIncome > 0) {
          percentage = Math.round((totalExpense / totalIncome) * 100);
        } else {
         percentage = -1;
        }
        return percentage;
      };
  
    //Calculate total value of each type of input in db i.e expense or income 
    const calculateTotals = async (type) => {
      const data = await readData(type);
      let sum = [];
  
      for (var i = 0; i < data.length; i++) {
        sum.push(parseInt(data[i].value));
      }
      
      let result = sum.reduce(function (prev, next) {
        return prev + next;
      }, 0)
      
      DataStructure.totals[type] = result;

      console.log(result);

      localStorage.setItem(type, DataStructure.totals[type]);
    };
  
  //Function to model new input and add to db
  const addNewData = async (type, desc, val) => {
    try {
      const data = await readData(type)
      let newData, newId;
      if (data.length > 0) {
        //0,3,5,6,8 ,9
        newId = data[data.length - 1].id + 1;
      } else {
        newId = 0;
      }

      //Creating a new budget item based on the 'inc' or 'exp' type
      if (type === "income") {
        newData = new Income(newId, desc, val);
      } else if (type === "expense") {
        newData = new Expense(newId, desc, val);
      }

      //adding our newItem into the data Structure
      await writeData(type,newData)
      console.log(newData);
      //returning our new budget item
      return newData;
      
    } catch (error) {
      console.error(error);
    }
  }

    return {
      
       calculatePercentage : (totalIncome,totalExpense) => {
        if (totalIncome > 0) {
          percentage = Math.round((totalExpense / totalIncome) * 100);
        } else {
         percentage = -1;
        }
        return percentage;
      },

      async addToDB (type, desc, val) {
          if (type === "income") {
              return await addNewData("income", desc, val);
            } else {
              return await addNewData("expense", desc, val);
            }
      }, 
      //deleting an item from the budget and the data structure
      deleteFromDB (type, Id ) {
        deleteData(type,Id)
      },
      //our function to Recalculate the Budget
      async CalculateBalance () {
        let percentage;
        //calculate the total income and expenses
        await calculateTotals("income");
        await calculateTotals("expenses");
  
        //Retrieving the total income and expenses from the localStorage
        const totalIncome = parseFloat(localStorage.getItem("income"));
        const totalExpense = parseFloat(localStorage.getItem("expense"));
  
        //then calculate the available balance: Total Income - Total Expenses
        const Budget = totalIncome - totalExpense;
        localStorage.setItem("Budget",Budget);
  
        //Then calculate the percentage of the income spent if income is greater than zero
        percentage = calculatePercentage(totalIncome,totalExpense);
        localStorage.setItem("Percentage", percentage);
      },
  
      //Initializing the localStorage items when the window loads and if the are not set, sets them to zero 
      initializeLocalStorage () {
        if (!((localStorage.hasOwnProperty('Budget')) && (localStorage.hasOwnProperty('income')) && (localStorage.hasOwnProperty('expense')) && (localStorage.hasOwnProperty('Percentage')))) {
          localStorage.setItem("Budget", 0);
          localStorage.setItem("income", 0);
          localStorage.setItem("expense", 0);
          localStorage.setItem("Percentage", 0);
          localStorage.setItem('userCurrency', '&#8358;');
      }
    },
  
    getBudgetItems () {
      return {
        budget:parseFloat(localStorage.getItem("Budget")),
        totalIncome: parseFloat(localStorage.getItem("income")),
        totalExpense: parseFloat(localStorage.getItem("expense")),
        percentage: parseFloat(localStorage.getItem("Percentage")),
        userCurrency: localStorage.getItem("userCurrency")
      };
    },
  
    resetLocalStorage () {
      localStorage.setItem("Budget", 0);
      localStorage.setItem("income", 0);
      localStorage.setItem("expense", 0);
      localStorage.setItem("Percentage", 0);
    },
    testing() {
      console.log("works");
    },
  
  };
  })();
  
//This file contains functions that define DOM Interactions for the app , It Controls the UI And UX that entreats with the User
const appView = (function () {
  //Private function to format numbers
  const formatNumber = function (num) {
    let numSplit, integer, decimal;

    //Make the number an absolute one i.e remove any sign, fixed to a decimal point of two
    num = Math.abs(num).toFixed(2); //returns a string
    //Spilt number into 2 parts from the decimal point, one for interger, the for the decimal part
    numSplit = num.split(".");
    //Assign the integer and decimal sides to variables. format integer to add commas
    integer = parseInt(numSplit[0]).toLocaleString();

    //  appending exactly 2 decimal points after each no
    //   and a comma separating the thousands
    if (integer.length > 3) {
      integer = `${integer.substr(0, integer.length - 3)},${integer.substr(
        integer.length - 3,
        integer.length
      )}`; //2354000 => 23,540//
    } else if (integer.length > 7) {
      integer = `${integer.substr(0, integer.length - 7)},${integer.substr(
        integer.length - 7,
        integer.length
      )}`; //2354000 => 23,540//
    }

    decimal = `.${numSplit[1]}`;
    return `${integer}.${decimal}`;
  };

  return {
    getInput() {
      return {
        inputType: domElements.selectType.value, //will be either income or expenses,
        inputDescription: domElements.descriptionInput.value,
        amount: parseFloat(domElements.valueInput.value),
      };
    },
    //Publicly accessible method which accepts the resulting object; newItem and its type
    async addItemToUI(obj, type) {
      // const data = obj;
      let newItem, element;
      //Create html templates with placeholder text and replacing them with actual data based on each input type i.e income or expenses
      if (type === "income") {
        element = domElements.incomeContainer;
        newItem = `<li class="item clearfix" id="${type}-${obj.id}">
        <span class="item_description"> ${obj.description} 
        </span>
        <div class="right clearfix">
           <span class="item_value"> ${formatNumber(obj.value)} 
           </span>
           <span class="item_delete">
               <button class="item_delete-btn" title="delete item">
                <i class="ion-ios-close-outline"></i>
               </button>
           </span>
       </div>
           </li> `;
      } else if (type === "expenses") {
        element = domElements.expenseContainer;
        newItem = `<li class="item clearfix" id="${type}-${obj.id}">
         <span class="item_description"> ${obj.description} 
         </span>
         <div class="right clearfix">
            <span class="item_value"> ${formatNumber(obj.value)} 
            </span>
            <span class="item_percentage"> 21% </span>
            <span class="item_delete">
                <button class="item_delete-btn" title="delete item">
                 <i class="ion-ios-close-outline"></i>
                </button>
            </span>
        </div>
            </li>`;
      }
      //Insert newItem element into either the expense list or income list
      element.insertAdjacentHTML("beforeend", newItem);
    },

    //Calculate percentage for all expenses
    calculateAndDisplayPercentages() {
      let totalIncome = parseInt(localStorage.getItem("income"));
      console.log("totalincome :", totalIncome);

      //get all the lis in expenses ul
      let expenses = domElements.expenseContainer.getElementsByTagName("li");

      for (let i = 0; i < expenses.length; i++) {
        //get string in span and remove spaces from the string
        let string = expenses[i]
          .getElementsByTagName("span")[2]
          .textContent.trim();
        let stringSplit = string.split(" ");
        let amount = parseInt(stringSplit[1].split(",").join(""));
        console.log(amount);
        let percentage;

        percentage = appModel.

        expenses[i].getElementsByTagName(
          "span"
        )[2].textContent = ` ${percentage}%`;
      }
    },

    updateTotalsAndBalance(input) {
      let totalIncome;
      //if input is income, calculate and update total incomes
      if (input.inputType === "income") {
        let income = parseInt(localStorage.getItem("income"));
        totalIncome = income + parseInt(input.inputValue);
        domElements.totalIncome.textContent = formatNumber(totalIncome);
        localStorage.setItem("income", totalIncome);
      }
      //if input is expense, calculate update total expenses
      else {
        let expense = parseInt(localStorage.getItem("expenses"));
        let totalExpense = expense + parseInt(input.inputValue);
        domElements.totalExpense.textContent = formatNumber(totalExpense);
        localStorage.setItem("expense", totalExpense);
      }

      let totalExpenses = parseInt(localStorage.getItem("expense"));
      let totalIncomes = parseInt(localStorage.getItem("income"));

      //Calculate, update and store budget in localStorage
      let Budget = totalIncomes - totalExpenses;
      domElements.availableBalance.textContent = Budget;
      localStorage.setItem("Budget", budget);

      //Determining and displaying the sign , using Ternary operators
      Budget > 0
        ? (domElements.sign.textContent = "+")
        : (domElements.sign.textContent = "-");

      //Determine and display expense percentage
      let percentage = appModel.calculatePercentage(totalIncome,totalExpenses);

      domElements.totalPercentage.textContent = `${percentage}%`;
      localStorage.setItem("Percentage", percentage);
    },

    loadIncomeFromIDB: function () {
      let newIncome;
      readData("income").then((data) => {
        if (data) {
          for (var i = 0; i < data.length; i++) {
            newIncome = `<li id="income-${data[i].id}">
              <span class="item_description"> ${data[i].description} 
                </span>
        <div class="right clearfix">
          <span class="item_value"> ${formatNumber(data[i].value)} 
             </span>
        <span class="item_delete">
          <button class="item_delete-btn" title="delete item">
          <i class="ion-ios-close-outline"></i>
          </button>
        </span>
          </div>
        </li>`;

            domElements.incomeContainer.insertAdjacentHTML("afterbegin", newIncome);
          }
        }
      });
    },

    loadExpenseFromIDB: function () {
      readData("expense").then((data) => {
        if (data) {
          for (var i = 0; i < data.length; i++) {
            let newExpense = `<li id="income-${data[i].id}">
            <span class="item_description"> ${data[i].description} 
              </span>
            <div class="right clearfix">
              <span class="item_value"> ${formatNumber(data[i].value)} 
              </span>
              <span class="item_percentage"> 
              - %per%
              </span>
            <span class="item_delete">
            <button class="item_delete-btn" title="delete item">
            <i class="ion-ios-close-outline"></i>
            </button>
          </span>
          </div>
          </li>`;

            domElements.expenseContainer.insertAdjacentHTML(
              "afterbegin",
              newExpense
            );
          }
        }
      });
    },

    //Displaying the budget on the UI
    loadTotalsFromLocalStorage: function (obj) {
      let sign;
      obj.budget > 0 ? sign = '+' : sign = '-';

      domElements.sign.textContent = sign;
      domElements.availableBalance.textContent = formatNumber(obj.budget);
      domElements.totalIncome.textContent = formatNumber(obj.totalIncome);
      domElements.totalExpense.textContent = formatNumber(obj.totalExpense);
      domElements.userCurrency.innerHTML = obj.userCurrency;
      //applying Ternary operations
      obj.percentage > 0 ? domElements.totalPercentage.textContent = obj.percentage + '%' : domElements.totalPercentage.textContent = '--';
    
    },

    //Display or Hide settings panel on click
    showSettingsBody: function () {
      domElements.settingsBody.classList.remove("hidden");
      domElements.settingsBody.classList.toggle("close");
      domElements.settingsBody.classList.toggle("open");
      domElements.settingsBodyContent.classList.toggle("hidden");
    },

    displayDate: function () {
      let now, month, months;
      now = new Date();
      //get month
      month = now.getMonth(); //returns an integer of a zero based array representing respective months
      months = [
        "January",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];

      domElements.date.textContent = `${months[month]}, ${now.getFullYear()}`;
    },
    //delete input items from ui
    deleteFromUI: (selectorID) => {
      document.getElementById(selectorID).remove();
    },

    clearFormFields: function () {
      const formFields = [
        ...domElements.descriptionInput,
        domElements.valueInput,
      ];
      formFields.forEach((field) => {
        field.value = " ";
      });
      //giving our input fields focus back
      formFields[0].focus();
    },

    displayType() {
      [
        domElements.selectType,
        domElements.descriptionInput,
        domElements.valueInput,
      ].forEach((element) => element.classList.toggle("red-focus"));
      domElements.addBudgetItem.classList.toggle("red");
    },

    setUserCurrency: () => {
      localStorage.setItem("userCurrency", domElements.selectCurrency.value);
      domElements.userCurrency.innerHTML = localStorage.getItem("userCurrency");
    },
  };
})();

