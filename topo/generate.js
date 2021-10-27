const fs = require('fs')

const images = fs.readdirSync('./images')

const tags = images.filter(src => src.includes('.jpg')).map((src, i) => `
  <div class="img"><img src="./images/${src}" alt="topo-sketch ${i}" loading="lazy">${i} -- ${new Date(Number(src.replace('topo-', '').replace('.jpg', '')))}</div>`)

fs.writeFileSync('./images.html', tags.join(`\n`))
