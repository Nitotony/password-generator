




const button = document.getElementById("generate-btn");
const pro=document.getElementById('password');


button.addEventListener('click',()=>{
    const num = Math.floor(Number(document.getElementById("length").value));
    console.log('button clicked');
    console.log(num+"blasd");
    pro.value=BigRandom(num);

    });

const BigRandom=(len)=>{

    let pass=""


    if(len<=0)
    {
        alert("the number you have entered is less than 0");
        return pass;
    }

    else if(isNaN(len)){
        alert("the number you have entered is not a Number");
        return pass;
    }
else if(len>0 && len<5)
{
    alert("the number is less than 5 and this generator needs at least length of 5");
    return pass;
}
    else{
        pass += alphabetRandom1();
        pass += specialcharRandom();
        pass += numberRandom();
        pass += alphabetRandom2();
        for (let i = 0; i < len-4; i++) {
          let selector = Math.floor(Math.random() *4 );

          console.log(selector)

          
          switch(selector){
            case 0:
              pass += alphabetRandom1();
              break;
            case 1:
              pass += specialcharRandom();
              break;
            case 2:
              pass += numberRandom();
              break;
            default:
              pass += alphabetRandom2();
              break;
          }
        

    }
    return pass;

    



}}




const alphabetRandom1=()=>{

    alpha='abcdefghijklmnopqrstuvwxyz';
    const  index=Math.floor(Math.random() * 26);
    return alpha[index];

}


const alphabetRandom2= () => {
  alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = Math.floor(Math.random() * 26);
  return alpha[index];
};



const specialcharRandom=()=>{

    special='!@#$%^&*_'

    const index=Math.floor(Math.random()*(9));

    return special[index];


}


const numberRandom=()=>{
    number='1234567890'
    const index=Math.floor(Math.random()*(10));
    return number[index];

}