var bilanganPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      //return true
      console.log(true)
      //console.log("Bilangan " + angka + " adalah PRIMA")
    }else{
      //return false
      console.log(false)
      //console.log("Bilangan " + angka + " adalah BUKAN PRIMA")
    }
  }
  
  bilanganPrima(23); 
  bilanganPrima(31); 
  bilanganPrima(97); 
  bilanganPrima(100); 