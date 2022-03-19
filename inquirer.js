var inquirer = require('inquirer');
var call=require('./utube');
let a=process.argv.slice(2);
let content=a[0];
//console.log(content);
inquirer
  .prompt([
    {
        
       
        message:'What you want to do in youtube?',type:'list', name:'name1',
        choices:['COPY THE LINK OF THE FIRST VIDEO TO CLIP BOARD','PLAY THE VIDEO']
    }
  ])
  .then( function(a){
if(a.name1=='PLAY THE VIDEO'){
  console.log(content);
  if(content===undefined){
    console.log('--->Video to be searched is not entered???');
    
  }
  else{
    call.utub(content,false);
  }
}
else {
  console.log(content);
  if(content===undefined){
    console.log('--->Video to be searched is not entered???');
  }
  else{
    
    call.utub(content,true);
  }
}
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });