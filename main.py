from flask import Flask, render_template, url_for

app = Flask(__name__)

# Route for the Home Feed
@app.route("/")
def home():
    return render_template("home.html")

# Route for the Profile Page
@app.route("/profile")
def profile():
    return render_template("profile.html")

# Route for the Search Page
@app.route("/search")
def search():
    return render_template("search.html")

# Route for Local Connections
@app.route("/local-connections")
def local_connections():
    return render_template("localconnections.html")

# Route for Favorites
@app.route("/favorites")
def favorites():
    return render_template("favorites.html")

# Route for New Post creation
@app.route("/new-post")
def new_post():
    return render_template("new_post.html")

# Route for Settings
@app.route("/settings")
def settings():
    return render_template("settings.html")

# Ensure static files like CSS and JS are loaded correctly
@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            values['q'] = int(os.stat(filename).st_mtime)
    return url_for(endpoint, **values)

# Main entry point
if __name__ == "__main__":
    app.run(debug=True)

