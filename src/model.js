import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
  P.S. стили нужно писать лайк зис "color: 'yellow'"
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: '#6fa5d8dc',
      padding: '1.5rem',

      color: 'white',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
      padding: '2rem 0',

      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Придумай значение -->',
    'Примени CSS -->',
    'Добавь!'
  ], {
    styles: {
      background: '#d86fd8',
      padding: '2rem',

      color: '#fff',
      'font-weight': 'bold',
      'font-size': '20px',
      'text-align': 'center'

    }
  }),
  new TextBlock(text, {
    styles: {
      padding: '1rem',
      
      color: '#6fa5d8dc',
      'font-weight': 'bold'
    }
  })
]