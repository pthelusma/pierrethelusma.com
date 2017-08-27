using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace pierrethelusma.identity
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentityServer()
                    .AddTemporarySigningCredential()
					.AddInMemoryApiResources(new List<ApiResource>
					{
						new ApiResource("api1", "My API")
					})
                    .AddInMemoryClients(new List<Client>
				    {
				        new Client
				        {
				            ClientId = "client",

				            // no interactive user, use the clientid/secret for authentication
				            AllowedGrantTypes = GrantTypes.ClientCredentials,

				            // secret for authentication
				            ClientSecrets =
				            {
				                new Secret("secret".Sha256())
				            },

				            // scopes that client has access to
				            AllowedScopes = { "api1" }
				        }
                    });
            
            // Add framework services.
            // services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseDeveloperExceptionPage();
            app.UseIdentityServer();
            // app.UseMvc();
        }
    }
}
