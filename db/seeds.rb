require 'open-uri'

ActiveRecord::Base.transaction do
  
  User.delete_all
  Video.delete_all

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
    username: 'LoverOfDogs',
    email: 'morgan@hotmail.com',
    password: 'password'
  )
  
  u6 = User.create!(
    username: 'CatPerson9',
    email: 'crazycatlady@aol.com',
    password: 'password'
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
    uploader_id: u5.id,
    views: 432
  )

  v3 = Video.create!(
    title: 'Dust Bathing',
    description: "Chinchillas take dust baths as a way of self-cleaning their coats. It also protects them by eliminating extra oils and moisture. They will flop, flip, and roll around in the dust to cover their coat and remove any unwanted dirt or oils.",
    uploader_id: u1.id,
    views: 819
  )

  v4 = Video.create!(
    title: "Don't Touch Me!",
    description: "This Congo grey parrot asks that you respect his personal space.",
    uploader_id: u2.id,
    views: 271
  )

  Video.all.each_with_index do |video, idx|
    video_file = open("https://zootube-pro.s3-us-west-1.amazonaws.com/0#{idx+1}-video.mp4")
    video.video.attach(io: video_file, filename: "0#{idx+1}-videos.mp4")
    thumbnail_file = open("https://zootube-pro.s3-us-west-1.amazonaws.com/0#{idx+1}-thumbnail.jpeg")
    video.thumbnail.attach(io: thumbnail_file, filename: "0#{idx+1}-thumbnails.jpeg")
  end

end