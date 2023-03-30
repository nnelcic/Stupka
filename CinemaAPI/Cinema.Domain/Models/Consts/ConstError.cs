namespace Cinema.Domain.Models.Consts;

public static class ConstError
{
    public const string ERROR_BY_ID = "Error occured in GetAsync method, an attempt to reach an element with an unregistered id";

    public static string GetErrorForException(string type, int id)
        => $"{type} with id {id} doesn't exist.";
}
