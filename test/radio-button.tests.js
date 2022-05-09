describe('The Radio button widget', function(){
    it('It should return the total of 3 call made', function(){
        let aRadioBtn = radioButton();

        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();

        assert.equal(8.25, aRadioBtn.getTheCall());
    });

    it('It should return the total of 6 sms sent', function(){
        let aRadioBtn = radioButton();

        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();

        assert.equal(3.90, aRadioBtn.getSms());
    });

    it('It should return the total of 4 calls made & 4 sms sent', function(){
        let aRadioBtn = radioButton();

        //Call made
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        //Sms sent
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();

        assert.equal(2.60, aRadioBtn.getSms());
        assert.equal(11.00, aRadioBtn.getTheCall());
        assert.equal(13.60, aRadioBtn.totalOfCallAndSms());
    });

    it('It should return the warning class if the total has reached 30', function(){
        let aRadioBtn = radioButton();

        //Call made
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall(); //number 5
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall(); //number 10
        aRadioBtn.makeCall();
        //Sms sent
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();

        assert.equal('warning', aRadioBtn.warningAndCriticalLevel()); // answer is 32,85
    });

    it('It should return the critical class if the total has reached 50', function(){
        let aRadioBtn = radioButton();

        //Call made
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall(); //number 5
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall(); //number 10
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall();
        aRadioBtn.makeCall(); //number 15
        aRadioBtn.makeCall();
        //Sms sent
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms(); //number 5
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms();
        aRadioBtn.sendSms(); //number 10
        aRadioBtn.sendSms();

        assert.equal('critical', aRadioBtn.warningAndCriticalLevel()); // answer is 32,85
    });
});