namespace Cinema.Domain.Models.Consts;

public static class ConstError
{
    public const string ERROR_BY_ID = "Error occured in GetAsync method, an attempt to reach an element with an unregistered id";
    public const string ERROR_BY_CREDENTIALS = "Error occured in GetAsync method, an attempt to reach an element with an unregistered email and password";

    public static string GetErrorForException(string type, int id)
        => $"{type} with id {id} doesn't exist.";
    
    public static string GetCredentialsErrorExceptionMessage(string type, string login, string password) 
        => $"{type} with login {login} and password {password} does not exist.";
}
