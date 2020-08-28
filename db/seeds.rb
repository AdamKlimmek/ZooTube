require 'open-uri'

ActiveRecord::Base.transaction do
  
  User.delete_all
  Video.delete_all
  Like.delete_all
  Comment.delete_all

  u1 = User.create!(
    username: 'AdamK',
    email: 'aklimmek@mac.com',
    password: 'password',
    color: 'red'
  )
  
  u2 = User.create!(
    username: 'User2',
    email: 'adam.d.klimmek@gmail.com',
    password: 'password',
    color: 'orange'
  )
  
  u3 = User.create!(
    username: 'TechGeek12',
    email: 'dontsellmy@info.com',
    password: 'password',
    color: 'yellow'
  )
  
  u4 = User.create!(
    username: 'LoverOfDogs',
    email: 'morgan@hotmail.com',
    password: 'password',
    color: 'green'
  )
  
  u5 = User.create!(
    username: 'DemoUser',
    email: 'demo.user@demo.com',
    password: 'password',
    color: 'blue'
  )

  u6 = User.create!(
    username: 'CatPerson9',
    email: 'crazycatlady@aol.com',
    password: 'password',
    color: 'purple'
  )

  u7 = User.create!(
    username: 'Vladimirovich',
    email: 'lepidopterist@yahoo.com',
    password: 'password',
    color: 'pink'
  )



  v1 = Video.create!(
    title: 'Piano Cat',
    description: 'Just a cat that likes to jam!',
    uploader_id: u6.id,
    views: 785
  )

  v2 = Video.create!(
    title: 'Psycho Chihuahua',
    description: 'Currently in need of a dogsitter.',
    uploader_id: u4.id,
    views: 432
  )

  v3 = Video.create!(
    title: 'Dust Bathing',
    description: "Chinchillas take dust baths as a way of self-cleaning their coats. It also protects them by eliminating extra oils and moisture. They will flop, flip, and roll around in the dust to cover their coat and remove any unwanted dirt or oils.",
    uploader_id: u1.id,
    views: 819
  )

  v4 = Video.create!(
    title: 'Touch Me Again...',
    description: "This Congo grey parrot asks that you respect its personal space.",
    uploader_id: u2.id,
    views: 271
  )

  v5 = Video.create!(
    title: 'Free Range',
    description: "These cows finally got let outside for some exercise!",
    uploader_id: u5.id,
    views: 140
  )

  v6 = Video.create!(
    title: 'Swimming with Sea Turtles',
    description: "The loggerhead sea turtle (Caretta caretta), or loggerhead, is an oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm (35 in) long when fully grown, although larger specimens of up to 280 cm (110 in) have been discovered. The adult loggerhead sea turtle weighs approximately 135 kg (298 lb), with the largest specimens weighing in at more than 450 kg (1,000 lb). The skin ranges from yellow to brown in color, and the shell is typically reddish-brown. No external differences in gender are seen until the turtle becomes an adult, the most obvious difference being the adult males have thicker tails and shorter plastrons than the females.",
    uploader_id: u3.id,
    views: 525
  )

  v7 = Video.create!(
    title: 'Butterflies at the Botanical Garden',
    description: "Botanical gardens are a fun attraction for the whole family--something truly unique and special! Ready to get swathed in butterflies? Click play!",
    uploader_id: u7.id,
    views: 140
  )

  v8 = Video.create!(
    title: 'Neighborhood Squirrel',
    description: "A friendly neighborhood squirrel and his pal came by for a snack this afternoon.",
    uploader_id: u5.id,
    views: 592
  )

  v9 = Video.create!(
    title: 'Duck Run',
    description: "",
    uploader_id: u6.id,
    views: 618
  )

  v10 = Video.create!(
    title: 'First Strawberry',
    description: "Watch as Chompy the tortoise goes in for a bite of this delicious strawberry!",
    uploader_id: u3.id,
    views: 327
  )

  v11 = Video.create!(
    title: 'Hamster Wheel',
    description: "Ever feel like you're just running in place, spinning your wheels but not getting anywhere? These hamsters know the feeling. Watch and see...",
    uploader_id: u4.id,
    views: 820
  )

  v12 = Video.create!(
    title: 'Penguin Party',
    description: "Emperor penguins in their natural habitat.",
    uploader_id: u1.id,
    views: 471
  )

  v13 = Video.create!(
    title: 'First Steps',
    description: "Jaffy the giraffe took his first steps today. What will he do next?",
    uploader_id: u2.id,
    views: 229
  )

  v14 = Video.create!(
    title: 'Dancing Cockatoo',
    description: "Sometimes you just need to let loose.",
    uploader_id: u7.id,
    views: 315
  )

  Video.all.each_with_index do |video, idx|
    video_file = open("https://zootube-pro.s3-us-west-1.amazonaws.com/0#{idx+1}-video.mp4")
    video.video.attach(io: video_file, filename: "0#{idx+1}-videos.mp4")
    thumbnail_file = open("https://zootube-pro.s3-us-west-1.amazonaws.com/0#{idx+1}-thumbnail.jpeg")
    video.thumbnail.attach(io: thumbnail_file, filename: "0#{idx+1}-thumbnails.jpeg")
  end

  l1 = Like.create!(
    user_id: u1.id,
    video_id: v1.id,
    liked: true
  )

  l2 = Like.create!(
    user_id: u2.id,
    video_id: v2.id,
    liked: true
  )

  l3 = Like.create!(
    user_id: u3.id,
    video_id: v3.id,
    liked: true
  )

  l4 = Like.create!(
    user_id: u4.id,
    video_id: v4.id,
    liked: true
  )

  l5 = Like.create!(
    user_id: u5.id,
    video_id: v5.id,
    liked: true
  )

  l6 = Like.create!(
    user_id: u6.id,
    video_id: v6.id,
    liked: true
  )

  l7 = Like.create!(
    user_id: u7.id,
    video_id: v7.id,
    liked: true
  )

  l8 = Like.create!(
    user_id: u1.id,
    video_id: v7.id,
    liked: true
  )

  l9 = Like.create!(
    user_id: u7.id,
    video_id: v1.id,
    liked: true
  )

  l10 = Like.create!(
    user_id: u2.id,
    video_id: v6.id,
    liked: true
  )

  l11 = Like.create!(
    user_id: u6.id,
    video_id: v2.id,
    liked: true
  )

  l12 = Like.create!(
    user_id: u3.id,
    video_id: v5.id,
    liked: true
  )

  l13 = Like.create!(
    user_id: u5.id,
    video_id: v3.id,
    liked: true
  )

  l14 = Like.create!(
    user_id: u2.id,
    video_id: v4.id,
    liked: true
  )

  l15 = Like.create!(
    user_id: u6.id,
    video_id: v4.id,
    liked: true
  )

  l16 = Like.create!(
    user_id: u4.id,
    video_id: v8.id,
    liked: true
  )

  l17 = Like.create!(
    user_id: u3.id,
    video_id: v9.id,
    liked: true
  )

  l18 = Like.create!(
    user_id: u6.id,
    video_id: v10.id,
    liked: true
  )

  l19 = Like.create!(
    user_id: u1.id,
    video_id: v11.id,
    liked: true
  )

  l20 = Like.create!(
    user_id: u2.id,
    video_id: v12.id,
    liked: true
  )

  l21 = Like.create!(
    user_id: u5.id,
    video_id: v13.id,
    liked: true
  )

  l22 = Like.create!(
    user_id: u7.id,
    video_id: v14.id,
    liked: true
  )

  l23 = Like.create!(
    user_id: u1.id,
    video_id: v2.id,
    liked: false
  )

  l24 = Like.create!(
    user_id: u2.id,
    video_id: v13.id,
    liked: false
  )

  l25 = Like.create!(
    user_id: u3.id,
    video_id: v7.id,
    liked: false
  )

  l26 = Like.create!(
    user_id: u5.id,
    video_id: v10.id,
    liked: false
  )

  l27 = Like.create!(
    user_id: u6.id,
    video_id: v9.id,
    liked: false
  )

  l28 = Like.create!(
    user_id: u4.id,
    video_id: v1.id,
    liked: false
  )



  c1 = Comment.create!(
    user_id: u3.id,
    video_id: v1.id,
    body: "Wow!"
  )

  c2 = Comment.create!(
    user_id: u5.id,
    video_id: v1.id,
    body: "This is hilarious! I've never seen it before!"
  )

  c3 = Comment.create!(
    user_id: u1.id,
    video_id: v2.id,
    body: "Awesome!"
  )

  c4 = Comment.create!(
    user_id: u7.id,
    video_id: v2.id,
    body: "What a great dog breed!"
  )

  c5 = Comment.create!(
    user_id: u2.id,
    video_id: v3.id,
    body: "Cool!"
  )

  c6 = Comment.create!(
    user_id: u6.id,
    video_id: v3.id,
    body: "You ever seen a chinchilla wall jump before?"
  )
  
  c7 = Comment.create!(
    user_id: u1.id,
    video_id: v4.id,
    body: "A talking parrot!"
  )

  c8 = Comment.create!(
    user_id: u6.id,
    video_id: v4.id,
    body: "{cleverComment}"
  )

  c9 = Comment.create!(
    user_id: u7.id,
    video_id: v5.id,
    body: "I've always thought cows smell disgusting. They remind me of Russia."
  )

  c10 = Comment.create!(
    user_id: u1.id,
    video_id: v5.id,
    body: "How nice of their owners to let them have this fleeting joy before they are slaughtered."
  )

  c11 = Comment.create!(
    user_id: u1.id,
    video_id: v6.id,
    body: "Wow!"
  )

  c12 = Comment.create!(
    user_id: u6.id,
    video_id: v6.id,
    body: "Awesome!"
  )

  c13 = Comment.create!(
    user_id: u2.id,
    video_id: v7.id,
    body: "There's an author I like who was obsessed with butterflies."
  )

  c14 = Comment.create!(
    user_id: u3.id,
    video_id: v7.id,
    body: "Cool!"
  )

  c15 = Comment.create!(
    user_id: u4.id,
    video_id: v8.id,
    body: "Hah!"
  )

  c16 = Comment.create!(
    user_id: u1.id,
    video_id: v8.id,
    body: "{cleverComment}"
  )

  c17 = Comment.create!(
    user_id: u7.id,
    video_id: v9.id,
    body: "Amazing!"
  )

  c18 = Comment.create!(
    user_id: u1.id,
    video_id: v9.id,
    body: "Cool!"
  )

  c19 = Comment.create!(
    user_id: u6.id,
    video_id: v10.id,
    body: "Yum!"
  )

  c20 = Comment.create!(
    user_id: u7.id,
    video_id: v10.id,
    body: "Russian tortoises should never eat fruits! Their guts are not equipped to handle sugar. I hope for its sake it wasn't allowed more than a few nibbles."
  )

  c21 = Comment.create!(
    user_id: u2.id,
    video_id: v11.id,
    body: "Hilarious!"
  )

  c22 = Comment.create!(
    user_id: u3.id,
    video_id: v11.id,
    body: "Great video!"
  )

  c23 = Comment.create!(
    user_id: u4.id,
    video_id: v12.id,
    body: "Wow!"
  )

  c24 = Comment.create!(
    user_id: u5.id,
    video_id: v12.id,
    body: "{cleverComment}"
  )

  c25 = Comment.create!(
    user_id: u6.id,
    video_id: v13.id,
    body: "Aww...how cute!"
  )

  c26 = Comment.create!(
    user_id: u1.id,
    video_id: v13.id,
    body: "Cool!"
  )

  c27 = Comment.create!(
    user_id: u4.id,
    video_id: v14.id,
    body: "Groovy!"
  )

  c28 = Comment.create!(
    user_id: u2.id,
    video_id: v14.id,
    body: "Nice!"
  )

  c29 = Comment.create!(
    user_id: u1.id,
    video_id: v1.id,
    body: "Incredible! Is your cat classically trained?"
  )

end