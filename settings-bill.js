function settingBillFunc(){
    let aCostOfCall = 0;
    let aCostOfSms = 0;
    let aWarningLevel = 0;
    let aCriticalLevel = 0;
  
    let totalOfCalls = 0;
    let totalOfSms = 0;
  
    function setCostOfCall(theCallCost) {
      aCostOfCall = theCallCost;
    }
  
    function getCostOfCall() {
      return aCostOfCall;
    }
  
    function makeCall() {
      if (!itReachedTheCriticalLevel()) {
        totalOfCalls += aCostOfCall;
      }
    }
  
    function getTotalCallCost() {
      return totalOfCalls;
    }
  
    function setCostOfSms(theSmsCost) {
      aCostOfSms = theSmsCost;
    }
  
    function getCostOfSms() {
      return aCostOfSms;
    }
  
    function sendSms() {
      if (!itReachedTheCriticalLevel()) {
        totalOfSms += aCostOfSms;
      }
    }
  
    function getTotalSmsCost() {
      return totalOfSms;
    }
  
    function setWarningLevel(theWarningLevel) {
      aWarningLevel = theWarningLevel;
    }
  
    function getWarningLevel() {
      return aWarningLevel;
    }
  
    function setCriticalLevel(theCriticalLevel) {
      aCriticalLevel = theCriticalLevel;
    }
  
    function getCriticalLevel() {
      return aCriticalLevel;
    }
  
    function getTotalCost() {
      return (totalOfCalls + totalOfSms);
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