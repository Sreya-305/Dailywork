step1(10,function(res1,error){
    if(!error){
        return res1;
    }
});
function step1(value,callback){
   let res1= callback(value+10,false);
   step2(res1,function(res2,error){
       if(!error){
        return res2;
       }
});
}
function step2(value,callback){
    let res2=callback(value+10,false);
    step3(res2,function(res3,error){
        if(!error){
         return res3;
        }
    });    
}    
function step3(value,callback){
    let res3=callback(value+10,false);
    console.log(res3);  
}     
