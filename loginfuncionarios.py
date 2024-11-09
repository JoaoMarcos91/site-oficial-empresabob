import flet as ft

def main(page):
    titulo = ft.Text("Site de Login dos funcionários da Empresa BOB LFFM")

    # Campos de entrada para o usuário e senha
    input_usuario = ft.TextField(label="Escreva o seu nome de usuário")
    input_senha = ft.TextField(label="Escreva sua senha", password=True, on_submit=lambda e: entrar(e))

    # Função de login
    def entrar(event):
        # Converte o nome de usuário para minúsculas antes da verificação
        usuario_valor = input_usuario.value.lower()
        senha_valor = input_senha.value

        # Verifica os valores dos campos de entrada
        if usuario_valor == "felipe" and senha_valor == "13":
            print("LOGIN do Felipe")
            page.controls.clear()  # Limpa todos os elementos da página para exibir apenas a mensagem de sucesso
            page.add(ft.Text("Olá, Felipe"))
            popup.open = False
        elif usuario_valor == "nicolas" and senha_valor == "14":
            print("LOGIN do Nicolas")
            page.controls.clear()  # Limpa todos os elementos da página para exibir apenas a mensagem de sucesso
            page.add(ft.Text("Olá, Nicolas"))
            popup.open = False
        else:
            # Exibe uma mensagem de erro no popup
            print("ERRO")
            popup.title = ft.Text("Erro")
            popup.content = ft.Column([
                input_usuario,
                input_senha,
                ft.Text("Usuário ou senha incorretos. Tente novamente.", color="red")
            ])
            popup.open = True

        page.update()

    # Definindo o popup com os campos de entrada e botão "Entrar"
    popup = ft.AlertDialog(
        open=False,
        modal=True,
        title=ft.Text("Fazer login"),
        content=ft.Column([input_usuario, input_senha]),
        actions=[ft.ElevatedButton("Entrar", on_click=entrar)]
    )

    def com_lo(event):
        page.dialog = popup
        popup.open = True
        page.update()

    # Botão que abre o popup
    botao_com_lo = ft.ElevatedButton("Fazer login", on_click=com_lo)

    # Adiciona o título e o botão à página
    page.add(titulo)
    page.add(botao_com_lo)


ft.app(target=main, view=ft.AppView.WEB_BROWSER)