'use strict'

import { expect } from 'chai'
import reverse from './reverse-recursive'

it('reverse should be a function',() => {
    expect(reverse).to.be.a('function')
})

it('reverse([1]) should be return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1, 2]) should be return [2, 1]', () => {
    expect(reverse([1, 2])).to.be.deep.equal([2,1])
})

it('reverse([1, 2, 5]) should be return [5, 2, 1]', () => {
    expect(reverse([1, 2, 5])).to.be.deep.equal([5,2,1])
})