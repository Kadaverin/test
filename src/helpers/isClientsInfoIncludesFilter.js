import _ from 'lodash'

function isClientsInfoIncludesFilter(client, inputString){
  const regExp = new RegExp(_.escapeRegExp(inputString), 'i' )
  return isSomeValuesMatchRegExp(client, regExp, ['avatar'])
}

function isSomeValuesMatchRegExp(obj, regExp, ignoreKyes = []){
  return _.keys(obj).some( key => {
    if( ignoreKyes.includes(key)){
      return false
    }

    if( typeof obj[key] !== 'object' || Array.isArray(obj[key]) ) {
      return regExp.test(obj[key])
    } 

    return isSomeValuesMatchRegExp(obj[key], regExp, ignoreKyes)
  })
}

export default isClientsInfoIncludesFilter