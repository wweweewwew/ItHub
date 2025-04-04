from flask import Flask, render_template

app = Flask(__name__)

resume_data = {
    "name": "Наджафов Даниил",
    "position": "Студент кафедры веб-разработки",
    "about": "Специализируюсь на full-stack веб-разработке. Готов к стажировкам и проектной работе.",
    "contacts": {
        "email": "tprpra6@gmail.com",
        "phone": "+7 (952) 233-04-77",
        "github": "github.com/wweweewwew",
    },
    "education": {
        "college": "ItHub",
        "faculty": "Кафедра веб-разработки",
        "year": "2024-2028"
    },
    "tech_skills": {
        "frontend": ["HTML", "CSS", "JavaScript", "React"],
        "backend": ["Node.js", "Python", "Flask"],
        "databases": ["MySQL", "SQL"],
        "tools": ["Git"]
    }
}

@app.route('/')
def resume():
    return render_template('index.html', resume=resume_data)

if __name__ == '__main__':
    app.run(debug=True)