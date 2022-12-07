var cont
var resposta

cont=0

while(cont<3)
{
    alert("Como deixar usuário louco com while em "+ cont)
    cont++
}

for(cont = 0; cont<3;cont++){
    alert("Como deixar o usuário com for em "+ cont)
}

do{
    resposta=prompt("Prosseguir?")
}while(resposta=="sim");