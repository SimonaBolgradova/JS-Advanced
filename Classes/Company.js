const departResult= {};
class Company{
    constructor(){
        this.departments= [];

    }
    addEmployee(username,salary,position,department){
        if(username==''&& salary==undefined||position==''&& department==''){
            throw new Error("Invalid input!")
        }
        if(salary<0){
            throw new Error("Invalid input!")

        }
        this.departments.push({username,salary,position,department});
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
     result(){
        return this.departments;
    }
    
    // bestDepartent(){
    //     Object.values(departments).forEach(e=> e.reduce())
    // }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.result());
