namespace moviesAPI.Domain.Dtos.Pagination;

public class PageViewDto
{
   public int Page { get; set; }
   private int recordsPerPage = 10;
   private readonly int maxRecordsPerPage = 50;

   public int RecordsPerPage
   {
      get => recordsPerPage;
      set => recordsPerPage = (value > maxRecordsPerPage) ? maxRecordsPerPage : value;
   }

}