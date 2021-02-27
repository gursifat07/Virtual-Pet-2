var pet,Dog,happyDog;
var database,foodS;
var feed,addFood ;

function preload()
{
  Dog = loadImage("Dog.png");
  happyDog = loadImage("happyDog.png");
}

function setup() {
  database = firebase.database();
  food =foodstockref;
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(Dog);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);

food=new Food();

 feed=createButton("Feed the dog")
 feed.position(500,95)
 feed.mousePressed(feedDog)

 addFood=createButton("Add Food")
 addFood.position(600,95)
 addFood.mousePressed(addFoods)
}


function draw() {  
background(46, 139, 87);
  drawSprites();

fill (255,255,254);
textSize(15);
if(food.lastFed>=12){
    text("Last Feed:"+food.lastFed%12+"PM",350,30)
}else  if(food.lastFed>=12){
    text("Last Feed: 12 AM"+food.lastFed%12+"PM",350,30)
}else{
    text("Last Feed:"+food.lastFed+"AM",350,30)
}

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
 
}
function addFoods(){
  foodS=foodS+1;
  }
  


  function feedDog(){
    foodS=foodS-1;
   }
  