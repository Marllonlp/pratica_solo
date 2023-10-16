programa {
  funcao inicio() {
    cadeia cliente[100]
    cadeia destino[100]
     // Variáveis para rastrear o número total de clientes e destinos
    inteiro total_destino = 0
    inteiro total_cliente = 0
    inteiro opcao = 0

    enquanto (opcao != 5){
         escreva("\n----Menu----")
         escreva("\n1. Cadastrar Cliente")
         escreva("\n2. Cadastrar Destino")	
         escreva("\n3. Consutar Cliente")
         escreva("\n4. Consutar Destino")
         escreva("\n5. Sair")
         escreva("\nescolha uma opção: ")
         leia(opcao)
  
 // Usando a estrutura escolha para lidar com a opção do usuário
     escolha(opcao){
caso 1:
       total_cliente = cadastrarCliente(cliente, total_cliente)
       pare

caso 2:
       total_destino = cadastrarDestino(destino, total_destino)
       pare

caso 3:
     clienteCadastrado(cliente, total_cliente)
       pare

caso 4:
       destinoCadastrado(destino, total_destino)
       pare
       
caso 5:
       escreva("Saindo...")
       pare

       caso contrario:
       escreva("\nOpção inalida...")
     }
   }
  }

 // Função para cadastrar um cliente
  funcao inteiro cadastrarCliente(cadeia cliente[], inteiro total_cliente){
    cadeia nome
       escreva("\nDigite se nome: ")
       leia(nome)
       cliente[total_cliente] = nome
       total_cliente = total_cliente + 1 // Incrementa o contador de clientes
       retorne total_cliente
  }
  
  // Função para cadastrar um destino
  funcao inteiro cadastrarDestino(cadeia destino[], inteiro total_destino){
    cadeia ndestino
       escreva("\nDigite se destino: ")
       leia(ndestino)
       destino[total_destino] = ndestino
       total_destino = total_destino + 1 // Incrementa o contador de Destinos
       retorne total_destino
  }

  // Função para listar clientes cadastrados
  funcao clienteCadastrado(cadeia cliente[] ,inteiro total_cliente){
       escreva("\nClintes cadastrados")
       para (inteiro i = 0; i < total_cliente; i++){
           escreva("\n" + (i + 1) + ". " + cliente[i])
       }
  }

  // Função para listar destinos cadastrados
  funcao destinoCadastrado(cadeia destino[] ,inteiro total_destino){
      escreva("\nDestinos cadastrados")
       para (inteiro j = 0; j < total_destino; j++){
           escreva("\n" + (j + 1) + ". " + destino[j])
       }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2092; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */