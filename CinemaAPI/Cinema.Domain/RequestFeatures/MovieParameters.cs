namespace Cinema.Domain.RequestFeatures;

public class MovieParameters : RequestParameters
{
    public MovieParameters()
    {
        OrderBy = "name";
    }
}
