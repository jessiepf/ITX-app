#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ADACA/ADACA.csproj", "ADACA/"]
COPY ["ADACA.Application/ADACA.Application.csproj", "ADACA.Application/"]
COPY ["ADACA.Domain/ADACA.Domain.csproj", "ADACA.Domain/"]
COPY ["ADACA.Infrastructure/ADACA.Infrastructure.csproj", "ADACA.Infrastructure/"]
RUN dotnet restore "ADACA/ADACA.csproj"
COPY . .
WORKDIR "/src/ADACA"
RUN dotnet build "ADACA.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ADACA.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ADACA.dll"]
