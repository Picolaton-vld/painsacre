from server import db, Adherent

# Ajouter des adhérents
adherent1 = Adherent(name='Jean Dupont')
adherent2 = Adherent(name='Marie Curie')

db.session.add(adherent1)
db.session.add(adherent2)
db.session.commit()