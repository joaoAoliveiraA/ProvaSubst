﻿using Microsoft.EntityFrameworkCore;

namespace provaJoao.Models;

public class AppDataContext : DbContext
{
    public DbSet<Aluno> Alunos { get; set; }
    public DbSet<IMC> IMCs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=joao.db");
    }
}