import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

class UsuarioDAO {
    private Connection connection;

    public UsuarioDAO() {
        try {
            // Substitua pelos detalhes de conexão do seu banco de dados
            String url = "jdbc:mysql://localhost:3306/agencia_de_viagens";
            String user = "root";
            String password = "password";

            connection = DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
