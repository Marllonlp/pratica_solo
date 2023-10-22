var menu = `
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand ms-md-5"><img src="imagens/logo.png"></a>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="border-dark navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
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
                </div>
            </nav>
        </div>
    </div>
</nav>

        <style>
            .navbar-toggler-icon {
                background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            }

            .navbar-brand img {
                width: 65px;
            }

            @media (max-width:993px) {
                .navbar-brand img {
                    margin-top: -15%;
                }
            }

            .navbar {
                height: 50px;
                background-color: #142c44;

            }

            .offcanvas {
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

var rodape = `
<footer class="bg-light text-lg-start">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5>Sobre Nós</h5>
                    <p>Somos uma agência de viagens dedicada a proporcionar experiências de viagem incríveis para nossos
                        clientes. Explore o mundo conosco!</p>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="ms-lg-5">Contato</h5>
                    <p class="ms-lg-5">Endereço: Rua da Viagem, 123<br>Telefone: (38) 456-7890<br>Email: viagensexpress@gmail.com</p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <h5  class="ms-lg-5">Companhías Aéreas</h5>
                    <ul class="list-unstyled ms-lg-5">
                        <li><a href="#" class="nav-link">Gol</a></li>
                        <li><a href="#" class="nav-link">United</a></li>
                        <li><a href="#" class="nav-link">Latam</a></li>
                        <li><a href="#" class="nav-link">Azul</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            &copy; 2023 Agência de Viagens Express
        </div>
    </footer>
        
`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".rodape").innerHTML = rodape;
});





