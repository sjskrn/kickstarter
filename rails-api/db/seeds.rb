# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = Demo.create([
  {
    name: "Kickstarter",
    live: "2018-03-31",
    description: "this is a crowdfunding web app",
    fundingreq: 10000,
    votes: 5
  },
  {
    name: "Tweeter",
    live: "2018-03-31",
    description: "this is a twitter clone messenger",
    fundingreq: 8000,
    votes: 10
  }
])
