
import { top, rateCalc } from './functions4homepage'
const url = '/'

beforeEach('Homepage', () => {
  cy.visit(url)
})

it('navtoHomePage', () => {
  cy.get('#files')
    .find('li')
    .children('a')
    .contains('a', 'html')
    .should('exist')
    .click()

  cy.location().should((loc) => {
    expect(loc.href).to.include('html')
  })

  cy.get(':nth-child(3) > .icon > .name').should('exist').click()

  cy.location().should((loc) => {
    expect(loc.href).to.include(loc.pathname)
  })
  //Check the Nav-bar
  top()
})

/* if(!el.attr('href')){
      cy.wrap(el).siblings()
      .then((sibs)=>{
        sibs.children()
        if(!sibs.children().attr('href')){
          cy.log('it is not a link')
        }
        else{
          sibs.children().attr('href').includes('#')
        }
      })
    }
 */

/* Πέφτει σε inf loop ωστόσο δεν μου είναι σαφές το γιατί εφόσον loopaαρει κάθε 
  element 
  
  while(!flag){
    el.children()
    if(el.attr('href') && index!=0){
      cy/log(el)
      expect(elment.attr('href')).includes('#')
      flag=true;
    }
  } */

/*    .children()
  .each((elment,index)=>{

    if(elment.attr('href') && index!=0){
      cy.log("it's a link",elment.html())
      expect(elment.attr('href')).includes('#')
    }
  }) */

/*  cy.get('.header__bottom > :nth-child(1) > .header__body')
  .children()
  .each((el)=>{
    cy.wrap(el).children('a')
    .then((el,a)=>{
      cy.log(el)
      cy.log(el)
    })
  }) */

it('Carreers', () => {
  cy.visit(url + '/html/17.Careers.html')

  //Expect the correct path

  cy.location().should((loc) => {
    expect(loc.href).to.include(loc.pathname)
  })

  cy.get('.s-accordions__items')
  .should('exist')
  .children()
  .each((it,index)=>{
    cy.wrap(it)
    .click()
    .wait(25)
    .click()
    index%2!==0?cy.wrap(it).click():index==0?cy.wrap(it).click():cy.wrap(it).wait(1)
  })
})
it.only('Services', () => {

  cy.get(':nth-child(4) > .icon > .name')
  .click()
  cy.get(':nth-child(16) > .icon > .name')
  .click()

   cy.location().should((loc) => {
    expect(loc.href).to.include(loc.pathname)
  })

  rateCalc()
  
});