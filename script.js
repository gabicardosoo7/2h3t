clicado = () => alert("Alô mundo");
mensagem = (msg) => console.log(msg)
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_simples = (j,c) => mult(c,div(j,100));
montante_juro_simples = (c,j) => soma(juros_simples(c,j),c);

mensagem(soma(4,soma(7,soma(11,15))));

mensagem(sub(18,7));

mensagem(mult(5,5));

mensagem(div(49,7));

mensagem(soma(2,div(2,2)));

mensagem(mult(420,div(18,100)));

mensagem(juros_simples(420,18));

mensagem(montante_juro_simples(420,18));
mostrar_display = (msg)=>{
    document.getElementById("resultado").value = msg;
}

function digitando(tecla){
    if(tecla == "."){
        if(!temPonto){
            valor += tecla;
            mostrar_display(valor);
            temPonto = true;
        }
        return;
    }
   valor += tecla;
   mostrar_display(valor);
}
function operacao(op){
    executa = op;
    num1 = valor;
    valor = "";
}
function calcula(){
    if(executa != ""){
        num2 = valor;
        if(executa == "soma") mostrar_display (soma(Number(num1)),Number(num2));
        if(executa == "sub") mostrar_display (sub(num1,num2));
        if(executa == "div") mostrar_display (div(num1,num2));
        if(executa == "mult") mostrar_display (mult(num1,num2));
        num1 = "";
        num2 = "";
        valor = "";
        temPonto = false;
        executa = "";
    }
}
