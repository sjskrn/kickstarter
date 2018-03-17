# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## CATEGORIES
User.destroy_all

user = User.create!({
  name: "Jazz",
  email: "jazz@jazz.com",
  password_digest: BCrypt::Password.create("password")
})

puts "Finding or Creating Categories ..."

Category.destroy_all

category = Category.create([
  {
    name: "Applications",
    description: "the latest software and web apps"
  },
  {
    name: "Hardware",
    description: "amazing robots and gadgets"
  },
  {
    name: "Software",
    description: "cool software for users"
  }
])

categories = Category.all.to_a

puts "Re-creating events ..."

Event.destroy_all

event = Event.create([
  {
    name: "Hacker Stack Labs Demo Day",
    date: "2018-03-31",
  }
  ])

events = Event.all.to_a

puts "Re-creating users ..."

# User.destroy_all

# user = User.create([
#   {
#     name: "Jazz",
#     email: "jazz@jazz.com",
#     password_digest: BCrypt::Password.create('password')
#   }
#   ])

users = User.all.to_a

puts "Re-creating Demos ..."

Demo.destroy_all

demo = Demo.create([
  {
    name: "Bytesoft",
    live: "2018-03-31",
    description: "this is goign to be really big even though i am a nerd",
    fundingreq: 10000,
    votes: 5,
    videos: 'WRduVfYXjI8',
    category: categories[0],
    event: events[0],
    user: users[0]
  },
  {
    name: "Clementine",
    live: "2018-03-31",
    description: "this is a twitter clone messenger",
    fundingreq: 8000,
    votes: 10,
    videos: '3H-Y-D3-j-M',
    category: categories[1],
    event: events[0],
    user: users[0]
  },
  {
    name: "LaggerGram",
    live: "2018-03-31",
    description: "for all your throwback posts",
    fundingreq: 40000,
    votes: 60,
    videos: 'KAC_JAnhspw',
    category: categories[2],
    event: events[0],
    user: users[0]
  }
])
