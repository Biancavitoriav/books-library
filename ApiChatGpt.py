import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
load_dotenv()

genai.configure(api_key=os.getenv("API_KEY"))

@app.route('/ler-arquivo', methods=['POST'])
def ler_arquivo():
    try:
        requestS = request.get_json()
        noticias = requestS.get("infos", "Sem notícias disponíveis")
        print(noticias)

        models = genai.list_models()
        for model in models:
            print(model.name)
        
        model = genai.GenerativeModel('gemini-1.5-pro')  # Nome correto do modelo

        prompt = noticias
        try:
            response = model.generate_content(prompt)
            print(response.text)
            return jsonify({"resposta": response.text})
        except Exception as e:
            return jsonify({"erro": f"Erro na API do Google Gemini: {e}"}), 500
        
    except Exception as e:
        return jsonify({"erro": f"Erro inesperado: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
