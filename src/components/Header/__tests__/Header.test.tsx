import { screen } from '@testing-library/react'
import Header from '..'

import { rendernizaComProvider } from '../../../utils/tests'

describe('Testes para o componente header', () => {
  test('Deve rendernizar corretamente', () => {
    rendernizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve rendenizar com 2 itens no carrinho', () => {
    rendernizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
              preco: 199.9,
              precoAntigo: 399.9,
              titulo: 'Hogwarts Leagacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
