var pagina= 'Página Inicial';
var mensagem;

var url="http://ws.audioscrobbler.com/2.0/";
var key="b56bf787adb3d9db1b7e852a4791010d";
var method="tag.gettoptracks";
var tag="disco";
var limit="10";

var urlfinal=url + "?method=" + method + "&tag=" + tag +"&limit="+ limit +"&api_key=" + key + "&format=json";;



/*function trocar(index) {

    alert(index);

    if (index == 1) {
        pagina = 'Página Inicial';
        mensagem = 'Esta é a página Inicial';
        urlfinal = url + "?method=" + method + "&tag=" + tag + "&limit=" + limit + "&api_key=" + key + "&format=json";


    } else if (index == 2) {
        pagina = 'Top';
        mensagem = 'Está é a página onde pode encontrar o top de musicas';
        urlfinal = 'Olá!'
    } else if (index == 3) {
        pagina = 'Favoritos';
        mensagem = 'Esta é a sua lista de favoritos';
    } else if (index == 4) {
        pagina = 'Desenvolvedores';
        mensagem = 'Aqui pode encontrar a lista de desenvolvedores do site';
    }
    document.title = pagina;
    alert(mensagem);
}*/

    console.log(window.location.href);

    if (window.location.href == 'file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/home.html') {
        alert('home');

        $.getJSON(urlfinal, function (data) {
            for (var i = 0; i < 10; i++) {
                localStorage.setItem("track", data.tracks.track[i].name);
                localStorage.setItem("artist", data.tracks.track[i].artist.name);
                localStorage.setItem("duration",data.tracks.track[i].duration)
                console.log(localStorage);

                $(".card-list").append('<article class="card"><header class="card-header"><p>' + data.tracks.track[i].duration + ' seconds</p><img id="imagem" src="imagens/10.jpg" alt="Photo" class="card-img-top"style="height: 100px; width: 100px;"> <br/> <h2 id="titulo">' + data.tracks.track[i].name + '<h2> </header> <div class="card-author"> <a class="author-avatar" href="#"> <img src="imagens/11.jpg"/> </a> <svg class="half-circle" viewBox="0 0 106 57"> <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path> </svg> <div class="author-name"> <div class="author-name-prefix">Artista</div> <div class="author-name-sufix"> <h5>' + data.tracks.track[i].artist.name + '</h5> </div> </div> </div> <div class="tags"> <a href="#">Rap</a> <a href="#">Tuga</a></div> </article>');
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
                //console.log(data.tracks.track[i].name);
            }
        })
    }

    else if(window.location.href == 'file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/top.html')
    {
        alert('top');
        //Aqui tens de fazer a consulta do top pt limit 10  e guardar no local storage
    }

    else if(window.location.href=='file:///C:/Users/manin/Desktop/githubpage/PWEBCliente/favorios.html'){
        alert('favoritos');
        //aqui tens de adicionar a musica escolhida aos favoritos no local storage
    }

    //Se conseguires colocar a barra de pesquisa a funcionar era bom


