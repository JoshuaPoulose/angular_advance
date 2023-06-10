describe ('first-test',()=>{
    let data:any;
    let a:number;
    let b:number;
    let str:string;
  
    function factorial(n:number){
        let fact=1;
        for(let i=1;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }
    beforeEach(()=>{
        console.log('from before');
        data={};
    });
    // it('fail test',()=>{

    // });
it('dummy test',()=>{}
);
  
    it('it should return true if flag is true',()=>{
    
        data.flag=false;
        data.flag=true;
        expect(data.flag).toBe(true);
    });

    it('it should add(10,10) and give 20',
    ()=>{
        a=10;
        b=10;
        expect(a+b).toBe(20);
    });
    it('it should sub(10,10) and give 0',
    ()=>{
        a=10;
        b=10;
        expect(a-b).toBe(0);
    });
    it('it should mul(10,10) and give 100',
    ()=>{
        a=10;
        b=10;
        expect(a*b).toBe(100);
    });

    it('it should square(10) and give 100',
    ()=>{
        a=10;
       
        expect(a*a).toBe(100);
    });

    it('factorial of a number',()=>
    {
        expect(factorial(2)).toBe(2);
        
    });2
});