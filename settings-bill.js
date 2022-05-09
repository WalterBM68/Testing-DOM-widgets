function settingBillFunc(){
    //Update button variables
    let aCostOfCall = 0;
    let aCostOfSms = 0;
    let aWarningLevel = 0;
    let aCriticalLevel = 0;

    //Add button variables
    let totalOfCalls = 0;
    let totalOfSms = 0;

    function setCostOfCall(theCallCost){
        aCostOfCall = theCallCost;
    }

    function getCostOfCall(){
      return aCostOfCall;
    }

    function setCostOfSms(theSmsCost){
        aCostOfSms = theSmsCost;
    }

    function getCostOfSms(){
      return aCostOfSms;
    }

    function setWarningLevel(theWarningLevel){
        return aWarningLevel = theWarningLevel;
    }

    function getWarningLevel(){
        return aWarningLevel;
    }
    
    function setCriticalLevel(theCriticalLevel){
        return aCriticalLevel = theCriticalLevel;
    }

    function getCriticalLevel(){
        return aCriticalLevel;
    }

    function makeCall(){
        if(!itReachedTheCriticalLevel()){
            totalOfCalls += aCostOfCall;
        }
    }

    function sendSms(){
        if(!itReachedTheCriticalLevel()){
            totalOfSms += aCostOfSms
        } 
    }

    function getTotalCost(){
       return totalOfCalls + totalOfSms;
    }

    function getTotalCallCost(){
        return totalOfCalls;
    }

    function getTotalSmsCost(){
       return totalOfSms;
    }
    
    function itReachedTheCriticalLevel(){
       return getTotalCost() >= getCriticalLevel();
    }
    function totalClassName(){
        if(itReachedTheCriticalLevel()){
            return 'critical';
        }
        if(getTotalCost() >= getWarningLevel()){
            return 'warning';
        } 
    }

    return{
       setCostOfCall,
       getCostOfCall,
       setCostOfSms,
       getCostOfSms,
       setWarningLevel,
       getWarningLevel,
       setCriticalLevel,
       getCriticalLevel,
       makeCall,
       getTotalCost,
       getTotalCallCost,
       getTotalSmsCost,
       sendSms,
       totalClassName,
       itReachedTheCriticalLevel
    }
}