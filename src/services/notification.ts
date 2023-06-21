import { useNotification } from '@kyvg/vue3-notification'

type notificationType = 'warn' | 'error' | 'success'

export class RennesNotification {
  type = 'success'
  text = ''

  constructor(type: notificationType, text: string) {
    this.type = type
    this.text = text
  }

  displayNotification() {
    const { notify } = useNotification()
    notify({
      type: this.type,
      text: this.text,
      duration: 3000,
    })
  }
}
