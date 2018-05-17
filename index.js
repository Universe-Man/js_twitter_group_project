const tweets = ["Yo bro! Where you at?", "This pizza is fantastic!", "Yanni or Laurel? Don't ask me I can't hear shit.", "Your mom is cool.", "Hi there!"]

const container = document.createElement('div')
const orderList = document.createElement('ol')
document.body.appendChild(container)
// document.body.appendChild(orderList)
container.appendChild(orderList)

tweets.forEach(function(tweet){
  let element = document.createElement('li')
  element.innerText = tweet
  orderList.appendChild(element)
})

// JASON'S OTHER WAY TO WRITE THIS!!

// tweets.forEach(function(tweet){
//   const tweetHTML = `<li>${tweet}</li>`
//   orderList.innerHTML += tweetHTML
//
// })
