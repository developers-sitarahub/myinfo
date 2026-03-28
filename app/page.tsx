'use client'

import Image from 'next/image'
import LoadingScreen from '@/components/loading-screen'

type IconProps = { className?: string; strokeWidth?: number }

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function XIcon({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const links = [
  { name: 'Indo Global Trade Fair', logo: '/igtf-logo.png', url: 'https://indoglobaltradefair.com' },
  { name: 'National Franchise Investment Summit', logo: '/logo.png', url: 'https://nationalfranchiseinvestmentsummit.com' },
]

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vikas-kamat/', icon: LinkedinIcon, color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', url: 'https://www.instagram.com/vikaskamat.27/', icon: InstagramIcon, color: 'from-pink-500 to-purple-600' },
  { name: 'X', url: 'https://x.com/vikaskamat', icon: XIcon, color: 'from-gray-700 to-black' },
]

export default function Home() {
  return (
    <>
      <LoadingScreen />

      {/* Full-screen, no-scroll container */}
      <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center relative">

        {/* Ambient background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl opacity-30" />
        </div>

        {/* Card — grows to fill height on small screens, capped on large */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto h-full sm:h-auto flex flex-col">

          {/* Header banner */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-t-none sm:rounded-t-3xl h-20 sm:h-28 flex-shrink-0 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute top-2 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-2 left-8 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
          </div>

          {/* Body card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-b-none sm:rounded-b-3xl shadow-2xl border border-white/50 flex flex-col flex-1 sm:flex-initial overflow-hidden
                          -mt-12 sm:-mt-16 pt-14 sm:pt-18 px-5 sm:px-7 pb-4 sm:pb-6 relative">

            {/* Profile image */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] shadow-xl animate-gradient-flow flex-shrink-0"
                style={{ background: 'linear-gradient(45deg,#60a5fa,#a78bfa,#6366f1,#3b82f6,#60a5fa)' }}
              >
                <div className="w-full h-full bg-white rounded-full overflow-hidden">
                  <Image
                    src="/ccec4ceb-54ed-411c-a787-190cdca939d2.png"
                    alt="Vikas Kamat"
                    width={96}
                    height={96}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Name & title */}
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight leading-tight">
              Vikas Kamat
            </h1>
            <p className="text-center text-xs sm:text-sm text-slate-500 font-medium mt-0.5 mb-3 sm:mb-4">
              Chief Executive Officer
            </p>

            {/* Org links */}
            <div className="space-y-2 mb-3 sm:mb-4">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2.5 sm:p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-slate-200/50 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 bg-white rounded-xl p-1.5 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={link.logo}
                      alt={link.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors truncate">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-3 sm:mb-4" />

            {/* Social label */}
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-0.5">
              Find me on
            </p>

            {/* Social links */}
            <div className="space-y-1.5 sm:space-y-2">
              {socials.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-slate-200"
                  >
                    <div className={`bg-gradient-to-br ${social.color} p-2 sm:p-2.5 rounded-lg shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                )
              })}
            </div>

            {/* Footer dots */}
            <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-200/50 flex justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
