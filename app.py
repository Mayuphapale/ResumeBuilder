from flask import Flask, render_template

app = Flask(__name__)

# Define routes for each HTML page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/ben')
def ben():
    return render_template('ben.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/connection')
def connection():
    return render_template('connection.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/forgot')
def forgot():
    return render_template('forgot.html')

@app.route('/front')
def front():
    return render_template('front.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/how')
def how():
    return render_template('how.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/reset')
def reset():
    return render_template('reset.html')

@app.route('/step')
def step():
    return render_template('step.html')

@app.route('/steps')
def steps():
    return render_template('steps.html')

@app.route('/template')
def template():
    return render_template('Template.html')

@app.route('/resume')
def resume():
    return render_template('Resume.html')

@app.route('/resume1')
def resume1():
    return render_template('Resume1.html')

@app.route('/resume10')
def resume10():
    return render_template('Resume10.html')

@app.route('/resume11')
def resume11():
    return render_template('Resume11.html')

@app.route('/resume12')
def resume12():
    return render_template('Resume12.html')

@app.route('/resume13')
def resume13():
    return render_template('Resume13.html')

@app.route('/resume2')
def resume2():
    return render_template('Resume2.html')

@app.route('/resume3')
def resume3():
    return render_template('Resume3.html')

@app.route('/resume4')
def resume4():
    return render_template('Resume4.html')

@app.route('/resume5')
def resume5():
    return render_template('Resume5.html')

@app.route('/resume6')
def resume6():
    return render_template('Resume6.html')

@app.route('/resume7')
def resume7():
    return render_template('Resume7.html')

@app.route('/resume8')
def resume8():
    return render_template('Resume8.html')

@app.route('/resume9')
def resume9():
    return render_template('Resume9.html')

if __name__ == '__main__':
    app.run(debug=True)