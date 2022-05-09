function radioButton(){
    let theCallAmount = 2.75;
    let theSmsAmount = 0.65;

    let callTotal = 0;
    let smsTotal = 0;

    let warningLevel = 30;
    let criticalLevel = 50;

    function makeCall(){
       return callTotal += theCallAmount;
    }

    function sendSms(){
        return smsTotal += theSmsAmount;
    }

    function getTheCall(){
        return callTotal;
    }

    function getSms(){
        return smsTotal;
    }

    function totalOfCallAndSms(){
        return callTotal + smsTotal;
    }

    function warningAndCriticalLevel(){
        if(totalOfCallAndSms() >= criticalLevel){
            return 'critical';
        }
        if(totalOfCallAndSms() >= warningLevel){
            return 'warning'
        }
    }

    return {
        makeCall,
        getTheCall,
        sendSms,
        getSms,
        totalOfCallAndSms,
        warningAndCriticalLevel
    }
}