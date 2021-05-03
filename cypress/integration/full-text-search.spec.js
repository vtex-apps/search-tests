// / <reference types='cypress' />
import * as CONSTANTS from '../constants'

context('Full text search', () => {
  before(() => {
    cy.visitPath('/camisa?map=ft')
  })

  it('should render the search-result', () => {
    cy.get(CONSTANTS.searchResultContainer).should('exist')
    cy.get(CONSTANTS.searchResultLoading).should('not.exist')
    cy.get(CONSTANTS.searchResultGallery).should('exist')
  })

  it('should show filters', () => {
    cy.get(CONSTANTS.filtersWrapper).should('exist')
  })

  it('should display the search term on the breadcrumb', () => {
    cy.get(CONSTANTS.breadcrumb).should('exist')
    cy.get(CONSTANTS.breadcrumbLink).eq(1).should('have.text', 'camisa')
  })

  it('should show 3 products', () => {
    cy.get(CONSTANTS.searchResultItem).should('exist')
    cy.get(CONSTANTS.searchResultItem).should('have.length', 3)
  })
})
