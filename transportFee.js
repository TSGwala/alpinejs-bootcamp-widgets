function transportFeeWidget() {
    return {
        shift: '',
        fee: '',
        calculateFee() {
            if (this.shift === 'morning') {
                this.fee = 'R20';
            } else if (this.shift === 'afternoon') {
                this.fee = 'R10';
            } else if (this.shift === 'nightshift') {
                this.fee = 'free';
            }
        }
    }
}
