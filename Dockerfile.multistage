FROM mcr.microsoft.com/dotnet/core/sdk AS build
WORKDIR /app
COPY . .
RUN dotnet publish src/DShop.Services.Signalr -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:2.2
WORKDIR /app
COPY --from=build /app/src/DShop.Services.Signalr/out .
ENV ASPNETCORE_URLS http://*:5000
ENV ASPNETCORE_ENVIRONMENT docker
EXPOSE 5000
ENTRYPOINT dotnet DShop.Services.Signalr.dll