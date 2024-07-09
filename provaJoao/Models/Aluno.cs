using System.ComponentModel.DataAnnotations;

namespace provaJoao.Models;

public class Aluno
{
  
    public int Id { get; set; }
    public string? Nome { get; set; }
    public string DataNascimento { get; set;}
    public DateTime CriadoEm { get; set; } = DateTime.Now;
    
}