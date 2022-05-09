describe('The setting bill factory function', function(){

    describe('Setting the values', function(){

        it('It should be able to set the cost of call', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setCostOfCall(5.00);
            assert.equal(5.00, billSetting.getCostOfCall());
        });
    
        it('It should be able to set the cost of sms', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setCostOfSms(1.14);
            assert.equal(1.14, billSetting.getCostOfSms());
        });
    
        it('It should be able to set the cost of sms & call all together', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setCostOfCall(5.15)
            billSetting.setCostOfSms(2.50);
            assert.equal(2.50, billSetting.getCostOfSms());
            assert.equal(5.15, billSetting.getCostOfCall());
        }); 
    
        it('It should be able to set the warning level', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setWarningLevel(22);
            assert.equal(22, billSetting.getWarningLevel());
        });
    
        it('It should be able to set the critical level', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setCriticalLevel(32);
            assert.equal(32, billSetting.getCriticalLevel());
        });
    
        it('It should be able to set the warning and critical level all together', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setWarningLevel(28);
            billSetting.setCriticalLevel(36);
            assert.equal(28, billSetting.getWarningLevel());
            assert.equal(36, billSetting.getCriticalLevel());
        });
    });
    
    describe('Now let\'s make calls and sms with the call values we set', function(){
       it('It should be able to make 6 calls that cost 2.02 each and return the total', function(){
          let billSetting = settingBillFunc();

          billSetting.setCriticalLevel(20);
          billSetting.setCostOfCall(2.02);
          billSetting.setCostOfSms(0.99);

          billSetting.makeCall();
          billSetting.makeCall();
          billSetting.makeCall();
          billSetting.makeCall();
          billSetting.makeCall();
          billSetting.makeCall();

          assert.equal(12.12, billSetting.getTotalCost());
          assert.equal(12.12, billSetting.getTotalCallCost());
          assert.equal(0.00, billSetting.getTotalSmsCost());
       });

       it('It should be able to send 4 sms\'s at 0.99c each & return the total', function(){
        let billSetting = settingBillFunc();

        billSetting.setCriticalLevel(20);
        billSetting.setCostOfSms(0.99);
        billSetting.setCostOfCall(2.02);

        billSetting.sendSms();
        billSetting.sendSms();
        billSetting.sendSms();
        billSetting.sendSms();

        assert.equal(3.96, billSetting.getTotalCost());
        assert.equal(0.00, billSetting.getTotalCallCost());
        assert.equal(3.96, billSetting.getTotalSmsCost());
        });
        
        it('It should be able to make 4 sms\'s at 1.31 each and make 4 calls at 3.73 each call & return the overrall total', function(){
            let billSetting = settingBillFunc();
    
            billSetting.setCriticalLevel(20);
            billSetting.setCostOfSms(1.31);
            billSetting.setCostOfCall(3.73);
            //the Sms's sent
            billSetting.sendSms();
            billSetting.sendSms();
            billSetting.sendSms();
            billSetting.sendSms();
            //The call's made
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
    
            assert.equal(20.16, billSetting.getTotalCost());
            assert.equal(14.92, billSetting.getTotalCallCost());
            assert.equal(5.24, billSetting.getTotalSmsCost());
        });
    });

    describe('It\'s time to use the warning and critical level that we set', function(){
        it('It should return the \'warning\' class if the total reaches the warning level', function(){
            let billSetting = settingBillFunc();
            
            billSetting.setCostOfSms(1.31);
            billSetting.setCostOfCall(4.01);
            billSetting.setWarningLevel(16);
            billSetting.setCriticalLevel(20);
            //the Sms's sent
            billSetting.sendSms();
            billSetting.sendSms();
            //The call's made
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            assert.equal('warning', billSetting.totalClassName());
        });

        it('It should return the \'critical\' class if the total reches the critical level', function(){
            let billSetting = settingBillFunc();
            
            billSetting.setCostOfSms(1.31);
            billSetting.setCostOfCall(4.01);
            billSetting.setWarningLevel(14);
            
            //the Sms's sent
            billSetting.sendSms();
            billSetting.sendSms();
            billSetting.sendSms();
            //The call's made
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            assert.equal('critical', billSetting.totalClassName());
        });

        it('It should stop counting when the total reaches the critical level', function(){
            let billSetting = settingBillFunc();
            
            billSetting.setCostOfSms(1.31);
            billSetting.setCostOfCall(4.00);
            billSetting.setCriticalLevel(20);

            //The call's made
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();

            assert.equal('critical', billSetting.totalClassName());
            assert.equal(20, billSetting.getTotalCost());
        });

        it('It should allow me to update or upgrade the warning & critical level to a larger number', function(){
            let billSetting = settingBillFunc();
            
            billSetting.setCostOfSms(1.31);
            billSetting.setCostOfCall(4.00);
            billSetting.setWarningLevel(20);
            billSetting.setCriticalLevel(20);

            //sms sent
            billSetting.sendSms();
            billSetting.sendSms();
            billSetting.sendSms();
            //The call's made
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall(); 
            billSetting.makeCall();

            assert.equal('critical', billSetting.totalClassName());
            assert.equal(20, billSetting.getCriticalLevel());

            billSetting.setCriticalLevel(27);
            
            assert.equal('warning', billSetting.totalClassName());
            billSetting.makeCall();
            billSetting.makeCall();
            assert.equal(27.93, billSetting.getTotalCost());
        }); 
    });
});