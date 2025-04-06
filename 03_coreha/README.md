# Плагин CoreDNS
Плагин для автодискавери на каких узлах запущен тот или иной ингресс-контроллер или другой сервис с включенным hostPort

[Исходный код](https://github.com/shturval-tech/coreha)

[Документация Штурвал](https://docs.shturval.tech/2.9/ssc/general/coreha/)

## Конфигурация для отладки
coredns/.vscode/launch.json

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "CoreDNS debug",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${workspaceFolder}/coredns.go",
            "args": [
                "-conf", "${workspaceFolder}/Corefile.debug"
            ]
        }
    ]
}
```