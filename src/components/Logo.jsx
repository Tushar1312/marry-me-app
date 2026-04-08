import React from 'react'

export default function Logo({ size = 'md' }) {
  const isLg = size === 'lg'
  return (
    <div className="logo-wrap">
      <svg
        width={isLg ? 120 : 80}
        height={isLg ? 80 : 54}
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative swirl line left */}
        <path d="M10 55 Q30 45 55 50" stroke="#b8933a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Ring 1 */}
        <ellipse cx="54" cy="40" rx="16" ry="10" stroke="#b8933a" strokeWidth="1.8" fill="none"/>
        <ellipse cx="54" cy="40" rx="12" ry="7" stroke="#b8933a" strokeWidth="0.8" fill="none" opacity="0.5"/>
        {/* Ring 2 */}
        <ellipse cx="68" cy="43" rx="16" ry="10" stroke="#b8933a" strokeWidth="1.8" fill="none"/>
        <ellipse cx="68" cy="43" rx="12" ry="7" stroke="#b8933a" strokeWidth="0.8" fill="none" opacity="0.5"/>
        {/* Decorative swirl line right */}
        <path d="M65 50 Q90 45 110 55" stroke="#b8933a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Small dot accents */}
        <circle cx="10" cy="55" r="1.5" fill="#b8933a" opacity="0.6"/>
        <circle cx="110" cy="55" r="1.5" fill="#b8933a" opacity="0.6"/>
      </svg>
      <span className={isLg ? 'logo-text' : 'logo-text-sm'}>Marry me</span>
    </div>
  )
}
