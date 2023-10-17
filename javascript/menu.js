var menu = `
<nav class="navbar navbar-expand-lg">
<div class="container">
    <a class="navbar-brand ms-md-5"><img src="imagens/logo.png" style="width: 70px;"></a>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end bg-info-subtle" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-5">
                    <li class="nav-item">
                        <a class="nav-link ms-md-4" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-md-4" href="destinos.html">Destino</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-md-4" href="promocao.html">Promoções</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-md-4" href="contato.html">Contato</a>
                    </li>
                </ul>
        </nav>
        

        <style>
            .navbar{
                height: 47px;
                background-color: #142c44;
                
            }
            .navbar .nav-link {
                color: white;
            }

            .navbar .nav-link:hover {
                color: black;
            }
        </style>
        
`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});





