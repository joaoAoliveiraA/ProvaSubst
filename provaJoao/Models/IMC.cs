using System.ComponentModel.DataAnnotations;

namespace provaJoao.Models;

public class IMC
{
    
    public int Id { get; set; }
    public double Peso { get; set; }
    public double Altura { get; set; }
    public string EstagioIMC { get; set; }
    public double NumeroImc { get; set; }
    public int AlunoId { get; set;}
    public Aluno? Aluno { get; set;}

    
}