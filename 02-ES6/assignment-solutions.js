class SalaryCalculatorModel{
    _data = {
        basic : 0,
        hra : 0,
        da : 0,
        tax : 0,
        salary : 0
    };

    _callbacks = {
        basic : [],
        hra : [],
        da : [],
        tax : [],
        salary : []
    };

    get(attrName){
        return this._data[attrName];
    }

    set(attrName, value){
        this._data[attrName] = value;
        const callbacks = this._callbacks[attrName];
        callbacks.forEach(callback => {
            if (typeof callback === 'function')
                callback();
        })
    }

    subscribe(attrName, callbackFn){
        this._callbacks[attrName].push(callbackFn);
    }

    calculate = function(){
        const gross = this.get('basic') + this.get('hra') + this.get('da'),
            net = gross * ((100-this.get('tax'))/100);
        this.set('salary', net);
    }

}

//1. Sort the products by cost (use 'sort()' method and arrow function)
products.sort((p1, p2) => {
    if (p1.cost < p2.cost) return -1;
    if (p1.cost > p2.cost) return 1;
    return 0; 
})

//2. Filter all the stationary products (using 'filter()' method and arrow function)
const stationaryProducts = products.filter(product => product.category === 'stationary')

//3. Print the name and discounted price (apply 10% discount) of each product (use 'forEach()' method and arrow function)
products
    .map(product => ({name : product.name, cost : product.cost * 0.9}))
    .forEach(({name, cost}) => console.log(name, cost))

//4. Find the max cost among the products (use 'reduce()' method and arrow function)
const maxCost = products.reduce((max, product) => {
    if (product.cost > max) return product.cost;
    return max;
}, 0)

//5. Find the total units of all the products (use 'reduce()' method and arrow function)
const totalUnits = products.reduce((total, product) => total + product.units, 0)

//6. Find the average cost of all the products (use 'reduce()' method and arrow function)
const averageCost = products.reduce((total, product) => total + product.cost, 0) / products.length

//8. Group the products by category
const productsByCategory = products.reduce((result, product) => {
    result[product.category] = result[product.category] || [];
    result[product.category].push(product);
    return result;
}, {});