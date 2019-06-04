import moment from 'moment'

export default class TimeFormat {
  // Users
  public formatDate (date: string) {
    if (date) {
      const longDate: any = moment(date)
      return moment(longDate['_d']).format('MM-DD-YYYY hh:mm')
    }
  }
}

