function calculateBill(){
    let amountOfCall = 2.75;
    let amountOfSms = 0.65;
    let aCallString = '';
    let aSmsString = '';

    //Total of call & sms
    let theTotalSms = 0;
    let theTotalCall = 0;

    //The warning and critical level
    let warningLevel = 30;
    let criticalLevel = 50;

    function checkCall(aCall){
        if(aCall === 'call'){
            aCallString = aCall;
        }
    }

    function checkSms(theSms){
        if(theSms === 'sms'){
           aSmsString = theSms; 
        }
    }

    function getCall(){
        return theTotalCall;
    }

    function getSms(){
        return theTotalSms;
    }

    function makeCall(){
        if(aCallString === 'call'){
            theTotalCall += amountOfCall;
        }
    }

    function smsSent(){
        if(aSmsString === 'sms'){
            theTotalSms += amountOfSms;
        }
    }

   function getTheTotal(){
      return theTotalCall + theTotalSms;
   }

   function theLevels(){
       if(getTheTotal() >= criticalLevel){
           return 'critical';
       }
       if(getTheTotal() >= warningLevel){
           return 'warning'
       }
   }
    return {
        checkCall,
        checkSms,
        getCall,
        getSms,
        makeCall,
        smsSent,
        getTheTotal,
        theLevels
    }
}
