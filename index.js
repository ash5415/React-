function a(){
    return{a:1, b:2}
};

const b = ()=>({a:1, b:2});

console.log(a());

console.log(b());

function c(radius){
    return Math.PI * radius * radius;
};
console.log(c(2));



const d = (radius)=>Math.PI * radius * radius;

console.log(d(2));


const g ={a:1, b:2};
const z ={c:13, d:22};

function e(){
    return Object.assign(g,z);
}
console.log(e());

function string(){
    let str ={...g,...z};
    return str;
};

console.log(string());

const x =1

const y =3

console.log((y-x));
