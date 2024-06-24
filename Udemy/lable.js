console.log("Using labels")
outerloop:
for(k = 0; k <= 3; k++){
    console.log(k)
    innerloop:
    for(l = 10; l <= 15; l++){
    if(l == 14) break;
    if(l == 13) break innerloop;
    //if(l == 12) break outerloop
    console.log(l)
    }
}