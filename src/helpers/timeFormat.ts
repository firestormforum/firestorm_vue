import moment from 'moment'

export default class timeFormat {
  // Users
  formatDate (date: string) {
    if (date) {
      let longDate: any = moment(date)
      return moment(longDate['_d']).format("MM-DD-YYYY hh:mm")
    }
  }
}

