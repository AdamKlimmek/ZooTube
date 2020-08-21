# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
  username: 'AdamK',
  email: 'aklimmek@mac.com',
  password: 'password'
)

u2 = User.create!(
  username: 'User2',
  email: 'adam.d.klimmek@gmail.com',
  password: 'password'
)

u3 = User.create!(
  username: 'TechGeek12',
  email: 'dontsellmy@info.com',
  password: 'password'
)

u4 = User.create!(
  username: 'DemoUser',
  email: 'demo.user@demo.com',
  password: 'password'
)

u5 = User.create!(
  username: 'DogLoverMo',
  email: 'morgan@hotmail.com',
  password: 'password'
)

u6 = User.create!(
  username: 'CatPerson9',
  email: 'crazycatlady@aol.com',
  password: 'password'
)

Video.delete_all