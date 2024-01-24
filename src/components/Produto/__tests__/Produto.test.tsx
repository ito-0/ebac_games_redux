import { screen, fireEvent } from '@testing-library/react'

import Produto from '..'
import { rendernizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'Xbox Series S/X'],
  preco: 199.9,
  precoAntigo: 399.9,
  titulo: 'Hogwarts Leagacy'
}

describe('Testes para o componente produto', () => {
  test('Deve rendenizar corretamente', () => {
    rendernizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Leagacy')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    const { store } = rendernizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
