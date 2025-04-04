from flask import Flask, render_template
import datetime

app = Flask(__name__)

def get_greeting():
    now = datetime.datetime.now()
    
    if 6 <= now.hour < 12:
        return "Доброе утро"
    elif 12 <= now.hour < 18:
        return "Добрый день"
    elif 18 <= now.hour < 24:
        return "Добрый вечер"
    else:
        return "Доброй ночи"

@app.route('/')
def index():
    return render_template('index.html', greeting=get_greeting())

if __name__ == '__main__':
    app.run(debug=True)