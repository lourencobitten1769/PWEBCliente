var pagina= 'Página Inicial';
var mensagem;

const queryString = window.location.search;
const urlParams= new URLSearchParams(queryString);
var url="http://ws.audioscrobbler.com/2.0/";
var key="b56bf787adb3d9db1b7e852a4791010d";
var method="tag.gettoptracks";
var tag="disco";
var limit="10";
var country='portugal';
var selValue=urlParams.get('selValue');
//alert(selValue);
var urlfinal;
var pesquisa=urlParams.get('pesquisa');
//alert(pesquisa);
//alert(urlParams.get('track'));
var titulo=urlParams.get('track');
var artista=urlParams.get('artist');
var extra=urlParams.get('extra');

alert(location.protocol + '//' + location.host + location.pathname)

$(".card").css({
    "height": "450px",
    "width": "400px",
    "min-width": "250px",
    "padding": "1.5rem",
    "border-radius": "16px",
    "background": "#17141d",
    "box-shadow": "-1rem 0 3rem #000",
    "display": "flex",
    "flex-direction": "column",
    "transition": ".2s",
    "margin": "0",
    "scroll-snap-align": "start",
    "clear": "both",
    "position": "relative"
});
$(".card:focus-within~.card, .card:hover~.card").css({"transform": "translateX(130px)"});
$(".card:hover").css("transform", "translateY(-1rem)");
$(".card:not(:first-child)").css("margin-left", "-130px");
$(".card-header").css("margin-bottom", "auto");
$(".card-header p").css({"font-size": "14px", "margin": "0 0 1rem", "color": "#7a7a8c"});
$(".card-header h2").css({
    "font-size": "20px",
    "margin": ".25rem 0 auto",
    "text-decoration": "none",
    "color": "white",
    "border": "0",
    "display": "inline-block",
    "cursor": "pointer"
});
$(".card-header h2:hover").css({
    "background": "linear-gradient(90deg,#92d36e,#e52e71)",
    "text-shadow": "none",
    "-webkit-text-fill-color": "transparent",
    "-webkit-background-clip": "text",
    "background-clip": "text"
});
$(".card-author").css({
    "margin": "3rem 0 0",
    "display": "grid",
    "grid-template-columns": "75px 1fr",
    "align-items": "center",
    "position": "relative"
});
$(".author-avatar").css({
    "grid-area": "auto",
    "align-self": "start",
    "position": "relative",
    "box-sizing": "border-box"
});
$(".author-avatar img").css({
    "width": "40px",
    "height": "40px",
    "border-radius": "50%",
    "filter": "grayscale(100%)",
    "display": "block",
    "overflow": "hidden",
    "margin": "16px 10px"
});
$(".author-name").css({"grid-area": "auto", "box-sizing": "border-box"});
$(".author-name-prefix").css({"font-style": "normal", "font-weight": "700", "color": "#e52e71"});

//console.log(window.location.href);

$(document).ready(function (){
    $('.radio__input').on('change',function (){
        selValue=$("[type='radio']:checked").val();
        window.location.replace("top.html?selValue=" + selValue);
        console.log(selValue);
    })
    $("#text").text(titulo);
    $("#artista").text(artista);
    $("#extra").text(extra);
})

    if (location.protocol + '//' + location.host + location.pathname == 'file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/home.html') {
        alert('home');
        if(pesquisa!=null){
            for (var i=0;i<10;i++) {
                $(".card").remove();
                localStorage.clear();
            }
            method="track.search";
            urlfinal = url + "?method=" + method + "&track=" + pesquisa + "&api_key=" + key + "&format=json";

            $.getJSON(urlfinal,function (data){
                for (i = 0; i < 30; i++) {
                    localStorage.setItem("track", data.results.trackmatches.track[i].name);
                    localStorage.setItem("artist", data.results.trackmatches.track[i].artist);
                    localStorage.setItem("listeners", data.results.trackmatches.track[i].listeners)
                    console.log(localStorage);

                    $(".card-list").append('<article class="card"><header class="card-header"><p>' + localStorage.getItem("listeners") + ' listeners</p><img id="imagem" src="imagens/10.jpg" alt="Photo" class="card-img-top"style="height: 100px; width: 100px;"> <br/> <a href="detalhe.html?track='+ localStorage.getItem("track") + '&artist=' + localStorage.getItem("artist")+ '&extra=' + localStorage.getItem("listeners")+ 'listeners"><h2 id="titulo">' + localStorage.getItem("track") + '</h2></a> </header> <div class="card-author"> <a class="author-avatar" href="#"> <img src="imagens/11.jpg"/> </a> <svg class="half-circle" viewBox="0 0 106 57"> <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path> </svg> <div class="author-name"> <div class="author-name-prefix">Artista</div> <div class="author-name-sufix"> <h5>' + localStorage.getItem("artist") + '</h5> </div> </div> </div> <div class="tags"> <a href="#">Rap</a> <a href="#">Tuga</a></div> </article></a>');
                }
            })
            console.log(urlfinal);
        }
        else if(pesquisa==null) {
            urlfinal = url + "?method=" + method + "&tag=" + tag + "&limit=" + limit + "&api_key=" + key + "&format=json";
            $.getJSON(urlfinal, function (data) {
                for (var i = 0; i < 10; i++) {
                    localStorage.setItem("track", data.tracks.track[i].name);
                    localStorage.setItem("artist", data.tracks.track[i].artist.name);
                    localStorage.setItem("duration", data.tracks.track[i].duration)
                    console.log(localStorage);

                    $(".card-list").append('<article class="card"><header class="card-header"><p>' + localStorage.getItem("duration") + ' seconds</p><img id="imagem" src="imagens/10.jpg" alt="Photo" class="card-img-top"style="height: 100px; width: 100px;"> <br/> <a href="detalhe.html?track='+ localStorage.getItem("track") + '&artist=' + localStorage.getItem("artist")+ '&extra=' + localStorage.getItem("duration")+ 'seconds"><h2 id="titulo">' + localStorage.getItem("track") + '</h2></a> </header> <div class="card-author"> <a class="author-avatar" href="#"> <img src="imagens/11.jpg"/> </a> <svg class="half-circle" viewBox="0 0 106 57"> <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path> </svg> <div class="author-name"> <div class="author-name-prefix">Artista</div> <div class="author-name-sufix"> <h5>' + localStorage.getItem("artist") + '</h5> </div> </div> </div> <div class="tags"> <a href="#">Rap</a> <a href="#">Tuga</a></div> </article></a>');

                    //console.log(data.tracks.track[i].name);
                }
            })
        }
    }
    else if(window.location.href == 'file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/top.html?selValue=musicas')
    {
        alert('top');
        country="portugal";
        limit="10";
        method="geo.gettoptracks";
        urlfinal=url + "?method=" + method + "&country="+country+"&limit="+ limit + "&api_key=" + key + "&format=json";

        $.getJSON(urlfinal, function (data) {
            console.log(urlfinal);
            for (var i = 0; i < 10; i++) {
                localStorage.setItem("track", data.tracks.track[i].name);
                localStorage.setItem("artist", data.tracks.track[i].artist.name);
                localStorage.setItem("duration",data.tracks.track[i].duration);
                $(".card-list").append('<article class="card"><header class="card-header"><p>' + localStorage.getItem("duration") + ' seconds</p><img id="imagem" src="imagens/10.jpg" alt="Photo" class="card-img-top"style="height: 100px; width: 100px;"> <br/> <h2 id="titulo">' + localStorage.getItem("track") + '<h2> </header> <div class="card-author"> <a class="author-avatar" href="#"> <img src="imagens/11.jpg"/> </a> <svg class="half-circle" viewBox="0 0 106 57"> <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path> </svg> <div class="author-name"> <div class="author-name-prefix">Artista</div> <div class="author-name-sufix"> <h5>' + localStorage.getItem("artist") + '</h5> </div> </div> </div> <div class="tags"> <a href="#">Rap</a> <a href="#">Tuga</a></div> </article>');
                console.log(localStorage);
            }
        })
    }
    else if(window.location.href == 'file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/top.html?selValue=artistas') {
        country="portugal";
        limit="10";
        method="geo.gettopartists";
        urlfinal=url + "?method=" + method + "&country="+country+"&limit="+ limit + "&api_key=" + key + "&format=json";

        $.getJSON(urlfinal, function (data) {
            console.log(urlfinal);
            for (var i = 0; i < 10; i++) {
                localStorage.setItem("artist", data.topartists.artist[i].name);
                localStorage.setItem("listeners", data.topartists.artist[i].listeners);
                localStorage.setItem("imagem",data.topartists.artist[i].image.size);

                $(".card-list").append('<article class="card"><header class="card-header"><img id="imagem" src="imagens/10.jpg" alt="Photo" class="card-img-top"style="height: 100px; width: 100px;"> <br/> <h2 id="titulo">' + localStorage.getItem("artist") + '<h2> </header> <div class="card-author"> <a class="author-avatar" href="#"> <img src="imagens/11.jpg"/> </a> <svg class="half-circle" viewBox="0 0 106 57"> <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path> </svg> <div class="author-name"> <div class="author-name-prefix">Ouvintes</div> <div class="author-name-sufix"> <h5>' + localStorage.getItem("listeners") + '</h5> </div> </div> </div> <div class="tags"> <a href="#">Rap</a> <a href="#">Tuga</a></div> </article>');
                console.log(localStorage);
            }
        })
    }
    else if(location.protocol + '//' + location.host + location.pathname=='file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/favoritos.html'){
        alert('favoritos');
        var names = [];
        names[0] = prompt("New member name?");
        localStorage.setItem("names", JSON.stringify(names));


        var storedNames = JSON.parse(localStorage.getItem("names"));
        alert(storedNames);
        alert("Tamanho:" + names.length);
    }
    else if(location.protocol + '//' + location.host + location.pathname =='file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/detalhe.html') {
        alert('detalhe');

        alert(titulo);

    }

    //API TEM CENA PARA SEARCHSe conseguires colocar a barra de pesquisa a funcionar era bom




