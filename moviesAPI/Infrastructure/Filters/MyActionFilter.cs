using Microsoft.AspNetCore.Mvc.Filters;

namespace moviesAPI.Infrastructure.Filters;

public class MyActionFilter : IActionFilter
{
    private readonly ILogger<MyActionFilter> _logger;
    public MyActionFilter(ILogger<MyActionFilter> logger)
    {
        _logger = logger;
    }

    public void OnActionExecuting(ActionExecutingContext context)
    {
        _logger.LogWarning("OnActionExecuting");
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        _logger.LogWarning("OnActionExecuted");
    }
}