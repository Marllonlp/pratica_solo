import java.sql.*;
import java.util.*;

public class AgenciaDeViagens {

    public static void main(String[] args) {
        exibirMenu();
    }

    private static void exibirMenu() {
        Scanner scanner = new Scanner(System.in);

        int escolha;
        do {
            System.out.println("======= AGÊNCIA DE VIAGENS =======");
            System.out.println("1. HOME");
            System.out.println("2. DESTINOS");
            System.out.println("3. PROMOÇÕES");
            System.out.println("4. CONTATO");
            System.out.println("0. SAIR");
            System.out.print("Escolha uma opção: ");

            escolha = scanner.nextInt();

            switch (escolha) {
                case 1:
                    exibirHome();
                    break;
                case 2:
                    exibirDestinos();
                    break;
                case 3:
                    exibirPromocoes();
                    break;
                case 4:
                    exibirContato();
                    break;
                case 0:
                    System.out.println("Saindo da agência de viagens. Até logo!");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (escolha != 0);

        scanner.close();
    }

    private static void exibirHome() {
        System.out.println("\nBem-vindo à HOME da agência de viagens!");
        System.out.println("Ofertas especiais: 10% de desconto em pacotes para destinos exóticos.\n");
    }

    private static void exibirDestinos() {
        System.out.println("Escolha seu destino de sonho!");
        System.out.println("1. Paris");
        System.out.println("2. Reino Unido");
        System.out.println("3. Turquia");
        System.out.print("Escolha um destino: ");
        Scanner ler = new Scanner(System.in);
        int escolhaDestino = ler.nextInt();

        switch (escolhaDestino) {
            case 1:
                System.out.println("Paris - A cidade do amor!");
                break;
            case 2:
                System.out.println("Reino Unido -  Costumes culturais marcantes!");
                break;
            case 3:
                System.out.println("Turquia - A famosa Basílica de Santa Sofia!");
                break;
            default:
                System.out.println("Destino inválido.");
        }
    }

    private static void exibirPromocoes() {
        System.out.println("\n|----Confira nossas promoções imperdíveis!----|");
        System.out.println("Pacote com até 20% de desconto!\n");
    }

    private static void exibirContato() {
        System.out.println("\n|----Entre em contato conosco para obter mais informações.----|");
        System.out.println("Telefone: (38) 456-7890");
        System.out.println("E-mail: viagensexpress@gmail.com\n");
    }

    public void createUsuario(Usuario usuario) {
        try {
            String sql = "INSERT INTO Usuario (ID_do_usuario, Nome, Email, Senha) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = connection.prepareStatement(sql);
            stmt.setInt(1, usuario.getId());
            stmt.setString(2, usuario.getNome());
            stmt.setString(3, usuario.getEmail());
            stmt.setString(4, usuario.getSenha());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}




