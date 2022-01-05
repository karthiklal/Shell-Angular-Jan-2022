export class SalaryCalculatorModelV2{
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;
    
    calculate(){
        const gross = this.basic + this.hra + this.da,  
            net = gross - (gross * (this.tax + 10) / 100);
        this.salary = net;
    }
}