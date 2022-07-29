const vimeo = require('./node_modules/viemo/index');


  // Resolve function
  const getDetails = async function() {
    const finalObj = await vimeo("https://vimeo.com/731865515")
     console.log(finalObj)
  }
getDetails()
