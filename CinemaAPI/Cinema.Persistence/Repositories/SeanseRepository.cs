using Cinema.Domain.Models.Entities;
using Cinema.Persistence.Data;
using Cinema.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Cinema.Persistence.Repositories;

public class SeanseRepository : RepositoryBase<Domain.Models.Entities.Seanse>, ISeanseRepository
{
    public SeanseRepository(RepositoryContext repositoryContext) : base(repositoryContext)
    {}


    public void CreateSeanse(Seanse seanse)
        => Create(seanse);

    public void DeleteSeanse(Seanse seanse)
        => Delete(seanse);

    public async Task<List<Seanse>> GetAllSeanseAsync()
        => await FindAll().OrderBy(x => x.Id).ToListAsync();

    public async Task<Seanse?> GetSeanseAsync(int id, bool trackChanges = false)
        => await FindByCondition(x => x.Id == id, trackChanges).FirstOrDefaultAsync();
}
