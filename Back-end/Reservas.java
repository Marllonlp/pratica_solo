import java.util.Date;

class Reservas {
    private int id;
    private int idUsuario;
    private int idDestino;
    private Date dataReserva;

    public Reservas(int id, int idUsuario, int idDestino, Date dataReserva) {
        this.id = id;
        this.idUsuario = idUsuario;
        this.idDestino = idDestino;
        this.dataReserva = dataReserva;
    }

    // Getters e Setters
    // ...
}
