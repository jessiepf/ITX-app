#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ADACA.Api/ADACA.Api.csproj", "ADACA.Api/"]
COPY ["ADACA.Application/ADACA.Application.csproj", "ADACA.Application/"]
COPY ["ADACA.Domain/ADACA.Domain.csproj", "ADACA.Domain/"]
COPY ["ADACA.Dto/ADACA.Dto.csproj", "ADACA.Dto/"]
COPY ["ADACA.Infrastructure/ADACA.Infrastructure.csproj", "ADACA.Infrastructure/"]
RUN dotnet restore "ADACA.Api/ADACA.Api.csproj"
COPY . .
WORKDIR "/src/ADACA.Api"
RUN dotnet build "ADACA.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ADACA.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ADACA.Api.dll"]
