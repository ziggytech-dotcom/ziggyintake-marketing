import Image from 'next/image'

export function ZiggyIntakeLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyintake-wordmark-dark.png"
      alt="ZiggyIntake"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
