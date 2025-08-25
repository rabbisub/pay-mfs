const valPin= 1234;

const transData=[]
// reusable code 
// function to get input value convert to int
function getInputValueNumber(id){
    return parseInt(document.getElementById(id).value);
}
// get inner text 
function getInnerTextValue(id){
    return parseInt(document.getElementById(id).innerText);
}

// get input field value 
function getInputValue(id){
    return document.getElementById(id).value;
}

// set inner text 
function setInnerText(value){
     document.getElementById('available-balance').innerText=value;
   
    console.log(value)
}
// toggle funtion
function handleToggle(id){
    const forms=document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display='none'
    }
    document.getElementById(id).style.display='block'

}

// toggle style 
function btnToggle(id){
    const formBtns=document.getElementsByClassName('form-btn')
    for(const formBtn of formBtns){
        formBtn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        formBtn.classList.add('border-gray-300')
    }
    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]','text-[#0874F2]')
}


// ADD MONEY 
document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const bank = document.getElementById('bank').value;
    const accountNumber = getInputValue('bank-account-number')
    const amount = getInputValueNumber('amount')
    const pin = getInputValueNumber('pin-number')

    const currentBalance = getInnerTextValue('available-balance')

    if(amount<=0){
        alert('Amount can not be 0')
    }
    
    if(accountNumber.length <11 ){
        alert('Account number must be 11 digits');
        return;
    }
    if(accountNumber.length>11){
        alert('Account Number must be 11 digit')
        return
    }
    if(pin!== valPin){
        alert('Your pin is incorrect');
        return;
    }

    const newBalance = currentBalance + amount;
    
    setInnerText(newBalance) ;
    const data={
        name:'Add Money',
         date: new Date().toLocaleTimeString()
    }
   
    transData.push(data)


  
});
// cash out 
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber=document.getElementById('agent-number').value;
    const withdrawAmount=getInputValueNumber('cashOutAmount')
    const withdrawPin=getInputValueNumber('cashOutPin-number')
    const currentBalance = getInnerTextValue('available-balance')


    
    if(agentNumber.length <11 || agentNumber.length>11 ){
        alert('Account number must be 11 digits');
        return;
    }
    
    if(withdrawPin!== valPin){
        alert('Your pin is incorrect');
        return;
    }
    if(currentBalance<=0 || currentBalance<withdrawAmount){
        alert('Low balance')
        return;
    }

    const newBalance = currentBalance - withdrawAmount;
    
    setInnerText(newBalance);
    setInnerText(newBalance) ;
    const data={
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transData.push(data)

});

//transfer money
document.getElementById('transfer-btn').addEventListener('click',function(e){
    e.preventDefault();
    const userAccount= getInputValue('user-number')
    const amount=getInputValueNumber('transferAmount')
    const pin=getInputValueNumber('transferPin')
    const currentBalance= getInnerTextValue('available-balance')

    if(userAccount.length<11 || userAccount.length>11){
        alert('Account Number must be 11 digit')
        return
    }
    
    if(pin!== valPin){
        alert('Your pin is incorrect');
        return;
    }
    if(currentBalance<=0 || currentBalance<amount){
        alert('Low balance')
        return;
    }
    
    const newBalance=currentBalance-amount
    setInnerText(newBalance)
    setInnerText(newBalance) ;
    const data={
        name:'Transfer Money',
        date: new Date().toLocaleTimeString()
    }
    transData.push(data)
    
})

//get bonus
document.getElementById('bonus-btn').addEventListener('click',function(e){
    e.preventDefault();
    const copon=getInputValueNumber('bonusCopon')
    console.log(copon)
    const currentBalance=getInnerTextValue('available-balance')
    console.log(currentBalance)
    newBalance= currentBalance + copon;
    setInnerText(newBalance)
    setInnerText(newBalance) ;
    const data={
        name:'Get Bonus',
        date: new Date().toLocaleTimeString()
    }
    transData.push(data)

})

// pay bill 
document.getElementById('pay-btn').addEventListener('click',function(e){
    e.preventDefault()
    const billerName = document.getElementById('billerName').value;
    const billerAccountNumber = getInputValue('biller-account-number')
    const payAmount = getInputValueNumber('payAmount')
    const pin = getInputValueNumber('pin-pay')

    const currentBalance = getInnerTextValue('available-balance')

    
    if(billerAccountNumber.length <11  || billerAccountNumber.length>11){
        alert('Account number must be 11 digits');
        return;
    }
    
    if(pin!== valPin){
        alert('Your pin is incorrect');
        return;
    }
    if(currentBalance<=0 || currentBalance<payAmount){
        alert('Low balance')
        return;
    }

    const newBalance = currentBalance - payAmount;
    
    setInnerText(newBalance) ;
    setInnerText(newBalance) ;
    const data={
        name:'Pay Bill',
        date: new Date().toLocalTimeString()
    }
    transData.push(data)
})

// transaction 
document.getElementById('transaction-btn').addEventListener('click',function(){
    const transContainer=document.getElementById('trans-container')

for(const data of transData){
const div=document.createElement('div')
        div.innerHTML=`
        <div  class="bg-white rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center">
                    <div class="border-2 border-gray-300 rounded-full bg-[#f4f5f7]">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-2">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
                `
                transContainer.appendChild(div)
}
        
    
})

// toggling feature

document.getElementById('addMoney-btn').addEventListener('click', function() {
    // document.getElementById('add-money-parent').style.display = 'block';
    // document.getElementById('cashOut-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display='none';
    // document.getElementById('bonus-parent').style.display='none';


    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('add-money-parent').style.display='block'

    handleToggle('add-money-parent')
    btnToggle('addMoney-btn')

});
document.getElementById('cashOut-btn').addEventListener('click', function() {
    // document.getElementById('cashOut-parent').style.display = 'block';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display='none';
    // document.getElementById('bonus-parent').style.display='none';


    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('cashOut-parent').style.display='block'

    handleToggle('cashOut-parent')
    btnToggle('cashOut-btn')
});
document.getElementById('transferMoney-btn').addEventListener('click',function(){
    // document.getElementById('transfer-parent').style.display='block';
    // document.getElementById('cashOut-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    //  document.getElementById('bonus-parent').style.display='none';


    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('transfer-parent').style.display='block'

    handleToggle('transfer-parent')
    btnToggle('transferMoney-btn')


});
document.getElementById('getBonus-btn').addEventListener('click',function(){
    
    // document.getElementById('bonus-parent').style.display='block';
    // document.getElementById('cashOut-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    //  document.getElementById('transfer-parent').style.display='none';


    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('bonus-parent').style.display='block'

    handleToggle('bonus-parent')
    btnToggle('getBonus-btn')

})

document.getElementById('payBill-btn').addEventListener('click',function(){
    // const forms=document.getElementsByClassName('form')
    // for(const form of forms){
    //     form.style.display='none'
    // }
    // document.getElementById('payBill-parent').style.display='block'

    handleToggle('payBill-parent')
    btnToggle('payBill-btn')

})
document.getElementById('transaction-btn').addEventListener('click',function(){

    handleToggle('transaction-parent')
    btnToggle('transaction-btn')

})

