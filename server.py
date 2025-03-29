from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///adherents.db'
db = SQLAlchemy(app)

class Adherent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

@app.route('/api/compteur', methods=['GET'])
def get_compteur():
    count = Adherent.query.count()
    return jsonify({'count': count})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)