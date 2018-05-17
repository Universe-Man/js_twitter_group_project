const tweets = ["Yo bro! Where you at?", "This pizza is fantastic!", "Yanni or Laurel? Don't ask me I can't hear shit.", "Your mom is cool."]

const container = document.createElement('div')
const orderList = document.createElement('ol')
document.body.appendChild(container)
// document.body.appendChild(orderList)
container.appendChild(orderList)

tweets.forEach(function(tweet){

  let element = document.createElement('li')
  element.innerText = tweet
  orderList.appendChild(element)
  console.log(tweet)
})

console.log(container)
