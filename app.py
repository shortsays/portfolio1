from flask import Flask, render_template

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")

# ✅ This is REQUIRED for Vercel
def handler(request, *args, **kwargs):
    return app(request, *args, **kwargs)

if __name__ == "__main__":
    app.run(debug=True)
