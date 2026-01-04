type RateLimitRecord = {
  count: number
  startTime: number
}

const rateLimitMap = new Map<string, RateLimitRecord>()

export function rateLimit(ip: string, limit: number = 3, windowMs: number = 10 * 60 * 1000) {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record) {
    rateLimitMap.set(ip, { count: 1, startTime: now })
    return { success: true }
  }

  if (now - record.startTime > windowMs) {
    // Window passed, reset
    rateLimitMap.set(ip, { count: 1, startTime: now })
    return { success: true }
  }

  if (record.count >= limit) {
    return { success: false }
  }

  record.count++
  return { success: true }
}
