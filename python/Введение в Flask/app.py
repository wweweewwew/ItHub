from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Кто не рискует, тот не пьёт шампанского."

if __name__ == '__main__':
    app.run(debug=True)