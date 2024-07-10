function enoughAirtimeWidget() {
    return {
        usage: '',
        availableAirtime: 0,
        result: '',
        calculateAirtime() {
            const usageArray = this.usage.split(',');
            let totalCost = 0;
            for (let i = 0; i < usageArray.length; i++) {
                if (usageArray[i].trim() === 'call') {
                    totalCost += 2.75;
                } else if (usageArray[i].trim() === 'sms') {
                    totalCost += 0.65;
                }
            }
            const remainingAirtime = this.availableAirtime - totalCost;
            if (remainingAirtime < 0) {
                this.result = 'Insufficient airtime';
            } else {
                this.result = `Remaining airtime: R${remainingAirtime.toFixed(2)}`;
            }
        }
    };
}


