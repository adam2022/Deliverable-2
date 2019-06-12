let eventType = prompt("Enter the event type");
let tempFahr = prompt("Enter the temprature");
let result = (console.log);

if (eventType === 'casual' && tempFahr < 54)
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear something comfy and a coat")
}
else if (eventType === 'casual' && tempFahr > 54 && tempFahr < 70)
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear something comfy and a jacket");
}
else if (eventType === 'casual' && tempFahr > 71)
{  
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear something comfy and no jacket");
}

//semi-formal

else if (eventType === 'semi-formal' && tempFahr < 54)
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a polo and a coat");
}

else if (eventType === 'semi-formal' && tempFahr > 54 && tempFahr < 70) 
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a polo and a jacket");
} 

else if (eventType === 'semi-formal' && tempFahr > 71)
{  
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a polo and no jacket");
}

else if (eventType === 'formal' && tempFahr < 54)
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a suit and a coat");
}


//formal
else if (eventType === 'formal' && tempFahr > 54 && tempFahr < 70) 
{
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a suit and a jacket");
} 

else if (eventType === 'formal' && tempFahr > 71)
{  
  console.log("Since it is " + tempFahr + " degrees and you are going to a " + 
              eventType + " event, you should wear a suit and no jacket");
}