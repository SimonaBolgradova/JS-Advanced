const {describe}= require('mocha');
const {assert}= require('chai');


class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
  }


  describe('PaymentPackage test',()=>{
    //   let instance= undeined;
    //   beforeEach(()=>{
    //       instance= new PaymentPackage('Name', 100)
    //   })
      it('constructor',()=>{
        let instance=new PaymentPackage('Name', 100);
        assert.equal(instance._name, 'Name')
        assert.equal(instance._value,100,'2')
        assert.equal(instance._VAT,20,'3');
        assert.equal(instance._active,true,'4');
      })
      it('name',()=>{
        let instance=new PaymentPackage('Name', 100);

        assert.equal(instance.name,'Name')
        instance.name= 'Pesho';
        assert.equal(instance.name,'Pesho');
        assert.throw(()=>{instance.name=''},'Name must be a non-empty string');
        assert.throw(()=>{instance.name=2},'Name must be a non-empty string');

    })
    it('VAT',()=>{
          
    })
    it('active',()=>{
          
    })
    it('constructor',()=>{
          
    })
  })
  