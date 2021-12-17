using Microsoft.AspNetCore.Mvc.Filters;

namespace moviesAPI.Infrastructure.Filters;

public class ExceptionsFilter : ExceptionFilterAttribute
{
    private readonly ILogger<ExceptionsFilter> _logger;
    public ExceptionsFilter(ILogger<ExceptionsFilter> logger)
    {
        _logger = logger;
    }

    public override void OnException(ExceptionContext context)
    {
        _logger.LogError(context.Exception, context.Exception.Message);
        base.OnException(context);
    }
}