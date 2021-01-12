function countHello(param) {
    if(param<1|param>10){
        console.log("Blędy parametr");
    }else{
        let i=1;
        const interval=setInterval(function () {
            console.log("Wygenerowano " + i + " raz.");
            console.log("Hello")
            i++;
            if(i>param){
                clearInterval(interval);
            }
        }, 1000);
        
    }

}

countHello(9);
