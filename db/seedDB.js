const mysql = require('mysql');
const db = require('./index.js');
const connection = db.connection;

const dishNames = ['winter soup', 'summer soup', 'spring soup', 'fall soup', 'winter latte', 
'spring latte', 'summer latte', 'fall latte', 'winter bowl', 'summer bowl', 'spring bowl', 
'fall bowl', 'winter smoothie', 'summer smoothie', 'spring smoothie', 'fall smoothie'];
const filler = `Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato`
const fillerArr = filler.split(' ');
const photos = ['https://imgur.com/7r3zmkA', 'https://imgur.com/eJ8fI4A', 'https://imgur.com/amYuQ4j', 'https://imgur.com/m38DfZY', 'https://imgur.com/bdc5p47'];
const categories = ['smoothie', 'harvestBowl', 'soup', 'chilledBlendedSoup', 'latte', 'oatBowl', 'chiaBowl'];

const ingredientsArr = [];


for (var i = 0; i < 100; i++) {
  console.log('beginning of for loop ----->', i);
  var recipe = {};
  recipe.dishName = dishNames[Math.floor(Math.random() * dishNames.length)];

  var keyIngs = '';
  for (var z = 0; z < 5; z++) {
    var ing = fillerArr[Math.floor(Math.random() * fillerArr.length)];
    console.log('key ingredients', ing)
    if (z !== 0) {
      keyIngs += ' ';
    };
    keyIngs += ing;
  }
  recipe.keyIngredients = keyIngs;

  var ings = '';
  for (var z = 0; z < 15; z++) {
    var ing = fillerArr[Math.floor(Math.random() * fillerArr.length)];
    console.log('ingredients', ings)
    if (z !== 0) {
      ings += ' ';
    };
    ings += ing;
  }
  recipe.ingredients = ings;

  var facts = '';
  for (var z = 0; z < 20; z++) {
    var ing = fillerArr[Math.floor(Math.random() * fillerArr.length)];
    console.log('facts', facts)
    if (z !== 0) {
      facts += ' ';
    };
    facts += ing;
  }
  recipe.nutritionFacts = facts;

  recipe.photoUrl = photos[Math.floor(Math.random() * photos.length)];

  recipe.category = categories[Math.floor(Math.random() * categories.length)]

  ingredientsArr.push(recipe);
}


//Seeding into the DB
const seedDB = (data) => {
    for (var i = 0; i < data.length; i++) {
        connection.query(`INSERT INTO ingredients (dishName, keyIngredients, ingredients, nutritionFacts, photoUrl, category) VALUES ("${data[i].dishName}", "${data[i].keyIngredients}", "${data[i].ingredients}", "${data[i].nutritionFacts}", "${data[i].photoUrl}", "${data[i].category}")`, (err, results) => {
            if (err) {
                console.log('ERROR', err);
            } else {
                console.log('Finished seeding dh DB');
            }
        });
    }
}

//Invoke seeding function
seedDB(ingredientsArr);



