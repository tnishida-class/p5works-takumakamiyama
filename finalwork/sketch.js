
let password = '';
const length = 2;
const charset ='abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';

function setup() {
 createCanvas(800,800);
}

function draw() {
 textSize(32);
 text("パスワードジェネレーター", 40, 40);
 textSize(12);
 text("Enterキーを押すとパスワードが生成されます",45,80);
 if (keyIsDown(ENTER)) {
   passwordGenerator();
   balloon(password, 50, 120);
 }
}



function passwordGenerator() {
 for (let i = 0; i < length; i++) {
   password += charset[Math.floor(Math.random() * charset.length)];
 }
 const includeAllTypes =
   /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);
 return includeAllTypes ? password : passwordGenerator();
}

function balloon(t, x, y){
 let w = textWidth(t);
 let h = textAscent() + textDescent();
 let p = 10;
 fill(255);
 rect(x, y, w + p * 2, h + p * 2);
 fill(0);
 text(t, p + x, h + p + y);
}
