// Since Seeding in Mongo is done in alphabetical order... It's is important to keep
// file names alphabetically ordered, if multiple files are to be run.

//presumes using db cats because of this line in docker-compose:
//environment:
//- MONGO_INITDB_DATABASE=cats
db = db.getSiblingDB('cats')
// add user to this database
db.createUser(
  {
    user: "nest_user",
    pwd: "generic",   // or cleartext password
    roles: [{ role: "readWrite", db: "cats" }]
  }
)
//ensure a fresh start
db.templates.drop();
db.createCollection('adoptions')
db.templates.insertMany([
  {
    name: 'Beast',
    breed: 'Maine Coon',
    adopted: {
      date: '2020-04-01',
      owner: 'Bob Thross',
      phone: '360-972-0456'
    }
  },
  {
    name: 'Lilac',
    breed: 'Tonkinese',
    adopted: {
      date: '2020-04-10',
      owner: 'Mary Fantwonette',
      phone: '208-664-4885'
    }
  }
])