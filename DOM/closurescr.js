message="Good Morning";
function hello()
{
   //let message="Good Afternoon";
   {
    let message="Good Mrng";
    console.log("Hello,"+message);
   }
   let c=function hello2(){
    console.log("I am C "+message);
   }
   return c;
} 
c=hello();
c();
//lexical scoping
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    name="Sreya";
    return displayName;
  }
  let d=init();
d();

function returnFun()
{
    const x=()=>{
        let a=1;
        console.log(a);
        const y=()=>{
           // let a=2;
            console.log(a);
            const z=()=>{
             //   let a=3;
                console.log(a);
            }
            z();
        }
        a=99;
        y();
    }
    x(); 
    
}
returnFun();

//closure
function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12
