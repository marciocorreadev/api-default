import { Request, Response } from "express";

function index(request: Request, response: Response) {
    response.send(
        `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>API Tributos</title>
                <style>
                </style>
            </head>
            <body>
                <h1> API ...</h1>
            </body>
        </html>`
    )
}

function ping(request: Request, response: Response) {
    response.json({ status: 'OK', time: new Date().toLocaleTimeString('pt-BR') }).status(200)
}

export default { index, ping }