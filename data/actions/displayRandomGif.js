  const axios = require('axios')

  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async () => {
    const url = await getRandomGifUrl()

    const message = await bp.cms.renderElement(
      'builtin_text',
      {
        text: `<img src="${url}" style="max-width: 100%" />`,
        markdown: true
      },
      event
    )

    bp.events.replyToEvent(event, message)
  }

  async function getRandomGifUrl() {
    // Initiate gifLoop for set interval
    var refresh
    // Duration count in seconds
    const duration = 1000 * 10
    // Giphy API defaults
    const giphy = {
      baseURL: 'https://api.giphy.com/v1/gifs/',
      apiKey: 'INSERT_YOUR_API_KEY_HERE',
      tag: 'fail',
      type: 'random',
      rating: 'pg-13'
    }
    // Target gif-wrap container

    // Giphy API URL
    let giphyURL = encodeURI(
      giphy.baseURL + giphy.type + '?api_key=' + giphy.apiKey + '&tag=' + giphy.tag + '&rating=' + giphy.rating
    )

    const { data } = await axios.get(giphyURL)

    return data.data.image_original_url
  }
  return myAction()