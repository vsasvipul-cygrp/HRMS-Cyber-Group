using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HRMS.Models
{
    public partial class HRMSContext : DbContext
    {
        public HRMSContext()
        {
        }

        public HRMSContext(DbContextOptions<HRMSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<Leave> Leave { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<TypeInfo> TypeInfo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=CYG224;Database=HRMS;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(entity =>
            {
                entity.Property(e => e.Amid)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);


                entity.Property(e => e.Contact)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Desg)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Empname)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Leave>(entity =>
            {
                entity.HasKey(e => e.Leaveid);

                entity.Property(e => e.Edate).HasColumnType("date");

                entity.Property(e => e.Reason)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Sdate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdNavigation)
                    .WithMany(p => p.Leave)
                    .HasForeignKey(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Leave_Employee");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Leave)
                    .HasForeignKey(d => d.Typeid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Leave_TypeInfo");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.Property(e => e.Roleid).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TypeInfo>(entity =>
            {
                entity.HasKey(e => e.Typeid);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .IsUnicode(false);
            });
        }
    }
}
