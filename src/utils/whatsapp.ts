export const buildWhatsAppLink = (phone: string, message: string) => {
  const cleanedPhone = (phone || '').replace(/\D/g, '')
  if (!cleanedPhone) {
    return '#'
  }
  const encodedMessage = encodeURIComponent(message || '')
  return encodedMessage
    ? `https://wa.me/${cleanedPhone}?text=${encodedMessage}`
    : `https://wa.me/${cleanedPhone}`
}
