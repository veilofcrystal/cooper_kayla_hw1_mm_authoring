console.log("Javascript is running!")

const catfood = document.querySelectorAll("#feed");
console.log(catfood);

function feedcat(){
    console.log("user clicked feed button");
    console.log(this.id);
}

feed.addeventlistener("click",feedcat);


const catface = document.querySelectorAll("#love");
console.log(catface);

function petcat(){
console.log("user clicked love button");
console.log(this.id);
}

love.addeventlistener("click",petcat);

const tuna =document.querySelectorAll("#catchfish");
console.log(tuna);

function catchTuna(){
    console.log("USER CAUGHT THE FISH!");
    console.log(this.id);
}

catchFish.addeventlistener("click",catchTuna);



