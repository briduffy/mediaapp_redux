users = ['@brianne', '@nils', '@catherine', '@dave', '@jordan', '@abby', '@kate', '@kim', '@mommabear', '@mariana']
locations = ['Salt Lake City, Utah', 'Merrimack, New Hampshire', 'Stowe, VT', 'Ten Sleep, WY', 'Seattle, WA', 'San Diego, CA', 'Vancouver, BC', 'Honolulu, HI', 'New York City, NY']

100.times do
  Post.create(
    post: Faker::Friends.quote,
    time: Faker::Time.backward(14, :evening),
    user: users.sample,
    location: locations.sample
  )
end