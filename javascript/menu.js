var menu = `
<nav class="navbar navbar-expand-lg bg-info-subtle">
<div class="container">
    <a class="navbar-brand ms-md-5" href="#">VIAGENS</a>
    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
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
                <!-- login 
                <div class="d-flex justify-content-center align-items-center gap-3">
                    <a href="#" class="nav-link">Login</a>
                    <a href="#" class="nav-link">Cadastro</a>
                </div>
            </div>
            -->
        </nav>

        <style>

        .navbar .nav-link {
            color: black;
        }
    
        .navbar .nav-link:hover {
            color: blue;
        }
        </style>
`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});





