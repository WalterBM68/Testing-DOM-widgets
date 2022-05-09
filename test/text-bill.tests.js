describe('Text bill factory function', function(){

    it('It should be able to make 1 call', function(){
       let textBill = calculateBill(); 

       textBill.checkCall('call');
       textBill.makeCall();
       assert.equal(2.75, textBill.getCall());
    });

    it('It should be able to send 1 sms', function(){
        let textBill = calculateBill(); 

        textBill.checkSms('sms');
        textBill.smsSent();
        assert.equal(0.65, textBill.getSms());
    });

    it('It should be able to make 5 calls and 2 sms', function(){
        let textBill = calculateBill(); 

        textBill.checkCall('call');
        textBill.checkSms('sms');
    
        //call made
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        //sms sent
        textBill.smsSent();
        textBill.smsSent();

        assert.equal(15.05, textBill.getTheTotal());
        assert.equal(13.75, textBill.getCall());
        assert.equal(1.30, textBill.getSms());
    });

    it('It should be able to sent 5 sms and make 4 calls', function(){
        let textBill = calculateBill();

        textBill.checkCall('call');
        textBill.checkSms('sms');
    
        //call made
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        
        //sms sent
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent();

        assert.equal(14.25, textBill.getTheTotal());
        assert.equal(11.00, textBill.getCall());
        assert.equal(3.25, textBill.getSms());
    });

    it('It should return the warning class if the total amount of calls and sms reaches 30', function(){
        let textBill = calculateBill(); 

        textBill.checkCall('call');
        textBill.checkSms('sms');
    
        //call made
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall(); //number 5
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall(); //number 10
        textBill.makeCall();
        //sms sent
        textBill.smsSent();
        textBill.smsSent();

        assert.equal('warning', textBill.theLevels()); //answer is 31.55
    });

    it('It should return the critical class if the total amount of calls and sms reaches 50', function(){
        let textBill = calculateBill(); 

        textBill.checkCall('call');
        textBill.checkSms('sms');
    
        //call made
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall(); //number 5
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall(); // number 10
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall();
        textBill.makeCall(); //number 15
        textBill.makeCall();
        textBill.makeCall();
        //sms sent
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent();
        textBill.smsSent(); //number 5
        textBill.smsSent();
        textBill.smsSent();

        assert.equal('critical', textBill.theLevels()); //answer is 51.30
    });
});