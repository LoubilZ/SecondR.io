import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white/50 py-6 mt-auto border-t border-white/10">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} SECONDR.IO</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
