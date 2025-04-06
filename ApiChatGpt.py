import requests
import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS  # Importando CORS

app = Flask(__name__)
CORS(app)  # Permite todas as origens
load_dotenv()

@app.route('/ler-arquivo', methods=['POST'])
def ler_arquivo():
    try:
        requestS = request.get_json()
        noticias = requestS.get("infos", "Sem notícias disponíveis")
        print(noticias)
        
        url = "https://api.openai.com/v1/chat/completions"
        api_key = os.getenv("API_KEY")

        if not api_key:
            return jsonify({"erro": "Chave de API não fornecida"}), 400

        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }

        data = {
            "model": "gpt-3-turbo",
            "messages": [
                {"role": "system", "content": "Você precisa responder perguntas relacionadas a livros"},
                {"role": "user", "content": f"Segue a pergunta: {noticias}"}
            ],
            "temperature": 0.7
        }

        response = requests.post(url, headers=headers, json=data)
        print(response.text)

        if response.status_code == 200:
            resultado = response.json()
            return jsonify({"result": resultado['choices'][0]['message']['content']})
        else:
            return jsonify({"erro": f"Erro na API da OpenAI: {response.status_code}, {response.text}"}), 500

    except Exception as e:
        return jsonify({"erro": f"Erro inesperado: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)  # Deixa o backend acessível na rede
