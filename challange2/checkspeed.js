function checkspeed(carspeed){
    constspeedlimit =70;
    constdemeritpoint =5;
constpointsThreshold=12;

}
if(carspeed<speedlimit){
    return"ok";
}else{
const excessSpeed=carspeed-speedlimit;
constdemeritpoints=Mathfloor(excessspeed/demeritpoint);
if(demeritpoints>pointsThreshold){
    return"License suspended";
}else{
    return"points"+demeritpoints;
}
}
varcarspeed=parseint("100");//imput car speed
cgeckspeed(carspeed)
console.log(checkspeed)(carspeed)
