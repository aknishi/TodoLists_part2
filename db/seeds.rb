# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = Todo.create!(
  title: 'Get a job',
  body: 'I will become employed',
  done: false
)

todo2 = Todo.create!(
  title: 'Study redux',
  body: 'Practice till conquer',
  done: false
)

todo3 = Todo.create!(
  title: 'Buy some coffee',
  body: 'Go to Costco and buy the big box',
  done: false
)
