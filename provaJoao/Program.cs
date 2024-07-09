using System.Security.Cryptography;
using provaJoao.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
builder.Services.AddCors(options =>
    options.AddPolicy("Acesso Total",
        configs => configs
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod())
);
var app = builder.Build();

app.MapGet("/", () => "Prova Substitutiva");

app.MapPost("provaJoao/aluno/cadastrar", ([FromBody] Aluno aluno,
    [FromServices] AppDataContext ctx) =>
{
    string nomePadronizado = aluno.Nome.ToLower();

    Aluno? alunoExistente = ctx.Alunos.FirstOrDefault(a => a.Nome.ToLower() == nomePadronizado);
    if (alunoExistente is null)
    {
        ctx.Alunos.Add(aluno);
        ctx.SaveChanges();
        return Results.Ok("Aluno cadastrado com sucesso");
    }
    return Results.NotFound("Aluno já cadastrado");
});

app.MapPost("provaJoao/imc/cadastrar", ([FromBody] IMC imc, [FromServices] AppDataContext ctx) =>
{
    imc.NumeroImc = imc.Peso / (imc.Altura * imc.Altura);
    if (imc.NumeroImc < 18.5)
        {
           imc.EstagioIMC ="Magreza (Grau 0)";
        }
        else if (imc.NumeroImc >= 18.5 && imc.NumeroImc <= 24.9)
        {
            imc.EstagioIMC ="Normal (Grau 0)";
        }
        else if (imc.NumeroImc >= 25.0 && imc.NumeroImc <= 29.9)
        {
            imc.EstagioIMC ="Sobrepeso (Grau I)";
        }
        else if (imc.NumeroImc >= 30.0 && imc.NumeroImc <= 39.9)
        {
            imc.EstagioIMC ="Obesidade (Grau II)";
        }
        else
        {
            imc.EstagioIMC ="Obesidade Grave (Grau III)";
        }
    //imc.Aluno = aluno;
    ctx.IMCs.Add(imc);
    ctx.SaveChanges();
});


app.MapGet("provaJoao/imc/listar", ([FromServices] AppDataContext ctx) =>
{
   return Results.Ok(ctx.IMCs.Include(a => a.Aluno));
});



app.MapGet("provaJoao/imc/listarporaluno", ([FromServices] AppDataContext ctx) =>
{
    return Results.Ok(ctx.IMCs.Include(a => a.Aluno));
});

app.MapPut("provaJoao/imc/alterar/{id}",
    ([FromRoute] int id,
    [FromBody] IMC imc,
    [FromServices] AppDataContext ctx) =>
{
    IMC? imcNova = ctx.IMCs.Find();
    if (imc is null)
    {
        return Results.
            NotFound("IMC não encontrado!");
    }
    imc.Peso = imc.Peso;
    imc.Altura = imc.Altura;

    ctx.IMCs.Update(imc);
    ctx.SaveChanges();
    return Results.
        Ok("IMC alterado com sucesso!");
});

app.UseCors("Acesso Total");
app.Run();