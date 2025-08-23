import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/store/store"


const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Timeline", href: "#timeline" }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { generalDetails } = useSelector((state: RootState) => state.home);

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="#home" className="font-serif text-xl font-bold text-[var(--portfolio-primary)]">
              Sarthak Patel
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--portfolio-primary)] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={generalDetails?.socialLinks?.github as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--portfolio-primary)] transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              to={generalDetails?.socialLinks?.linkedin as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--portfolio-primary)] transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link to={`mailto:${generalDetails?.email}`}>
            <Button
              size="sm"
              className="bg-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent)] text-white px-4 py-2 text-sm font-medium transition-all duration-300 cursor cursor-pointer"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[var(--portfolio-primary)] p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200/50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--portfolio-primary)] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <Link
                  to="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[var(--portfolio-primary)] transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[var(--portfolio-primary)] transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Button
                  size="sm"
                  className="bg-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent)] text-white px-4 py-2 text-sm font-medium transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar