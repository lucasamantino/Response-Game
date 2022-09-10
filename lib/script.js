const perg = 
[
    {pg:"Quem foi a primeira pessoa a viajar no Espaço?",op:"a) Yuri Gagarin<br><br>b) A cadela Laika<br><br>c) Neil Armstrong<br><br>d) Marcos Pontes<br><br>e) Buzz Aldrin"},
    {pg:"Qual a montanha mais alta do mundo?",op:"a) Mauna Kea<br><br>b) Dhaulagiri<br><br>c) Monte Chimborazo<br><br>d) Monte Everest<br><br>e) Pico da Neblina"},
    {pg:"Onde se localiza Machu Picchu?",op:"a) Colômbia<br><br>b) Peru<br><br>c) China<br><br>d) Bolívia<br><br>e) Índia"},
    {pg:"Que país tem o formato de uma bota?",op:"a) Butão<br><br>b) Brasil<br><br>c) Portugal<br><br>d) Itália<br><br>e) México"},
    {pg:"6. Quem inventou a lâmpada?",op:"a) Graham Bell<br><br>b) Steve Jobs<br><br>c) Thomas Edison<br><br>d) Henry Ford<br><br>e) Santos Dumont"},
    {pg:"7. Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",op:"a) Aproximadamente 24 horas<br><br>b) 365 dias<br><br>c) 7 dias<br><br>d) 365 ou 366 dias<br><br>e) 30 ou 31 dias"},
    {pg:"8. A que temperatura a água ferve?",op:"a) 200 ºC<br><br>b) -10 ºC<br><br>c) 180 ºC<br><br>d) 0 ºC<br><br>e) 100 ºC"},
    {pg:"9. Quais são as fases da Lua?",op:"a) Nova, cheia e superlua<br><br>b) Penumbral, lunar parcial, lunar total e cheia<br><br>c) Nova, cheia, minguante e lua de sangue<br><br>d) Nova, crescente, cheia e minguante<br><br>e) Nova, crescente, cheia, minguante e lua de sangue"},
    {pg:"10. Quantos ossos temos no nosso corpo?",op:"a) 126<br><br>b) 206<br><br>c) 18<br><br>d) 300<br><br>e) 200"},
    {pg:"11. Qual o maior planeta do sistema solar?",op:"a) Marte<br><br>b) Lua<br><br>c) Saturno<br><br>d) Terra<br><br>e) Júpiter"},
    {pg:"12. Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?",op:"a) 33<br><br>b) 110<br><br>c) 333<br><br>d) 30<br><br>e) 14"},
    {pg:"13. Qual o planeta mais próximo do Sol?",op:"a) Netuno<br><br>b) Júpiter<br><br>c) Mercúrio<br><br>d) Terra<br><br>e) Marte"},
    {pg:"14. Quantos continentes existem?",op:"a) 2<br><br>b) 8<br><br>c) 4<br><br>d) 6<br><br>e) 3"},
    {pg:"15. Qual a maior floresta tropical do mundo?",op:"a) Mata Atlântica<br><br>b) Pampas<br><br>c) Pantanal<br><br>d) Floresta Amazônica<br><br>e) Caatinga"},
    {pg:"16. Quais as duas línguas mais faladas no mundo?",op:"a) Inglês e espanhol<br><br>b) Inglês e mandarim chinês<br><br>c) Mandarim chinês e francês<br><br>d) Inglês e português<br><br>e) Inglês e espanhol"},
    {pg:"17. Qual o monumento famoso pela sua inclinação?",op:"a) Torre Eiffel<br><br>b) Esfinge<br><br>c) Estátua da Liberdade<br><br>d) Cristo Redentor<br><br>e) Torre de Pisa"},
    {pg:"18. Kryptonita é a fraqueza de qual super-herói?",op:"a) Batman<br><br>b) Hulk<br><br>c) Super-Homem<br><br>d) Capitão América<br><br>e) Flash"},
    {pg:"19. Quem pintou Mona Lisa?",op:"a) Leonardo da Vinci<br><br>b) Salvador Dalí<br><br>c) Van Gogh<br><br>d) Tarsila do Amaral<br><br>e) Pablo Picasso"},
    {pg:"20. O que representam os cinco anéis olímpicos?",op:"a) As partes do mundo unidas pelo Olimpismo.<br><br>b) As argolas da ginástica artística.<br><br>c) Cinco tipos de esporte: de rede, de campo, de combate, de precisão, de invasão.<br><br>d) Cinco deuses do Olimpo: Zeus, Atena, Apolo, Dionísio e Hermes.<br><br>e) Os símbolos olímpicos: tocha, hino, mascote, lema e medalhas."},
    {pg:"21. Qual a personagem mais famosa de Maurício de Sousa?",op:"a) Mafalda<br><br>b) Mônica<br><br>c) Smurfette<br><br>d) Magali<br><br>e) Menino Maluquinho"},
    {pg:"22. Que cidade brasileira é conhecida por chover todos os dias quase à mesma hora?",op:"a) São Paulo<br><br>b) Joinville<br><br>c) Belém<br><br>d) Natal<br><br>e) Rio de Janeiro"},
    {pg:"24. Qual o nome popular do cloreto de sódio?",op:"a) Vinagre<br><br>b) Água<br><br>c) Papel<br><br>d) Fermento<br><br>e) Sal de cozinha"},
    {pg:"25. Que animal põe o maior ovo?",op:"a) Beija-flor<br><br>b) Avestruz<br><br>c) Tartaruga-gigante<br><br>d) Galinha<br><br>e) Pavão"},
    {pg:"26. O que os pandas comem?",op:"a) Bambu<br><br>b) Aves, ovos e peixe<br><br>c) Frutas e mel<br><br>d) Carnes<br><br>e) Mel"},
    {pg:"27. Quantos andares tem o maior prédio do mundo?",op:"a) 100<br><br>b) 200<br><br>c) 163<br><br>d) 25<br><br>e) 50"},
    {pg:"29. Em que país foi construído o Muro de Berlim?",op:"a) Estados Unidos<br><br>b) China<br><br>c) Coreia do Norte<br><br>d) Alemanha<br><br>e) Brasil"},
    {pg:"30. Em que ano foi usado um celular pela primeira vez no Brasil?",op:"a) 1900<br><br>b) 1990<br><br>c) 1890<br><br>d) 2000<br><br>e) 2020"},
    {pg:"31. Em que país se anda mais de bicicleta?",op:"a) Brasil<br><br>b) Portugal<br><br>c) Estados Unidos<br><br>d) Países Baixos<br><br>e) Mongólia"},
    {pg:"32. Qual a especialidade do otorrinolaringologista?",op:"a) Tratamento das doenças bucais.<br><br>b) Tratamento das doenças infantis.<br><br>c) Tratamento das doenças da pele.<br><br>d) Tratamento das doenças dos olhos.<br><br>e) Tratamento das doenças relacionadas a nariz, ouvido e garganta."},
    {pg:"33. Qual a nacionalidade de Napoleão Bonaparte?",op:"a) Francesa<br><br>b) Brasileira<br><br>c) Mexicana<br><br>d) Japonesa<br><br>e) Egípcio"},
    {pg:"34. Depois do futebol, qual o esporte mais popular no Brasil?",op:"a) Esqui<br><br>b) Vôlei<br><br>c) Hóquei no gelo<br><br>d) Golfe<br><br>e) Esgrima"},
    {pg:"35. Que grande evento histórico aconteceu em 1822 no Brasil?",op:"a) Descobrimento do Brasil<br><br>b) Ditadura Militar<br><br>c) Revolução de 1930<br><br>d) Independência do Brasil<br><br>e) Construção de Brasília"},
    {pg:"36. O que comemora no feriado do dia 21 de abril no Brasil?",op:"a) Natal<br><br>b) Tiradentes<br><br>c) Independência do Brasil<br><br>d) Finados<br><br>e) Nossa Senhora Aparecida"},
    {pg:"37. Em que conto de fadas uma princesa adormece com um feitiço e só acorda com o beijo de um príncipe?",op:"a) A Bela Adormecida<br><br>b) João e Maria<br><br>c) Chapeuzinho Vermelho<br><br>d) Patinho Feio<br><br>e) Os três porquinhos"},
    {pg:"38. Em que região se localiza o estado de Minas Gerais?",op:"a) Sudeste<br><br>b) Centro-Oeste<br><br>c) Norte<br><br>d) Sul<br><br>e) Nordeste"},
    {pg:"39. Que fruto nasce da oliveira?",op:"a) Amêndoa<br><br>b) Abacate<br><br>c) Azeitona<br><br>d) Açaí<br><br>e) Acerola"},
    {pg:"40. Qual o plural de chapéu?",op:"a) Chapéis<br><br>b) Chapéus<br><br>c) Chapéuzes<br><br>d) Chapuzes<br><br>e) Os chapéu"},
    {pg:"41. Quem escreveu Os Lusíadas?",op:"a) Carlos Drummond de Andrade<br><br>b) Fernando Pessoa<br><br>c) Jorge Amado<br><br>d) Almeida Garrett<br><br>e) Luís Vaz de Camões"},
    {pg:"42. Barack Obama foi presidente de que país?",op:"a) Estados Unidos da América<br><br>b) Inglaterra<br><br>c) Alemanha<br><br>d) Rússia<br><br>e) África do Sul"},
    {pg:"43. Em que país de localiza o Taj Mahal?",op:"a) Egito<br><br>b) Índia<br><br>c) Inglaterra<br><br>d) Brasil<br><br>e) França"},
    {pg:"44. Que navio famoso naufragou na sua viagem inaugural?",op:"a) Titanic<br><br>b) Antonov<br><br>c) Boeing<br><br>d) Airbus<br><br>e) Symphony of the Seas"},
    {pg:"45. Qual o satélite natural da Terra?",op:"a) SCD-1<br><br>b) Sol<br><br>c) Amazonia 1<br><br>d) Ganimedes<br><br>e) Lua"},
    {pg:"46. O que é um tsunami?",op:"a) Um ciclone<br><br>b) Um tornado<br><br>c) Um maremoto<br><br>d) Um terremoto<br><br>e) Um incêndio"},
    {pg:"47. Qual destas substâncias faz parte da composição do vidro?",op:"a) Petróleo<br><br>b) Fibra<br><br>c) Celulose<br><br>d) Areia<br><br>e) Álcool"}
];
const rps = [1, 4, 2, 4, 3, 1, 5, 4, 2, 5, 1, 3, 4, 4, 2, 5, 3, 1, 1, 2, 3, 5, 2, 1, 3, 4, 2, 4, 5, 1, 2, 4, 2, 1, 1, 3, 2, 5, 1, 2, 1, 5, 3, 4];
var resp = 0;
var score = 0;

function quest(){
    let rd = Math.floor(Math.random()*perg.length);
    document.querySelector('.pg').innerHTML = perg[rd].pg;
    document.querySelector('.rp').innerHTML = perg[rd].op;
    resp = rps[rd];
}

function start(){
    document.querySelector('.play').remove();
    document.querySelector('.display').style.display='flex';
    document.querySelector('.title').className = 'title2';
    quest();
}

function verf(id){
    if(id != resp){
        document.querySelector('#lb'+id).className = 'opt inc';
    }else{
        score++;
        document.querySelector('.score').innerHTML = score;
    }
    document.querySelector('#lb'+resp).className = 'opt cor';
    setTimeout(() => {
        document.querySelector('#lb'+id).className = 'opt';
        document.querySelector('#lb'+resp).className = 'opt';
        quest();
    }, 500);
}