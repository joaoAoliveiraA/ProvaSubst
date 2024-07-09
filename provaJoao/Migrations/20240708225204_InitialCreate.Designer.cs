﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using provaJoao.Models;

#nullable disable

namespace provaJoao.Migrations
{
    [DbContext(typeof(AppDataContext))]
    [Migration("20240708225204_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.6");

            modelBuilder.Entity("provaJoao.Models.Aluno", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("DataNascimento")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Alunos");
                });

            modelBuilder.Entity("provaJoao.Models.IMC", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Altura")
                        .HasColumnType("REAL");

                    b.Property<int>("AlunoId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("EstagioIMC")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("NumeroImc")
                        .HasColumnType("REAL");

                    b.Property<double>("Peso")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("AlunoId");

                    b.ToTable("IMCs");
                });

            modelBuilder.Entity("provaJoao.Models.IMC", b =>
                {
                    b.HasOne("provaJoao.Models.Aluno", "Aluno")
                        .WithMany()
                        .HasForeignKey("AlunoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aluno");
                });
#pragma warning restore 612, 618
        }
    }
}