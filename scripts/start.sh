#!/bin/bash
export ASPNETCORE_ENVIRONMENT=local
cd src/DShop.Services.Signalr
dotnet run --no-restore