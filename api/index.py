from flask import Flask, render_template, send_from_directory
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(
    __name__,
    template_folder=os.path.join(BASE_DIR, "..", "templates"),
    static_folder=os.path.join(BASE_DIR, "..", "static"),
    static_url_path="/static",
)

@app.route("/")
def home():
    return render_template("index.html")

# Optional: stop favicon 404 spam (not required, but nice)
@app.route("/favicon.ico")
def favicon():
    return send_from_directory(
        os.path.join(BASE_DIR, "..", "static"),
        "favicon.ico",
        mimetype="image/vnd.microsoft.icon",
    )
