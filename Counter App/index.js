document.title = "COUNTER | APP";

const count = document.getElementById("count");
let counter = 0;

const para = document.getElementById("err").style.color ="red"



const increment = () => {
    
    if (counter < 10) {
      counter += 1
      count.textContent = counter
      count.style.color = "black"
  } else {
    counter = 10
    err.textContent = "Counter cannot be greater than 10"
    count.style.color = "red"
    

  }
};


const decrement = () => {
    
    if (counter > 0) {
      counter -= 1
      count.textContent = counter
      count.style.color = "black"
      err.textContent = ""
  } else {
    counter = 0
    err.textContent = "Counter cannot be less than 0"
    count.style.color = "red"
  }
};

// const increment = () => {
    
//     if (counter === 10) {
//       counter = 10
//       throw Error("Counter cannot be greater than 10")
//   } else {
//     counter += 1;
//     count.textContent = counter;
//   }
// };

// console.log(count);
